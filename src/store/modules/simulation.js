export default {
  namespaced: true,
  state: {
    parameters: {
      geoList: [],
      partBio: {
        legumes: 10,
        cereales: 10,
        fruits: 10,
        viande: 10,
      },
    },
  },
  getters: {
    data: (state) => state.data,
  },
  actions: {
    async actionChangeParameters(
      { commit },
      { geoList, partBioLegumes, partBioCereales }
    ) {
      commit("mutationChangeParameters", {
        geoList,
        partBioLegumes,
        partBioCereales,
      });
    },
  },
  mutations: {
    mutationChangeParameters(
      state,
      { geoList, partBioLegumes, partBioCereales }
    ) {
      console.log("initial", state.parameters);
      state.parameters.geoList = geoList ?? state.parameters.geoList;
      if (partBioLegumes !== undefined)
        state.parameters.partBio.legumes = partBioLegumes;
      state.parameters.partBio.cereales =
        partBioCereales ?? state.parameters.partBio.cereales;
      console.log("state", state.parameters);
    },
  },
};
