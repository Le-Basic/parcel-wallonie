<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="recherche" :active="3" />
      <div class="section centrervh selec-diet px-0" id="section0">
        <div class="container-fluid px-0">
          <h1 class="animated fadeInUp mb-2">
            Choisissez le régime alimentaire de votre simulation de
            relocalisation
          </h1>

          <div class="note text-center">
            Le choix du régime choisi est un régime moyen pour la population. Il
            peut masquer de fortes disparités selon les individus.
          </div>

          <div class="mt-5 section-80" id="partviande">
            <div
              class="card-diet d-flex align-items-center"
              onclick=" document.getElementById('listDiets').classList.toggle('d-block')"
            >
              <div class="diet d-flex align-items-center" id="dietSelected">
                <img
                  alt=""
                  :src="regimeChoisi.img"
                  width="20"
                  style="padding: 4px"
                />
                <span style="flex: 1; padding: 4px"
                  >{{ regimeChoisi.nom }}
                </span>
              </div>
              <div class="arrows mx-auto">
                <span class="pointer mb-2"></span>
                <span
                  ><img
                    alt=""
                    :src="require('@/assets/img/elements/top.svg')"
                    width="16" />
                  <img
                    alt=""
                    :src="require('@/assets/img/elements/bottom.svg')"
                    width="16"
                /></span>
              </div>
            </div>
            <listeRegime @changementRegime="changementRegime" />
          </div>

          <div class="block-products">
            <div class="text-center text-white title-bloc">
              Faites évoluer la quantité d’aliments dans votre régime par
              rapport au régime actuel moyen (en %)
            </div>
            <div class="">
              <div
                class="row row-products align-items-center justify-content-center"
              >
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_cereales">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-cereales2 icon"></div>
                    <div class="my-auto">Céréales</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCountercereales"
                        >
                          <span
                            class="btn-moins counter-minus"
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES,
                              )
                            "
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            id="tx_cereales"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_huile">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-huile icon"></div>
                    <div class="my-auto">Huile</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounterhuile"
                        >
                          <span
                            class="btn-moins counter-minus"
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE,
                              )
                            "
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            id="tx_huile"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_patates">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-pdt icon"></div>
                    <div class="my-auto">Pommes de terre</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounterpatates"
                        >
                          <span
                            class="btn-moins counter-minus"
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE,
                              )
                            "
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            id="tx_patate"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_legumineuses">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-secs icon"></div>
                    <div class="my-auto">Légumineuses</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounterlegumineuses"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            id="tx_legumineuses"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_legumes">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-legumes2 icon"></div>
                    <div class="my-auto">Légumes</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounterlegumes"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_legumes"
                            id="tx_legumes"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_fruits">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-fruit2 icon"></div>
                    <div class="my-auto">
                      Fruits <br /><span
                        style="font-size: 14px; line-height: 1.1"
                        >(hors oléagineux)</span
                      >
                    </div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounterfruits"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_fruits"
                            id="tx_fruits"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_oleagineux">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-oleagineux icon"></div>
                    <div class="my-auto">Fruits oléagineux</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounteroleagineux"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_oleagineux"
                            id="tx_oleagineux"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_viande_rouge">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-viande-rouge icon"></div>
                    <div class="my-auto">Viande rouge</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounterviande_rouge"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_viande_rouge"
                            id="tx_viande_rouge"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_viande_blanche">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-viande-blanche icon"></div>
                    <div class="my-auto">Viande blanche</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounterviande_blanche"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_viande_blanche"
                            id="tx_viande_blanche"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES
                                  .VIANDE_BLANCHE
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div
                        class="badge mr-auto"
                        id="coeff_tx_produits_laitiers"
                      >
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES
                                .PRODUITS_LAITIERS
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-lait icon"></div>
                    <div class="my-auto">Produits laitiers</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounterproduits_laitiers"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_produits_laitiers"
                            id="tx_produits_laitiers"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES
                                  .PRODUITS_LAITIERS
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_oeufs">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-oeuf icon"></div>
                    <div class="my-auto">Œufs</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCounteroeufs"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_oeufs"
                            id="tx_oeufs"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col col-sm-4 col-md-3 col-lg-3 col-xl-2">
                  <div class="product">
                    <div class="d-flex justify-content-end w-100">
                      <div class="badge mr-auto" id="coeff_tx_oeufs">
                        x
                        {{
                          creerCoefficientMultiplicateur(
                            valeursChangementGroupeAlimentaire[
                              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE
                            ],
                          )
                        }}
                      </div>
                    </div>
                    <div class="icon-sucre icon"></div>
                    <div class="my-auto">Sucre</div>
                    <div
                      class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                    >
                      <span class="nombres-ajout pop">
                        <div
                          class="handle-counter d-flex"
                          id="handleCountersucre"
                        >
                          <span
                            @click="
                              ChangerCompteur(
                                -1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE,
                              )
                            "
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_sucre"
                            id="tx_sucre"
                            :value="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE
                              ]
                            "
                            @input="
                              valeursChangementGroupeAlimentaire[
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE
                              ] = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="
                              ChangerCompteur(
                                1,
                                IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE,
                              )
                            "
                            >+</span
                          >
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                class="nutrition row text-white justify-content-center align-items-center"
              >
                <span
                  class="col-12 col-sm-auto icon-nutrition ico-medium mr-0 mr-sm-4"
                ></span>
                <div class="col text-center text-sm-left">
                  <a
                    href="https://www.health.belgium.be/sites/default/files/uploads/fields/fpshealth_theme_file/20190902_css-9284_fbdg_vweb_0.pdf"
                    target="_blank"
                    class="text-white"
                  >
                    En savoir plus sur les recommandations du
                    <b>Programme National Nutrition Santé</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- conditionnal message danger-->
          <div
            v-if="conclusionRegimeAlimentaireMessage === -1"
            id="message-diet"
            class="danger opacity-0"
          >
            Le régime que vous avez choisi <br />
            <b>s’éloigne trop des recommandations nutritionnelles</b>
          </div>

          <!-- conditionnal message warning-->
          <div
            v-if="conclusionRegimeAlimentaireMessage === 0"
            id="message-diet"
            class="warning"
          >
            Le régime que vous avez choisi <br />
            <b>est éloigné des recommandations nutritionnelles </b>
          </div>

          <div class="container d-block mx-auto" style="max-width: 1200px">
            <div class="jauges row justify-content-center">
              <jaugeRegimeAlimentaire
                iconeCategorieAlimentaire="icon-energie"
                @update:categoriesAlimentaires="
                  changerConclusionRegimeParCategorie($event, 'energieTotale')
                "
                :montreDetailProduits="montreDetailProduits"
                :listeIconesProduits="getListeIconesProduits('Energie Totale')"
                :categoriesAlimentaires="
                  getCategoriesJaugeAlimentaire(CATEGORIE_APPORT_IDS.ENERGIE)
                "
                :valeurMax="
                  getMinMaxJaugeAlimentaire(CATEGORIE_APPORT_IDS.ENERGIE).max
                "
                :valeurMin="
                  getMinMaxJaugeAlimentaire(CATEGORIE_APPORT_IDS.ENERGIE).min
                "
                :valeurJauge="
                  apportsEnergetiques.find(
                    (apport) =>
                      apport.id_apport_energetique ===
                      CATEGORIE_APPORT_IDS.ENERGIE,
                  )?.valeur
                "
              />
              <jaugeRegimeAlimentaire
                titreCategorieAlimentaire="Protéines"
                iconeCategorieAlimentaire="icon-proteine"
                :montreDetailProduits="montreDetailProduits"
                :listeIconesProduits="getListeIconesProduits('Protéines')"
                :categoriesAlimentaires="
                  getCategoriesJaugeAlimentaire(CATEGORIE_APPORT_IDS.PROTEINES)
                "
                :valeurMax="
                  getMinMaxJaugeAlimentaire(CATEGORIE_APPORT_IDS.PROTEINES).max
                "
                :valeurMin="
                  getMinMaxJaugeAlimentaire(CATEGORIE_APPORT_IDS.PROTEINES).min
                "
                :valeurJauge="
                  apportsEnergetiques.find(
                    (apport) =>
                      apport.id_apport_energetique ===
                      CATEGORIE_APPORT_IDS.PROTEINES,
                  )?.valeur ?? 70
                "
                @update:categoriesAlimentaires="
                  changerConclusionRegimeParCategorie($event, 'proteines')
                "
              />

              <jaugeRegimeAlimentaire
                titreCategorieAlimentaire="Glucides"
                iconeCategorieAlimentaire="icon-sucre"
                :montreDetailProduits="montreDetailProduits"
                :listeIconesProduits="getListeIconesProduits('Glucides')"
                :categoriesAlimentaires="
                  getCategoriesJaugeAlimentaire(CATEGORIE_APPORT_IDS.GLUCIDES)
                "
                :valeurMax="
                  getMinMaxJaugeAlimentaire(CATEGORIE_APPORT_IDS.GLUCIDES).max
                "
                :valeurMin="
                  getMinMaxJaugeAlimentaire(CATEGORIE_APPORT_IDS.GLUCIDES).min
                "
                :valeurJauge="
                  apportsEnergetiques.find(
                    (apport) =>
                      apport.id_apport_energetique ===
                      CATEGORIE_APPORT_IDS.GLUCIDES,
                  )?.valeur ?? 300
                "
                @update:categoriesAlimentaires="
                  changerConclusionRegimeParCategorie($event, 'glucides')
                "
              />

              <jaugeRegimeAlimentaire
                titreCategorieAlimentaire="Lipides"
                iconeCategorieAlimentaire="icon-lipides"
                :montreDetailProduits="montreDetailProduits"
                :listeIconesProduits="getListeIconesProduits('Lipides')"
                :categoriesAlimentaires="
                  getCategoriesJaugeAlimentaire(CATEGORIE_APPORT_IDS.LIPIDES)
                "
                :valeurMax="
                  getMinMaxJaugeAlimentaire(CATEGORIE_APPORT_IDS.LIPIDES).max
                "
                :valeurMin="
                  getMinMaxJaugeAlimentaire(CATEGORIE_APPORT_IDS.LIPIDES).min
                "
                :valeurJauge="
                  apportsEnergetiques.find(
                    (apport) =>
                      apport.id_apport_energetique ===
                      CATEGORIE_APPORT_IDS.LIPIDES,
                  )?.valeur ?? 70
                "
                @update:categoriesAlimentaires="
                  changerConclusionRegimeParCategorie($event, 'lipides')
                "
              />
              <jaugeRegimeAlimentaire
                titreCategorieAlimentaire="Fibres"
                iconeCategorieAlimentaire="icon-fibres"
                :montreDetailProduits="montreDetailProduits"
                :listeIconesProduits="getListeIconesProduits('Fibres')"
                :categoriesAlimentaires="
                  getCategoriesJaugeAlimentaire(
                    CATEGORIE_APPORT_IDS.FIBRES_ALIMENTAIRES,
                  )
                "
                :valeurMax="
                  getMinMaxJaugeAlimentaire(
                    CATEGORIE_APPORT_IDS.FIBRES_ALIMENTAIRES,
                  ).max
                "
                :valeurMin="
                  getMinMaxJaugeAlimentaire(
                    CATEGORIE_APPORT_IDS.FIBRES_ALIMENTAIRES,
                  ).min
                "
                :valeurJauge="
                  apportsEnergetiques.find(
                    (apport) =>
                      apport.id_apport_energetique ===
                      CATEGORIE_APPORT_IDS.FIBRES_ALIMENTAIRES,
                  )?.valeur ?? 20
                "
                @update:categoriesAlimentaires="
                  changerConclusionRegimeParCategorie($event, 'fibres')
                "
              />
            </div>
          </div>
          <div class="text-center">
            <a
              class="d-flex justify-content-center detailproductscollapse"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="collapseProducts"
              @click="montreDetailProduits = !montreDetailProduits"
            >
              <div>Quels aliments contribuent à chaque apport ?</div>
            </a>
          </div>
        </div>
        <div class="div-continuer animated fadeInUp">
          <router-link
            id="btn_retour_regime"
            to="/3-type-dalimentation?regime=perso"
            ><button type="button" class="btn btn-principal mt-5">
              Valider ce régime
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO
// dispatch regime choisi
// dispatch pourcentage de changement par rapport au regime actuel
// TODO: creer objet pour les valeurs des différents régimes

