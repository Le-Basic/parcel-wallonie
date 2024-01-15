import { createStore } from "vuex";

const getDefaultState = () => {
  return {
    geoList: [],
    population: null,
    part_relocalisee: null,
    part_bio: null,
    regime_alimentaire: null,
    partpertes: null,
  };
};

export default createStore({
  state: getDefaultState(),
  getters: {},
  mutations: {
    addGeo(state, geo) {
      state.geoList.push(geo);
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
    regimeAlimentaire(state, regime_alimentaire) {
      state.regime_alimentaire = regime_alimentaire;
    },
    partPertes(state, partpertes) {
      state.partpertes = partpertes;
    },
  },
  actions: {
    addGeo({ commit }, geo) {
      commit("addGeo", geo);
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
  },
  modules: {},
});
