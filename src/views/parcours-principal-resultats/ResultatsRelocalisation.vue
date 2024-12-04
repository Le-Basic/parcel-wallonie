<template>
  <div class="asy-wrapper">
    <div class="content">
      <Navigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="1"
      ></Navigation>
      <div class="section centrervh surfaces-container" id="section0">
        <div class="container">
          <div class="titre-page animated fadeInUp">
            <div class="text-h1" style="margin-bottom: 30px">Mes choix</div>
          </div>
          <resumeChoix></resumeChoix>

          <div class="" id="asy-sidebarCollapse4"></div>

          <div class="text-h2 animated fadeInDown delay-05s">
            Cela veut dire quoi sur mon territoire ?
          </div>
          <pre>{{ this.$store.state.resultatSimulation }}</pre>
          <div class="resultats-generaux row">
            <div
              class="col-12 col-sm-12 col-lg-6 mb-2"
              style="padding-left: 6px; padding-right: 6px"
            >
              <div
                class="h-100 mb-0 cadre-resultat animated cadre-btn fadeIn delay-05s"
                onclick="location.href='/repartition-des-produits-relocalises';"
                style="cursor: pointer"
              >
                <div class="row mb-sm-3 w-100">
                  <div class="col" style="border-right: 1px solid #bdc660">
                    <div class="result-type">
                      <span class="icon-ico_navigation_surface icon"></span
                      ><span class="titre-result">
                        <h2>Surfaces agricoles à mobiliser</h2>
                      </span>
                    </div>
                    <div class="result-chiffres text-center">
                      <div
                        class="nbr-ha animated flipInX delay-1s odometer"
                        id="surface6"
                      >
                        {{ AfficherEntier(surfaceAMobiliser) }}
                      </div>
                      <div class="hectares">hectares</div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="result-type">
                      <span class="icon-ico_navigation_surface icon"></span
                      ><span class="titre-result">
                        <h2>Potentiel nourricier</h2>
                      </span>
                    </div>
                    <div class="result-chiffres text-center">
                      <span
                        class="nbr-ha animated flipInY delay-1s odometer"
                        id="potentiel0"
                        v-if="potentielNourricier"
                        >{{ potentielNourricier }}</span
                      >
                      <span class="hectares ml-1">%</span>
                    </div>
                  </div>
                </div>
                <div class="result-plus mb-auto mb-sm-0 mt-auto">
                  <span class="icon-ico_fleche_detail_gros icon"></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg mb-2">
              <div
                class="h-100 mb-0 cadre-resultat animated cadre-btn fadeIn delay-1-5s"
                onclick="location.href='/emplois-crees-par-la-relocalisation';"
                style="cursor: pointer"
              >
                <div class="result-type">
                  <span class="icon-ico_navigation_emploi icon"></span
                  ><span class="titre-result"
                    >Emplois agricoles à mobiliser</span
                  >
                </div>
                <div class="result-chiffres">
                  <div
                    class="nbr-ha animated flipInY delay-1-5s odometer"
                    id="emplois4"
                    style="float: none"
                  >
                    {{ Math.round(emploisAMobiliser) }}
                  </div>
                  <div class="hectares">
                    emplois <span id="emplois_inf_1"></span>
                  </div>
                </div>
                <div class="result-plus mt-auto mb-2">
                  <span class="icon-ico_fleche_detail_gros icon"></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg mb-2" id="result-impacts">
              <div
                class="h-100 mb-0 cadre-resultat animated cadre-btn fadeIn delay-2s"
                onclick="location.href='/impacts-ecologiques-de-la-relocalisation';"
                style="cursor: pointer"
              >
                <div class="result-type">
                  <span class="icon-ico_navigation_impacts icon"></span
                  ><span class="titre-result">Impacts écologiques</span>
                </div>
                <div class="liste-impacts d-flex">
                  <div class="result-chiffres d-flex align-items-center">
                    <div class="percent-impacts d-flex align-items-center">
                      <div
                        class="nbr-ha animated flipInX delay-2s odometer2"
                        id="gaz_effet_serre3"
                      >
                        {{
                          AfficherEntierAvecSigne(
                            Math.round(pctDifferenceEmissionKGCo2 * 100)
                          )
                        }}
                      </div>
                      <span class="impact-pourcent">%</span>
                    </div>
                    <div
                      class="hectares mb-3"
                      style="
                        font-size: 13px;
                        line-height: 1.1;
                        max-width: 130px;
                      "
                    >
                      émissions de CO<sub>2</sub> / conso. moyenne
                    </div>
                  </div>
                  <div>
                    <ul class="">
                      <li class="selected"><a href="#">Climat</a></li>
                      <li><a href="#">Biodiversité</a></li>
                      <li><a href="#">Eau</a></li>
                      <li><a href="#">Sols</a></li>
                    </ul>
                  </div>
                </div>
                <div class="result-plus mt-auto mb-2">
                  <span class="icon-ico_fleche_detail_gros icon"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="ligne-bouton">
            <bouton
              class="btn btn-secondaire mt-5"
              @click="modalActive = 'ModalPotentielNourricier'"
            >
              C'est quoi le potentiel nourricier ?
            </bouton>
            <router-link
              class="btn btn-principal mt-5"
              to="/repartition-des-produits-relocalises#global"
            >
              Explorer en détail les surfaces
            </router-link>
          </div>
          <div>
            <div class="note animated fadeInDown delay-2s"></div>
            <p>
              <sup>*</sup>PARCEL-Wallonie estime les impacts écologiques en
              fonction de vos choix de changement de régime alimentaire et de
              part en bio. Si vous avez seulement choisi de relocaliser
              l'alimentation, PARCEL-Wallonie ne calcule pas d'impacts
              écologiques en raison de la limite des données existantes.
            </p>

            <p>
              Les résultats de PARCEL-Wallonie sont calculés selon les choix de
              consommation, sans prendre en compte l'ensemble des contraintes
              agronomiques, notamment celle du rebouclage du cycle de l'azote.
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav id="asy-sidebar" :class="montrerClasse">
      <modal-affiner-choix @fermerModalAffiner="fermerModal" />
    </nav>
    <ModalComposant
      :modalId="this.modalActive"
      v-if="this.modalActive"
      @fermerModal="fermerModalPotentiel"
    ></ModalComposant>
  </div>