import { IDS_CATEGORIES_REGIMES_ALIMENTAIRES } from "@/config/categorieRegimeIds";
import { MAP_CATEGORIE_PRODUITS_DETAILLES } from "@/config/categorieProduitsDetaillés";
import { GROUPES_ALIMENTAIRES } from "@/config/GroupesAlimentaires";
import listeRegime from "@/views/modal/listeRegime.vue";
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { regimeListe } from "@/config/regimeListe";
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import { MapProduitsCoefficientMultiplicateurRegime } from "@/plugins/utils";
import jaugeRegimeAlimentaire from "@/components/visualisation/jaugeRegimeAlimentaire.vue";
import {
  getListeIconesProduits,
  getCategoriesJaugeAlimentaire,
  getMinMaxJaugeAlimentaire,
  CATEGORIE_APPORT_IDS,
} from "@/config/categorieApports.js";
import { fetchCoefficientsGroupesAlimentaires } from "@/plugins/getCoefficientsGroupesAlimentaires";
import { fetchApportsEnergetiques } from "@/plugins/getApportsEnergetiques";
import { IDS_REGIMES_ALIMENTAIRES } from "@/config/regimeIds";

const store = useStore();
const _ = require("lodash");

// TODO: mettre ca en configuration
const regimeChoisi = ref({
  nom: "Régime actuel",
  img: require("@/assets/img/parcours/regime-actuel.svg"),
  nomCourt: "actuel",
});

