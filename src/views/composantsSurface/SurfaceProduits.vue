<template>
  <div class="bloc-surface">
    <modalDetail v-if="modalDetails" :modalId="modalDetails"></modalDetail>
    <h3 class="text-center">Surface agricole à mobiliser</h3>

    <div
      class="cadre-resultat resultat-ha animated flipInX delay-05s bg-vert-clair"
    >
      <div class="d-inline-flex align-items-center">
        <div
          class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme surface_potentiel"
          id="surface_potentiel6"
        >
          <div class="odometer-inside" v-if="surfaces_a_mobiliser">
            {{ this.surfaces_a_mobiliser["surfaces_a_mobiliser"] }}
          </div>
        </div>
        <div class="hectares animated fadeIn delay-1-5s">
          hectares agricoles
        </div>
      </div>
    </div>
    <div class="map-content">
      sont théoriquement nécessaires pour satisfaire les besoins alimentaires de
      la population choisie
    </div>

    <div class="no-data no-data-viz">
      Désolé, nous n'avons pas de données suffisantes pour afficher ce graphique
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
        >
        <div
          id="viz"
          class="viz"
          ref="viz1"
          style="
            background-color: #fff;
            height: 100%;
            margin-top: 20px;
            min-height: 550px;
          "
        ></div>
      </div>
      <div class="wrap-viz resultats-categories repartition">
        <table
          summary="Resultats"
          class="auto-style1 w-100"
          id="CategoryresultsTable"
          border="1"
          v-if="surfaces_a_mobiliser"
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
                    <jaugeChart></jaugeChart>
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
                          surfaces_a_mobiliser[
                            "surfaces_a_mobiliser_parcel_niveau_1"
                          ][3].surface_necessaire_conventionnel
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
                    <jaugeChart></jaugeChart>
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
                          surfaces_a_mobiliser[
                            "surfaces_a_mobiliser_parcel_niveau_1"
                          ][1].surface_necessaire_conventionnel
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
                    <jaugeChart></jaugeChart>
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
                          surfaces_a_mobiliser[
                            "surfaces_a_mobiliser_parcel_niveau_1"
                          ][2].surface_necessaire_conventionnel
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
                    <jaugeChart></jaugeChart>
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
                          surfaces_a_mobiliser[
                            "surfaces_a_mobiliser_parcel_niveau_1"
                          ].find(
                            (item) => item.libelle_parcel_niveau_1 == "Elevage"
                          ).surface_necessaire_conventionnel
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
  <div class="bloc-surface">
    <h3 class="text-center">Surface agricole actuelle du territoire</h3>
    <div class="map-content mb-4">
      En vis-à-vis, le territoire dispose actuellement de
    </div>
    <div class="cadre-resultat resultat-ha animated flipInX delay-05s">
      <div class="d-inline-flex align-items-center">
        <div
          class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme"
          id="surface_act8"
        >
          <div class="odometer-inside">
            {{ this.data.surfaceActuelle }}
          </div>
        </div>
        <div class="hectares animated fadeIn delay-1-5s">
          hectares agricoles
        </div>
      </div>
    </div>

    <div class="no-data no-data-viz2">
      Désolé, nous n'avons pas de données suffisantes pour afficher ce graphique
    </div>

    <div class="cadre-graphique mt-5 delay-1s">
      <div
        class="wrap-viz2 resultats-categories repartition graph"
        style="
          background-color: #fff;
          height: 100%;
          margin-top: 20px;
          min-height: 550px;
        "
      >
        <div
          id="viz2"
          style="
            background-color: #fff;
            height: 100%;
            margin-top: 20px;
            min-height: 550px;
          "
        ></div>
      </div>
      <div class="wrap-viz2 resultats-categories repartition delay-1s">
        <table
          summary="Resultats"
          class="auto-style1 w-100"
          id="ProdCategoryresultsTable"
          border="1"
          v-if="this.data.occupationActuelle"
        >
          <thead></thead>
          <tbody>
            <tr>
              <td colspan="5">
                <div class="cadre-categorie cereales animated fadeIn delay-1s">
                  <div
                    class="result-graph"
                    id="ppc1"
                    style="width: 65px; height: 65px"
                  >
                    <jaugeChart></jaugeChart>
                  </div>
                  <div class="result-type">
                    <span
                      class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                    ></span>
                  </div>
                  <div class="result-chiffres">
                    <div class="titre-categorie">
                      Cultures annuelles pour alimentation humaine
                    </div>
                    <div
                      class="hectares"
                      v-if="this.data.occupationActuelle[0]"
                    >
                      {{
                        formatterSurfacesNecessaires(
                          this.data.occupationActuelle[0]["surface"]
                        )
                      }}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="5">
                <div class="cadre-categorie viande animated fadeIn delay-1s">
                  <div
                    class="result-graph"
                    id="ppc2"
                    style="width: 65px; height: 65px"
                  >
                    <jaugeChart></jaugeChart>
                  </div>
                  <div class="result-type">
                    <span
                      class="icon-ico_CATEGORIES_viande ico-medium viande"
                    ></span>
                  </div>
                  <div class="result-chiffres">
                    <div class="titre-categorie">
                      Elevage (dont alimentation & estives et landes)
                    </div>
                    <div
                      class="hectares"
                      v-if="this.data.occupationActuelle[0]"
                    >
                      {{
                        formatterSurfacesNecessaires(
                          this.data.occupationActuelle[1]["surface"]
                        )
                      }}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="5">
                <div class="cadre-categorie fruits animated fadeIn delay-1s">
                  <div
                    class="result-graph"
                    id="ppc3"
                    style="width: 65px; height: 65px"
                  ></div>
                  <div class="result-type">
                    <span
                      class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                    ></span>
                  </div>
                  <div class="result-chiffres">
                    <div class="titre-categorie">Fruits</div>
                    <div
                      class="hectares"
                      v-if="this.data.occupationActuelle[3]"
                    >
                      {{
                        formatterSurfacesNecessaires(
                          this.data.occupationActuelle[3]["surface"]
                        )
                      }}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="5">
                <div class="cadre-categorie legumes animated fadeIn delay-1s">
                  <div
                    class="result-graph"
                    id="ppc4"
                    style="width: 65px; height: 65px"
                  ></div>
                  <div class="result-type">
                    <span
                      class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                    ></span>
                  </div>
                  <div class="result-chiffres">
                    <div class="titre-categorie">Légumes</div>
                    <div
                      class="hectares"
                      v-if="this.data.occupationActuelle[4]"
                    >
                      {{
                        formatterSurfacesNecessaires(
                          this.data.occupationActuelle[4]["surface"]
                        )
                      }}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="5">
                <div class="cadre-categorie jachere animated fadeIn delay-1s">
                  <div
                    class="result-graph"
                    id="ppc5"
                    style="width: 65px; height: 65px"
                  ></div>
                  <div class="result-type">
                    <span class="icon-jachere ico-medium jachere"></span>
                  </div>
                  <div class="result-chiffres">
                    <div class="titre-categorie">Jachères</div>
                    <div
                      class="hectares"
                      v-if="this.data.occupationActuelle[5]"
                    >
                      {{
                        formatterSurfacesNecessaires(
                          this.data.occupationActuelle[5]["surface"]
                        )
                      }}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <!-- <tr>
              <td colspan="5">
                <div
                  class="cadre-categorie autreindus animated fadeIn delay-1s"
                >
                  <div
                    class="result-graph"
                    id="ppc6"
                    style="width: 65px; height: 65px"
                  ></div>
                  <div class="result-type">
                    <span
                      class="icon-autres-cultures ico-medium autreindus"
                    ></span>
                  </div>
                  <div class="result-chiffres">
                    <div class="titre-categorie">
                      Cultures industrielles hors alimentation
                    </div>
                    <div
                      class="hectares"
                      v-if="this.data.occupationActuelle[6]"
                    >
                      {{ this.data.occupationActuelle[6]["surface"] }}
                    </div>
                  </div>
                </div>
              </td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="bloc-surface">
    <h3 class="text-center">Potentiel nourricier</h3>
    <div
      class="cadre-resultat resultat-ha animated flipInX delay-05s bg-vert-clair"
    >
      <div class="d-inline-flex align-items-center">
        <div
          class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme"
          id="potentiel4"
        ></div>
        <div class="hectares animated fadeIn delay-1-5s">%</div>
      </div>
    </div>
    <div id="bar-pn">
      <div id="horizontal-bar-pn">
        <div class="row align-items-center bar-line mx-0">
          <div class="col-legend">
            <div class="row align-items-center">
              <div class="order-1 order-md-0 col-12 col-md-7 text-right"></div>
              <div class="order-0 order-md-1 col-12 col-md-5">
                <div class="d-flex align-items-center justify-content-end">
                  <div class="col-icon">
                    <span class="ico-medium legumes"></span>
                  </div>
                  <div class="col-pourcent legumes"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="position-relative" style="width: 100%">
              <div
                id="line-pn"
                class="position-absolute"
                style="left: calc(50% - 20px)"
              >
                <div class="text-center">
                  <div class="vertical-line"></div>
                  <div>
                    <img
                      :src="require('@/assets/img/elements/pointer.svg')"
                      alt=""
                      style="margin-top: -8px"
                    />
                  </div>
                  <div>100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="horizontal-bar-pn" class="mt-3">
        <div class="row align-items-center bar-line mx-0" id="bar-legumes">
          <div class="col-legend">
            <div class="row align-items-center">
              <div class="order-1 order-md-0 col-12 col-md text-right col-text">
                <b>Légumes</b>
              </div>
              <div class="order-0 order-md-1 col-12 col-md-auto">
                <div class="d-flex align-items-center justify-content-end">
                  <div class="col-icon">
                    <span
                      class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                    ></span>
                  </div>
                  <div
                    class="col-pourcent legumes"
                    id="potentiel_legumes"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="bar bg-vert-clair" style="width: 0%"></div>
          </div>
        </div>
        <div class="row align-items-center bar-line mx-0" id="bar-fruits">
          <div class="col-legend">
            <div class="row align-items-center">
              <div class="order-1 order-md-0 col-12 col-md text-right col-text">
                <b>Fruits</b>
              </div>
              <div class="order-0 order-md-1 col-12 col-md-auto">
                <div class="d-flex align-items-center justify-content-end">
                  <div class="col-icon">
                    <span
                      class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                    ></span>
                  </div>
                  <div class="col-pourcent fruits" id="potentiel_fruits"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8" id="bar_pot_container">
            <div class="bar bg-fruits" style="width: 0%"></div>
          </div>
        </div>
        <div class="row align-items-center bar-line mx-0" id="bar-cereales">
          <div class="col-legend">
            <div class="row align-items-center">
              <div class="order-1 order-md-0 col-12 col-md text-right col-text">
                <b>Céréales et autres grandes cultures</b>
              </div>
              <div class="order-0 order-md-1 col-12 col-md-auto">
                <div class="d-flex align-items-center justify-content-end">
                  <div class="col-icon">
                    <span
                      class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                    ></span>
                  </div>
                  <div
                    class="col-pourcent cereales"
                    id="potentiel_cereales"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="bar bg-cereales" style="width: 0%"></div>
          </div>
        </div>
        <div class="row align-items-center bar-line mx-0" id="bar-viande">
          <div class="col-legend">
            <div class="row align-items-center">
              <div class="order-1 order-md-0 col-12 col-md text-right col-text">
                <b>Élevage</b>
              </div>
              <div class="order-0 order-md-1 col-12 col-md-auto">
                <div class="d-flex align-items-center justify-content-end">
                  <div class="col-icon">
                    <span
                      class="icon-ico_CATEGORIES_viande ico-medium viande"
                    ></span>
                  </div>
                  <div class="col-pourcent viande" id="potentiel_elevage"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="bar bg-viande" style="width: 0%"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bar-legende row justify-content-between">
      <div class="mb-2 col-12 col-sm-6 d-flex align-items-center">
        <img
          :src="require('@/assets/img/elements/pointer.svg')"
          alt=""
          style="margin-top: -8px; margin-right: 0.5rem"
        /><span>surface nécessaire pour nourrir la population</span>
      </div>
      <div class="col-12 col-sm-auto d-flex align-items-center">
        <span class="legende bg-legumes"></span
        ><span class="legende bg-fruits"></span
        ><span class="legende bg-cereales"></span
        ><span class="legende bg-viande"></span> surfaces actuelles
      </div>
    </div>
    <div class="div-continuer">
      <button
        type="button"
        class="btn btn-principal mt-5"
        @click="nextStep('landscape')"
      >
        <router-link :to="{ hash: '#landscapeView' }"> Suivant </router-link>
      </button>
    </div>
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
                        <tr style="display: block">
                          <td class="auto-style15">
                            <span id="totalcereales"
                              >Environ ' + round(alim_humaine,
                              0).toLocaleString() + '</span
                            >
                            hectares';
                          </td>
                          <td class="auto-style12">
                            <span id="totalcereales"
                              >Environ ' + round(alim_humaine,
                              0).toLocaleString() + '</span
                            >
                            hectares'
                          </td>
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
                        <tr style="display: block">
                          <td class="auto-style15">
                            <span id="totalcereales"
                              >Environ ' + round(alim_humaine,
                              0).toLocaleString() + '</span
                            >
                            hectares'; ;
                          </td>
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
import { Treemap } from "d3plus-hierarchy";
import { getSurfaceAMobiliser } from "@/plugins/getSurfacesNecessaires";
import { pushDataViz } from "@/plugins/pushDataViz";
import modalDetail from "../modal/modalDetail.vue";
import jaugeChart from "@/components/jaugeChart.vue";
export default {
  inject: ["$axios"],
  components: {
    modalDetail,
    jaugeChart,
  },
  data() {
    return {
      data: {
        occupationActuelle: [],
        potentielNourricier: [],
        surfaces_a_mobiliser_parcel_niveau_1: [],
        surfaces_a_mobiliser: null,
      },
      modalDetails: "",
    };
  },
  methods: {
    ouvrirModal(id) {
      console.log(id);
      this.modalDetails = id;
      console.log(this.modalDetails);
    },
    recupererDonnees() {
      const bodyFormData = new FormData();
      var codesTerritoireParcel = this.$store.state.geoList.map(
        (el) => el.code_territoire
      );
      codesTerritoireParcel = ["mun91114"];
      console.log(codesTerritoireParcel);
      bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
      this.$axios
        .post(
          "https://observatoire-filieres.azurewebsites.net/parcel/belgique/surfaces_actuels_produit",
          codesTerritoireParcel, // Request body data
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          this.data.occupationActuelle = [
            {
              surface: response.data.find(
                (el) =>
                  el.libelle_parcel_produit_actuel ==
                  "Cultures annuelles pour alimentation humaine"
              ).sau_ha,
              name: "Cultures annuelles pour alimentation humaine",
              image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
              color: "#F5A623",
            },
            {
              surface: response.data.find(
                (el) =>
                  el.libelle_parcel_produit_actuel ==
                  "Elevage (dont alimentation & estives et landes)"
              ).sau_ha,
              name: "Elevage (dont alimentation & estives et landes)",
              image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg",
              color: "#B57A60",
            },
            {
              surface: response.data.find(
                (el) => el.libelle_parcel_produit_actuel == "Fruits"
              ).sau_ha,
              name: "fruits",
              image: "/assets/img/icons/cat/ico_CATEGORIES_fruits.svg",
              color: "#A261C0",
            },
            {
              surface: response.data.find(
                (el) => el.libelle_parcel_produit_actuel == "Légumes"
              ).sau_ha,
              name: "légumes",
              image: "/assets/img/icons/cat/ico_CATEGORIES_legumes.svg",
              color: "#91C423",
            },
            {
              surface: response.data.find(
                (el) =>
                  el.libelle_parcel_produit_actuel ==
                  "Elevage (dont alimentation & estives et landes)"
              ).sau_ha,
              name: "Jachères",
              image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
              color: "#9CC347",
            },
            {
              surface: response.data.find(
                (el) =>
                  el.libelle_parcel_produit_actuel ==
                  "Elevage (dont alimentation & estives et landes)"
              ).sau_ha,
              name: "Cultures industrielles hors alimentation",
              image: "/assets/img/icons/cat/ico_CATEGORIES_cereales.svg",
              color: "#62D5F3",
            },
            // {
            //   surface: round(autres_espaces, 0),
            //   name: "Autres surfaces agricoles",
            //   image: "/assets/img/icons/cat/ico_CATEGORIES_viande.svg",
            //   color: "#a9a9a9",
            // },
          ];

          new Treemap()
            .select("#viz2")
            .data(this.data.occupationActuelle)
            .groupBy("name")
            .sum("surface")
            .color("color")
            .height(500)
            .legend(0)
            .tooltip({
              share: false,
            })
            .render();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    nextStep(hash) {
      this.$emit("nextStep", hash);
    },
    formatterSurfacesNecessaires(chiffreSurface) {
      return (
        "Environ " +
        Math.round(chiffreSurface).toLocaleString("fr-FR") +
        " hectares"
      );
    },
  },

  async mounted() {
    this.recupererDonnees();
    await getSurfaceAMobiliser()
      .then((res) => (this.surfaces_a_mobiliser = res))
      .then((res) => {
        pushDataViz(res["surfaces_a_mobiliser_parcel_niveau_1"]);
      });
    this.test = await getSurfaceAMobiliser();
  },
  computed: {
    surfaces_a_mobiliser_parcel_niveau_1_data() {
      return this.surfaces_a_mobiliser_parcel_niveau_1;
    },
  },
  watch: {
    surfaces_a_mobiliser(nouvellevaleur) {
      if (nouvellevaleur) {
        this.surfaces_a_mobiliser_parcel_niveau_1 =
          nouvellevaleur["surfaces_a_mobiliser_parcel_niveau_1"];
      }
    },
  },
};
</script>
