<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="recherche" active="2" />
      <div class="section centrervh" id="section0">
        <div class="container">
          <div class="mb-5 animated fadeInUp">
            <h1 class="mb-3">Choisissez la population concernée</h1>
            <div class="sous-titre">
              dont vous souhaitez relocaliser l’alimentation
            </div>
          </div>
          <resumeChoix />
          <div class="choix-pop mt-5">
            <div class="animated fadeInUp delay-05s">
              <router-link
                to="/3-type-dalimentation"
                id="toute"
                @click="choisirPopulation('toute')"
                ><button type="button" class="btn btn-big-light">
                  Toute la population du territoire
                </button></router-link
              >
            </div>
            <div class="animated fadeInUp delay-1s">
              <router-link
                to="/2-choix-de-la-population-par-etablissement"
                id="type"
                @click="choisirPopulation('institutions')"
                ><button type="button " class="btn btn-big-light">
                  Ou les consommateurs d’un ou plusieurs établissements (école,
                  hôpital…)
                </button></router-link
              >
            </div>
            <div class="animated fadeInUp delay-1-5s">
              <a
                href="#secondPage"
                id="groupe"
                @click="choisirPopulation('groupe')"
                ><button
                  type="button"
                  class="btn btn-big-light"
                  data-toggle="modal"
                  data-target="#modal-population-groupe"
                >
                  ou un groupe de personnes
                </button></a
              >
            </div>
          </div>
          <div class="text-center note animated fadeInUp delay-2s">
            <em
              >*En fonction du choix de population, PARCEL-Walloniedétermine les
              consommations alimentaires qui varient en fonction de l'âge et du
              sexe</em
            >
          </div>
        </div>
      </div>
    </div>
    <nav id="asy-sidebar" class="">
      <!-- <?php include '../partials/menu-affiner-2modales.php'; ?> -->
    </nav>
  </div>
  <!-- Modal s-->

  <modalGroupePersonnes
    v-if="modalActive == 'groupe'"
    @fermerModale="this.modalActive = null"
  ></modalGroupePersonnes>
</template>

<script>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoix from "@/views/modal/resumeChoix.vue";
import modalGroupePersonnes from "@/views/modal/modalGroupePersonnes.vue";
export default {
  components: {
    BarreNavigation,
    modalGroupePersonnes,
    resumeChoix,
  },
  data() {
    return {
      modalActive: null,
    };
  },
  methods: {
    choisirPopulation(item) {
      this.rechercheInput = "";
      this.list_geo = [];
      this.$store.commit("choisirPopulation", item);
      this.modalActive = "groupe";
    },
  },
};
</script>

<style scoped>
.btn-disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5 !important;
}

.btn-disabled:hover {
  color: #fff;
  background: grey !important;
  border-color: #007bff;
}
</style>
