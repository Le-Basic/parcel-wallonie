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
                        x {{ creerCoefficientMultiplicateur(cereales) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Céréales')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurCereales(-1)"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            id="tx_cereales"
                            :value="cereales"
                            @input="cereales = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurCereales(1)"
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
                        x {{ creerCoefficientMultiplicateur(huile) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Huile')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurHuile(-1)"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            id="tx_huile"
                            :value="huile"
                            @input="huile = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurHuile(1)"
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
                        x {{ creerCoefficientMultiplicateur(patate) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Pomme de terre')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurPatate(-1)"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            id="tx_patate"
                            :value="patate"
                            @input="patate = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurPatate(1)"
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
                        x {{ creerCoefficientMultiplicateur(legumineuses) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Légumineuses')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurLegumineuses(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            id="tx_legumineuses"
                            :value="legumineuses"
                            @input="legumineuses = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurLegumineuses(1)"
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
                        x {{ creerCoefficientMultiplicateur(legumes) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Légumes')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurLegumes(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_legumes"
                            id="tx_legumes"
                            :value="legumes"
                            @input="legumes = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurLegumes(1)"
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
                        x {{ creerCoefficientMultiplicateur(fruits) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Fruits (hors oléagineux)')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurFruits(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_fruits"
                            id="tx_fruits"
                            :value="fruits"
                            @input="fruits = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurFruits(1)"
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
                        x {{ creerCoefficientMultiplicateur(oleagineux) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Fruits oléagineux')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurOleagineux(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_oleagineux"
                            id="tx_oleagineux"
                            :value="oleagineux"
                            @input="oleagineux = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurOleagineux(1)"
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
                        x {{ creerCoefficientMultiplicateur(viandeRouge) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Viande rouge')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurViandeRouge(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_viande_rouge"
                            id="tx_viande_rouge"
                            :value="viandeRouge"
                            @input="viandeRouge = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurViandeRouge(1)"
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
                        x {{ creerCoefficientMultiplicateur(viandeBlanche) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Viande blanche')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurViandeBlanche(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_viande_blanche"
                            id="tx_viande_blanche"
                            :value="viandeBlanche"
                            @input="viandeBlanche = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurViandeBlanche(1)"
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
                        x {{ creerCoefficientMultiplicateur(produitsLaitiers) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Produits laitiers')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurProduitsLaitiers(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_produits_laitiers"
                            id="tx_produits_laitiers"
                            :value="produitsLaitiers"
                            @input="
                              produitsLaitiers = Number($event.target.value)
                            "
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurProduitsLaitiers(1)"
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
                        x {{ creerCoefficientMultiplicateur(oeufs) }}
                      </div>
                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Œufs')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurOeufs(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_oeufs"
                            id="tx_oeufs"
                            :value="oeufs"
                            @input="oeufs = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurOeufs(1)"
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
                        x {{ creerCoefficientMultiplicateur(sucre) }}
                      </div>

                      <a
                        data-toggle="modal"
                        data-target="#detailProduct"
                        style="cursor: pointer"
                        onclick="modaldetail('Sucre')"
                        ><img
                          src="@/assets/img/parcours/nutrition-more.svg"
                          alt=""
                      /></a>
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
                            @click="ChangerCompteurSucre(-1)"
                            class="btn-moins counter-minus"
                            >-</span
                          >
                          <input
                            type="number"
                            class="nombre groupe"
                            name="tx_sucre"
                            id="tx_sucre"
                            :value="sucre"
                            @input="sucre = Number($event.target.value)"
                          />
                          <span
                            class="btn-plus counter-plus"
                            @click="ChangerCompteurSucre(1)"
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
                    href="https://solidarites-sante.gouv.fr/IMG/pdf/pnns4_2019-2023.pdf"
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
          <div id="message-diet" class="danger opacity-0">
            Le régime que vous avez choisi <br />
            <b>s’éloigne trop des recommandations nutritionnelles</b>
          </div>
          <!-- end conditionnal message-->

          <!-- conditionnal message warning-->
          <!-- <div id="message-diet" class="warning">Le régime que vous avez choisi
            <br /> <b>est éloigné des recommandations nutritionnelles </b>
          </div> -->
          <!-- end conditionnal message-->

          <div class="container d-block mx-auto" style="max-width: 1200px">
            <div class="jauges row justify-content-center">
              <div class="col-auto jauge-card justify-content-center">
                <div class="d-flex w-100">
                  <div class="align-items-center d-flex mx-auto">
                    <span class="icon-energie icon-medium"></span> energie
                    totale
                  </div>
                </div>
                <div class="jauge">
                  <canvas
                    id="energie"
                    height="100"
                    width="200"
                    style="width: 180px; height: auto"
                  ></canvas>

                  <div id="badge_energie" class="badge">correct</div>
                </div>
                <div class="collapse" id="collapseProducts">
                  <div class="detailProducts d-flex justify-content-center">
                    <div class="iconProduct icon-cereales2"></div>
                    <div class="iconProduct icon-oleagineux"></div>
                    <div class="iconProduct icon-viande-rouge"></div>
                  </div>
                </div>
              </div>
              <div class="col-auto jauge-card justify-content-center">
                <div class="d-flex w-100">
                  <div class="align-items-center d-flex mx-auto">
                    <span class="icon-proteine icon-medium"></span> protéines
                  </div>
                </div>
                <div class="jauge">
                  <canvas
                    id="proteine"
                    height="100"
                    width="200"
                    style="width: 180px; height: auto"
                  ></canvas>
                  <div id="badge_proteines" class="badge">correct</div>
                </div>
                <div class="collapse" id="collapseProducts">
                  <div class="detailProducts d-flex justify-content-center">
                    <div class="iconProduct icon-oeufs"></div>
                    <div class="iconProduct icon-viande-blanche"></div>
                    <div class="iconProduct icon-viande-rouge"></div>
                    <div class="iconProduct icon-lait"></div>
                    <div class="iconProduct icon-sec"></div>
                  </div>
                </div>
              </div>
              <div class="col-auto jauge-card justify-content-center">
                <div class="d-flex w-100">
                  <div class="align-items-center d-flex mx-auto">
                    <span class="icon-sucre icon-medium"></span> glucides
                  </div>
                </div>
                <div class="jauge">
                  <canvas
                    id="glucides"
                    height="100"
                    width="200"
                    style="width: 180px; height: auto"
                  ></canvas>
                  <div id="badge_glucides" class="badge">correct</div>
                </div>
                <div class="collapse" id="collapseProducts">
                  <div class="detailProducts d-flex justify-content-center">
                    <div class="iconProduct icon-pdt"></div>
                    <div class="iconProduct icon-huile"></div>
                    <div class="iconProduct icon-cereales2"></div>
                    <div class="iconProduct icon-lait"></div>
                  </div>
                </div>
              </div>
              <div class="col-auto jauge-card justify-content-center">
                <div class="d-flex w-100">
                  <div class="align-items-center d-flex mx-auto">
                    <span class="icon-lipides icon-medium"></span> lipides
                  </div>
                </div>
                <div class="jauge">
                  <canvas
                    id="lipides"
                    height="100"
                    width="200"
                    style="width: 180px; height: auto"
                  ></canvas>
                  <div id="badge_lipides" class="badge">correct</div>
                </div>
                <div class="collapse" id="collapseProducts">
                  <div class="detailProducts d-flex justify-content-center">
                    <div class="iconProduct icon-sucre"></div>
                    <div class="iconProduct icon-cereales2"></div>
                    <div class="iconProduct icon-huile"></div>
                  </div>
                </div>
              </div>
              <div class="col-auto jauge-card justify-content-center">
                <div class="d-flex w-100">
                  <div class="align-items-center d-flex mx-auto">
                    <span class="icon-fibres icon-medium"></span> fibres
                  </div>
                </div>
                <div class="jauge">
                  <canvas
                    id="fibres"
                    height="100"
                    width="200"
                    style="width: 180px; height: auto"
                  ></canvas>
                  <div id="badge_fibres" class="badge">correct</div>
                </div>
                <div class="collapse" id="collapseProducts">
                  <div class="detailProducts d-flex justify-content-center">
                    <div class="iconProduct icon-legumes2"></div>
                    <div class="iconProduct icon-fruit2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              class="d-flex justify-content-center detailproductscollapse"
              data-toggle="collapse"
              href="#collapseProducts"
              role="button"
              aria-expanded="false"
              aria-controls="collapseProducts"
            >
              <div class="">Quels aliments contribuent à chaque apport ?</div>
            </a>
          </div>
          <!--
          <div class="text-center title-protein">Votre régime en deux chiffres</div>
          <div class="container d-block mx-auto twoBlocks">
            <div class="row justify-content-center">
              <div class="col-12 col-sm mb-3">
                <div class="card-protein d-flex align-items-center">
                  <div class="row align-items-center">
                    <div class="col-auto"><img src="@/assets/img/parcours/viande.svg" width="88" class="w-100"></div>
                    <div class="col ml-0 contentText pl-0">
                      <div>
                        <div class="badge">-18 %</div>
                      </div>
                      <div class="">de produits d’origines animales en équivalent matière première</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm mb-3">
                <div class="card-protein d-flex align-items-center">
                  <div class="row align-items-center">
                    <div class="col-auto"><img src="@/assets/img/parcours/vegetal-protein.svg" width="88" class="w-100"></div>
                    <div class="col ml-0 contentText pl-0">
                      <div>
                        <div class="badge">2/3</div>
                      </div>
                      <div>d’apport protéiques d’origine végétale</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="note text-center">Actuellement, environ 3/4 des apports protéiques sont d’origine animale</div>
          -->
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
  <!-- Modal -->
  <div
    class="modal fade"
    id="detailProduct"
    tabindex="-1"
    role="dialog"
    aria-labelledby="detailProduct"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-center">
          <h5 class="modal-title text-center" id="titleDetail"></h5>

          <div id="bodyDetail"></div>
          <div class="note mb-0 mt-5">
            (recommandation du Programme National Nutrition Santé)
          </div>
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
import listeRegime from "@/views/modal/listeRegime.vue";
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";
import { regimeListe } from "@/config/regimeListe";
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import { MapProduitsCoefficientMultiplicateurRegime } from "@/plugins/utils";
const store = useStore();

// TODO: mettre ca en configuration
const regimeChoisi = ref({
  nom: "Régime actuel",
  img: require("@/assets/img/parcours/regime-actuel.svg"),
  nomCourt: "actuel",
});

const cereales = ref(0);
const huile = ref(0);
const patate = ref(0);
const legumineuses = ref(0);
const legumes = ref(0);
const fruits = ref(0);
const oleagineux = ref(0);
const viandeRouge = ref(0);
const viandeBlanche = ref(0);
const produitsLaitiers = ref(0);
const oeufs = ref(0);
const sucre = ref(0);

const coefficientMultiplicateurVolumeCategorieRegime = computed(() => {
  return {
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.CEREALES]:
      creerCoefficientMultiplicateur(cereales.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.HUILE]: creerCoefficientMultiplicateur(
      huile.value
    ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PATATE]:
      creerCoefficientMultiplicateur(patate.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMINEUSES]:
      creerCoefficientMultiplicateur(legumineuses.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.LEGUMES]:
      creerCoefficientMultiplicateur(legumes.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.FRUITS]:
      creerCoefficientMultiplicateur(fruits.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OLEAGINEUX]:
      creerCoefficientMultiplicateur(oleagineux.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_ROUGE]:
      creerCoefficientMultiplicateur(viandeRouge.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.VIANDE_BLANCHE]:
      creerCoefficientMultiplicateur(viandeBlanche.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.PRODUITS_LAITIERS]:
      creerCoefficientMultiplicateur(produitsLaitiers.value),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.OEUFS]: creerCoefficientMultiplicateur(
      oeufs.value
    ),
    [IDS_CATEGORIES_REGIMES_ALIMENTAIRES.SUCRE]: creerCoefficientMultiplicateur(
      sucre.value
    ),
  };
});

watch(
  coefficientMultiplicateurVolumeCategorieRegime,
  (coefficientMultiplicateur) => {
    changementRegime("personnalisé");
    let coefficientMultiplicateurProduits =
      MapProduitsCoefficientMultiplicateurRegime(
        MAP_CATEGORIE_PRODUITS_DETAILLES,
        coefficientMultiplicateur
      );
    store.commit(
      "mutationPctDiffRegimePersonnalise",
      coefficientMultiplicateurProduits
    );
  }
);

watch(regimeChoisi, (nouvelleValeur) => {
  store.commit("mutationRegimeAlimentaire", nouvelleValeur);
});

// refacto doit exister quelque part
function changementRegime(regime) {
  console.log(regime);
  regimeChoisi.value = regimeListe.find((r) => r.nomCourt === regime);
}

const ChangerCompteurSucre = (sens) => {
  sucre.value += 5 * sens;
};

const ChangerCompteurCereales = (sens) => {
  cereales.value += 5 * sens;
};

const ChangerCompteurHuile = (sens) => {
  huile.value += 5 * sens;
};

const ChangerCompteurPatate = (sens) => {
  patate.value += 5 * sens;
};

const ChangerCompteurLegumineuses = (sens) => {
  legumineuses.value += 5 * sens;
};

const ChangerCompteurLegumes = (sens) => {
  legumes.value += 5 * sens;
};

const ChangerCompteurFruits = (sens) => {
  fruits.value += 5 * sens;
};

const ChangerCompteurOleagineux = (sens) => {
  oleagineux.value += 5 * sens;
};

const ChangerCompteurViandeRouge = (sens) => {
  viandeRouge.value += 5 * sens;
};

const ChangerCompteurViandeBlanche = (sens) => {
  viandeBlanche.value += 5 * sens;
};

const ChangerCompteurProduitsLaitiers = (sens) => {
  produitsLaitiers.value += 5 * sens;
};

const ChangerCompteurOeufs = (sens) => {
  oeufs.value += 5 * sens;
};

function creerCoefficientMultiplicateur(compteur) {
  return 1 + Number(compteur / 100);
}
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
</style>
