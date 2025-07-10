<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="surface" active="2" />

      <div class="section centrervh" id="section0">
        <h1 class="animated fadeInUp">Choisissez la zone géographique</h1>
        <BarreRecherche buttonRoute="/2-choix-du-type-dalimentation" />
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
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import BarreRecherche from "@/components/BarreRecherche.vue";

export default {
  name: "HomeView",
  components: {
    BarreNavigation,
    BarreRecherche,
  },
  data() {
    return {
      pointGeoAPI: window.apiURL + "parcel/GeoData/",
      rechercheInput: "",
      list_geo: [],
    };
  },
  methods: {
    ajouter(item) {
      this.rechercheInput = "";
      this.list_geo = [];
      this.$store.commit("addGeo", item);
      this.$store.dispatch("actionModifierGeo");
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
