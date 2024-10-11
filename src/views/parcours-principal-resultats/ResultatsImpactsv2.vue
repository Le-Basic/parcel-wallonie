<template>
  <div class="asy-wrapper" style="flex-direction: row">
    <div>
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="4"
      />

      <div class="content">
        <ModalComposant
          :modalId="modalActive"
          dossierModal="modalImpacts"
          v-if="modalActive"
          @fermerModal="fermerModal"
        ></ModalComposant>
        <div class="section centrervh" id="section0">
          <div class="container">
            <h1 class="animated fadeInUp fast h1-result">
              Quels sont les impacts écologiques associés à mes choix
              d’alimentation ?
            </h1>
            <div class="ss-titre-impacts row">
              <resumeChoix />
              <section class="titre-comparaison-matieres-premieres">
                <section class="titre-visualisation">
                  <p class="text-h2" style="position: sticky">
                    Besoins alimentaires actuels
                  </p>
                  <p class="text-bleu text-center">
                    Tonnes de matière première nécessaire pour nourrir la
                    population
                  </p>
                </section>
                <section class="titre-visualisation">
                  <p class="text-h2" style="position: sticky">
                    Besoins alimentaires avec les paramètres choisis
                  </p>
                  <p class="text-bleu text-center">
                    {{ phraseSousTitreConsommationSimulation }}
                  </p>
                </section>
              </section>
              <section class="comparaison-matieres-premieres">
                <vizConsommationVerticalReference :maxXaxis="maxConsommation" />
                <div style="margin: auto">
                  <svg
                    height="220"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="0,10 50,100 0,200" style="fill: #f4f4e2" />
                  </svg>
                </div>

                <vizConsommationVerticalSimulation
                  :maxXaxis="maxConsommation"
                />
              </section>
              <div class="accordion ml-auto mr-auto" id="accordeon-Impact">
                <!--end heading accordeon-->
                <div
                  id="collapseImpact"
                  class="collapse"
                  aria-labelledby="headingImpact"
                  data-parent="#accordeon-Impact"
                >
                  <div class="d-flex flex-wrap">
                    <div class="col-md-6 col-12 impacts-cle d-flex order-1">
                      <div
                        class="puce-number d-flex align-items-center justify-content-center"
                      >
                        1
                      </div>
                      <div class="puce-text">
                        <strong
                          >Les impacts écologiques varient en fonction des choix
                          de changement de régime alimentaire, de part en bio ou
                          de réduction des pertes et gaspillage</strong
                        >. Les effets de la relocalisation ne peuvent pas encore
                        être calculés au vu des données existantes.
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-12 impacts-cle d-flex order-2 order-md-3"
                    >
                      <div
                        class="puce-number d-flex align-items-center justify-content-center"
                      >
                        2
                      </div>
                      <div class="puce-text">
                        <strong
                          >Les impacts sont exprimés en pourcentage par rapport
                          à une situation de relocalisation de l’alimentation
                          sans changement de la part en bio</strong
                        >, ni du régime alimentaire, ni des réductions de pertes
                        et gaspillage (le tiret indique qu’aucun n’impact n’a pu
                        être calculé) ;
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-12 impacts-cle d-flex order-3 order-md-5"
                    >
                      <div
                        class="puce-number d-flex align-items-center justify-content-center"
                      >
                        3
                      </div>
                      <div class="puce-text">
                        Par rapport à cette situation, le changement de la part
                        en bio et du régime alimentaire peut soit :
                        <ul>
                          <li>
                            <strong
                              >Réduire les impacts, ce qui est positif :</strong
                            >
                            flèche verte vers le bas et pourcentage négatif ;
                          </li>
                          <li>
                            <strong
                              >Augmenter les impacts, ce qui est négatif
                              :</strong
                            >
                            flèche rouge vers le haut et pourcentage positif ;
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-12 impacts-cle d-flex order-4 order-md-2"
                    >
                      <div
                        class="puce-number d-flex align-items-center justify-content-center"
                      >
                        4
                      </div>
                      <div class="puce-text">
                        <strong
                          >Cette page donne des ordres de grandeurs moyens, à
                          l’échelle nationale</strong
                        >, qui ne reflètent pas les spécificités locales ;
                      </div>
                    </div>
                    <div
                      class="col-md-6 col-12 impacts-cle d-flex order-5 order-md-4"
                    >
                      <div
                        class="puce-number d-flex align-items-center justify-content-center"
                      >
                        5
                      </div>
                      <div class="puce-text">
                        <strong
                          >Les indicateurs peuvent parfois être exprimés par
                          hectare ou par personne</strong
                        >. Par défaut, ils sont présentés par hectare lorsque
                        les deux unités sont possibles. L’estimation « par
                        personne », quand elle existe, est visible en cliquant
                        sur l’indicateur.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end accordeon-->
              <div class="mt-5 mb-3">
                <div class="repartition row">
                  <section
                    v-for="categorie in CATEGORIES_IMPACT"
                    :key="categorie.id"
                  >
                    <div class="col-12 cadre-impacts cadre-categorie">
                      <div class="impact-titre" :class="categorie.couleur">
                        <span :class="categorie.icon"></span>
                        {{ categorie.libelle }}
                      </div>
                      <div
                        class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                        v-for="impact in categorie.impacts"
                        v-bind:key="impact.id"
                        style="cursor: pointer"
                        @click="ouvrirModal(impact.modal, impact.dossierModal)"
                      >
                        <div class="impact-item2 col-sm-2 titre-impact">
                          <div class="impact-graph">
                            <span :class="impact.icon"></span>
                          </div>
                          <div class="impact-nom">
                            {{ impact.libelle }}
                          </div>
                        </div>
                        <div
                          class="impact-item2 col-sm-8 d-flex justify-content-around align-items-center"
                        >
                          <div class="cadre-impact">
                            <span class="impact-result texte-droite"
                              ><p
                                class="texte-data texte-droite"
                                v-html="impact.titreSituationReference"
                              ></p>
                              {{ impact.sousTitreSituationReference }}
                            </span>
                          </div>
                          <div class="cadre-impact">
                            <span class="impact-result texte-gauche"
                              ><p
                                class="texte-data texte-gauche vert-clair"
                                v-html="impact.titreSimulation"
                              ></p>
                              {{ impact.sousTitreSimulation }}
                            </span>
                          </div>
                        </div>
                        <div
                          class="col-sm-2 result-plus d-flex flex-column justify-content-center text-center"
                          @click="
                            ouvrirModal(impact.modal, impact.dossierModal)
                          "
                        >
                          <span class="icon-ico_fleche_detail_gros icon"></span
                          ><span class="explain">Explications</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  <!-- ----------------->

                  <!-- ----------------->
                </div>
                <!--end repartition-->
              </div>
              <!--end mt-5-->
              <div class="w-100 div-continuer mb-big text-center">
                <router-link to="/agir-pour-une-relocalisation-durable"
                  ><button type="button" class="btn btn-principal mt-5">
                    Agir
                  </button></router-link
                >
              </div>
            </div>
            <!--end ss-titre-impacts-->
          </div>
          <!--end container-->
        </div>
        <!--end section-->
      </div>
      <!--end content-->
    </div>
    <!--asy-wrapper-->
    <div
      class="modal fade"
      id="modal-fruits"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content modal-repart-cat-detail">
          <div class="modal-header d-flex align-items-center">
            <div>
              <span class="icon-ico_CATEGORIES_fruits icon fruits"></span>
            </div>
            <div class="d-flex flex-column">
              <div class="titre-categorie">Fruits</div>
              <div class="hectares">10 436 hectares</div>
            </div>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="icon-ico_fermer icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <nav id="asy-sidebar" :class="montrerClasse">
      <modal-affiner-choix @fermerModalAffiner="fermerModalAffiner" />
    </nav>
    <BandeauResultat />
  </div>
