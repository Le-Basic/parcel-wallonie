import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import { regimeListe } from "@/config/regimeListe.js";
import {
  fetchSurfaceNecessaire,
  fetchSurfacesActuelles,
  fetchSurfacesActuellesPaysage,
  fetchIndicateursActuels,
  fetchPortrait,
} from "@/plugins/getSurfacesNecessaires";
import { calculerResultatSimulation } from "../plugins/calculResultatSimulation";
import { calculerResultatSimulationAvecSurface } from "@/plugins/calculResultatsSimulationAvecSurface";
const getDefaultState = () => {
  return {
    regimeListe: regimeListe,
    geoList: [],
    indicateurPortraits: {
      surface_ha: 0,
      sau_ha: 0,
      population: 0,
    },
    population: {
      part: "toute",
      nombreEnfants: 150,
      nombreAdultes: 150,
      nombreSeniors: 150,
    },
    part_relocalisee: 100,
    part_bio: null,
    regime_alimentaire: regimeListe.find((el) => el.default == true),
    partpertes: 0,
    partbiolegumes: null,
    partbiofruits: null,
    partbiocereales: null,
    partbioelevage: null,
    resultatSimulation: {
      surfaceAMobiliser: 0,
      emploisAMobiliser: 0,
      surfacesEmploisAMobiliser: 0,
      surfacesActuelles: 0,
      surfacesActuellesParcelNiveau1: [],
      potentielNourricier: 0,
      surfacesActuellesPaysage: 0,
    },
    resultatSimulationSurface: {
      population: 0,
      populationAvecBesoinComblé: 0,
    },
    surfacesMobilisables: 0,
  };
};

async function recalculerResultatSimulation(
  codesTerritoireParcel,
  idRegimeAlimentaire,
  partBioElevage,
  partBioFruits,
  partBioLegumes,
  partBioCereales,
  partPertes,
  part_relocalisee
) {
  console.log(
    "recalculerResultatSimulation",
    codesTerritoireParcel,
    idRegimeAlimentaire,
    partBioElevage,
    partBioFruits,
    partBioLegumes,
    partBioCereales,
    partPertes,
    part_relocalisee
  );

  const url = window.apiURL + "parcel/belgique/surfaces_necessaires";
  const actuelles_url =
    window.apiURL + "parcel/belgique/surfaces_actuels_produit";

  var surfaceActuelleResponseApi = await fetchSurfacesActuelles(
    actuelles_url,
    codesTerritoireParcel
  );
  const actuellespaysage__url =
    window.apiURL + "parcel/belgique/surfaces_actuels_paysage";
  var surfaceActuelleResponseApiPaysage = await fetchSurfacesActuellesPaysage(
    actuellespaysage__url,
    codesTerritoireParcel
  );
  var surfaceNecessaireResponseApi = await fetchSurfaceNecessaire(
    url,
    codesTerritoireParcel,
    idRegimeAlimentaire
  );

  const necessaires_paysage__url =
    window.apiURL + "parcel/belgique/surfaces_necessaires_paysage";
  var surfaceNecessairePaysageResponseApi = await fetchSurfaceNecessaire(
    necessaires_paysage__url,
    codesTerritoireParcel,
    idRegimeAlimentaire
  );
  let resultatSimulation = calculerResultatSimulation(
    surfaceActuelleResponseApi,
    surfaceNecessaireResponseApi,
    partBioElevage,
    partBioFruits,
    partBioLegumes,
    partBioCereales,
    partPertes,
    surfaceActuelleResponseApiPaysage,
    surfaceNecessairePaysageResponseApi,
    part_relocalisee
  );
  return resultatSimulation;
}
async function recalculerResultatSimulationPourSurfaceDonnée(
  codesTerritoireParcel,
  idRegimeAlimentaire,
  partBioElevage,
  partBioFruits,
  partBioLegumes,
  partBioCereales,
  partPertes,
  part_relocalisee,
  surfacesMobilisables
) {
  console.log(
    "recalculerResultatSimulation",
    codesTerritoireParcel,
    idRegimeAlimentaire,
    partBioElevage,
    partBioFruits,
    partBioLegumes,
    partBioCereales,
    partPertes,
    part_relocalisee
  );

  const url = window.apiURL + "parcel/belgique/surfaces_necessaires";
  const actuelles_url =
    window.apiURL + "parcel/belgique/surfaces_actuels_produit";

  var surfaceActuelleResponseApi = await fetchSurfacesActuelles(
    actuelles_url,
    codesTerritoireParcel
  );
  const actuellespaysage__url =
    window.apiURL + "parcel/belgique/surfaces_actuels_paysage";
  var surfaceActuelleResponseApiPaysage = await fetchSurfacesActuellesPaysage(
    actuellespaysage__url,
    codesTerritoireParcel
  );
  var surfaceNecessaireResponseApi = await fetchSurfaceNecessaire(
    url,
    codesTerritoireParcel,
    idRegimeAlimentaire
  );

  const necessaires_paysage__url =
    window.apiURL + "parcel/belgique/surfaces_necessaires_paysage";
  var surfaceNecessairePaysageResponseApi = await fetchSurfaceNecessaire(
    necessaires_paysage__url,
    codesTerritoireParcel,
    idRegimeAlimentaire
  );

  var indicateursactuels__url =
    window.apiURL + "parcel/belgique/surfaces_agregees";

  var indicateursActuelsResponseApi = await fetchIndicateursActuels(
    indicateursactuels__url,
    codesTerritoireParcel
  );
  console.log("indicateursActuelsResponseApi", indicateursActuelsResponseApi);
  const population = indicateursActuelsResponseApi["population"];
  console.log("Popu pour calcul", population);
  let resultatSimulation = calculerResultatSimulationAvecSurface(
    surfaceActuelleResponseApi,
    surfaceNecessaireResponseApi,
    partBioElevage,
    partBioFruits,
    partBioLegumes,
    partBioCereales,
    partPertes,
    surfaceActuelleResponseApiPaysage,
    surfaceNecessairePaysageResponseApi,
    part_relocalisee,
    surfacesMobilisables,
    population
  );

  return resultatSimulation;
}