const valeursChangementGroupeAlimentaire = ref({
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS]: 0,
  [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE]: 0,
});

const apportsEnergetiques = ref([]);

const coefficientMultiplicateurVolumeCategorieRegime = computed(() => {
  return {
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE]: creerCoefficientMultiplicateur(
      valeursChangementGroupeAlimentaire.value[
        IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE
      ],
    ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS]:
      creerCoefficientMultiplicateur(
        valeursChangementGroupeAlimentaire.value[
          IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS
        ],
      ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS]: creerCoefficientMultiplicateur(
      valeursChangementGroupeAlimentaire.value[
        IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS
      ],
    ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE]: creerCoefficientMultiplicateur(
      valeursChangementGroupeAlimentaire.value[
        IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE
      ],
    ),
  };
});

// régime par défaut, tous les coefficients multiplicateurs sont à 1
const coefficientMultiplicateurVolumeCategorieRegimeChoisi = ref(
  coefficientMultiplicateurVolumeCategorieRegime.value,
);

watch(
  coefficientMultiplicateurVolumeCategorieRegime,
  (nouveauCoefficientMultiplicateur) => {
    console.log(
      "nouveauCoefficientMultiplicateur",
      nouveauCoefficientMultiplicateur,
    );
    console.log(
      "coefficientMultiplicateurVolumeCategorieRegimeChoisi",
      coefficientMultiplicateurVolumeCategorieRegimeChoisi.value,
    );
    if (
      _.isEqual(
        nouveauCoefficientMultiplicateur,
        coefficientMultiplicateurVolumeCategorieRegimeChoisi.value,
      )
    ) {
      console.log("chgt de régime");
    } else {
      console.log("chgt de valeurs", nouveauCoefficientMultiplicateur);
      changementRegime("personnalisé");
      let coefficientMultiplicateurProduits =
        MapProduitsCoefficientMultiplicateurRegime(
          MAP_CATEGORIE_PRODUITS_DETAILLES,
          nouveauCoefficientMultiplicateur,
        );
      store.commit(
        "mutationPctDiffRegimePersonnalise",
        coefficientMultiplicateurProduits,
      );

      // transform the key to string
      const coefficientsApportsEnergetiquesApi = Object.entries(
        nouveauCoefficientMultiplicateur,
      ).map(([id, coefficient]) => ({
        id_groupe_alimentaire: id,
        coefficient_multiplicateur: coefficient,
      }));

      fetchApportsEnergetiques(
        "https://api.basic.coop/parcel/belgique/apports_energetiques",
        coefficientsApportsEnergetiquesApi,
      ).then((apports) => {
        apportsEnergetiques.value = apports;
      });
    }
  },
);

