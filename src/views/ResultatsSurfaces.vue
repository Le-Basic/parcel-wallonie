<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        :active="2"
        @montrer-modal-affinage="montrerModalAffiner"
      />
      <div
        id="section0"
        class="section centrervh"
        style="width: 100%"
      >
        <div class="container">
          <h1 class="animated fadeInUp fast h1-result mb-1">
            Quelles sont les surfaces agricoles nécessaires et disponibles pour
            notre alimentation ?
          </h1>

          <resumeChoix />
          <div
            id="navigation-surface"
            class="row justify-content-center"
          >
            <div
              id="global"
              class="col-auto"
            >
              <div
                id="global"
                :class="{
                  'card-surface': true,
                  'card-active': cardSurfaceActive == 'global',
                }"
                @click="cardSurfaceActive = 'global'"
              >
                <div class="m-auto">
                  <div class="icon icon-ico_navigation_surface" />
                  vue globale
                </div>
              </div>
            </div>

            <div
              id="product"
              class="col-auto"
            >
              <div
                id="product"
                :class="{
                  'card-surface': true,
                  'card-active': cardSurfaceActive == 'product',
                }"
                @click="cardSurfaceActive = 'product'"
              >
                <div class="m-auto">
                  <div class="icon icon-vue-produits" />
                  vue produits
                </div>
              </div>
            </div>
            <div
              id="landscape"
              class="col-auto"
            >
              <div
                id="landscape"
                :class="{
                  'card-surface': true,
                  'card-active': cardSurfaceActive == 'landscape',
                }"
                @click="cardSurfaceActive = 'landscape'"
              >
                <div class="m-auto">
                  <div class="icon icon-vue-paysage" />

                  vue paysage
                </div>
              </div>
            </div>
          </div>
          <div
            id="globalView"
            :class="{
              containerSurface: true,
              'non-active': !(cardSurfaceActive == 'global'),
              active: cardSurfaceActive == 'global',
            }"
          >
            <SurfaceGlobal @next-step="changeCarte" />
          </div>
          <div
            id="productView"
            :class="{
              containerSurface: true,
              'non-active': !(cardSurfaceActive == 'product'),
              active: cardSurfaceActive == 'product',
            }"
          >
            <SurfaceProduits
              v-if="cardSurfaceActive == 'product'"
              :class="{
                containerSurface: true,
                'non-active': !(cardSurfaceActive == 'product'),
                active: cardSurfaceActive == 'product',
              }"
              @next-step="changeCarte"
            />
          </div>
          <div
            id="landscapeView"
            :class="{
              containerSurface: true,
              'non-active': !(cardSurfaceActive == 'landscape'),
              active: cardSurfaceActive == 'landscape',
            }"
          >
            <SurfacePaysage
              :class="{
                containerSurface: true,
                'non-active': !(cardSurfaceActive == 'landscape'),
                active: cardSurfaceActive == 'landscape',
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <nav
      id="asy-sidebar"
      :class="montrerClasse"
    >
      <modal-affiner-choix @fermer-modal-affiner="fermerModal" />
    </nav>
  </div>
  <!-- <?php include '../partials/scripts-footer.php'; ?> -->
</template>

<script>
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";
import ModalAffinerChoix from "./modal/modalAffinerChoix.vue";
import resumeChoix from "./modal/resumeChoix.vue";
import SurfaceGlobal from "./composantsSurface/SurfaceGlobal.vue";
import SurfacePaysage from "./composantsSurface/SurfacePaysage.vue";
import SurfaceProduits from "./composantsSurface/SurfaceProduits.vue";

export default {
  components: {
    BarreNavigation,
    ModalAffinerChoix,
    resumeChoix,
    SurfaceGlobal,
    SurfacePaysage,
    SurfaceProduits,
  },
  data() {
    return {
      cardSurfaceActive: "global",
      montrerClasse: "",
    };
  },
  methods: {
    changeCarte(hash) {
      console.log(hash);
      this.cardSurfaceActive = hash;
    },
    montrerModalAffiner() {
      this.montrerClasse = "show";
      console.log("montrerModalAffinage");
    },
    fermerModal() {
      this.montrerClasse = "";
    },
  },
};
</script>

<style scoped>
.is-active {
  display: block !important;
  visibility: visible !important;
}

.card-active {
  background-color: #91c423;
  color: white;
}

.non-active {
  display: none !important;
  visibility: hidden !important;
  overflow: hidden;
}
.show {
  margin-right: 0px !important;
  display: block !important;
  padding: 0px !important;
  opacity: 1 !important;
}
</style>
