<template>
  <div>
    <div class="bloc-surface">
      <div class="intro"></div>
      <h3 class="intro">
        La vue paysage présente la répartition des surfaces agricoles selon les
        types de cultures et l'occupation du sol, par exemple, les hectares de
        céréales et de fourrages pour l’élevage sont ici séparés en céréales et
        cultures fourragères.
      </h3>
      <div
        class="cadre-resultat resultat-ha animated flipInX delay-05s bg-vert-clair"
      >
        <div class="d-inline-flex align-items-center">
          <div
            class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme surface_potentiel"
            id="surface_potentiel4"
          >
            {{
              AfficherEntier($store.state.resultatSimulation.surfaceAMobiliser)
            }}
          </div>
          <div class="hectares animated fadeIn delay-1-5s">
            hectares agricoles
          </div>
        </div>
      </div>
      <div class="map-content">
        sont théoriquement nécessaires pour satisfaire les besoins alimentaires
        de la population choisie
      </div>

      <div class="no-data no-data-viz3" v-if="false">
        Désolé, nous n'avons pas de données suffisantes pour afficher ce
        graphique
      </div>

      <div class="cadre-graphique mt-5">
        <div
          class="wrap-viz3 resultats-categories repartition graph"
          style="
            background-color: #fff;
            height: 100%;
            margin-top: 20px;
            min-height: 550px;
          "
        >
          <div stye="height: 250px; width: 250px">
            <RepartitionSurface :serieDonnees="repartitionSurfaceNecessaires" />
          </div>
        </div>
        <div class="wrap-viz3 resultats-categories repartition">
          <table
            summary="Resultats"
            id="PaysSpatCategoryresultsTable"
            class="auto-style1 w-100"
            border="1"
          >
            <thead></thead>
            <tbody>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie prairie animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-legumes"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span class="icon-prairie ico-medium prairie"></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col titre-categorie mb-0">
                        Prairie, estives, landes
                      </div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfaceNecessairePaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.PRAIRIES
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_paysage_actuel",
                              this.chiffreApresVirgule
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie fourrage animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-fruits"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span class="icon-fourragere ico-medium fourrage"></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">
                        Cultures fourragères
                      </div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfaceNecessairePaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.FOURRAGES
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_paysage_actuel",
                              this.chiffreApresVirgule
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie legumineuse animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-cereales"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span
                        class="icon-legumineuses ico-medium legumineuse"
                      ></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">Légumineuses</div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfaceNecessairePaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.LEGUMINEUSES
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_paysage_actuel",
                              this.chiffreApresVirgule
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie oleagineux animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-viande"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span
                        class="icon-oleagineux ico-medium oleagineux"
                      ></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">
                        Céréales, Oléagineux, protéagineux
                      </div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfaceNecessairePaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.CEREALES
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_paysage_actuel",
                              this.chiffreApresVirgule
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie pdt animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-viande"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span class="icon-cereales2 ico-medium pdt"></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">
                        Cultures industrielles alimentaires (pomme de terre,
                        betterave à sucre…)
                      </div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfaceNecessairePaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE
                                .CULTURES_INDUSTRIELLES_ALIMENTAIRES.libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_paysage_actuel",
                              this.chiffreApresVirgule
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie fruitssurface animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-viande"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span
                        class="icon-ico_CATEGORIES_fruits ico-medium fruitssurface"
                      ></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">Fruits</div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfaceNecessairePaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.FRUITS.libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_paysage_actuel",
                              this.chiffreApresVirgule
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie legumessurface animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-viande"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span
                        class="icon-ico_CATEGORIES_legumes ico-medium legumessurface"
                      ></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">Légumes</div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfaceNecessairePaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.LEGUMES
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_paysage_actuel",
                              this.chiffreApresVirgule
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="bloc-surface">
      <h3 class="text-center">Surface agricole actuelle du territoire</h3>
      <div class="map-content mb-4">
        En vis-à-vis, le territoire dispose actuellement de
      </div>
      <div class="cadre-resultat resultat-ha animated flipInX delay-05s">
        <div class="d-inline-flex align-items-center">
          <div
            class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme"
            id="surface_act9"
          >
            {{ formatterChiffres(AfficherEntier(occupationActuelleTotale)) }}
          </div>
          <div class="hectares animated fadeIn delay-1-5s">
            hectares agricoles
          </div>
        </div>
      </div>

      <div class="no-data no-data-viz4" v-if="false">
        Désolé, nous n'avons pas de données suffisantes pour afficher ce
        graphique
      </div>

      <div class="cadre-graphique mt-5">
        <div
          class="wrap-viz4 resultats-categories repartition graph"
          style="
            background-color: #fff;
            height: 100%;
            margin-top: 20px;
            min-height: 550px;
          "
        >
          <RepartitionSurface :serieDonnees="repartitionSurfacesActuelles" />
        </div>
        <div class="wrap-viz4 resultats-categories repartition">
          <table
            summary="Resultats"
            id="PaysSpatCategoryresultsTable"
            class="auto-style1 w-100"
            border="1"
          >
            <thead></thead>
            <tbody>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie prairie animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-legumes"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span class="icon-prairie ico-medium prairie"></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col titre-categorie mb-0">
                        Prairie, estives, landes
                      </div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesPaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.PRAIRIES
                                .libelle,
                              "sau_ha",
                              "libelle_parcel_paysage_actuel"
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie fourrage animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-fruits"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span class="icon-fourragere ico-medium fourrage"></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">
                        Cultures fourragères
                      </div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesPaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.FOURRAGES
                                .libelle,
                              "sau_ha",
                              "libelle_parcel_paysage_actuel"
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie legumineuse animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-cereales"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span
                        class="icon-legumineuses ico-medium legumineuse"
                      ></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">Légumineuses</div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesPaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.LEGUMINEUSES
                                .libelle,
                              "sau_ha",
                              "libelle_parcel_paysage_actuel"
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie oleagineux animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-viande"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span
                        class="icon-oleagineux ico-medium oleagineux"
                      ></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">
                        Céréales, Oléagineux, protéagineux
                      </div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesPaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.CEREALES
                                .libelle,
                              "sau_ha",
                              "libelle_parcel_paysage_actuel"
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie pdt animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-viande"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span class="icon-cereales2 ico-medium pdt"></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">
                        Cultures industrielles alimentaires (pomme de terre,
                        betterave à sucre…)
                      </div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesPaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE
                                .CULTURES_INDUSTRIELLES_ALIMENTAIRES.libelle,
                              "sau_ha",
                              "libelle_parcel_paysage_actuel"
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie fruitssurface animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-viande"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span
                        class="icon-ico_CATEGORIES_fruits ico-medium fruitssurface"
                      ></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">Fruits</div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesPaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.FRUITS.libelle,
                              "sau_ha",
                              "libelle_parcel_paysage_actuel"
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie legumessurface animated fadeIn"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-viande"
                    style="cursor: pointer"
                  >
                    <div class="result-type">
                      <span
                        class="icon-ico_CATEGORIES_legumes ico-medium legumessurface"
                      ></span>
                    </div>
                    <div class="result-chiffres row align-items-center">
                      <div class="col mb-0 titre-categorie">Légumes</div>
                      <div class="col-auto ml-auto hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesPaysage,
                              CATEGORIE_PRODUITS_ACTUELS_PAYSAGE.LEGUMES
                                .libelle,
                              "sau_ha",
                              "libelle_parcel_paysage_actuel"
                            )
                          )
                        }}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <InformationBox>
          <template #texte>
            Les résultats proposés par PARCEL-Wallonie représentent des ordres
            de grandeur théoriques. Sur base des résultats obtenus, toute
            réallocation des surfaces doit être évaluée en tenant compte des
            spécificités agro-climatiques et socio-économiques de votre
            territoire.
          </template>
        </InformationBox>
      </div>
      <div class="row justify-content-center mt-3 mb-3">
        <div class="div-continuer">
          <button
            class="btn btn-secondaire mt-5"
            @click="modalActive = 'ModalComparaisonPaysage'"
          >
            Comparaison actuel / simulation
          </button>
          <router-link
            type="bouton"
            class="btn btn-principal mt-5"
            to="/emplois-crees-par-la-relocalisation"
          >
            Emplois agricoles nécessaires
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <ModalComposant
    :modalId="this.modalActive"
    v-if="this.modalActive"
    @fermerModal="fermerModalComparaison"
    :maxWidth="1200"
  ></ModalComposant>