watch(regimeChoisi, (nouvelleValeur) => {
  store.commit("mutationRegimeAlimentaire", nouvelleValeur);
  console.log("regimeChoisi", nouvelleValeur.id);
  if (nouvelleValeur.id != IDS_REGIMES_ALIMENTAIRES.PERSONNALISE) {
    fetchApportsEnergetiques(
      "https://api.basic.coop/parcel/belgique/apports_energetiques",
      listeCoefficientMultiplicateurVolumeCategorieRegimeChoisi,
    ).then((apports) => {
      apportsEnergetiques.value = apports;
    });
    // TODO: REFACTO ET SIMPLIFICATION
    console.log("fetchCoefficientsGroupesAlimentaires");
    fetchCoefficientsGroupesAlimentaires({
      url: "https://api.basic.coop/parcel/belgique/coefficients_groupes_alimentaires",
      idRegimeAlimentaire: nouvelleValeur.id,
    })
      .then((coefficients) => {
        let coefficientsMultiplaceteursNouveauxRegimes = {
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES]: coefficients.find(
            (c) => c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.CEREALES.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE]: coefficients.find(
            (c) => c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.HUILE.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE]: coefficients.find(
            (c) => c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.PATATE.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES]: coefficients.find(
            (c) =>
              c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.LEGUMINEUSES.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES]: coefficients.find(
            (c) => c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.LEGUMES.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS]: coefficients.find(
            (c) => c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.FRUITS.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX]: coefficients.find(
            (c) =>
              c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.OLEAGINEUX.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE]: coefficients.find(
            (c) =>
              c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.VIANDE_ROUGE.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE]:
            coefficients.find(
              (c) =>
                c.id_groupe_alimentaire ===
                GROUPES_ALIMENTAIRES.VIANDE_BLANCHE.id,
            ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS]:
            coefficients.find(
              (c) =>
                c.id_groupe_alimentaire ===
                GROUPES_ALIMENTAIRES.PRODUITS_LAITIERS.id,
            ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS]: coefficients.find(
            (c) => c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.OEUFS.id,
          ).valeur,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE]: coefficients.find(
            (c) => c.id_groupe_alimentaire === GROUPES_ALIMENTAIRES.SUCRE.id,
          ).valeur,
        };
        coefficientMultiplicateurVolumeCategorieRegimeChoisi.value =
          coefficientsMultiplaceteursNouveauxRegimes;
        return coefficientsMultiplaceteursNouveauxRegimes;
      })
      .then((coefficientsMultiplaceteursNouveauxRegimes) => {
        valeursChangementGroupeAlimentaire.value = {
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE]:
            (coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE
            ] -
              1) *
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS
            ] *
              100 -
            100,
          [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE]:
            coefficientsMultiplaceteursNouveauxRegimes[
              IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE
            ] *
              100 -
            100,
        };
      });
  }
});

