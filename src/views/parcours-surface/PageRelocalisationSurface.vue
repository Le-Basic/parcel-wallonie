<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="surface" active="1" />
      <div class="section centrervh" id="section0">
        <div class="container">
          <h1 class="animated fadeInUp fast">
            Renseignez la surface disponible
          </h1>
          <div class="intro">
            <p class="animated fadeInUp delay-05s">
              Pour commencer, renseignez la surface dont vous disposez pour
              relocaliser votre activité. La surface doit être supérieure à 10
              hectares
            </p>
            <div v-if="!isSurfaceValid" class="alert alert-danger">
              La surface doit être supérieure à 10 hectares
            </div>
            <div class=""></div>
            <div
              class="champ-recherche d-flex align-items-center animated fadeInUp delay-1s"
            >
              <span class="icon-ico_navigation_surface icon"></span>
              <input
                class="recherche"
                placeholder="Surface"
                aria-describedby="inputGroup-sizing-sm"
                id="choixsurface"
                v-model="surface"
              />
              <div>hectares</div>
            </div>
            <div
              class="resultats-comparatif cadre-resultat cadre-clair compare-ligne animated fadeInUp delay-1-5s"
            >
              <div class="cadre-simple align-items-center">
                <div class="result-type">
                  <span class="icon-echelle-terrain icon"></span
                  ><span class="titre-result">100 m2</span>
                </div>
                <div class="compare-egale">=</div>
                <div class="result-chiffres d-inline-flex">
                  <div class="nbr-ha">0,01</div>
                </div>
              </div>
              <div class="cadre-simple align-items-center">
                <div class="result-type">
                  <span class="icon-echelle-parking icon"></span
                  ><span class="titre-result">1 Place de parking</span>
                </div>
                <div class="compare-egale">=</div>
                <div class="result-chiffres d-inline-flex">
                  <div class="nbr-ha">0,001</div>
                </div>
              </div>
              <div class="cadre-simple align-items-center">
                <div class="result-type">
                  <span class="icon-echelle-foot icon"></span
                  ><span class="titre-result">1 terrain de foot</span>
                </div>
                <div class="compare-egale">=</div>
                <div class="result-chiffres d-inline-flex">
                  <div class="nbr-ha">0,73</div>
                </div>
              </div>
              <div class="cadre-simple align-items-center">
                <div class="result-type">
                  <span class="icon-echelle-paris icon"></span
                  ><span class="titre-result">Bruxelles</span>
                </div>
                <div class="compare-egale">=</div>
                <div class="result-chiffres d-inline-flex">
                  <div class="nbr-ha">16 138</div>
                </div>
              </div>
            </div>
            <div class="div-continuer animated fadeInUp delay-1-5s">
              <router-link
                to="/2-choix-du-territoire"
                id="suite"
                v-if="isSurfaceValid"
                ><button type="button" class="btn btn-principal">
                  Continuer
                </button></router-link
              >
              <button type="button" class="btn btn-principal" v-else>
                Continuer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav id="asy-sidebar" class=""></nav>
  </div>
</template>

<script>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";

export default {
  name: "PageRelocalisationSurface",
  data() {
    return {
      surface: this.$store.state.surfacesMobilisables,
      isSurfaceValid: undefined,
    };
  },
  components: {
    BarreNavigation,
  },
  watch: {
    surface: function (surface) {
      if (Number(surface) >= 10) {
        this.isSurfaceValid = true;
        this.$store.dispatch(
          "actionModifierSurfacesMobilisables",
          Number(surface)
        );
      } else {
        this.isSurfaceValid = false;
      }
    },
  },
};
</script>
