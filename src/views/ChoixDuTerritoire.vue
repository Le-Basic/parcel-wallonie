<template>
  <div class="container">
    <div class="asy-wrapper">
      <div class="content">
        <div class="section centrervh" id="section0">
          <div id="preselection" class="text-center animated delay-05s fadeIn">
            <div
              class="alert alert-success mb-5"
              v-if="this.$store.state.geoList.length > 0"
            >
              <div style="font-size: 20px; color: #015a5a; margin-bottom: 10px">
                Votre sélection :
              </div>
              <div
                id="log"
                class="ui-widget-content d-flex justify-content-center flex-wrap"
              >
                <span
                  v-for="geo in this.$store.state.geoList"
                  :key="geo.id"
                  class="badge badge-pill badge-light pointer"
                  style="cursor: pointer"
                  >{{ geo.localeName }}
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
                  v-if="rechercheInput.length > 3 && list_geo.length > 0"
                >
                  <li
                    class="ui-menu-item"
                    v-for="item in list_geo"
                    :key="item.id"
                    @click="ajouter(item)"
                  >
                    {{ item.localeName }}
                  </li>
                </ul>
              </form>
            </div>
            <pre>{{ rechercheInput }}</pre>
            <p>
              Saisissez le nom d’une ou plusieurs région(s), département(s),
              commune(s) ou leur code postal
              <strong class="vert-fonce">au sein de la Région wallonne</strong>
            </p>
            <div class="mt-4 input-info">
              <label class="container-checkbox">
                <div class="d-flex align-items-center">
                  <span>Rechercher par EPCI</span>
                  <a
                    href="#"
                    class="info"
                    data-tooltip="Les établissements publics de coopération intercommunale (EPCI) sont des regroupements de communes. Les communautés urbaines, communautés d'agglomération, communautés de communes, syndicats d'agglomération nouvelle, syndicats de communes et les syndicats mixtes sont des EPCI. (Source : INSEE)"
                    data-placement="left"
                    ><span class="icon-ico_element_info"></span
                  ></a>
                </div>

                <input type="checkbox" id="CheckboxEPCI" />
                <span class="checkmark"></span>
              </label>

              <label class="container-checkbox">
                <div class="d-flex align-items-center">
                  <span>Rechercher par PNR</span
                  ><a
                    href="#"
                    class="info"
                    data-tooltip="Les Parcs naturels régionaux sont créés pour protéger et mettre en valeur de grands espaces ruraux habités. Peut être classé “Parc naturel régional” un territoire à dominante rurale dont les paysages, les milieux naturels et le patrimoine culturel sont de grande qualité, mais dont l’équilibre est fragile. (Source : Parcs Naturels Régionaux de Région wallonne)"
                    data-placement="left"
                    ><span class="icon-ico_element_info"></span
                  ></a>
                </div>
                <input type="checkbox" id="CheckboxPNR" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="mt-5"></div>
            <div class="div-continuer">
              <router-link to="/2-choix-de-la-population" id="suite">
                <button type="button" class="btn btn-principal mt-5">
                  Continuer
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav id="asy-sidebar" class="">
      <!-- <?php //include '../partials/menu-affiner-2modales.php';
      ?> -->
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      pointGeoAPI: window.apiURL + "/parcel/GeoData/",
      rechercheInput: "",
      list_geo: [],
    };
  },
  beforeMount: function () {
    this.$store.commit("RESET_STORE");
  },
  methods: {
    ajouter(item) {
      this.rechercheInput = "";
      this.list_geo = [];
      this.$store.commit("addGeo", item);
      console.log("store", this.$store.state);
    },
  },
  watch: {
    rechercheInput: function (valeur) {
      console.log(valeur);
      if (valeur.length > 3) {
        axios
          .get(this.pointGeoAPI + valeur + "?pays=belgique")
          .then((response) => {
            this.list_geo = response.data;
            console.log(this.list_geo);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
