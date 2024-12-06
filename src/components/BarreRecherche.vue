<template>
  <div id="preselection" class="text-center animated delay-05s fadeIn">
    <div class="alert alert-success mb-5" v-if="store.state.geoList.length > 0">
      <div style="font-size: 20px; color: #594231; margin-bottom: 10px">
        Votre sélection :
      </div>
      <div
        id="log"
        class="ui-widget-content d-flex justify-content-center flex-wrap"
      >
        <span
          v-for="geo in store.state.geoList"
          :key="geo.id"
          class="badge badge-pill badge-light pointer"
          style="cursor: pointer"
          >{{ geo.localeName }}
          <span
            @click="enleverGeo(geo)"
            class="icon-ico_fermer icon"
            style="font-size: 8px; color: white"
          ></span>
        </span>
      </div>
    </div>
  </div>
  <div class="animated fadeIn">
    <div class="champ-recherche d-flex align-items-center">
      <span class="icon-ico_element_recherche icon"></span>
      <form autocomplete="off" class="w-100">
        <input
          autocomplete="false"
          name="hidden"
          type="text"
          style="display: none"
        />
        <input
          class="recherche"
          id="city"
          placeholder="Où ?"
          aria-describedby="inputGroup-sizing-sm"
          v-model="rechercheInput"
        />
        <ul
          class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
          id="list"
          style="position: absolute; z-index: 1"
          v-if="rechercheInput.length > 1 && list_geo.length > 0"
        >
          <li
            class="ui-menu-item"
            v-for="item in list_geo"
            :key="item.id"
            @click="ajouterGeo(item)"
          >
            {{ item.localeName }}
          </li>
        </ul>
      </form>
    </div>
    <p>
      Saisissez le nom d’une ou plusieurs région(s), province(s),
      arrondissement(s) commune(s)
      <strong class="vert-fonce">au sein de la Région wallonne</strong>
    </p>
    <div class="div-continuer">
      <router-link :to="props.buttonRoute" id="suite">
        <button type="button" class="btn btn-principal mt-5">Continuer</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import axios from "axios";

const props = defineProps({
  buttonRoute: {
    type: String,
    default: "/choix-du-parcours",
  },
});
const store = useStore();

const rechercheInput = ref("");
const list_geo = ref([]);
const pointGeoAPI = window.apiURL + "/parcel/GeoData/";

const ajouterGeo = (geo) => {
  rechercheInput.value = "";
  list_geo.value = [];
  store.commit("addGeo", geo);
  let codesTerritoiresListe = store.getters.getcodesTerritoireParcel;
  store.commit("getIndicateursPortraits", codesTerritoiresListe);
  store.dispatch("actionModifierGeo");
  store.dispatch("simulation/actionModifierGeo", [geo]);
};

const enleverGeo = (geo) => {
  store.commit("removeGeo", geo);
  let codesTerritoiresListe = store.getters.getcodesTerritoireParcel;
  store.commit("getIndicateursPortraits", codesTerritoiresListe);
  store.dispatch("actionModifierGeo");
  store.dispatch("simulation/actionModifierGeo", [geo]);
};
watch(rechercheInput, (valeur) => {
  if (valeur.length > 1) {
    axios
      .get(pointGeoAPI + valeur + "?pays=belgique")
      .then((response) => {
        console.log(response.data);
        list_geo.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
</script>

<style scoped>
.badge-light:hover {
  padding-right: 0.6rem;
  background-color: var(--bleu);
}
</style>
