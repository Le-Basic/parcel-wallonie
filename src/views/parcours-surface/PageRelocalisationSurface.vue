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
              <select id="inputState" class="custom-select">
                <option selected="" value="hectares">en hectares</option>
                <option value="m2">en m2</option>
              </select>
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
                  ><span class="titre-result">Paris</span>
                </div>
                <div class="compare-egale">=</div>
                <div class="result-chiffres d-inline-flex">
                  <div class="nbr-ha">10 540</div>
                </div>
              </div>
            </div>
            <div class="div-continuer animated fadeInUp delay-1-5s">
              <router-link to="/2-choix-du-territoire" id="suite"
                ><button type="button" class="btn btn-principal">
                  Continuer
                </button></router-link
              >
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
    };
  },
  components: {
    BarreNavigation,
  },
  watch: {
    surface: function (surface) {
      this.$store.dispatch("actionModifierSurfacesMobilisables", surface);
    },
  },
};
</script>