// TODO refacto doit exister quelque part
function changementRegime(regime) {
  regimeChoisi.value = regimeListe.find((r) => r.nomCourt === regime);
}

const ChangerCompteur = (sens, cle) => {
  valeursChangementGroupeAlimentaire.value[cle] =
    5 * sens + Number.parseFloat(valeursChangementGroupeAlimentaire.value[cle]);
};

function creerCoefficientMultiplicateur(compteur) {
  let valeur = 1 + Number.parseFloat(compteur / 100);
  return Number(Number.parseFloat(valeur).toFixed(2));
}

const conclusionRegime = ref([
  {
    categorieApportRegimeAlimentaire: "energieTotale",
    valeur: 0,
  },
  {
    categorieApportRegimeAlimentaire: "proteines",
    valeur: 0,
  },
  {
    categorieApportRegimeAlimentaire: "glucides",
    valeur: 0,
  },
  {
    categorieApportRegimeAlimentaire: "lipides",
    valeur: 0,
  },
  {
    categorieApportRegimeAlimentaire: "fibres",
    valeur: 0,
  },
]);

// Fonction pour passer si on a assez ou pas d'un certain apport
// -1 fort déficit, 0 léger déficit, 1 correct
function changerConclusionRegimeParCategorie(valeur, categorieRegimeAChanger) {
  let nouvelleValeur = 0;
  switch (valeur) {
    case "fort":
      nouvelleValeur = -1;
      break;
    case "leger":
      nouvelleValeur = 0;
      break;
    case "correct":
      nouvelleValeur = 1;
      break;
  }
  conclusionRegime.value = conclusionRegime.value.map((categorie) => {
    if (
      categorie.categorieApportRegimeAlimentaire !== categorieRegimeAChanger
    ) {
      return categorie;
    }
    return {
      categorieApportRegimeAlimentaire:
        categorie.categorieApportRegimeAlimentaire,
      valeur: nouvelleValeur,
    };
  });
}

