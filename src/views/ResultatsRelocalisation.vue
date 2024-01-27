<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        :active="1"
        @montrer-modal-affinage="montrerModalAffiner"
      />
      <div
        id="section0"
        class="section centrervh surfaces-container"
      >
        <div class="container">
          <div class="titre-page animated fadeInUp">
            <div
              class="text-h1"
              style="margin-bottom: 30px"
            >
              Mes choix
            </div>
          </div>
          <resumeChoix />

          <div
            id="asy-sidebarCollapse4"
            class=""
          />

          <div class="text-h2 animated fadeInDown delay-05s">
            Estimation des effets associés :
          </div>
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
                  <div
                    class="col"
                    style="border-right: 1px solid #91c423"
                  >
                    <div class="result-type">
                      <span class="icon-ico_navigation_surface icon" /><span class="titre-result">
                        <h2>Surfaces agricoles à mobiliser</h2>
                      </span>
                    </div>
                    <div class="result-chiffres text-center">
                      <div
                        id="surface6"
                        class="nbr-ha animated flipInX delay-1s odometer"
                      >
                        {{
                          $store.state.resultatSimulation.surfaceAMobiliser
                        }}
                      </div>
                      <div class="hectares">
                        hectares
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="result-type">
                      <span class="icon-ico_navigation_surface icon" /><span class="titre-result">
                        <h2>Potentiel nourricier</h2>
                      </span>
                    </div>
                    <div class="result-chiffres text-center">
                      <span
                        v-if="potentiel_nourricier"
                        id="potentiel0"
                        class="nbr-ha animated flipInY delay-1s odometer"
                      >{{ potentiel_nourricier }}</span>
                      <span class="hectares ml-1">%</span>
                    </div>
                  </div>
                </div>
                <div class="result-plus mb-auto mb-sm-0 mt-auto">
                  <span class="icon-ico_fleche_detail_gros icon" />
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
                  <span class="icon-ico_navigation_emploi icon" /><span class="titre-result">Emplois agricoles à mobiliser</span>
                </div>
                <div class="result-chiffres">
                  <div
                    id="emplois4"
                    class="nbr-ha animated flipInY delay-1-5s odometer"
                    style="float: none"
                  >
                    -
                  </div>
                  <div class="hectares">
                    emplois <span id="emplois_inf_1" />
                  </div>
                </div>
                <div class="result-plus mt-auto mb-2">
                  <span class="icon-ico_fleche_detail_gros icon" />
                </div>
              </div>
            </div>
            <div
              id="result-impacts"
              class="col-sm-6 col-lg mb-2"
            >
              <div
                class="h-100 mb-0 cadre-resultat animated cadre-btn fadeIn delay-2s"
                onclick="location.href='/impacts-ecologiques-de-la-relocatisation';"
                style="cursor: pointer"
              >
                <div class="result-type">
                  <span class="icon-ico_navigation_impacts icon" /><span class="titre-result">Impacts écologiques</span>
                </div>
                <div class="liste-impacts d-flex">
                  <div class="result-chiffres d-flex align-items-center">
                    <div class="percent-impacts d-flex align-items-center">
                      <div
                        v-if="impacts.length > 0"
                        id="gaz_effet_serre3"
                        class="nbr-ha animated flipInX delay-2s odometer2"
                      >
                        {{
                          Math.round(
                            impacts.find(
                              (el) =>
                                el.ID_EcoImpact_Indicator == IDS_IMPACTS.GES
                            )["EcoImpact_Indicator_Value_Hectare"]
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
                      émissions de CO<sub>2</sub> par hectare
                    </div>
                  </div>
                  <div>
                    <ul class="">
                      <li class="selected">
                        <a href="#">Climat</a>
                      </li>
                      <li><a href="#">Biodiversité</a></li>
                      <li><a href="#">Eau</a></li>
                      <li><a href="#">Sols</a></li>
                    </ul>
                  </div>
                </div>
                <div class="result-plus mt-auto mb-2">
                  <span class="icon-ico_fleche_detail_gros icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="note animated fadeInDown delay-2s">
            <p>
              <sup>*</sup>PARCEL estime les impacts écologiques en fonction de
              vos choix de changement de régime alimentaire et de part en bio.
              Si vous avez seulement choisi de relocaliser l'alimentation,
              PARCEL ne calcule pas d'impacts écologiques en raison de la limite
              des données existantes.
            </p>

            <p>
              Les résultats de PARCEL sont calculés selon les choix de
              consommation, sans prendre en compte l'ensemble des contraintes
              agronomiques, notamment celle du rebouclage du cycle de l'azote.
            </p>
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
</template>

<script>
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";
import resumeChoix from "./modal/resumeChoix.vue";
import ModalAffinerChoix from "./modal/modalAffinerChoix.vue";
import { fetchSurfaceActuelle } from "@/plugins/getSurfacesNecessaires";

import { getImpacts } from "@/plugins/getImpacts";
import { IDS_IMPACTS } from "@/config/ImpactIds";

export default {
  components: { BarreNavigation, resumeChoix, ModalAffinerChoix },
  data() {
    return {
      donnees: {},
      // FIX surface_actuelle doit être aussi stockée dans le store et nulle part ailleurs
      surface_actuelle: 0,
      montrerClasse: "",
      impacts: [],
      IDS_IMPACTS,
    };
  },
  computed: {
    potentiel_nourricier() {
      return Math.round(
        (this.surface_actuelle["sau_ha"] * 100) /
          this.$store.state.resultatSimulation.surfaceAMobiliser
      );
    },
  },
  async mounted() {
    this.surface_actuelle = await fetchSurfaceActuelle();
    this.$store.dispatch(
      "actionChoisirRegimeAlimentaire",
      this.$store.state.regime_alimentaire
    );
    this.potentiel_nourricier = Math.round(
      (this.surface_actuelle["sau_ha"] * 100) /
        this.$store.state.resultatSimulation.surfaceAMobiliser
    );
    this.impacts = await getImpacts();
  },
  methods: {
    montrerModalAffiner() {
      this.montrerClasse = "show";
    },
    fermerModal() {
      this.montrerClasse = "";
    },
  },
};
</script>

<style scoped>
.show {
  margin-right: 0px !important;
  display: block !important;
  padding: 0px !important;
  opacity: 1 !important;
}
</style>