</template>

<script setup>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoix from "@/views/modal/resumeChoix.vue";
import ModalAffinerChoix from "@/views/modal/modalAffinerChoix.vue";
import ModalComposant from "@/views/modal/ModalComposant.vue";
import BandeauResultat from "@/components/BandeauResultat.vue";
import vizConsommationVerticalSimulation from "@/components/visualisation/vizConsommationVerticalSimulation.vue";
import vizConsommationVerticalReference from "@/components/visualisation/vizConsommationVerticalReference.vue";
import {
  AfficherEntier,
  AfficherEntierAvecSigne,
  trouverChiffre,
} from "@/plugins/utils";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE } from "@/config/categorieProduitsPotentielNourricier";

const store = useStore(); // Access Vuex store

const maxConsommation = trouverChiffre(
  store.state.resultatReference.surfacesEmploisAMobiliser,
  CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LAIT.libelle,
  "consommation_kg",
  "libelle_parcel_niveau_2"
);

const donneesImpacts = computed(() => {
  return {
    ges: {
      donneesReference: store.state.resultatReference.emission_kg_co2e,
      donneesSimulation: store.state.resultatSimulation.emission_kg_co2e,
      differenceSimulationReferencePct:
        (store.state.resultatSimulation.emission_kg_co2e * 100) /
          store.state.resultatReference.emission_kg_co2e -
        100,
      differenceSimulationReference:
        store.state.resultatSimulation.emission_kg_co2e -
        store.state.resultatReference.emission_kg_co2e,
    },
    empreinte_eau_bleue: {
      donneesReference: store.state.resultatReference.empreinte_eau_bleue_m3,
      donneesSimulation: store.state.resultatSimulation.empreinte_eau_bleue_m3,
      differenceSimulationReferencePct:
        (store.state.resultatSimulation.empreinte_eau_bleue_m3 * 100) /
          store.state.resultatReference.empreinte_eau_bleue_m3 -
        100,
    },
    abondances_especes: {
      donneesReference: store.state.resultatReference.abondances_especes,
      donneesSimulation: store.state.resultatSimulation.abondances_especes,
      differenceSimulationReferencePct:
        (store.state.resultatSimulation.abondances_especes * 100) /
          store.state.resultatReference.abondances_especes -
        100,
    },
    surfaces_ha_soja_importes: {
      donneesReference: store.state.resultatReference.surfaces_ha_soja_importes,
      donneesSimulation:
        store.state.resultatSimulation.surfaces_ha_soja_importes,
      differenceSimulationReferencePct:
        (store.state.resultatSimulation.surfaces_ha_soja_importes * 100) /
          store.state.resultatReference.surfaces_ha_soja_importes -
        100,
      differenceSimulationReference: AfficherEntier(
        store.state.resultatSimulation.surfaces_ha_soja_importes -
          store.state.resultatReference.surfaces_ha_soja_importes
      ),
      donneesReferencePiscineOlympique: AfficherEntier(
        store.state.resultatReference.surfaces_ha_soja_importes / 0.125
      ),
    },
    richesses_des_sols: {
      donneesReference: store.state.resultatReference.richesses_des_sols,
      donneesSimulation: store.state.resultatSimulation.richesses_des_sols,
      differenceSimulationReferencePct:
        (store.state.resultatSimulation.richesses_des_sols * 100) /
          store.state.resultatReference.richesses_des_sols -
        100,
    },
  };
});
const CATEGORIES_IMPACT = computed(() => {
  return [
    {
      id: "climat",
      libelle: "Impact sur le climat",
      icon: "icon-impact-climat ico-medium cereales",
      couleur: "cereales",
      impacts: [
        {
          id: "ges",
          libelle: "Emissions de gaz à effet de serre",
          icon: "icon-impact-co2 ico-medium ico-impact",
          titreSituationReference:
            AfficherEntier(donneesImpacts?.value.ges.donneesReference / 1000) +
            " tonnes de GES emise par an",
          sousTitreSituationReference:
            "Uniquement pour la production alimentaire, soit 8% des émissions nationales",
          titreSimulation:
            AfficherEntierAvecSigne(
              donneesImpacts?.value.ges.differenceSimulationReferencePct
            ) + '<span class="texte-unite">%</span>',
          sousTitreSimulation: `soit  ${AfficherEntier(
            donneesImpacts?.value.ges.differenceSimulationReference / 1000
          )} de tonnes CO2e`,
          couleurTitreSimulation: "vert-clair",
          modal: "DetailsGes",
          dossierModal: "modalImpacts",
        },
      ],
    },
    {
      id: "biodiversite",
      libelle: "Impact sur la biodiversité",
      icon: "icon-impact-biodiversite ico-medium climat2",
      couleur: "legumes",
      impacts: [
        {
          id: "especes",
          libelle: "Destruction des espèces",
          icon: "icon-impact-especes ico-medium ico-impact",
          titreSituationReference: "Une biodiversité fortement dégradée",
          sousTitreSituationReference:
            "45% des espèces d'oiseaux ont disparu en Europe depuis 1970",
          titreSimulation:
            AfficherEntierAvecSigne(
              donneesImpacts?.value.abondances_especes
                .differenceSimulationReferencePct
            ) + '<span class="texte-unite">%</span>',
          sousTitreSimulation:
            "Les espèces de pollinisateurs, papillons, vers de terre et gastéropodes sont 45% plus abondantes par hectare de culture.",
          couleurTitreSimulation: "vert-clair",
          modal: "DetailsAbondanceEspeces",
        },
        {
          id: "soja",
          libelle: "Déforestation importée",
          icon: "icon-impact-deforest ico-medium ico-impact",
          titreSituationReference: `${AfficherEntier(
            donneesImpacts?.value.surfaces_ha_soja_importes.donneesReference
          )} ha de soja sont nécessaires`,
          sousTitreSituationReference: `chaque année pour nourrir le bétail que l'on consomme. Soit l'équivalent de ${donneesImpacts?.value.surfaces_ha_soja_importes.donneesReferencePiscineOlympique} piscines olympiques`,
          titreSimulation: AfficherEntierAvecSigne(
            donneesImpacts?.value.surfaces_ha_soja_importes
              .differenceSimulationReferencePct +
              '<span class="texte-unite">%</span>'
          ),
          sousTitreSimulation: `Soit ${Math.abs(
            donneesImpacts?.value.surfaces_ha_soja_importes
              .differenceSimulationReference
          )} hectares protégés de la déforestation`,
          couleurTitreSimulation: "vert-clair",
          modal: "DetailsSojaImporte",
        },
      ],
    },
    {
      id: "eau",
      libelle: "Impact sur la ressource eau",
      icon: "icon-impact-eau ico-medium climat2",
      couleur: "eau",
      impacts: [
        {
          id: "consommation-eau",
          libelle: "Consommation d'eau",
          icon: "icon-impact-eau-conso ico-medium ico-impact",
          titreSituationReference: `${AfficherEntier(
            donneesImpacts?.value.empreinte_eau_bleue.donneesReference
          )} m<sup>3</sup> eau pour l'irrigation (rivières et nappes)`,
          titreSimulation:
            Math.abs(
              AfficherEntier(
                donneesImpacts?.value.empreinte_eau_bleue
                  .differenceSimulationReferencePct
              )
            ) + " m<sup>3</sup> d'eau économisés chaque année",
          sousTitreSimulation: "",
          couleurTitreSimulation: "vert-clair",
          modal: "DetailsEmpreinteEau",
        },
      ],
    },
    {
      id: "sols",
      libelle: "Impact sur les sols",
      icon: "icon-impact-sol ico-medium climat2",
      couleur: "viande",
      impacts: [
        {
          id: "pauvrete-sols",
          libelle: "Pauvreté des sols",
          icon: "icon-impact-solqualit ico-medium ico-impact",
          titreSituationReference: "Des sols dont l'état est très dégradé",
          sousTitreSituationReference: "Soit 5%",
          titreSimulation:
            AfficherEntierAvecSigne(
              donneesImpacts?.value.richesses_des_sols
                .differenceSimulationReferencePct
            ) + "<span class='texte-unite'>%</span>",
          sousTitreSimulation:
            "de manière organique supplémentaire dans le sol",
          couleurTitreSimulation: "vert-clair",
          modal: "DetailsRichesseSols",
        },
      ],
    },
  ];
});