</template>

<script>
import {
  formatterSurfacesNecessaires,
  formatterChiffres,
} from "@/plugins/surfaceProduits";
import { trouverChiffre, AfficherEntier } from "@/plugins/utils";

import { CATEGORIE_PRODUITS_ACTUELS_PAYSAGE } from "@/config/categorieProduitsActuelsPaysage";
import RepartitionSurface from "@/components/visualisation/RepartitionSurface.vue";
import ModalComposant from "@/views/modal/ModalComposant.vue";
import InformationBox from "@/components/bas-niveau/InformationBox";

export default {
  inject: ["$axios"],
  components: {
    RepartitionSurface,
    ModalComposant,
    InformationBox,
  },
  data() {
    return {
      CATEGORIE_PRODUITS_ACTUELS_PAYSAGE,
      data: {
        occupationActuelle: [],
      },
      chiffreApresVirgule:
        this.$store.state.resultatSimulation.surfaceAMobiliser < 100 ? 1 : 0,
      modalActive: null,
    };
  },
  methods: {
    AfficherEntier,
    trouverChiffre,
    formatterSurfacesNecessaires,
    formatterChiffres,
    fermerModalComparaison() {
      this.modalActive = "";
    },
  },
  computed: {
    occupationActuelleTotale() {
      return this.$store.state.resultatSimulation.surfacesActuelles;
    },

    repartitionSurfaceNecessaires() {
      let data = [];
      for (const [key, value] of Object.entries(
        CATEGORIE_PRODUITS_ACTUELS_PAYSAGE
      )) {
        console.log(key);
        value.part_surface_a_mobiliser = Math.round(
          trouverChiffre(
            this.$store.state.resultatSimulation.surfaceNecessairePaysage,
            value.libelle,
            "surface_a_mobiliser",
            "libelle_parcel_paysage_actuel",
            2
          ) * 100
        );
        let donnePourGraphique = {
          value: value.part_surface_a_mobiliser,
          name: value.libelle,
          itemStyle: {
            color: value.couleur ? value.couleur : "red",
          },
        };
        data = [...data, donnePourGraphique];
      }
      let total = data.reduce((acc, el) => acc + el.value, 0);
      data.map((el) => (el.value = (el.value / total) * 100));
      return data;
    },
    repartitionSurfacesActuelles() {
      let data = [];
      for (const [key, value] of Object.entries(
        CATEGORIE_PRODUITS_ACTUELS_PAYSAGE
      )) {
        console.log(key);
        value.part_surface_a_mobiliser = trouverChiffre(
          this.$store.state.resultatSimulation.surfacesActuellesPaysage,
          value.libelle,
          "sau_ha",
          "libelle_parcel_paysage_actuel"
        );
        let donnePourGraphique = {
          value: value.part_surface_a_mobiliser * 100,
          name: value.libelle,
          itemStyle: {
            color: value.couleur ? value.couleur : "red",
          },
        };
        data = [...data, donnePourGraphique];
      }
      let total = data.reduce((acc, el) => acc + el.value, 0);
      data.map((el) => (el.value = (el.value / total) * 100));
      return data;
    },
  },
};
</script>

<style scoped>
.div-continuer {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
}

.intro {
  text-align: center;
  margin: auto;
  color: var(--vert);
  font-size: 20px;
  line-height: 1.2;
  padding-bottom: 24px;
  font-style: italic;
  font-family: "Work Sans", sans-serif;
}
</style>
