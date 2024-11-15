import { IDS_REGIMES_ALIMENTAIRES } from "@/config/regimeIds";
import { CHOIX_POPULATION_IDS } from "@/config/TypeChoixPopulation";
import { fetchCurseurs } from "@/plugins/getSurfacesNecessaires";

const getDefaultState = () => {
  return {
    flow: CHOIX_POPULATION_IDS.TOUTE,
    listeTerritoires: [],
    parameters: {
      partBio: {
        legumes: 10,
        cereales: 10,
        fruits: 10,
        viande: 10,
      },
      regimeAlimentaireId: IDS_REGIMES_ALIMENTAIRES.ACTUEL,
      reductionGaspillageRatio: 0,
    },
  };
};

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    getcodesTerritoireParcel: (state) => {
      return state.geoList.map((item) => item.code_territoire);
    },
  },
  actions: {
    actionResetStore({ commit }) {
      commit("RESET_STORE");
    },
    async actionModifierGeo({ commit }, listeTerritoires) {
      let codesTerritoireParcel = this.getters.getcodesTerritoireParcel;
      let curseurs_bio_categorie__url =
        window.apiURL + "parcel/belgique/curseurs_bio_par_categorie";
      let curseursPartBio = await fetchCurseurs(
        curseurs_bio_categorie__url,
        codesTerritoireParcel
      );

      let partBio = {
        legumes: Math.round(
          curseursPartBio.find((item) => item.code_parcel_niveau_1 == "LG")
            .part_bio * 100
        ),
        cereales: Math.round(
          curseursPartBio.find((item) => item.code_parcel_niveau_1 == "GC")
            .part_bio * 100
        ),
        fruits: Math.round(
          curseursPartBio.find((item) => item.code_parcel_niveau_1 == "FR")
            .part_bio * 100
        ),
        viande: Math.round(
          curseursPartBio.find((item) => item.code_parcel_niveau_1 == "EL")
            .part_bio * 100
        ),
      };
      console.log("partBio", partBio);
      commit("mutationChangeParameters", {
        listeTerritoires: listeTerritoires,
        partBioLegumes: partBio.legumes,
        partBioCereales: partBio.cereales,
        partBioFruits: partBio.fruits,
        partBioViande: partBio.viande,
      });
    },
    async actionChangeParameters(
      { commit },
      {
        listeTerritoires,
        partBioLegumes,
        partBioCereales,
        partBioFruits,
        partBioViande,
      }
    ) {
      commit("mutationChangeParameters", {
        listeTerritoires: listeTerritoires,
        partBioLegumes: partBioLegumes,
        partBioCereales: partBioCereales,
        partBioFruits: partBioFruits,
        partBioViande: partBioViande,
      });
    },
  },
  mutations: {
    RESET_STORE(state) {
      Object.assign(state, getDefaultState());
    },
    mutationChangeParameters(
      state,
      {
        listeTerritoires,
        partBioLegumes,
        partBioCereales,
        partBioFruits,
        partBioViande,
      }
    ) {
      if (listeTerritoires !== undefined)
        state.listeTerritoires = listeTerritoires;
      if (partBioLegumes !== undefined)
        state.parameters.partBio.legumes = partBioLegumes;
      if (partBioCereales !== undefined) {
        state.parameters.partBio.cereales = partBioCereales;
      }
      if (partBioFruits !== undefined) {
        state.parameters.partBio.fruits = partBioFruits;
      }
      if (partBioViande !== undefined) {
        state.parameters.partBio.viande = partBioViande;
      }
    },
  },
};
