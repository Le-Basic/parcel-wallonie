<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation :active="2" menu-type="resultats-surface" />
      <div class="section centrervh" id="section0">
        <div class="container">
          <resumeChoixSurface />

          <h1 class="animated fadeInUp fast mb-2">
            <span id="choixsurface">{{ choixsurface }} </span>
            <span id="typesurface"> hectares</span
            ><!-- à <br><span id="nomvilleter">- </span>-->

            ainsi répartis
          </h1>
          <div class="bloc-surface">
            <div class="no-data no-data-viz" v-if="false">
              Désolé, nous n'avons pas de données suffisantes pour afficher ce
              graphique
            </div>

            <div class="wrap-viz cadre-graphique mt-5">
              <div
                class="resultats-categories repartition graph row"
                style="
                  background-color: #fff;
                  height: 100%;
                  margin-top: 20px;
                  min-height: 550px;
                "
              >
                <div
                  id="viz"
                  class="viz"
                  ref="viz1"
                  style="
                    background-color: #fff;
                    height: 100%;
                    margin-top: 20px;
                    width: 100%;
                    max-width: 100%;
                    max-height: 100%;
                  "
                >
                  <RepartitionSurface
                    :serieDonnees="repartitionSurfacePourGraphique"
                  />
                </div>
              </div>
              <div class="wrap-viz resultats-categories repartition">
                <table
                  summary="Resultats"
                  class="auto-style1 w-100"
                  id="CategoryresultsTable"
                  border="1"
                  v-if="
                    this.$store.state.resultatSimulation
                      .surfacesEmploisAMobiliser
                  "
                >
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td colspan="5">
                        <div
                          class="cadre-categorie legumes animated fadeIn delay-1s"
                          onclick=""
                          data-toggle="modal"
                          data-target="#modal-legumes"
                          style="cursor: pointer"
                        >
                          <div
                            class="result-graph"
                            id="pc1"
                            style="width: 65px; height: 65px"
                          >
                            <jaugeChart
                              :value="
                                Math.round(
                                  trouverChiffre(
                                    this.$store.state.resultatSimulation
                                      .surfacesEmploisAMobiliser,
                                    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                      .LEGUMES.libelle,
                                    'part_surface_a_mobiliser',
                                    'libelle_parcel_niveau_1'
                                  )
                                )
                              "
                              couleur="#91C423"
                              :key="this.$store.state.resultatSimulation"
                            ></jaugeChart>
                          </div>
                          <div class="result-type">
                            <span
                              class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                            >
                            </span>
                          </div>
                          <div class="result-chiffres">
                            <div class="titre-categorie">Légumes</div>
                            <div class="hectares">
                              {{
                                formatterSurfacesNecessaires(
                                  Math.round(
                                    trouverChiffre(
                                      this.$store.state.resultatSimulation
                                        .surfacesEmploisAMobiliser,
                                      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                        .LEGUMES.libelle,
                                      "surface_a_mobiliser",
                                      "libelle_parcel_niveau_1"
                                    )
                                  )
                                )
                              }}
                            </div>
                          </div>
                          <div class="result-plus">
                            <span
                              @click="ouvrirModal('detailsFruits')"
                              class="icon-ico_fleche_detail_gros icon legumes"
                            >
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td colspan="5" @click="ouvrirModal('detailsFruits')">
                        <div
                          class="cadre-categorie fruits animated fadeIn delay-1-5s"
                          onclick=""
                          data-toggle="modal"
                          data-target="#modal-fruits"
                          style="cursor: pointer"
                        >
                          <div
                            class="result-graph"
                            id="pc2"
                            style="width: 65px; height: 65px"
                          >
                            <jaugeChart
                              :value="
                                Math.round(
                                  trouverChiffre(
                                    this.$store.state.resultatSimulation
                                      .surfacesEmploisAMobiliser,
                                    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                      .FRUITS.libelle,
                                    'part_surface_a_mobiliser',
                                    'libelle_parcel_niveau_1'
                                  )
                                )
                              "
                              couleur="#A261C0"
                              :key="this.$store.state.resultatSimulation"
                            ></jaugeChart>
                          </div>
                          <div class="result-type">
                            <span
                              class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                            ></span>
                          </div>
                          <div class="result-chiffres">
                            <div class="titre-categorie">Fruits</div>
                            <div class="hectares">
                              {{
                                formatterSurfacesNecessaires(
                                  Math.round(
                                    trouverChiffre(
                                      this.$store.state.resultatSimulation
                                        .surfacesEmploisAMobiliser,
                                      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                        .FRUITS.libelle,
                                      "surface_a_mobiliser",
                                      "libelle_parcel_niveau_1"
                                    )
                                  )
                                )
                              }}
                            </div>
                          </div>
                          <div class="result-plus">
                            <span
                              class="icon-ico_fleche_detail_gros icon fruits"
                            ></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5" @click="ouvrirModal('detailsCereales')">
                        <div
                          class="cadre-categorie cereales animated fadeIn delay-2s"
                          onclick=""
                          data-toggle="modal"
                          data-target="#modal-cereales"
                          style="cursor: pointer"
                        >
                          <div
                            class="result-graph"
                            id="pc3"
                            style="width: 65px; height: 65px"
                          >
                            <jaugeChart
                              :value="
                                Math.round(
                                  trouverChiffre(
                                    this.$store.state.resultatSimulation
                                      .surfacesEmploisAMobiliser,
                                    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                      .CEREALES.libelle,
                                    'part_surface_a_mobiliser',
                                    'libelle_parcel_niveau_1'
                                  )
                                )
                              "
                              couleur="#F9B233"
                              :key="this.$store.state.resultatSimulation"
                            ></jaugeChart>
                          </div>
                          <div class="result-type">
                            <span
                              class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                            ></span>
                          </div>
                          <div class="result-chiffres">
                            <div class="titre-categorie">
                              Céréales et autres cultures...
                            </div>
                            <div class="hectares">
                              {{
                                formatterSurfacesNecessaires(
                                  Math.round(
                                    trouverChiffre(
                                      this.$store.state.resultatSimulation
                                        .surfacesEmploisAMobiliser,
                                      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                        .CEREALES.libelle,
                                      "surface_a_mobiliser",
                                      "libelle_parcel_niveau_1"
                                    )
                                  )
                                )
                              }}
                            </div>
                          </div>
                          <div class="result-plus">
                            <span
                              class="icon-ico_fleche_detail_gros icon cereales"
                            ></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="5" @click="ouvrirModal('detailsViande')">
                        <div
                          class="cadre-categorie viande animated fadeIn delay-2-5s"
                          onclick=""
                          data-toggle="modal"
                          data-target="#modal-viande"
                          style="cursor: pointer"
                        >
                          <div
                            class="result-graph"
                            id="pc4"
                            style="width: 65px; height: 65px"
                          >
                            <jaugeChart
                              :value="
                                Math.round(
                                  trouverChiffre(
                                    this.$store.state.resultatSimulation
                                      .surfacesEmploisAMobiliser,
                                    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                      .ELEVAGE.libelle,
                                    'part_surface_a_mobiliser',
                                    'libelle_parcel_niveau_1'
                                  )
                                )
                              "
                              couleur="#B57A60"
                              :key="this.$store.state.resultatSimulation"
                            ></jaugeChart>
                          </div>
                          <div class="result-type">
                            <span
                              class="icon-ico_CATEGORIES_viande ico-medium viande"
                            ></span>
                          </div>
                          <div class="result-chiffres">
                            <div class="titre-categorie">Elevage</div>
                            <div class="hectares">
                              {{
                                formatterSurfacesNecessaires(
                                  Math.round(
                                    trouverChiffre(
                                      this.$store.state.resultatSimulation
                                        .surfacesEmploisAMobiliser,
                                      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                        .ELEVAGE.libelle,
                                      "surface_a_mobiliser",
                                      "libelle_parcel_niveau_1"
                                    )
                                  )
                                )
                              }}
                            </div>
                          </div>
                          <div class="result-plus">
                            <span
                              class="icon-ico_fleche_detail_gros icon viande"
                            ></span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- <div class="mb-5"> <?php include '../partials/resum-result2.php'; ?></div> -->

          <div
            class="cadre-resultat d-flex animated fadeInUp delay-1s besoins-alim"
          >
            <div class="text-left legende">
              répondent aux besoins alimentaires complets de
            </div>
            <div class="ml-auto nbr-affiche">
              <div class="nbr-ha" id="couvertstotal">
                {{ nbPersonnesBesoinsCombles }}
              </div>
              <div class="hectares">personnes</div>
            </div>
          </div>
          <div class="mb-big div-continuer animated fadeInUp delay-1-5s">
            <router-link to="/composition-des-assiettes-relocalisees">
              <button type="button" class="btn btn-principal">
                Changer la répartition
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <nav id="asy-sidebar" class="">
      <!-- <?php include '../partials/menu-affiner-2modales.php'; ?> -->
    </nav>
  </div>
  <div
    class="modal fade"
    id="modal-legumes"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div>
            <span class="icon-ico_CATEGORIES_legumes icon legumes"></span>
          </div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">Légumes</div>
            <div class="hectares"></div>
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
        <div class="modal-body">
          <div id="accordeon-fiche" class="accordeon-detail legumes-fonce">
            <!-- <?php include '../partials/modal-detail-legume.php'; ?> -->

            <div class="card">
              <div class="card-header" id="heading2">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  href="#collapseDetail"
                  aria-expanded="false"
                >
                  <span class="icon-ico_detail icon white"></span> Détail par
                  produit
                </button>
              </div>
              <div
                id="collapseDetail"
                class="collapse"
                data-parent="#accordion"
                aria-labelledby="heading2"
              >
                <div class="card-body">
                  <span class="mb-2"
                    ><strong>en pourcentage de surfaces cultivées</strong></span
                  >
                  <div class="list-produits">
                    <table
                      summary="Resultats"
                      class="auto-style1 w-100"
                      id="ProductresultsTable1"
                    >
                      <tbody>
                        <tr style="display: none">
                          <td class="auto-style15">&nbsp;</td>
                          <td class="auto-style12">&nbsp;</td>
                          <td class="auto-style14">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
            <div class="hectares"></div>
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
        <div class="modal-body">
          <div id="accordeon-fiche" class="accordeon-detail fruits-fonce">
            <!-- <?php include '../partials/modal-detail-fruits.php'; ?> -->

            <div class="card">
              <div class="card-header" id="heading2">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  href="#collapseDetail"
                  aria-expanded="false"
                >
                  <span class="icon-ico_detail icon white"></span> Détail par
                  produit
                </button>
              </div>
              <div
                id="collapseDetail"
                class="collapse"
                data-parent="#accordion"
                aria-labelledby="heading2"
              >
                <div class="card-body">
                  <span class="mb-2"
                    ><strong>en pourcentage de surfaces cultivées</strong></span
                  >
                  <div class="list-produits">
                    <table
                      summary="Resultats"
                      class="auto-style1 w-100"
                      id="ProductresultsTable2"
                    >
                      <tbody>
                        <tr style="display: none">
                          <td class="auto-style15">&nbsp;</td>
                          <td class="auto-style12">&nbsp;</td>
                          <td class="auto-style14">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="modal-cereales"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div>
            <span class="icon-ico_CATEGORIES_cereales icon cereales"></span>
          </div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">Céréales et autres cultures</div>
            <div class="hectares">
              Consommés directement (pain, lentilles, huiles, etc.)
            </div>
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
        <div class="modal-body">
          <div id="accordeon-fiche" class="accordeon-detail cereales-fonce">
            <!-- <?php include '../partials/modal-detail-cereales.php'; ?> -->
            <div class="card">
              <div class="card-header" id="heading2">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  href="#collapseDetail"
                  aria-expanded="false"
                >
                  <span class="icon-ico_detail icon white"></span> Détail par
                  produit
                </button>
              </div>
              <div
                id="collapseDetail"
                class="collapse"
                data-parent="#accordion"
                aria-labelledby="heading2"
              >
                <div class="card-body">
                  <span class="mb-2"
                    ><strong>en pourcentage de surfaces cultivées</strong></span
                  >
                  <div class="list-produits">
                    <table
                      summary="Resultats"
                      class="auto-style1 w-100"
                      id="ProductresultsTable3"
                    >
                      <tbody>
                        <tr style="display: none">
                          <td class="auto-style15">&nbsp;</td>
                          <td class="auto-style12">&nbsp;</td>
                          <td class="auto-style14">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="modal-viande"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div>
            <span class="icon-ico_CATEGORIES_viande icon viande"></span>
          </div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">Elevage</div>
            <div class="hectares">
              Intègre l'ensemble des surfaces de cultures destinées à
              l’alimentation de l’élevage (prairies, céréales, tourteaux, etc.)
            </div>
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
        <div class="modal-body">
          <div id="accordeon-fiche" class="accordeon-detail viande-fonce">
            <!-- <?php include '../partials/modal-detail-viande.php'; ?> -->

            <div class="card">
              <div class="card-header" id="heading2">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  href="#collapseDetail"
                  aria-expanded="false"
                >
                  <span class="icon-ico_detail icon white"></span> Détail par
                  produit
                </button>
              </div>
              <div
                id="collapseDetail"
                class="collapse"
                data-parent="#accordion"
                aria-labelledby="heading2"
              >
                <div class="card-body">
                  <span class="mb-2"
                    ><strong>en pourcentage de surfaces cultivées</strong></span
                  >
                  <div class="list-produits">
                    <table
                      summary="Resultats"
                      class="auto-style1 w-100"
                      id="ProductresultsTable4"
                    >
                      <tbody>
                        <tr style="display: none">
                          <td class="auto-style15">&nbsp;</td>
                          <td class="auto-style12">&nbsp;</td>
                          <td class="auto-style14">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                          <td class="auto-style8">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr />
                  En plus de ces surfaces à mobiliser, ces productions animales
                  nécessitent environ <span id="surfaceimport"></span> hectares
                  de surfaces importées (tourteaux etc.)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatterChiffres } from "@/plugins/surfaceProduits";
