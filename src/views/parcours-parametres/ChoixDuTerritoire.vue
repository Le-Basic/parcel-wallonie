<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="recherche" active="1" />
      <div class="section centrervh" id="section0">
        <BarreRecherche />
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
  beforeMount: function () {
    this.$store.commit("RESET_STORE");
  },
  methods: {
    ajouter(item) {
      this.rechercheInput = "";
      this.list_geo = [];
      this.$store.commit("addGeo", item);
      let codesTerritoiresListe = this.$store.getters.getcodesTerritoireParcel;
      this.$store.commit("getIndicateursPortraits", codesTerritoiresListe);
      this.$store.dispatch("creerDonneesReference");
      this.$store.dispatch("actionModifierGeo");
    },
    enleverGeo(geo) {
      let codesTerritoireParcel = this.$store.getters.getcodesTerritoireParcel;
      this.$store.commit("removeGeo", geo);
      this.$store.commit("getIndicateursPortraits", codesTerritoireParcel);
      let codesTerritoiresListe = this.$store.getters.getcodesTerritoireParcel;
      this.$store.commit("getIndicateursPortraits", codesTerritoiresListe);
      this.$store.dispatch("creerDonneesReference");
      this.$store.dispatch("actionModifierGeo");
      this.$store.dispatch("actionRecupererElementsDIagnostic");
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