function categorieApportRegimeAlimentaire() {
  return conclusionRegime.value.reduce(
    (acc, categorie) => Math.min(acc, categorie.valeur),
    1,
  );
}

const conclusionRegimeAlimentaireMessage = computed(() => {
  return categorieApportRegimeAlimentaire();
});

const listeCoefficientMultiplicateurVolumeCategorieRegimeChoisi = computed(
  () => {
    //parse json dict
    return Object.keys(
      coefficientMultiplicateurVolumeCategorieRegimeChoisi.value,
    ).map((key) => ({
      id_groupe_alimentaire: key,
      coefficient_multiplicateur:
        coefficientMultiplicateurVolumeCategorieRegimeChoisi.value[key],
    }));
  },
);

watch(
  listeCoefficientMultiplicateurVolumeCategorieRegimeChoisi,
  (nouveauCoefficientMultiplicateur) => {
    fetchApportsEnergetiques(
      "https://api.basic.coop/parcel/belgique/apports_energetiques",
      nouveauCoefficientMultiplicateur,
    ).then((nouveauxApports) => {
      console.log("APPORTS", nouveauxApports);
      apportsEnergetiques.value = nouveauxApports;
    });
  },
  { immediate: true },
);

const montreDetailProduits = ref(false);
</script>

<style scoped>
.nombre {
  height: auto !important;
}

.section-80 {
  width: 80%;
  margin: auto;
  margin-bottom: 64px;
}

.detailproductscollapse {
  background: url("/public/img/fleches/fleche-bouton-vert.svg") no-repeat left
    15px center;
  text-decoration: none;
  max-width: 465px;
  margin: 0 auto 4rem;
  text-align: left;
  margin-top: 2rem;
  font-size: 16px;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  color: #4a4a4a;
  letter-spacing: 0;
  line-height: 21px;
  cursor: pointer;
}
</style>
