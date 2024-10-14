import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import { regimeListe } from "@/config/regimeListe.js";
import {
  throttledfetchSurfaceNecessaire,
  throttledfetchSurfaceNecessairePaysage,
  fetchSurfaceNecessairePourRegimePersonnalise,
  fetchSurfaceNecessaireInstitutions,
  fetchSurfacesActuelles,
  fetchSurfacesActuellesPaysage,
  fetchIndicateursActuels,
  fetchPortrait,
  fetchCurseurs,
} from "@/plugins/getSurfacesNecessaires";
import { fetchCurseurBio } from "@/plugins/getPartdeBio";
import { calculerResultatSimulation } from "../plugins/calculResultatSimulation";
import { calculerResultatSimulationAvecSurface } from "@/plugins/calculResultatsSimulationAvecSurface";
import { INSTITUTIONS, INSTITUTIONS_IDS } from "@/config/Institutions.js";
import { CHOIX_POPULATION_IDS } from "@/config/TypeChoixPopulation";
import store from ".";
import { IDS_REGIMES_ALIMENTAIRES } from "@/config/regimeIds";
import { CalculPartBioGlobale } from "@/plugins/calculPartBio";
import { AfficherEntier, trouverChiffre } from "@/plugins/utils";
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER } from "@/config/categorieProduitsPotentielNourricier";
const getDefaultState = () => {
  return {
    regimeListe: regimeListe,
    geoList: [],
    indicateurPortraits: {
      surface_ha: 0,
      sau_ha: 0,
      population: 0,
      nb_exploitations_1990: 0,
      nb_exploitations_2021: 0,
      emploi_agricole_uta: 0,
      walstat_espace_artificialise_ha: 0,
      walstat_espace_agricoles_ha: 0,
      walstat_espaces_naturels_ha: 0,
    },
    population: {
      part: "toute",
      nombreEnfants: 150,
      nombreAdultes: 150,
      nombreSeniors: 150,
    },
    curseursBioMin: {
      partbiocereales: 0,
      partbioelevage: 0,
      partbiofruits: 0,
      partbiolegumes: 0,
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
      consommation_kg: 0,
      emission_kg_co2e: 0,
      empreinte_eau_bleue_m3: 0,
      surfaces_ha_soja_importes: 0,
      abondances_especes: 0,
      richesses_des_sols: 0,
      surfacesEmploisAMobiliser: 0,
      surfacesActuelles: 0,
      surfacesActuellesParcelNiveau1: [],
      potentielNourricier: 0,
      surfacesActuellesPaysage: 0,
    },
    resultatReference: {},
    resultatSimulationSurface: {
      population: 0,
      populationAvecBesoinComblé: 0,
    },
    surfacesMobilisables: 0,
    pctDiffRegimePersonnalise: [],
    nbCouvertsParInstitution: [
      {
        id: INSTITUTIONS_IDS.MATERNELLES,
        nb_couverts: 0,
      },
      {
        id: INSTITUTIONS_IDS.PRIMAIRES,
        nb_couverts: 0,
      },
      {
        id: INSTITUTIONS_IDS.COLLEGES,
        nb_couverts: 0,
      },
      {
        id: INSTITUTIONS_IDS.LYCEES,
        nb_couverts: 0,
      },
      {
        id: INSTITUTIONS_IDS.UNIVERSITES,
        nb_couverts: 0,
      },
      {
        id: INSTITUTIONS_IDS.HOPITAUX,
        nb_couverts: 0,
      },
      {
        id: INSTITUTIONS_IDS.MAISONS_DE_RETRAITE,
        nb_couverts: 0,
      },
      {
        id: INSTITUTIONS_IDS.ENTREPRISES,
        nb_couverts: 0,
      },
      {
        id: INSTITUTIONS_IDS.AUTRES,
        nb_couverts: 0,
      },
    ],
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
  part_relocalisee,
  resultatReference,
  pctDiffRegimePersonnalise
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
    part_relocalisee,
    resultatReference,
    pctDiffRegimePersonnalise
  );

  let necessaires__url = window.apiURL + "parcel/belgique/surfaces_necessaires";
  let necessaires_paysage__url =
    window.apiURL + "parcel/belgique/surfaces_necessaires_paysage";

  let surfaceNecessaireResponseApi = null;
  let surfaceNecessairePaysageResponseApi = null;
  if (store.state.population.part != CHOIX_POPULATION_IDS.INSTITUTIONS) {
    if (idRegimeAlimentaire === IDS_REGIMES_ALIMENTAIRES.PERSONNALISE) {
      necessaires__url =
        window.apiURL +
        "parcel/belgique/surfaces_necessaires_paysage_regime_personnalise";
      necessaires_paysage__url =
        window.apiURL +
        "parcel/belgique/surfaces_necessaires_regime_personnalise";
      surfaceNecessaireResponseApi =
        await fetchSurfaceNecessairePourRegimePersonnalise(
          necessaires__url,
          codesTerritoireParcel,
          idRegimeAlimentaire,
          pctDiffRegimePersonnalise
        );
      surfaceNecessairePaysageResponseApi =
        await fetchSurfaceNecessairePourRegimePersonnalise(
          necessaires_paysage__url,
          codesTerritoireParcel,
          idRegimeAlimentaire,
          pctDiffRegimePersonnalise
        );
    } else {
      surfaceNecessaireResponseApi = await throttledfetchSurfaceNecessaire(
        necessaires__url,
        codesTerritoireParcel,
        idRegimeAlimentaire
      );
      surfaceNecessairePaysageResponseApi =
        await throttledfetchSurfaceNecessairePaysage(
          necessaires_paysage__url,
          codesTerritoireParcel,
          idRegimeAlimentaire
        );
    }
  } else if (store.state.population.part == CHOIX_POPULATION_IDS.INSTITUTIONS) {
    necessaires__url =
      window.apiURL + "parcel/belgique/surfaces_necessaires/institutions";
    surfaceNecessaireResponseApi = await fetchSurfaceNecessaireInstitutions(
      necessaires__url,
      idRegimeAlimentaire,
      pctDiffRegimePersonnalise
    );
    necessaires_paysage__url =
      window.apiURL +
      "parcel/belgique/surfaces_necessaires_paysage/institutions";
    // TODO FAIRE POUR la version institution
    surfaceNecessairePaysageResponseApi =
      await fetchSurfaceNecessaireInstitutions(
        necessaires_paysage__url,
        idRegimeAlimentaire,
        pctDiffRegimePersonnalise
      );
  }
  const actuelles_url =
    window.apiURL + "parcel/belgique/surfaces_actuels_produit_par_categorie";

  const actuellespaysage__url =
    window.apiURL + "parcel/belgique/surfaces_actuels_paysage";
  var surfaceActuelleResponseApiPaysage = await fetchSurfacesActuellesPaysage(
    actuellespaysage__url,
    codesTerritoireParcel
  );
  var surfaceActuelleResponseApi = await fetchSurfacesActuelles(
    actuelles_url,
    codesTerritoireParcel
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
    part_relocalisee,
    resultatReference
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
    window.apiURL + "parcel/belgique/surfaces_actuels_produit_par_categorie";

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

  // TODO: ajouter le cas du régime spécialisé
  var surfaceNecessaireResponseApi = await throttledfetchSurfaceNecessaire(
    url,
    codesTerritoireParcel,
    idRegimeAlimentaire
  );

  // TODO: ajouter le cas du régime spécialisé
  const necessaires_paysage__url =
    window.apiURL + "parcel/belgique/surfaces_necessaires_paysage";
  var surfaceNecessairePaysageResponseApi =
    await throttledfetchSurfaceNecessaire(
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
      //TODO: Le state.population.part doit être adossé à une configuration de texte
      if (state.population.part == "toute") {
        return "Toute la population";
      } else if (state.population.part == "groupe") {
        return `Groupe de ${state.population.nombreEnfants} enfants, ${state.population.nombreAdultes} adultes et ${state.population.nombreSeniors} seniors`;
      } else if (state.population.part == "institutions") {
        const texte = [];

        state.nbCouvertsParInstitution.map((item) => {
          let institutionLibelle = null;
          institutionLibelle = INSTITUTIONS.find(
            (institution) => institution.id == item.id
          ).libelle_singulier;
          console.log("institutionLibelle", institutionLibelle);
          console.log("item.nbCouverts", item.nb_couverts);
          item.nb_couverts > 0
            ? texte.push(`${institutionLibelle}: ${item.nb_couverts} couverts`)
            : null;
        });
        console.log("texte", texte);
        return texte.join(", ");
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
      state.partbiolegumes = Math.max(partbiolegumes, state.partbiolegumes);
    },
    partBioFruits(state, partbiofruits) {
      state.partbiofruits = Math.max(partbiofruits, state.partbiofruits);
    },
    partBioCereales(state, partbiocereales) {
      state.partbiocereales = Math.max(partbiocereales, state.partbiocereales);
    },
    partBioElevage(state, partbioelevage) {
      state.partbioelevage = Math.max(partbioelevage, state.partbioelevage);
    },
    curseursMin(state, curseursBioMin) {
      state.curseursBioMin.partbiocereales = Math.round(
        curseursBioMin.find((item) => item.code_parcel_niveau_1 == "GC")
          .part_bio * 100
      );
      state.curseursBioMin.partbioelevage = Math.round(
        curseursBioMin.find((item) => item.code_parcel_niveau_1 == "EL")
          .part_bio * 100
      );
      state.curseursBioMin.partbiofruits = Math.round(
        curseursBioMin.find((item) => item.code_parcel_niveau_1 == "FR")
          .part_bio * 100
      );
      state.curseursBioMin.partbiolegumes = Math.round(
        curseursBioMin.find((item) => item.code_parcel_niveau_1 == "LG")
          .part_bio * 100
      );
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
      state.partbioelevage = Math.max(
        partBioElevage,
        state.curseursBioMin.partbioelevage
      );
    },
    mutationPartBioFruits(state, partBioFruits) {
      state.partbiofruits = Math.max(
        partBioFruits,
        state.curseursBioMin.partbiofruits
      );
    },
    mutationPartBioLegumes(state, partBioLegumes) {
      state.partbiolegumes = Math.max(
        partBioLegumes,
        state.curseursBioMin.partbiolegumes
      );
    },
    mutationPartBioCereales(state, partBioCereales) {
      state.partbiocereales = Math.max(
        partBioCereales,
        state.curseursBioMin.partbiocereales
      );
    },
    mutationPartPertes(state, partPertes) {
      state.partpertes = partPertes;
    },
    mutationResultatSimulation(state, resultatSimulation) {
      state.resultatSimulation = resultatSimulation;
    },
    mutationResultatReference(state, resultatSimulation) {
      state.resultatReference = resultatSimulation;
    },
    mutationResultatSimulationSurface(state, resultatSimulationSurface) {
      state.resultatSimulationSurface = resultatSimulationSurface;
    },
    mutationPartRelocalisee(state, part_relocalisee) {
      state.part_relocalisee = part_relocalisee;
    },
    mutationResultatsDiagnostic(state, diagnostic) {
      state.diagnostic = diagnostic;
    },
    mutationPctDiffRegimePersonnalise(state, pctDiffRegimePersonnalise) {
      state.pctDiffRegimePersonnalise = pctDiffRegimePersonnalise;
    },
    mutationNbCouvertsParInstitution(state, nbCouvertsParInstitution) {
      state.nbCouvertsParInstitution = nbCouvertsParInstitution;
      console.log(
        "state.nbCouvertsParInstitution",
        state.nbCouvertsParInstitution
      );
    },
    mutationPopulation(state, { nombreAdultes, nombreSeniors, nombreEnfants }) {
      state.population.nombreAdultes = nombreAdultes;
      state.population.nombreEnfants = nombreEnfants;
      state.population.nombreSeniors = nombreSeniors;
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
    async changerPartBio({ commit }, part_bio) {
      commit("partBio", part_bio);
      commit("partBioLegumes", part_bio);
      commit("partBioFruits", part_bio);
      commit("partBioCereales", part_bio);
      commit("partBioElevage", part_bio);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
      );
      commit("mutationResultatReference", resultatSimulation);
      resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
      );
      commit("mutationResultatSimulation", resultatSimulation);
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
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
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
            this.state.surfacesMobilisables,
            this.state.pctDiffRegimePersonnalise
          );
        console.log("resultatSimulationSurface", resultatSimulationSurface);
        commit("mutationResultatSimulationSurface", resultatSimulationSurface);
      }
      commit("mutationResultatSimulation", resultatSimulation);
    },
    async actionModifierPartBioElevage({ commit }, partBioElevage) {
      commit("mutationPartBioElevage", partBioElevage);
      let partBioGlobale = CalculPartBioGlobale(
        {
          partBioCereales: this.state.partbiocereales,
          partBioFruits: this.state.partbiofruits,
          partBioLegumes: this.state.partbiolegumes,
          partBioElevage: partBioElevage,
        },
        {
          surfacesNecessairesCereales: trouverChiffre(
            this.state.resultatSimulation.surfacesEmploisAMobiliser,
            CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES.libelle,
            "surface_a_mobiliser",
            "libelle_parcel_niveau_1",
            0
          ),
          surfacesNecessairesFruits: trouverChiffre(
            this.state.resultatSimulation.surfacesEmploisAMobiliser,
            CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.libelle,
            "surface_a_mobiliser",
            "libelle_parcel_niveau_1",
            0
          ),
          surfacesNecessairesLegumes: trouverChiffre(
            this.state.resultatSimulation.surfacesEmploisAMobiliser,
            CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle,
            "surface_a_mobiliser",
            "libelle_parcel_niveau_1",
            0
          ),
          surfacesNecessairesElevage: trouverChiffre(
            this.state.resultatSimulation.surfacesEmploisAMobiliser,
            CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.libelle,
            "surface_a_mobiliser",
            "libelle_parcel_niveau_1",
            0
          ),
        }
      );

      commit("partBio", AfficherEntier(partBioGlobale * 100));

      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
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
            this.state.surfacesMobilisables,
            this.state.pctDiffRegimePersonnalise
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
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
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
            this.state.surfacesMobilisables,
            this.state.resultatReference
          );
        commit("mutationResultatSimulationSurface", resultatSimulationSurface);
      }
      commit("mutationResultatSimulation", resultatSimulation);
    },
    async actionModifierNbCouvertsParInstitution(
      { commit },
      nbCouvertsParInstitution
    ) {
      commit("mutationNbCouvertsParInstitution", nbCouvertsParInstitution);
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
      );
      commit("mutationResultatSimulation", resultatSimulation);
      commit("mutationResultatReference", resultatSimulation);
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
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
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
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
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
        this.state.part_relocalisee,
        this.state.pctDiffRegimePersonnalise
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
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
      );
      commit("mutationResultatSimulation", resultatSimulation);
    },
    actionModifierSurfacesMobilisables({ commit }, surfacesMobilisables) {
      commit("mutationSurfacesMobilisables", surfacesMobilisables);
    },
    async actionModifierGeo({ commit }) {
      let codesTerritoireParcel = this.getters.getcodesTerritoireParcel;
      let curseurs_bio__url = window.apiURL + "parcel/belgique/curseurs_bio";
      fetchCurseurBio(curseurs_bio__url, codesTerritoireParcel).then((data) => {
        let partBio = Math.round(data * 100);
        commit("partBio", partBio);
      });
      let curseurs_bio_categorie__url =
        window.apiURL + "parcel/belgique/curseurs_bio_par_categorie";
      fetchCurseurs(curseurs_bio_categorie__url, codesTerritoireParcel).then(
        (curseursPartBio) => {
          commit("curseursMin", curseursPartBio);
          commit(
            "partBioLegumes",
            Math.round(
              curseursPartBio.find((item) => item.code_parcel_niveau_1 == "LG")
                .part_bio * 100
            )
          );
          commit(
            "partBioCereales",
            Math.round(
              curseursPartBio.find((item) => item.code_parcel_niveau_1 == "GC")
                .part_bio * 100
            )
          );
          commit(
            "partBioElevage",
            Math.round(
              curseursPartBio.find((item) => item.code_parcel_niveau_1 == "EL")
                .part_bio * 100
            )
          );
          commit(
            "partBioFruits",
            Math.round(
              curseursPartBio.find((item) => item.code_parcel_niveau_1 == "FR")
                .part_bio * 100
            )
          );
        }
      );
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
      );
      commit("mutationResultatReference", resultatSimulation);
      resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
      );
      commit("mutationResultatSimulation", resultatSimulation);
    },
    async actionModifierPopulation(
      { commit },
      { nombreAdultes, nombreSeniors, nombreEnfants }
    ) {
      console.log("test dispatch", nombreAdultes, nombreSeniors, nombreEnfants);
      commit("mutationPopulation", {
        nombreAdultes: nombreAdultes,
        nombreSeniors: nombreSeniors,
        nombreEnfants: nombreEnfants,
      });
      let resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
      );
      commit("mutationResultatReference", resultatSimulation);
      resultatSimulation = await recalculerResultatSimulation(
        this.getters.getcodesTerritoireParcel,
        this.state.regime_alimentaire.id,
        this.state.partbioelevage,
        this.state.partbiofruits,
        this.state.partbiolegumes,
        this.state.partbiocereales,
        this.state.partpertes,
        this.state.part_relocalisee,
        this.state.resultatReference,
        this.state.pctDiffRegimePersonnalise
      );
      commit("mutationResultatSimulation", resultatSimulation);
    },
  },
  plugins: [new VuexPersistence().plugin],
  modules: {},
});
