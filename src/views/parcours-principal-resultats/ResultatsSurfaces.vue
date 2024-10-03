<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="2"
      />
      <div class="section centrervh" id="section0" style="width: 100%">
        <div class="container">
          <h1 class="animated fadeInUp fast h1-result mb-1">
            Quelles sont les surfaces agricoles nécessaires et disponibles pour
            notre alimentation ?
          </h1>

          <resumeChoix />
          <div id="navigation-surface" class="row justify-content-center">
            <div class="col-auto" id="global">
              <div
                :class="{
                  'card-surface': true,
                  'card-active': cardSurfaceActive == '#global',
                }"
                id="global"
                @click="changerVue('#global')"
              >
                <div class="m-auto">
                  <div class="icon icon-ico_navigation_surface"></div>
                  vue globale
                </div>
              </div>
            </div>

            <div class="col-auto" id="product">
              <div
                :class="{
                  'card-surface': true,
                  'card-active': cardSurfaceActive == '#produit',
                }"
                id="product"
                @click="changerVue('#produit')"
              >
                <div class="m-auto">
                  <div class="icon icon-vue-produits"></div>
                  vue produits
                </div>
              </div>
            </div>
            <div class="col-auto" id="landscape">
              <div
                :class="{
                  'card-surface': true,
                  'card-active': cardSurfaceActive == '#paysage',
                }"
                id="landscape"
                @click="changerVue('#paysage')"
              >
                <div class="m-auto">
                  <div class="icon icon-vue-paysage"></div>

                  vue paysage
                </div>
              </div>
            </div>
          </div>
          <div
            id="globalView"
            :class="{
              containerSurface: true,
              'non-active': !(cardSurfaceActive == '#global'),
              active: cardSurfaceActive == '#global',
            }"
          >
            <SurfaceGlobal @nextStep="changeCarte" />
          </div>
          <div
            id="productView"
            :class="{
              containerSurface: true,
              'non-active': !(cardSurfaceActive == '#produit'),
              active: cardSurfaceActive == '#produit',
            }"
          >
            <SurfaceProduits
              v-if="cardSurfaceActive == '#produit'"
              :class="{
                containerSurface: true,
                'non-active': !(cardSurfaceActive == '#produit'),
                active: cardSurfaceActive == '#produit',
              }"
              @nextStep="changeCarte"
              @ouvrirModal="enleverScroll"
              @fermerModal="ajouterScroll"
            />
          </div>
          <div
            id="landscapeView"
            :class="{
              containerSurface: true,
              'non-active': !(cardSurfaceActive == '#paysage'),
              active: cardSurfaceActive == '#paysage',
            }"
          >
            <SurfacePaysage
              :class="{
                containerSurface: true,
                'non-active': !(cardSurfaceActive == '#paysage'),
                active: cardSurfaceActive == '#paysage',
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <nav id="asy-sidebar" :class="montrerClasse">
      <modal-affiner-choix @fermerModalAffiner="fermerModalAffiner" />
    </nav>
  </div>
  <BandeauResultat />
</template>

<script>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import ModalAffinerChoix from "@/views/modal/modalAffinerChoix.vue";
import resumeChoix from "@/views/modal/resumeChoix.vue";
import SurfaceGlobal from "@/views/parcours-principal-resultats/composantsSurface/SurfaceGlobal.vue";
import SurfacePaysage from "@/views/parcours-principal-resultats/composantsSurface/SurfacePaysage.vue";
import SurfaceProduits from "@/views/parcours-principal-resultats/composantsSurface/SurfaceProduits.vue";
import BandeauResultat from "@/components/BandeauResultat.vue";
export default {
  components: {
    BandeauResultat,
    BarreNavigation,
    ModalAffinerChoix,
    resumeChoix,
    SurfaceGlobal,
    SurfacePaysage,
    SurfaceProduits,
  },
  data() {
    return {
      cardSurfaceActive: "#global",
      montrerClasse: "",
    };
  },
  beforeMount() {
    let hash = this.$router.currentRoute.value.hash;
    if (hash !== undefined) {
      console.log("hash", hash);
      this.cardSurfaceActive = hash;
    }
  },
  methods: {
    changeCarte(hash) {
      this.cardSurfaceActive = hash;
    },
    montrerModalAffiner() {
      this.montrerClasse = "show";
      console.log("montrerModalAffinage");
    },
    fermerModalAffiner() {
      this.montrerClasse = "";
    },
    enleverScroll() {
      document.body.style.overflow = "hidden";
    },
    ajouterScroll() {
      console.log("ajouterScroll");
      document.body.style.overflow = "auto";
    },
    changerVue(hash) {
      this.cardSurfaceActive = hash;
      this.$router.replace({ hash: hash });
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