export default createStore({
  state: getDefaultState(),
  getters: {
    getcodesTerritoireParcel: (state) => {
      return state.geoList.map((item) => item.code_territoire);
    },
    getPopulationTexte: (state) => {
      if (state.population.part == "toute") {
        return "Toute la population";
      } else if (state.population.part == "groupe") {
        return `Groupe de ${state.population.nombreEnfants} enfants, ${state.population.nombreAdultes} adultes et ${state.population.nombreSeniors} seniors`;
      } else {
        return "";
      }
    },
    getCarteTerritoireParcel: (state) => {
      let codeTerritoireListe = state.geoList.map((item) => item.localeKey);
      if (codeTerritoireListe.length == 1) {
        return (
          "/img/cartes/" +
          codeTerritoireListe[0].slice(0, 3) +
          "/" +
          codeTerritoireListe[0] +
          ".svg"
        );
      }
    },
    getCarteColoreeTerritoireParcel: (state) => (couleur) => {
      let codeTerritoireListe = state.geoList.map((item) => item.localeKey);
      if (codeTerritoireListe.length == 1) {
        return (
          "/img/cartes_" +
          couleur +
          "/" +
          codeTerritoireListe[0].slice(0, 3) +
          "/" +
          codeTerritoireListe[0] +
          ".svg"
        );
      }
    },
  },
  mutations: {
    addGeo(state, geo) {
      state.geoList.push(geo);
    },
    removeGeo(state, geo) {
      state.geoList = state.geoList.filter((item) => item !== geo);
    },
    getIndicateursPortraits(state, geoList) {
      let apiURL = window.apiURL + "parcel/belgique/portrait";
      fetchPortrait(apiURL, geoList).then((response) => {
        state.indicateurPortraits = response[0];
      });
    },
    RESET_STORE(state) {
      Object.assign(state, getDefaultState());
    },

    choisirPopulation(state, population) {
      state.population.part = population;
    },
    partRelocalisee(state, part_relocalisee) {
      state.part_relocalisee = part_relocalisee;
    },
    partBio(state, part_bio) {
      state.part_bio = part_bio;
    },
    partBioLegumes(state, partbiolegumes) {
      state.partbiolegumes = partbiolegumes;
    },
    partBioFruits(state, partbiofruits) {
      state.partbiofruits = partbiofruits;
    },
    partBioCereales(state, partbiocereales) {
      state.partbiocereales = partbiocereales;
    },
    partBioElevage(state, partbioelevage) {
      state.partbioelevage = partbioelevage;
    },
    regimeAlimentaire(state, regime_alimentaire) {
      state.regime_alimentaire = regime_alimentaire;
    },
    partPertes(state, partpertes) {
      state.partpertes = partpertes;
    },
    mutationSurfacesMobilisables(state, surfacesMobilisables) {
      state.surfacesMobilisables = surfacesMobilisables;
    },
    choisirRegimeAlimentaire(state, regime_alimentaire_nomCourt) {
      state.regime_alimentaire = state.regimeListe.find(
        (el) => el.nomCourt == regime_alimentaire_nomCourt
      );
    },
    // TODO : parallel change pour bascule progressive sur de nouveau mutateurs
    // PROP : nommage avec prefixe "mutation" + aucune logique ni transfo
    mutationRegimeAlimentaire(state, regimeAlimentaire) {
      state.regime_alimentaire = regimeAlimentaire;
    },
    mutationPartBioElevage(state, partBioElevage) {
      state.partbioelevage = partBioElevage;
    },
    mutationPartBioFruits(state, partBioFruits) {
      state.partbiofruits = partBioFruits;
    },
    mutationPartBioLegumes(state, partBioLegumes) {
      state.partbiolegumes = partBioLegumes;
    },
    mutationPartBioCereales(state, partBioCereales) {
      state.partbiocereales = partBioCereales;
    },
    mutationPartPertes(state, partPertes) {
      state.partpertes = partPertes;
    },
    mutationResultatSimulation(state, resultatSimulation) {
      state.resultatSimulation = resultatSimulation;
    },
    mutationResultatSimulationSurface(state, resultatSimulationSurface) {
      state.resultatSimulationSurface = resultatSimulationSurface;
    },
    mutationPartRelocalisee(state, part_relocalisee) {
      state.part_relocalisee = part_relocalisee;
    },
  },
  actions: {
    addGeo({ commit }, geo) {
      commit("addGeo", geo);
    },
    removeGeo({ commit }, geo) {
      commit("removeGeo", geo);
    },
    getIndicateursPortraits({ commit }, geoList) {
      commit("getIndicateursPortraits", geoList);
    },
    RESET_STORE({ commit }) {
      commit("RESET_STORE");
    },
    choisirPopulation({ commit }, population) {
      commit("choisirPopulation", population);
    },
    partRelocalisee({ commit }, part_relocalisee) {
      commit("partRelocalisee", part_relocalisee);
    },
    partBio({ commit }, part_bio) {
      commit("partBio", part_bio);
    },
    regimeAlimentaire({ commit }, regime_alimentaire) {
      commit("regimeAlimentaire", regime_alimentaire);
    },
    partPertes({ commit }, partpertes) {
      commit("partPertes", partpertes);
    },
    partBioLegumes({ commit }, partbiolegumes) {
      commit("partBioLegumes", partbiolegumes);
    },
    partBioFruits({ commit }, partbiofruits) {
      commit("partBioFruits", partbiofruits);
    },
    partBioCereales({ commit }, partbiocereales) {
      commit("partBioCereales", partbiocereales);
    },
    choisirRegimeAlimentaire({ commit }, regime_alimentaire_nomCourt) {
      commit("choisirRegimeAlimentaire", regime_alimentaire_nomCourt);
    },
    // TODO : parallel change pour introduire progressivement les nouvelles actions
    // PROP Nommage : convention de nommage, toutes les actions commencent par action, toutes les mutations commencent par mutation
    // PROP Archi 1 : on rapatrie le plus de logique possible dans ces actions (qui peut porter de la logique async et garantie la mutation de plusieurs state en cohérence)
    // PROP Archi 2 : et même si on peut, on déplace la logique dans des fonctions externes aux actions (dans plugin ou autre), ce qui permet de les tester
    // PROP Archi 3 : le state contient une partie input, une partie output. L'ouput est contenu dans l'objet "resultatSimulation", les actions ont la responsabilité de le mettre à jour en fonction des modifications des inputs
    async actionChoisirRegimeAlimentaire({ commit }, regimeAlimentaire) {
      commit("mutationRegimeAlimentaire", regimeAlimentaire);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee
      );
      if (this.state.surfacesMobilisables > 0) {
        let resultatSimulationSurface =
          await recalculerResultatSimulationPourSurfaceDonnée(
            this.getters.getcodesTerritoireParcel,
            this.state.regime_alimentaire.id,
            this.state.partbioelevage,
            this.state.partbiofruits,
            this.state.partbiolegumes,
            this.state.partbiocereales,
            this.state.partpertes,
            this.state.part_relocalisee,
            this.state.surfacesMobilisables
          );
        console.log("resultatSimulationSurface", resultatSimulationSurface);
        commit("mutationResultatSimulationSurface", resultatSimulationSurface);
      }
      commit("mutationResultatSimulation", resultatSimulation);
    },
    async actionModifierPartBioElevage({ commit }, partBioElevage) {
      commit("mutationPartBioElevage", partBioElevage);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee
      );
      if (this.state.surfacesMobilisables > 0) {
        let resultatSimulationSurface =
          await recalculerResultatSimulationPourSurfaceDonnée(
            this.getters.getcodesTerritoireParcel,
            this.state.regime_alimentaire.id,
            this.state.partbioelevage,
            this.state.partbiofruits,
            this.state.partbiolegumes,
            this.state.partbiocereales,
            this.state.partpertes,
            this.state.part_relocalisee,
            this.state.surfacesMobilisables
          );
        commit("mutationResultatSimulationSurface", resultatSimulationSurface);
      }
      commit("mutationResultatSimulation", resultatSimulation);
    },
    async actionModifierPartBioFruits({ commit }, partBioFruits) {
      commit("mutationPartBioFruits", partBioFruits);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee
      );
      if (this.state.surfacesMobilisables > 0) {
        let resultatSimulationSurface =
          await recalculerResultatSimulationPourSurfaceDonnée(
            this.getters.getcodesTerritoireParcel,
            this.state.regime_alimentaire.id,
            this.state.partbioelevage,
            this.state.partbiofruits,
            this.state.partbiolegumes,
            this.state.partbiocereales,
            this.state.partpertes,
            this.state.part_relocalisee,
            this.state.surfacesMobilisables
          );
        commit("mutationResultatSimulationSurface", resultatSimulationSurface);
      }
      commit("mutationResultatSimulation", resultatSimulation);
    },
    async actionModifierPartRElocalisee({ commit }, partRelocalisee) {
      commit("mutationPartRelocalisee", partRelocalisee);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee
      );
      commit("mutationResultatSimulation", resultatSimulation);
      if (this.state.surfacesMobilisables > 0) {
        let resultatSimulationSurface =
          await recalculerResultatSimulationPourSurfaceDonnée(
            this.getters.getcodesTerritoireParcel,
            this.state.regime_alimentaire.id,
            this.state.partbioelevage,
            this.state.partbiofruits,
            this.state.partbiolegumes,
            this.state.partbiocereales,
            this.state.partpertes,
            this.state.part_relocalisee,
            this.state.surfacesMobilisables
          );
        commit("mutationResultatSimulationSurface", resultatSimulationSurface);
      }
    },
    async actionModifierPartBioLegumes({ commit }, partBioLegumes) {
      console.log("actionModifierPartBioLegumes", partBioLegumes);
      commit("mutationPartBioLegumes", partBioLegumes);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee
      );
      commit("mutationResultatSimulation", resultatSimulation);
    },
    async actionModifierPartBioCereales({ commit }, partBioCereales) {
      commit("mutationPartBioCereales", partBioCereales);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee
      );
      commit("mutationResultatSimulation", resultatSimulation);
    },
    async actionModifierPartPertes({ commit }, partPertes) {
      commit("mutationPartPertes", partPertes);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee
      );
      commit("mutationResultatSimulation", resultatSimulation);
    },
    actionModifierSurfacesMobilisables({ commit }, surfacesMobilisables) {
      commit("mutationSurfacesMobilisables", surfacesMobilisables);
    },
  },
  plugins: [new VuexPersistence().plugin],
  modules: {},
});
