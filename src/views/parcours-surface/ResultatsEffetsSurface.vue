<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation :active="1" menu-type="resultats-surface" />
      <div class="section centrervh" id="section0">
        <div class="container">
          <resumeChoixSurface />
          <!-- <h1 class="animated fadeInUp fast mb-2">Avec <span id="choixsurface">100</span> <span id="typesurface">hectares</span> à <br><span id="nomvilleter">- </span>-</h1>-->
          <div
            class="d-flex align-items-center titre-page-p2 animated fadeInUp justify-content-center"
          >
            <div class="text-h1 mb-0 mr-4">Avec</div>
            <span class="text-h1 vert-clair" id="choixsurface">
              {{ choixsurface }}</span
            >
            <div class="text-h1 mb-0 ml-3">
              <span id="typesurface">hectares</span>
            </div>
          </div>
          <div class="animated fadeInUp text-h1 text-center">
            je peux nourrir
          </div>
          <pre>{{ this.$store.state }}</pre>
          <div class="mb-4"></div>
          <div class="resultats-generaux">
            <router-link
              to="/repartition-des-cultures-dans-la-relocalisation"
              class="cadre-resultat animated cadre-btn fadeIn delay-05s cadre-parcours2 flex-row"
            >
              <span
                class="icon-ico_groupe icon flipInX animated delay-1s"
              ></span>
              <div class="d-flex flex-sm-row flex-column">
                <div class="nbr-ha animated flipInX delay-1-5s">
                  <span id="couvertstotal0" class="odometer">{{
                    nbPersonnesBesoinsCombles
                  }}</span>
                </div>
                <div class="hectares animated flipInX delay-1-5s">
                  personnes
                </div>
              </div>
              <div class="result-plus icon fadeIn animated delay-2s">
                <span class="icon-ico_fleche_detail_gros icon"></span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoixSurface from "@/views/parcours-surface/ResumeChoixSurface.vue";

export default {
  components: {
    BarreNavigation,
    resumeChoixSurface,
  },
  data() {
    return {
      choixsurface: this.$store.state.surfacesMobilisables,
      nbPersonnesBesoinsCombles:
        this.$store.state.resultatSimulationSurface.populationAvecBesoinComblé,
    };
  },
};
</script>