const montrerClasse = ref("");
const modalActive = ref(null);
const dossierModalActive = ref(null);

const montrerModalAffiner = () => {
  montrerClasse.value = "show";
};

const fermerModalAffiner = () => {
  montrerClasse.value = "";
};

const ouvrirModal = (id, dossierModal) => {
  modalActive.value = id;
  dossierModalActive.value = dossierModal;
  enleverScroll();
};
const fermerModal = () => {
  modalActive.value = null;
  dossierModalActive.value = null;
  ajouterScroll();
};

// Computed properties
const phraseSousTitreConsommationSimulation = computed(() => {
  return `${store.state.part_bio}% de bio, ${store.state.regime_alimentaire["libelle"]}, -${store.state.partpertes} % de gaspillage`;
});

const enleverScroll = () => {
  document.body.style.overflow = "hidden";
};
const ajouterScroll = () => {
  console.log("ajouterScroll");
  document.body.style.overflow = "auto";
};
</script>

<style scoped>
.titre-comparaison-matieres-premieres {
  display: flex;
  flex-direction: row;
  width: 100%;
  position: sticky;
  gap: 32px;
  top: 0px;
  background-color: white;
  z-index: 100;
}
.comparaison-matieres-premieres {
  display: flex;
  flex-direction: row;
  width: 40%;
  gap: 32px;
  flex-basis: 100%;
}

.titre-visualisation {
  border-bottom: 1px solid var(--bleu);
  flex-grow: 1;
  width: 50%;
}

.show {
  margin-right: 0px !important;
  display: block !important;
  padding: 0px !important;
  opacity: 1 !important;
}

.texte-legende {
  font-size: 16px;
  font-weight: 300;
  padding-left: 8px;
}

.titre-impact,
.impact-result,
.texte-droite {
  padding: 32px 32px !important;
}
</style>
