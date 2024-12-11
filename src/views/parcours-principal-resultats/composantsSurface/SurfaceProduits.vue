<template>
  <section
    :class="{
      'main-sans-modal': modalDetails != null,
    }"
  >
    <div class="bloc-surface">
      <modalDetail
        v-if="modalDetails"
        :modalId="modalDetails"
        @fermerModal="fermerModalDetails"
      ></modalDetail>
      <div class="intro">
        La vue produit illustre la répartition des surfaces agricoles en
        fonction des types de produits alimentaires, par exemple, les hectares
        destinés aux céréales et fourrages pour la production de viande sont
        repris dans la catégorie “Viande et oeufs” et “Produits laitiers”.
      </div>
      <h3 class="text-center">Surface agricole à mobiliser</h3>
      <div
        class="cadre-resultat resultat-ha animated flipInX delay-05s bg-vert-clair"
      >
        <div class="d-inline-flex align-items-center">
          <div
            class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme surface_potentiel"
            id="surface_potentiel6"
          >
            <div
              class="odometer-inside"
              v-if="this.$store.state.resultatSimulation.surfaceAMobiliser"
            >
              {{
                formatterChiffres(
                  Math.round(
                    this.$store.state.resultatSimulation.surfaceAMobiliser
                  )
                )
              }}
            </div>
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
              min-height: 550px;
            "
          >
            <RepartitionSurface
              :serieDonnees="repartitionSurfacePotentielNourricier"
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
              this.$store.state.resultatSimulation.surfacesEmploisAMobiliser
            "
          >
            <thead></thead>
            <tbody>
              <tr>
                <td colspan="5" @click="ouvrirModal('detailsLegumes')">
                  <div
                    class="cadre-categorie legumes animated fadeIn delay-1s"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-legumes"
                    style="cursor: pointer"
                  >
                    <div class="" id="pc1" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES
                                .libelle,
                              'part_surface_a_mobiliser',
                              'libelle_parcel_niveau_1'
                            )
                          )
                        "
                        couleur="#91C423"
                        :key="this.$store.state.resultatSimulation"
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                      >
                      </span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">Légumes</div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_niveau_1",
                              this.chiffreApresVirgule
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
                    <div class="" id="pc2" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS
                                .libelle,
                              'part_surface_a_mobiliser',
                              'libelle_parcel_niveau_1'
                            )
                          )
                        "
                        couleur="#A261C0"
                        :key="this.$store.state.resultatSimulation"
                      ></jaugeChart>
                    </div>
                    <div>
                      <span
                        class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">Fruits</div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_niveau_1",
                              this.chiffreApresVirgule
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
                    <div class="" id="pc3" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES
                                .libelle,
                              'part_surface_a_mobiliser',
                              'libelle_parcel_niveau_1'
                            )
                          )
                        "
                        couleur="#F9B233"
                        :key="this.$store.state.resultatSimulation"
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">
                        Céréales et grandes cultures (hors alimentation animale)
                      </div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_niveau_1",
                              this.chiffreApresVirgule
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
                    <div class="" id="pc4" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE
                                .libelle,
                              'part_surface_a_mobiliser',
                              'libelle_parcel_niveau_1'
                            )
                          )
                        "
                        couleur="#B57A60"
                        :key="this.$store.state.resultatSimulation"
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-ico_CATEGORIES_viande ico-medium viande"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">
                        Viande, oeufs et produits laitiers
                      </div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_niveau_1",
                              this.chiffreApresVirgule
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
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie text-vert-bio animated fadeIn delay-2-5s"
                  >
                    <div class="" id="pc4" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.BIODIV
                                .libelle,
                              'part_surface_a_mobiliser',
                              'libelle_parcel_niveau_1'
                            )
                          )
                        "
                        :couleur="
                          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.BIODIV.couleur
                        "
                        :key="this.$store.state.resultatSimulation"
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-impact-biodiversite ico-medium text-vert-bio"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">
                        Espace de protection de biodiversité
                      </div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesEmploisAMobiliser,
                              CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.BIODIV
                                .libelle,
                              "surface_a_mobiliser",
                              "libelle_parcel_niveau_1",
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
            id="surface_act8"
          >
            <div class="odometer-inside">
              {{
                formatterChiffres(
                  Math.round(
                    this.$store.state.resultatSimulation.surfacesActuelles
                  )
                )
              }}
            </div>
          </div>
          <div class="hectares animated fadeIn delay-1-5s">
            hectares agricoles
          </div>
        </div>
      </div>

      <div class="no-data no-data-viz2" v-if="false">
        Désolé, nous n'avons pas de données suffisantes pour afficher ce
        graphique
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
            style="background-color: #fff; height: 100%; min-height: 550px"
          >
            <RepartitionSurface :serieDonnees="repartitionSurfaceActuelles" />
          </div>
        </div>
        <div class="wrap-viz2 resultats-categories repartition delay-1s">
          <table
            summary="Resultats"
            class="auto-style1 w-100"
            id="ProdCategoryresultsTable"
            border="1"
            v-if="
              this.$store.state.resultatSimulation
                .surfacesActuellesParcelNiveau1
            "
          >
            <thead></thead>
            <tbody>
              <tr>
                <td colspan="5">
                  <div
                    class="cadre-categorie cereales animated fadeIn delay-1s"
                  >
                    <div class="" id="ppc1" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.CEREALES
                                .code,
                              'part_surfaces_actuelles',
                              'code_parcel'
                            )
                          )
                        "
                        couleur="#F9B233"
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">
                        Céréales et grandes cultures (hors alimentation animale)
                      </div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.CEREALES
                                .code,
                              "sau_ha",
                              "code_parcel"
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
                  <div class="cadre-categorie viande animated fadeIn delay-1s">
                    <div class="" id="ppc2" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.ELEVAGE
                                .code,
                              'part_surfaces_actuelles',
                              'code_parcel'
                            )
                          )
                        "
                        :couleur="
                          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.ELEVAGE.couleur
                        "
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-ico_CATEGORIES_viande ico-medium viande"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">
                        Viande, oeufs et produits laitiers
                      </div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.ELEVAGE
                                .code,
                              "sau_ha",
                              "code_parcel"
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
                  <div class="cadre-categorie fruits animated fadeIn delay-1s">
                    <div class="" id="ppc3" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.FRUITS.code,
                              'part_surfaces_actuelles',
                              'code_parcel'
                            )
                          )
                        "
                        :couleur="
                          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.FRUITS.couleur
                        "
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">Fruits</div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.FRUITS.code,
                              "sau_ha",
                              "code_parcel"
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
                  <div class="cadre-categorie legumes animated fadeIn delay-1s">
                    <div class="" id="ppc4" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.LEGUMES
                                .code,
                              'part_surfaces_actuelles',
                              'code_parcel'
                            )
                          )
                        "
                        :couleur="
                          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.LEGUMES.couleur
                        "
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">Légumes</div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.LEGUMES
                                .code,
                              "sau_ha",
                              "code_parcel"
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
                  <div class="cadre-categorie jachere animated fadeIn delay-1s">
                    <div class="" id="ppc5" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.JACHERES
                                .code,
                              'part_surfaces_actuelles',
                              'code_parcel'
                            )
                          )
                        "
                        :couleur="
                          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.JACHERES.couleur
                        "
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span class="icon-jachere ico-medium jachere"></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">Jachères</div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.JACHERES
                                .code,
                              "sau_ha",
                              "code_parcel"
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
                    class="cadre-categorie animated fadeIn delay-1s autreindus"
                  >
                    <div class="" id="ppc5" style="width: 65px; height: 65px">
                      <jaugeChart
                        :value="
                          Math.round(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.INDUSTRIE
                                .code,
                              'part_surfaces_actuelles',
                              'code_parcel'
                            )
                          )
                        "
                        :couleur="
                          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.INDUSTRIE
                            .couleur
                        "
                      ></jaugeChart>
                    </div>
                    <div class="">
                      <span
                        class="icon-autres-cultures autreindus ico-medium"
                      ></span>
                    </div>
                    <div class="cadre-titre-categorie">
                      <div class="titre-categorie">
                        Autres cultures industrielles (hors alimentation
                        humaine)
                      </div>
                      <div class="hectares">
                        {{
                          formatterSurfacesNecessaires(
                            trouverChiffre(
                              this.$store.state.resultatSimulation
                                .surfacesActuellesParcelNiveau1,
                              CATEGORIE_PRODUITS_SURFACES_ACTUELLES.INDUSTRIE
                                .code,
                              "sau_ha",
                              "code_parcel"
                            )
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
                    class=""
                    id="ppc6"
                    style="width: 65px; height: 65px"
                  ></div>
                  <div class="">
                    <span
                      class="icon-autres-cultures ico-medium autreindus"
                    ></span>
                  </div>
                  <div class="">
                    <div class="titre-categorie">
                      Cultures industrielles hors alimentation
                    </div>
                    <div
                      class="hectares"

                    >
                      {{ this.occupationActuelle[6]["surface"] }}
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
          >
            {{ this.potentielNourricier }}
          </div>
          <div class="hectares animated fadeIn delay-1-5s">%</div>
        </div>
      </div>
      <div id="bar-pn">
        <div id="horizontal-bar-pn">
          <div class="row align-items-center bar-line mx-0">
            <div class="col-legend">
              <div class="row align-items-center">
                <div
                  class="order-1 order-md-0 col-12 col-md-7 text-right"
                ></div>
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
                  :style="{ left: this.positionGaucheBarreVerticale }"
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
                <div
                  class="order-1 order-md-0 col-12 col-md text-right col-text"
                >
                  <b>Légumes</b>
                </div>
                <div class="order-0 order-md-1 col-12 col-md-auto">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="col-icon">
                      <span
                        class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                      ></span>
                    </div>
                    <div class="col-pourcent legumes" id="potentiel_legumes">
                      {{
                        formatterPotentielNourricier(potentielNourricierLegumes)
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div
                class="bar bg-vert-clair"
                :style="{
                  width:
                    (potentielNourricierLegumes / maxPotentielsEt1) * 100 + '%',
                }"
              ></div>
            </div>
          </div>
          <div class="row align-items-center bar-line mx-0" id="bar-fruits">
            <div class="col-legend">
              <div class="row align-items-center">
                <div
                  class="order-1 order-md-0 col-12 col-md text-right col-text"
                >
                  <b>Fruits</b>
                </div>
                <div class="order-0 order-md-1 col-12 col-md-auto">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="col-icon">
                      <span
                        class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                      ></span>
                    </div>
                    <div class="col-pourcent fruits" id="potentiel_fruits">
                      {{
                        formatterPotentielNourricier(potentielNourricierFruits)
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8" id="bar_pot_container">
              <div
                class="bar bg-fruits"
                :style="{
                  width:
                    (potentielNourricierFruits / maxPotentielsEt1) * 100 + '%',
                }"
              ></div>
            </div>
          </div>
          <div class="row align-items-center bar-line mx-0" id="bar-cereales">
            <div class="col-legend">
              <div class="row align-items-center">
                <div
                  class="order-1 order-md-0 col-12 col-md text-right col-text"
                >
                  <b
                    >Céréales et grandes cultures (hors alimentation animale)</b
                  >
                </div>
                <div class="order-0 order-md-1 col-12 col-md-auto">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="col-icon">
                      <span
                        class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                      ></span>
                    </div>
                    <div class="col-pourcent cereales" id="potentiel_cereales">
                      {{
                        formatterPotentielNourricier(
                          potentielNourricierCereales
                        )
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div
                class="bar bg-cereales"
                :style="{
                  width:
                    (potentielNourricierCereales / maxPotentielsEt1) * 100 +
                    '%',
                }"
              ></div>
            </div>
          </div>
          <div class="row align-items-center bar-line mx-0" id="bar-viande">
            <div class="col-legend">
              <div class="row align-items-center">
                <div
                  class="order-1 order-md-0 col-12 col-md text-right col-text"
                >
                  <b>Viande, oeufs et produits laitiers</b>
                </div>
                <div class="order-0 order-md-1 col-12 col-md-auto">
                  <div class="d-flex align-items-center justify-content-end">
                    <div class="col-icon">
                      <span
                        class="icon-ico_CATEGORIES_viande ico-medium viande"
                      ></span>
                    </div>
                    <div class="col-pourcent viande" id="potentiel_elevage">
                      {{
                        formatterPotentielNourricier(potentielNourricierElevage)
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div
                class="bar bg-viande"
                :style="{
                  width:
                    (potentielNourricierElevage / maxPotentielsEt1) * 100 + '%',
                }"
              ></div>
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
      <div class="div-continuer">
        <button
          class="btn btn-secondaire mt-5"
          @click="modalActive = 'ModalComparaisonProduit'"
        >
          Comparaison actuel / simulation
        </button>
        <button
          type="button"
          class="btn btn-principal mt-5"
          @click="nextStep('#paysage')"
        >
          Suivant
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
                      ><strong
                        >en pourcentage de surfaces cultivées</strong
                      ></span
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
                      ><strong
                        >en pourcentage de surfaces cultivées</strong
                      ></span
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
                      ><strong
                        >en pourcentage de surfaces cultivées</strong
                      ></span
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
                l’alimentation de l’élevage (prairies, céréales, tourteaux,
                etc.)
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
                      ><strong
                        >en pourcentage de surfaces cultivées</strong
                      ></span
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
                    En plus de ces surfaces à mobiliser, ces productions
                    animales nécessitent environ
                    <span id="surfaceimport"></span> hectares de surfaces
                    importées (tourteaux etc.)
                  </div>
                </div>
              </div>
            </div>
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
  </section>
</template>

<script>
import { formatterChiffres } from "@/plugins/surfaceProduits";
import { CATEGORIE_PRODUITS_SURFACES_ACTUELLES } from "@/config/categorieProduitsActuel";
import {
  CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER,
  CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE,
} from "@/config/categorieProduitsPotentielNourricier";
import { trouverChiffre } from "@/plugins/utils";
import modalDetail from "@/views/modal/modalDetail.vue";
import jaugeChart from "@/components/visualisation/jaugeChart.vue";
import RepartitionSurface from "@/components/visualisation/RepartitionSurface.vue";
import { FormatterPourcentage } from "@/plugins/utils";
import ModalComposant from "@/views/modal/ModalComposant.vue";
import InformationBox from "@/components/bas-niveau/InformationBox";
export default {
  inject: ["$axios"],
  emits: ["nextStep", "fermerModal", "ouvrirModal"],
  components: {
    modalDetail,
    jaugeChart,
    RepartitionSurface,
    ModalComposant,
    InformationBox,
  },
  data() {
    return {
      CATEGORIE_PRODUITS_SURFACES_ACTUELLES,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER,
      occupationActuelle: [],
      surfaces_emplois_a_mobiliser_parcel_niveau_1: [],
      modalDetails: "",
      modalActive: "",
      chiffreApresVirgule:
        this.$store.state.resultatSimulation.surfaceAMobiliser < 100 ? 1 : 0,
    };
  },
  methods: {
    trouverChiffre,
    formatterChiffres,
    FormatterPourcentage,
    ouvrirModal(id) {
      console.log(id);
      this.modalDetails = id;
      console.log(this.modalDetails);
      this.$emit("ouvrirModal");
    },

    nextStep(hash) {
      console.log("nextStep", hash);
      window.scrollTo(0, 0);
      this.$emit("nextStep", hash);
      this.$router.replace({ hash: hash });
    },
    formatterSurfacesNecessaires(chiffreSurface) {
      return "Environ " + chiffreSurface.toLocaleString("fr-FR") + " hectares";
    },
    fermerModalDetails() {
      this.modalDetails = "";
      this.$emit("fermerModal");
      console.log("hello", this.modalDetails);
    },
    fermerModalComparaison() {
      this.modalActive = "";
    },
    formatterPotentielNourricier(potentielNourricier) {
      if (potentielNourricier > 5) {
        return "+500%";
      } else {
        return FormatterPourcentage(potentielNourricier);
      }
    },
  },

  computed: {
    surfaces_emplois_a_mobiliser_parcel_niveau_1_data() {
      return this.surfaces_emplois_a_mobiliser_parcel_niveau_1;
    },
    occupationActuelleTotale() {
      return Math.round(
        this.occupationActuelle.reduce((acc, item) => acc + item.surface, 0)
      );
    },
    surfacesActuelles() {
      return this.occupationActuelle.map((item) => {
        return {
          ...item,
          part: Math.round(
            (item.surface * 100) / this.occupationActuelleTotale
          ),
        };
      });
    },
    repartitionSurfacePotentielNourricier() {
      let data = [];
      for (const [, value] of Object.entries(
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE
      )) {
        value.partAMobiliser = trouverChiffre(
          this.$store.state.resultatSimulation.surfacesEmploisAMobiliser,
          value.libelle,
          "part_surface_a_mobiliser",
          "libelle_parcel_niveau_2",
          3
        );
        value.partAMobiliser = parseFloat(value.partAMobiliser).toFixed(
          this.chiffreApresVirgule
        );
        let donnePourGraphique = {
          value: value.partAMobiliser,
          name: value.libelle_affichage,
          itemStyle: {
            color: value.couleur,
          },
        };
        data = [...data, donnePourGraphique];
      }
      return data;
    },

    repartitionSurfaceActuelles() {
      let data = [];
      for (const [, value] of Object.entries(
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES
      )) {
        value.part_surfaces_actuelles = Math.round(
          trouverChiffre(
            this.$store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
            value.code,
            "part_surfaces_actuelles",
            "code_parcel",
            3
          )
        );
        let donnePourGraphique = {
          value: value.part_surfaces_actuelles,
          name: value.libelle,
          itemStyle: {
            color: value.couleur,
          },
        };
        data = [...data, donnePourGraphique];
      }
      return data;
    },
    potentielNourricier() {
      return this.$store.state.resultatSimulation.potentielNourricier;
    },
    potentielNourricierCereales() {
      return (
        trouverChiffre(
          this.$store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.CEREALES.code,
          "sau_ha",
          "code_parcel"
        ) /
        trouverChiffre(
          this.$store.state.resultatSimulation.surfacesEmploisAMobiliser,
          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES.libelle,
          "surface_a_mobiliser",
          "libelle_parcel_niveau_1"
        )
      );
    },
    potentielNourricierLegumes() {
      return (
        trouverChiffre(
          this.$store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.LEGUMES.code,
          "sau_ha",
          "code_parcel"
        ) /
        trouverChiffre(
          this.$store.state.resultatSimulation.surfacesEmploisAMobiliser,
          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle,
          "surface_a_mobiliser",
          "libelle_parcel_niveau_1"
        )
      );
    },
    potentielNourricierFruits() {
      return (
        trouverChiffre(
          this.$store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.FRUITS.code,
          "sau_ha",
          "code_parcel"
        ) /
        trouverChiffre(
          this.$store.state.resultatSimulation.surfacesEmploisAMobiliser,
          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.libelle,
          "surface_a_mobiliser",
          "libelle_parcel_niveau_1"
        )
      );
    },
    potentielNourricierElevage() {
      return (
        trouverChiffre(
          this.$store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
          CATEGORIE_PRODUITS_SURFACES_ACTUELLES.ELEVAGE.code,
          "sau_ha",
          "code_parcel"
        ) /
        trouverChiffre(
          this.$store.state.resultatSimulation.surfacesEmploisAMobiliser,
          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.libelle,
          "surface_a_mobiliser",
          "libelle_parcel_niveau_1"
        )
      );
    },
    maxPotentielsEt1() {
      return Math.max(
        Math.min(this.potentielNourricierCereales, 4),
        Math.min(this.potentielNourricierElevage, 4),
        Math.min(this.potentielNourricierFruits, 4),
        Math.min(this.potentielNourricierLegumes, 4),
        1
      );
    },
    positionGaucheBarreVerticale() {
      return (
        "calc(" + Math.min(0.5, 1 / this.maxPotentielsEt1) * 100 + "% - 20px)"
      );
    },
  },
};
</script>

<style scoped>
.main-sans-modal {
  overflow: hidden;
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

.result-plus {
  margin: auto;
}

.autreindus {
  border-color: #62d5f3;
  color: #62d5f3;
}

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