import { CATEGORIE_PRODUITS_SURFACES_ACTUELLES } from "@/config/categorieProduitsActuel";
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER } from "@/config/categorieProduitsPotentielNourricier";
import { trouverChiffre } from "@/plugins/utils";
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";
import resumeChoixSurface from "@/views/parcours-surface/ResumeChoixSurface.vue";
import RepartitionSurface from "@/components/visualisation/RepartitionSurface.vue";

export default {
  components: {
    BarreNavigation,
    resumeChoixSurface,
    RepartitionSurface,
  },
  data() {
    return {
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER,
      CATEGORIE_PRODUITS_SURFACES_ACTUELLES,
      choixsurface: this.$store.state.surfacesMobilisables,
      nbPersonnesBesoinsCombles:
        this.$store.state.resultatSimulationSurface.populationAvecBesoinComblé,
    };
  },
  methods: {
    formatterChiffres,
    trouverChiffre,
    // Le passer en utils
    formatterSurfacesNecessaires(chiffreSurface) {
      return (
        "Environ " +
        Math.round(chiffreSurface).toLocaleString("fr-FR") +
        " hectares"
      );
    },
  },
  computed: {
    repartitionSurfacePourGraphique() {
      let data = [];
      for (const [key, value] of Object.entries(
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
      )) {
        console.log(key);
        value.partAMobiliser = Math.round(
          trouverChiffre(
            this.$store.state.resultatSimulation.surfacesEmploisAMobiliser,
            value.libelle,
            "part_surface_a_mobiliser",
            "libelle_parcel_niveau_1"
          )
        );
        let donnePourGraphique = {
          value: value.partAMobiliser,
          name: value.libelle,
          itemStyle: {
            color: value.couleur,
          },
        };
        data = [...data, donnePourGraphique];
      }
      return data;
    },
  },
};
</script>

<style scoped>
.bloc-surface {
  margin: 0 !important;
}
</style>
