<template>
  <div class="bandeau-filtres d-flex flex-column w-100 justify-content-around">
    <div
      id="bandeau-fermer"
      v-if="this.bandeauOuvrir"
      @click="
        this.bandeauOuvrir = !this.bandeauOuvrir;
        console.log(this.bandeauOuvrir);
      "
    >
      <button type="button" class="">
        <span class="mr-2" style="margin-top: -3px"
          ><img
            alt=""
            src="../assets/img/fleches/fleche-bouton-bas.svg"
            width="16" /></span
        >Masquer les résultats
      </button>
    </div>
    <div
      id="bandeau-fermer"
      v-if="!this.bandeauOuvrir"
      @click="
        this.bandeauOuvrir = !this.bandeauOuvrir;
        console.log(this.bandeauOuvrir);
      "
    >
      <button type="button" class="">
        <span class="mr-2" style="margin-top: -3px"
          ><img
            alt=""
            src="../assets/img/fleches/fleche-haut-blanc.svg"
            width="16" /></span
        >Afficher les résultats
      </button>
    </div>
    <div id="bandeau-filtres" v-if="this.bandeauOuvrir">
      <div class="d-flex flex-row justify-content-around">
        <div class="ligne-resultats w-100" id="" style="cursor: pointer">
          <!-- <div class="titre-prereglage w-100"><span class="icon-ico_navigation_resultats icon vert-clair mr-2"></span>Résultats</div>-->
          <div class="filtres">
            <button class="affiner-param" href="">
              <a href="/resultats-pour-lalimentation-relocalisee">
                <div class="prereglage">
                  <div class="result-type">
                    <span
                      class="icon-ico_navigation_surface icon vert-clair"
                    ></span>
                  </div>
                  <div class="result-chiffres">
                    <span><strong>Surfaces : </strong></span
                    ><span id="surface5"
                      >{{ AfficherEntier(surfaceAMobiliser) }} ha</span
                    >
                  </div>
                </div>
              </a>
            </button>
            <button class="affiner-param" href="">
              <a href="/repartition-des-produits-relocalises">
                <div class="prereglage">
                  <div class="result-type">
                    <span class="icon-chart icon vert-clair"></span>
                  </div>
                  <div class="result-chiffres">
                    <span><strong>Potentiel nourricier : </strong></span
                    ><span
                      ><span id="potentiel3">{{ potentielNourricier }}</span
                      >&nbsp;%</span
                    >
                  </div>
                </div>
              </a>
            </button>
            <button class="affiner-param">
              <a href="/emplois-crees-par-la-relocalisation">
                <div class="prereglage">
                  <div class="result-type">
                    <span
                      class="icon-ico_navigation_emploi icon vert-clair"
                    ></span>
                  </div>
                  <div class="result-chiffres">
                    <span><strong>Emplois : </strong></span
                    ><span id="emplois3">{{
                      AfficherEntier(emploisAMobiliser)
                    }}</span>
                  </div>
                </div>
              </a>
            </button>
            <button class="affiner-param">
              <a href="/impacts-ecologiques-de-la-relocalisation">
                <div class="prereglage">
                  <div class="result-type">
                    <span
                      class="icon-ico_navigation_impacts icon vert-clair"
                    ></span>
                  </div>
                  <div class="result-chiffres">
                    <span><strong>Impacts : </strong></span
                    ><span class="d-inline"
                      ><span id="gaz_effet_serre">
                        {{
                          AfficherEntierAvecSigne(
                            pctDifferenceEmissionKGCo2 * 100
                          )
                        }}</span
                      ><span> % </span></span
                    ><span>émissions CO<sub>2</sub> / ha</span>
                  </div>
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  FormatterPourcentage,
  AfficherEntier,
  AfficherEntierAvecSigne,
} from "@/plugins/utils";
export default {
  name: "BandeauResultat",
  data() {
    return {
      bandeauOuvrir: true,
    };
  },
  methods: { FormatterPourcentage, AfficherEntier, AfficherEntierAvecSigne },
  computed: {
    surfaceAMobiliser() {
      return this.$store.state.resultatSimulation.surfaceAMobiliser;
    },
    potentielNourricier() {
      return this.$store.state.resultatSimulation.potentielNourricier;
    },
    emploisAMobiliser() {
      return this.$store.state.resultatSimulation.emploisAMobiliser;
    },
    pctDifferenceEmissionKGCo2() {
      return this.$store.state.resultatSimulation.pctDifferenceEmissionKGCo2;
    },
  },
};
</script>

<style>
#bandeau-ouvrir {
  display: block;
}
</style>