</template>

<script>
import Navigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoix from "@/views/modal/resumeChoix.vue";
import ModalAffinerChoix from "@/views/modal/modalAffinerChoix.vue";
import ModalComposant from "@/views/modal/ModalComposant.vue";
import { AfficherEntierAvecSigne, AfficherEntier } from "@/plugins/utils";
export default {
  components: { resumeChoix, Navigation, ModalAffinerChoix, ModalComposant },
  data() {
    return {
      donnees: {},
      montrerClasse: "",
      modalActive: "",
    };
  },
  methods: {
    montrerModalAffiner() {
      this.montrerClasse = "show";
    },
    fermerModal() {
      this.montrerClasse = "";
    },
    fermerModalPotentiel() {
      this.modalActive = "";
    },
    AfficherEntierAvecSigne,
    AfficherEntier,
  },
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
    partpertes() {
      return this.$store.state.partpertes;
    },
  },
  // TODO: REFACTO DU GET IMPACT
};
</script>

<style scoped>
.show {
  margin-right: 0px !important;
  display: block !important;
  padding: 0px !important;
  opacity: 1 !important;
}

.btn {
  line-height: 1;
  padding: 16px 1rem !important;
  height: auto !important;
  padding-right: 3rem !important;
  padding-left: 1.7rem !important;
  font-size: 16px !important;
}

.ligne-bouton {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.cadre-categorie {
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 20px 20px;
  gap: 16px;
}

.cadre-titre-categorie {
  flex-grow: 1;
  margin: auto;
}

.cadre-titre-categorie .hectares {
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #594231;
  letter-spacing: 0;
}
</style>
