<template>
  <div class="asy-wrapper" style="flex-direction: row">
    <div>
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="3"
      />

      <div class="content">
        <div class="content">
          <div class="section centrervh" id="section0">
            <div class="container">
              <h1 class="animated fadeInUp fast h1-result mb-3">
                Quels sont les emplois agricoles nécessaires pour notre
                alimentation ?
              </h1>
              <div class="cadre-resultat resultat-ha animated flipInX">
                <div class="d-inline-flex">
                  <div
                    class="nbr-ha animated flipInY delay-05s fast"
                    id="emplois_repartition"
                  >
                    {{
                      Math.round(
                        this.$store.state.resultatSimulation.emploisAMobiliser
                      )
                    }}
                  </div>
                  <div class="hectares animated fadeIn delay-1s fast">
                    emplois agricoles directs
                  </div>
                </div>
              </div>
              <h1 class="animated fadeInUp fast delay-1-5s h1-result">
                sont nécessaires
              </h1>
              <resumeChoix />

              <div class="cadre-graphique">
                <div class="resultats-categories repartition cadre-emploi">
                  <table
                    summary="Repartition"
                    class="auto-style1 w-100"
                    id="CategoryresultsTableJob"
                    border="0"
                    style="width: 100%"
                  >
                    <thead></thead>
                    <tbody>
                      <tr class="rowHtmljob">
                        <td colspan="4" @click="ouvrirModal('emploiLegumes')">
                          <div
                            class="cadre-categorie legumes animated fadeIn fast"
                            data-toggle="modal"
                            data-target="#modal-emplois-legumes"
                            style="cursor: pointer"
                          >
                            <div class="result-emploi">
                              <span class="icon-emploi ico-medium"></span>
                            </div>
                            <div class="result-type">
                              <div
                                class="result-graph"
                                id="pcj1"
                                style="width: 65px; height: 65px"
                              ></div>
                              <span
                                class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                              ></span>
                            </div>
                            <div class="result-chiffres">
                              <div class="hectares">Emplois en maraîchage</div>
                            </div>
                            <div
                              class="d-flex flex-grow align-items-center ml-auto"
                            >
                              <div
                                class="chiffre-emploi legumes animated flipInX"
                                id="totaljoblegumes"
                                v-if="this.$store.state.resultatSimulation"
                              >
                                {{
                                  trouverChiffre(
                                    this.$store.state.resultatSimulation
                                      .surfacesEmploisAMobiliser,
                                    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                      .LEGUMES.libelle,
                                    "emplois_a_mobiliser",
                                    "libelle_parcel_niveau_1"
                                  )
                                }}
                              </div>
                              <div class="result-plus">
                                <span
                                  class="icon-ico_fleche_detail_gros icon legumes"
                                ></span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr class="rowHtmljob">
                        <td colspan="4" @click="ouvrirModal('emploiFruits')">
                          <div
                            class="cadre-categorie fruits animated fadeIn fast"
                            data-toggle="modal"
                            data-target="#modal-emplois-fruits"
                            style="cursor: pointer"
                          >
                            <div class="result-emploi">
                              <span class="icon-emploi ico-medium"></span>
                            </div>
                            <div class="result-type">
                              <div
                                class="result-graph"
                                id="pcj2"
                                style="width: 65px; height: 65px"
                              ></div>
                              <span
                                class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                              ></span>
                            </div>
                            <div class="result-chiffres">
                              <div class="hectares">
                                Emplois en arboriculture
                              </div>
                            </div>
                            <div
                              class="d-flex flex-grow align-items-center ml-auto"
                            >
                              <div
                                class="chiffre-emploi fruits animated flipInX"
                                id="totaljobfruits"
                                v-if="this.$store.state.resultatSimulation"
                              >
                                {{
                                  trouverChiffre(
                                    this.$store.state.resultatSimulation
                                      .surfacesEmploisAMobiliser,
                                    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                      .FRUITS.libelle,
                                    "emplois_a_mobiliser",
                                    "libelle_parcel_niveau_1"
                                  )
                                }}
                              </div>
                              <div class="result-plus">
                                <span
                                  class="icon-ico_fleche_detail_gros icon fruits"
                                ></span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="rowHtmljob">
                        <td colspan="4" @click="ouvrirModal('emploiCereales')">
                          <div
                            class="cadre-categorie cereales animated fadeIn fast"
                            data-toggle="modal"
                            data-target="#modal-emplois-cereales"
                            style="cursor: pointer"
                          >
                            <div class="result-emploi">
                              <span class="icon-emploi ico-medium"></span>
                            </div>
                            <div class="result-type">
                              <div
                                class="result-graph"
                                id="pcj3"
                                style="width: 65px; height: 65px"
                              ></div>
                              <span
                                class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                              ></span>
                            </div>
                            <div class="result-chiffres">
                              <div class="hectares">
                                Emplois en cultures céréalières
                              </div>
                            </div>
                            <div
                              class="d-flex flex-grow align-items-center ml-auto"
                            >
                              <div
                                class="chiffre-emploi cereales animated flipInX"
                                id="totaljobgcultures"
                                v-if="this.$store.state.resultatSimulation"
                              >
                                {{
                                  trouverChiffre(
                                    this.$store.state.resultatSimulation
                                      .surfacesEmploisAMobiliser,
                                    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                      .CEREALES.libelle,
                                    "emplois_a_mobiliser",
                                    "libelle_parcel_niveau_1"
                                  )
                                }}
                              </div>
                              <div class="result-plus">
                                <span
                                  class="icon-ico_fleche_detail_gros icon cereales"
                                ></span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr class="rowHtmljob">
                        <td colspan="4" @click="ouvrirModal('emploiElevage')">
                          <div
                            class="cadre-categorie viande animated fadeIn fast"
                            data-toggle="modal"
                            data-target="#modal-emplois-viande"
                            style="cursor: pointer"
                          >
                            <div class="result-emploi">
                              <span class="icon-emploi ico-medium"></span>
                            </div>
                            <div class="result-type">
                              <div
                                class="result-graph"
                                id="pcj4"
                                style="width: 65px; height: 65px"
                              ></div>
                              <span
                                class="icon-ico_CATEGORIES_viande ico-medium viande"
                              ></span>
                            </div>
                            <div class="result-chiffres">
                              <div class="hectares">
                                Emplois générés par l'élevage
                                <a
                                  href="#"
                                  class="info pb-3"
                                  style="font-style: normal"
                                  data-tooltip="Les emplois générés par l\'élevage comptabilisent les emplois de l\'élevage ainsi que les emplois liés à la production de l\'alimentation pour l\'élevage."
                                  data-placement="left"
                                  ><span class="icon-ico_element_info"></span
                                ></a>
                              </div>
                            </div>
                            <div
                              class="d-flex flex-grow align-items-center ml-auto"
                            >
                              <div
                                class="chiffre-emploi viande animated flipInX"
                                id="totaljobelevage"
                                v-if="this.$store.state.resultatSimulation"
                              >
                                {{
                                  trouverChiffre(
                                    this.$store.state.resultatSimulation
                                      .surfacesEmploisAMobiliser,
                                    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER
                                      .ELEVAGE.libelle,
                                    "emplois_a_mobiliser",
                                    "libelle_parcel_niveau_1"
                                  )
                                }}
                              </div>
                              <div class="result-plus">
                                <span
                                  class="icon-ico_fleche_detail_gros icon viande"
                                ></span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  class="resultats-categories repartition animated fadeIn delay-1s"
                >
                  <div id="viz5">
                    <table
                      summary="Repartition"
                      class="auto-style1"
                      border="0"
                      style="width: 100%"
                      v-if="this.$store.state.resultatSimulation"
                    >
                      <tr style="height: 110px" class="animated fadeIn">
                        <td valign="middle" id="man_legumes">
                          <vizEmploi
                            :couleur="
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES
                                .couleur
                            "
                            :objetEmplois="
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser
                            "
                            :categorieProduitLibelle="
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES
                                .libelle
                            "
                            v-if="this.$store.state.resultatSimulation"
                          />
                        </td>
                      </tr>
                      <tr style="height: 110px" class="animated fadeIn">
                        <td valign="middle" id="man_fruits">
                          <vizEmploi
                            :couleur="
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS
                                .couleur
                            "
                            :objetEmplois="
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser
                            "
                            :categorieProduitLibelle="
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS
                                .libelle
                            "
                            v-if="this.$store.state.resultatSimulation"
                          />
                        </td>
                      </tr>
                      <tr style="height: 110px" class="animated fadeIn">
                        <td valign="middle" id="man_cereales">
                          <vizEmploi
                            :couleur="
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES
                                .couleur
                            "
                            :objetEmplois="
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser
                            "
                            :categorieProduitLibelle="
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES
                                .libelle
                            "
                            v-if="this.$store.state.resultatSimulation"
                          />
                        </td>
                      </tr>
                      <tr style="height: 110px" class="animated fadeIn">
                        <td valign="middle" id="man_elevage">
                          <vizEmploi
                            :couleur="
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE
                                .couleur
                            "
                            :objetEmplois="
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser
                            "
                            :categorieProduitLibelle="
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE
                                .libelle
                            "
                            v-if="this.$store.state.resultatSimulation"
                          />
                        </td>
                      </tr>
                    </table>
                    <!--        for ($i = 1; $i <= 100; $i++) {
                        //if ($i==1){echo "<div>";}
                            //  echo '<span class="icon-emploi"></span>';
                            //  if ($i=50){echo "</div>";}        }      ?>-->
                  </div>
                </div>

                <!--    <div class="resultats-categories repartition " style=""><div id="viz"></div>
        <script type="text/coffeescript">
          var points = d3.range(50).map (i) -> {id: i}
          pointGrid = d3.layout.grid()
            .rows(2)
            .cols(25)
            .size([400, 40]);
          var svg =d3.select("viz")
            .append("svg")
            .attr("width", 500)
            .attr("height", 400)
          svg.append("defs")
            .append("g")
            .attr("id","iconCustom")
             .append("path")
            .attr("d","M10.9873,8.0606 C10.8633,6.7076 9.6463,5.6456 8.1613,5.6456 L6.5003,5.6456 L6.5003,4.6116 C7.3343,4.2296 7.9173,3.3936 7.9173,2.4166 C7.9173,1.0816 6.8353,-0.0004 5.5003,-0.0004 C4.1653,-0.0004 3.0833,1.0816 3.0833,2.4166 C3.0833,3.3936 3.6663,4.2306 4.5003,4.6116 L4.5003,5.6456 L2.8383,5.6456 C1.3533,5.6456 0.1363,6.7076 0.0123,8.0606 L0.0003,14.7256 C0.0003,15.1786 0.3933,15.5446 0.8803,15.5446 L0.9653,15.5446 C1.4513,15.5446 1.8443,15.1786 1.8443,14.7256 L1.8443,8.2896 L2.4863,8.2896 L2.4863,15.4866 L2.5133,15.4866 L2.5133,23.7046 C2.5133,24.3166 3.0463,24.8126 3.7033,24.8126 C4.3603,24.8126 4.8933,24.3166 4.8933,23.7046 L4.8933,15.4866 L6.1333,15.4866 L6.1333,23.7046 C6.1333,24.3166 6.6673,24.8126 7.3233,24.8126 C7.9803,24.8126 8.5133,24.3166 8.5133,23.7046 L8.5133,15.4866 L8.5133,14.8936 L8.5133,8.2896 L9.1543,8.2896 L9.1543,14.7256 C9.1543,15.1786 9.5483,15.5456 10.0343,15.5456 L10.1203,15.5456 C10.6063,15.5456 11.0003,15.1786 11.0003,14.7256 L10.9873,8.0606 Z")
            .attr("transform", "scale(1)")

          var icons = svg.append("g")
            .selectAll("use")
            .data(pointGrid(points)).enter()
            .append("use")
            .attr("transform", (d) -> "translate(#{d.x}, #{d.y})")
            .attr("xlink:href","#iconCustom")
          icons
            .attr("fill", "#eee")
            .transition()
            .duration(750)
            .delay((d, i) -> i/5*750)
            .attr("fill", (d, i) -> if i is 0 then "green" else "blue")
          icons.on "click", (d, i) ->
            console.log d
          </script>
    </div>-->
              </div>
              <div class="div-continuer mb-big animated fadeInUp delay-5-5s">
                <a href="/impacts-ecologiques-de-la-relocatisation"
                  ><button type="button" class="btn btn-principal mt-5">
                    Voir les impacts
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="modal-emplois-legumes"
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
              <div class="titre-categorie">Emplois en maraîchage</div>
              <div class="hectares" id="-totaljoblegumes2"></div>
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
              <!-- <?php include '../partials/modal-emploi-legumes.php'; ?> -->
              <!--div class="card">
              <div class="card-header " id="heading2">
                <button class="btn btn-link collapsed" data-toggle="collapse" href="#collapseDetail" aria-expanded="false" href="#collapseDetail">
                  <span class="icon-ico_detail icon white"></span> Détail par produit
                </button>
              </div>
              <div id="collapseDetail" class="collapse" data-parent="#accordion" aria-labelledby="heading2">
                <div class="card-body">
                  <span class="mb-2"><strong>en pourcentage de surfaces cultivées</strong></span>
                  <div class="list-produits">
                    <table summary="Repartition" class="auto-style1" id="ProductresultsTable1">
                      <tbody>
                        <tr style="display:none;">
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
              </div-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <modalEmplois
      v-if="modalEmplois"
      :modalId="modalEmplois"
      @fermerModal="fermerModal"
    ></modalEmplois>
    <nav id="asy-sidebar" :class="montrerClasse">
      <modal-affiner-choix @fermerModalAffiner="fermerModalAffiner" />
    </nav>
  </div>
  <BandeauResultat />
</template>

<script>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoix from "@/views/modal/resumeChoix.vue";
import ModalAffinerChoix from "@/views/modal/modalAffinerChoix.vue";
import modalEmplois from "@/views/modal/modalEmplois.vue";
import vizEmploi from "@/components/visualisation/vizEmploi.vue";
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER } from "@/config/categorieProduitsPotentielNourricier";
import { trouverChiffre } from "@/plugins/utils";
import BandeauResultat from "@/components/BandeauResultat.vue";
export default {
  components: {
    BandeauResultat,
    BarreNavigation,
    resumeChoix,
    ModalAffinerChoix,
    modalEmplois,
    vizEmploi,
  },
  data() {
    return {
      montrerClasse: "",
      modalEmplois: null,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER,
      emplois_a_mobiliser: "emplois_a_mobiliser",
    };
  },
  methods: {
    montrerModalAffiner() {
      this.montrerClasse = "show";
    },
    fermerModalAffiner() {
      this.montrerClasse = "";
    },
    trouverChiffre,
    ouvrirModal(id) {
      console.log(id);
      this.modalEmplois = id;
      console.log(this.modalDetails);
    },
    fermerModal() {
      this.modalEmplois = null;
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
