import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import { regimeListe } from "@/config/regimeListe.js";
import {
  fetchSurfaceNecessaire,
  fetchSurfacesActuelles,
} from "@/plugins/getSurfacesNecessaires";
import { calculerResultatSimulation } from "../plugins/calculResultatSimulation";
const getDefaultState = () => {
  return {
    regimeListe: regimeListe,
    geoList: [],
    population: null,
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
    },
  };
};

export default createStore({
  state: getDefaultState(),
  getters: {},
  mutations: {
    addGeo(state, geo) {
      state.geoList.push(geo);
    },
    removeGeo(state, geo) {
      state.geoList = state.geoList.filter((item) => item !== geo);
    },
    RESET_STORE(state) {
      Object.assign(state, getDefaultState());
    },
    choisirPopulation(state, population) {
      state.population = population;
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
    mutationResultatSimulation(state, resultatSimulation) {
      console.log("mutationResultatSimulation", resultatSimulation);
      state.resultatSimulation = resultatSimulation;
    },
  },
  actions: {
    addGeo({ commit }, geo) {
      commit("addGeo", geo);
    },
    removeGeo({ commit }, geo) {
      commit("removeGeo", geo);
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
    partBioElevage({ commit }, partbioelevage) {
      commit("partBioElevage", partbioelevage);
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
      const url = window.apiURL + "parcel/belgique/surfaces_necessaires";
      const actuelles_url =
        window.apiURL + "parcel/belgique/surfaces_actuels_produit";
      // TODO : mun91114 en dur ici, mais on pourrait déjà le remonter au niveau du défault state et du mutateur
      const codesTerritoireParcel = ["mun91114"];
      var surfaceNecessaireResponseApi = await fetchSurfaceNecessaire(
        url,
        codesTerritoireParcel,
        regimeAlimentaire.id
      );
      var surfaceActuelleResponseApi = await fetchSurfacesActuelles(
        actuelles_url,
        codesTerritoireParcel
      );
      let resultatSimulation = calculerResultatSimulation(
        surfaceNecessaireResponseApi,
        surfaceActuelleResponseApi
      );
      commit("mutationResultatSimulation", resultatSimulation);
    },
  },
  plugins: [new VuexPersistence().plugin],
  modules: {},
});
