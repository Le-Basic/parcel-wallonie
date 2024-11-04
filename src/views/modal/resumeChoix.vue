<template>
  <div
    class="ligne-prereglages filtres justify-content-center flex-wrap animated fadeInUp delay-05s"
  >
    <div class="prereglage text-center">
      <div class="result-type mr-0">
        <span
          class="icon-ico_navigation_territoire icon vert-clair mr-1"
        ></span>
      </div>
      <div class="result-chiffres" v-if="$store.state.geoList">
        <span class="vert-clair">Territoire : </span>
        <span
          v-if="this.listeTerritoires.length > 3"
          v-tippy="
            this.listeTerritoires.map((geo) => geo.localeName).join(', ')
          "
          id="selection2"
          class="territoire"
          >{{ getTerritoiresTexte() }}</span
        >
        <span v-else id="selection2" class="territoire">{{
          getTerritoiresTexte()
        }}</span>
      </div>
    </div>
    <div class="prereglage" v-if="$store.state.part_relocalisee">
      <div class="result-type mr-0">
        <span class="icon-ico_filtres-reloc icon vert-clair"></span>
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">% de la conso. relocalisée : </span
        ><span
          ><span id="partlocaleval3" class="vert-fonce">{{
            $store.state.part_relocalisee
          }}</span
          ><span class="vert-fonce"></span
        ></span>
      </div>
      <!-- <div class="result-plus"><span class="icon-ico_fleche_detail_gros icon vert-clair"></span></div>-->
    </div>

    <div class="prereglage" v-if="$store.state.part_bio">
      <div class="result-type mr-0">
        <span class="icon-ico_filtres_bio icon vert-clair"></span>
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">% en bio : </span>
        <span
          ><span id="bioval3" class="vert-fonce"></span
          ><span class="vert-fonce"> {{ $store.state.part_bio }} %</span></span
        >
      </div>
      <!-- <div class="result-plus"><span class="icon-ico_fleche_detail_gros icon vert-clair"></span></div>-->
    </div>
    <div class="prereglage" v-if="$store.state.regime_alimentaire">
      <div class="result-type mr-0">
        <span class="icon-ico_CATEGORIES_viande icon vert-clair mr-2"></span>
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">régime alimentaire : </span
        ><span id="assiette3" class="vert-fonce">
          {{ $store.state.regime_alimentaire["libelle"] }}</span
        >
      </div>
      <!--<div class="result-plus"><span class="icon-ico_fleche_detail_gros icon vert-clair"></span></div>-->
    </div>
    <div
      class="prereglage text-center"
      v-if="$store.getters.getPopulationTexte"
    >
      <div class="result-type mr-0">
        <span
          class="icon-ico_navigation_population icon vert-clair mr-1"
        ></span>
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">Population : </span>
        <span id="population2" class="territoire">
          {{ $store.getters.getPopulationTexte }}</span
        >
      </div>
      <!--Lycée : 150 couverts-->
    </div>
    <div class="prereglage text-center" v-if="$store.state.partpertes">
      <div class="result-type mr-0">
        <span class="icon-gaspillage icon vert-clair mr-1"></span>
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">Réduction gaspillage : </span>
        <span id="valpartpertes2" class="territoire">
          {{ $store.state.partpertes }}</span
        ><span class="vert-fonce">%</span>
      </div>
    </div>
  </div>
  <!--- FIN LIGNE a REPETER -->
</template>

<script>
import { directive } from "vue-tippy";

export default {
  props: {
    format: {
      type: String,
      default: "court",
    },
  },
  data() {
    return {
      listeTerritoires: this.$store.state.geoList,
    };
  },
  directives: {
    tippy: directive,
  },
  methods: {
    getTerritoiresTexte() {
      if (this.listeTerritoires.length > 0) {
        if (this.listeTerritoires.length > 3) {
          return `${this.listeTerritoires.length} territoires sélectionnés`;
        } else {
          return this.listeTerritoires.map((geo) => geo.localeName).join(", ");
        }
      }
      return "";
    },
  },
};
</script>
