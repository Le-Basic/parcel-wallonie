<template>
  <div
    class="ligne-prereglages filtres justify-content-center flex-wrap animated fadeInUp delay-05s"
  >
    <div class="prereglage text-center">
      <div class="result-type mr-0">
        <span
          class="icon-ico_navigation_territoire icon vert-clair mr-1"
        />
      </div>
      <div
        v-if="$store.state.geoList"
        class="result-chiffres"
      >
        <span class="vert-clair">Territoire : </span>
        <span
          v-for="geo in $store.state.geoList"
          id="selection2"
          :key="geo.id"
          class="territoire"
        >
          {{ geo.localeName }}
        </span>
      </div>
    </div>
    <div
      v-if="$store.state.part_relocalisee"
      class="prereglage"
    >
      <div class="result-type mr-0">
        <span class="icon-ico_filtres-reloc icon vert-clair" />
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">% de la conso. relocalisée : </span><span><span
          id="partlocaleval3"
          class="vert-fonce"
        >{{
          $store.state.part_relocalisee
        }}</span><span class="vert-fonce" /></span>
      </div>
      <!-- <div class="result-plus"><span class="icon-ico_fleche_detail_gros icon vert-clair"></span></div>-->
    </div>

    <div
      v-if="$store.state.part_bio"
      class="prereglage"
    >
      <div class="result-type mr-0">
        <span class="icon-ico_filtres_bio icon vert-clair" />
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">% en bio : </span>
        <span><span
          id="bioval3"
          class="vert-fonce"
        /><span class="vert-fonce"> {{ $store.state.part_bio }} %</span></span>
      </div>
      <!-- <div class="result-plus"><span class="icon-ico_fleche_detail_gros icon vert-clair"></span></div>-->
    </div>
    <div
      v-if="$store.state.regime_alimentaire"
      class="prereglage"
    >
      <div class="result-type mr-0">
        <span class="icon-ico_CATEGORIES_viande icon vert-clair mr-2" />
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">régime alimentaire : </span><span
          id="assiette3"
          class="vert-fonce"
        >
          {{ $store.state.regime_alimentaire["libelle"] }}</span>
      </div>
      <!--<div class="result-plus"><span class="icon-ico_fleche_detail_gros icon vert-clair"></span></div>-->
    </div>
    <div
      v-if="$store.state.population"
      class="prereglage text-center"
    >
      <div class="result-type mr-0">
        <span
          class="icon-ico_navigation_population icon vert-clair mr-1"
        />
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">Population : </span>
        <span
          id="population2"
          class="territoire"
        >
          {{ $store.state.population }}</span>
      </div>
      <!--Lycée : 150 couverts-->
    </div>
    <div
      v-if="$store.state.partpertes"
      class="prereglage text-center"
    >
      <div class="result-type mr-0">
        <span class="icon-gaspillage icon vert-clair mr-1" />
      </div>
      <div class="result-chiffres">
        <span class="vert-clair">Réduction gaspillage : </span>
        <span
          id="valpartpertes2"
          class="territoire"
        >
          {{ $store.state.partpertes }}</span><span class="vert-fonce">%</span>
      </div>
    </div>
  </div>
  <!--- FIN LIGNE a REPETER -->
</template>

<script>
export default {
  props: {
    format: {
      type: String,
      default: "court",
    },
  },
};
</script>
