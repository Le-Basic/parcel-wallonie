import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import { regimeListe } from "@/config/regimeListe.js";
const getDefaultState = () => {
  return {
    regimeListe: regimeListe,
    geoList: [],
    population: null,
    part_relocalisee: 100,
    part_bio: null,
    regime_alimentaire: regimeListe.find((el) => el.default == true),
    partpertes: null,
    partbiolegumes: null,
    partbiofruits: null,
    partbiocereales: null,
    partbioelevage: null,
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
  },
  actions: {
    addGeo({ commit }, geo) {
      commit("addGeo", geo);
    },
    removeGeo({ commit }, geo) {
      commit("removeGeo", geo);
    },
    resetStore({ commit }) {
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
  },
  plugins: [new VuexPersistence().plugin],
  modules: {},
});
