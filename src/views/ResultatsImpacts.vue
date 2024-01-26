<template>
  <div class="asy-wrapper" style="flex-direction: row">
    <div>
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="4"
      />

      <div class="content">
        <!-- <?php include '../partials/nav2.php'; ?> -->
        <div class="section centrervh" id="section0">
          <div class="container">
            <h1 class="animated fadeInUp fast h1-result">
              Quels sont les impacts écologiques associés à mes choix
              d’alimentation ?
            </h1>
            <div class="ss-titre-impacts row">
              <resumeChoix />
              <div class="accordion ml-auto mr-auto" id="accordeon-Impact">
                <div class="w-100 h-auto" id="headingImpact">
                  <button
                    class="w-100 btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseImpact"
                    aria-expanded="false"
                    aria-controls="collapseImpact"
                  >
                    Les 5 clés pour bien comprendre les impacts écologiques
                  </button>
                </div>
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
                  <!-- ----------------->
                  <div
                    class="col-12 cadre-impacts cadre-categorie cereales"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-impact-climat1"
                    style="cursor: pointer"
                  >
                    <div class="impact-titre cereales">
                      <span
                        class="icon-impact-climat ico-medium cereales"
                      ></span
                      >Impacts sur le climat
                    </div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                    >
                      <div class="impact-item2 col-sm-3">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-co2 ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">
                          Emissions de gaz à effet de serre
                        </div>
                      </div>
                      <div
                        class="impact-item2 col-sm-6 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par personne</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodalair2"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodalair2" class="impact-nbr"
                                  ><span
                                    id="gaz_effet_serre4"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 1
                                        )["EcoImpact_Indicator_Value_Person"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par hectare</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodalair1"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodalair1" class="impact-nbr"
                                  ><span
                                    id="gaz_effet_serre3"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 1
                                        )["EcoImpact_Indicator_Value_Hectare"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-sm-3 result-plus d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('ImpactGes')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                  </div>
                  <!-- ----------------->

                  <div class="col-12 cadre-impacts cadre-categorie legumes">
                    <div class="impact-titre legumes">
                      <span
                        class="icon-impact-biodiversite ico-medium climat2"
                      ></span
                      >Impacts sur la biodiversité
                    </div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                      onclick=""
                      data-toggle="modal"
                      data-target="#modal-impact-biodiversite1"
                      style="cursor: pointer"
                    >
                      <div class="impact-item2 col-sm-3">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-especes ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Destruction des espèces</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-6 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par personne</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span id="" class="ico-medium"></span
                                ><span id="" class="impact-nbr"
                                  ><span id="" v-if="impacts.length > 0">{{
                                    Math.round(
                                      impacts.find(
                                        (el) => el.ID_EcoImpact_Indicator == 2
                                      )["EcoImpact_Indicator_Value_Person"]
                                    )
                                  }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par hectare</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodaldeclin"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodaldeclin" class="impact-nbr"
                                  ><span
                                    id="declin_especes2"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 2
                                        )["EcoImpact_Indicator_Value_Hectare"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-sm-3 result-plus d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('impactBiodiv')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                    <div class="impact-line"></div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                      onclick=""
                      data-toggle="modal"
                      data-target="#modal-impact-biodiversite2"
                      style="cursor: pointer"
                    >
                      <div class="impact-item2 col-sm-3">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-deforest ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Déforestation importée</div>
                        <div class="note text-center">
                          L’impact du bio n’est pas calculé.
                        </div>
                      </div>
                      <div
                        class="impact-item2 col-sm-6 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par personne</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodalbiodiv"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodalbiodiv" class="impact-nbr"
                                  ><span
                                    id="deforestation2"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 3
                                        )["EcoImpact_Indicator_Value_Person"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par hectare</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span id="" class="ico-medium"></span
                                ><span id="" class="impact-nbr"
                                  ><span id="" v-if="impacts.length > 0">{{
                                    Math.round(
                                      impacts.find(
                                        (el) => el.ID_EcoImpact_Indicator == 3
                                      )["EcoImpact_Indicator_Value_Hectare"]
                                    )
                                  }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-sm-3 result-plus align-items-center d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('impactEau')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                  </div>
                  <!-- ----------------->
                  <div class="col-12 cadre-impacts cadre-categorie eau">
                    <div class="impact-titre eau">
                      <span class="icon-impact-eau ico-medium eau"></span>
                      Impacts sur la ressource eau
                    </div>

                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                      onclick=""
                      data-toggle="modal"
                      data-target="#modal-impact-eau2"
                      style="cursor: pointer"
                    >
                      <div class="impact-item2 col-sm-3">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-eaupol ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Pollution de l’eau</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-6 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par personne</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodaleau4"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodaleau4" class="impact-nbr"
                                  ><span
                                    id="qualite_eau4"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 4
                                        )["EcoImpact_Indicator_Value_Person"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par hectare</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodaleau3"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodaleau3" class="impact-nbr"
                                  ><span
                                    id="qualite_eau2"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 4
                                        )["EcoImpact_Indicator_Value_Hectare"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-sm-3 result-plus d-flex flex-column justify-content-center text-center"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                    <div class="impact-line"></div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                      onclick=""
                      data-toggle="modal"
                      data-target="#modal-impact-eau1"
                      style="cursor: pointer"
                    >
                      <div class="impact-item2 col-sm-3">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-eau-conso ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Consommation d’eau</div>
                        <div class="note text-center">
                          L’impact du bio n’est pas calculé.
                        </div>
                      </div>
                      <div
                        class="impact-item2 col-sm-6 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par personne</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodaleau1"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodaleau1" class="impact-nbr"
                                  ><span
                                    id="consommation_eau2"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 5
                                        )["EcoImpact_Indicator_Value_Person"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par hectare</strong>
                            </div>

                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodaleau2"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodaleau2" class="impact-nbr"
                                  ><span
                                    id="consommation_eau3"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 5
                                        )["EcoImpact_Indicator_Value_Hectare"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-sm-3 result-plus d-flex flex-column justify-content-center text-center"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                  </div>

                  <!-- ----------------->
                  <div class="col-12 cadre-impacts cadre-categorie viande">
                    <div class="impact-titre viande">
                      <span class="icon-impact-sol ico-medium viande"></span
                      >Impacts sur le sol
                    </div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                      nclick=""
                      data-toggle="modal"
                      data-target="#modal-impact-sols1"
                      style="cursor: pointer"
                    >
                      <div class="impact-item2 col-sm-3">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-empreinte ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Empreinte au sol</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-6 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par personne</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodalsol1"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodalsol1" class="impact-nbr"
                                  ><span
                                    id="empreinte_sol2"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 6
                                        )["EcoImpact_Indicator_Value_Person"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par hectare</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span id=" " class="ico-medium"></span
                                ><span id="" class="impact-nbr"
                                  ><span id="" v-if="impacts.length > 0">{{
                                    Math.round(
                                      impacts.find(
                                        (el) => el.ID_EcoImpact_Indicator == 6
                                      )["EcoImpact_Indicator_Value_Hectare"]
                                    )
                                  }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-sm-3 result-plus d-flex flex-column justify-content-center text-center"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                    <div class="impact-line"></div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                      onclick=""
                      data-toggle="modal"
                      data-target="#modal-impact-sols2"
                      style="cursor: pointer"
                    >
                      <div class="impact-item2 col-sm-3">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-solqualit ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Pauvreté des sols</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-6 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par personne</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span id="" class="ico-medium"></span
                                ><span id="" class="impact-nbr"
                                  ><span
                                    id="gaz_effet_serre4"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 7
                                        )["EcoImpact_Indicator_Value_Person"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="cadre-impact">
                          <div class="cadre-impact-detail">
                            <div class="impact-nom text-center">
                              <strong>par hectare</strong>
                            </div>
                            <div class="impact-graph text-center">
                              <span class="impact-result"
                                ><span
                                  id="flechemodalsol2"
                                  class="ico-medium"
                                ></span
                                ><span id="impactmodalsol2" class="impact-nbr"
                                  ><span
                                    id="degradation_sols2"
                                    v-if="impacts.length > 0"
                                    >{{
                                      Math.round(
                                        impacts.find(
                                          (el) => el.ID_EcoImpact_Indicator == 7
                                        )["EcoImpact_Indicator_Value_Hectare"]
                                      )
                                    }}</span
                                  >%
                                </span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="col-sm-3 result-plus d-flex flex-column justify-content-center text-center"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end repartition-->
              </div>
              <!--end mt-5-->
              <div class="w-100 div-continuer mb-big text-center">
                <a href="/agir-pour-une-relocalisation-durable"
                  ><button type="button" class="btn btn-principal mt-5">
                    Agir
                  </button></a
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
      <nav id="asy-sidebar" :class="montrerClasse">
        <modal-affiner-choix @fermerModalAffiner="fermerModal" />
      </nav>
    </div>
    <!--asy-wrapper-->
    <div
      class="modal fade"
      id=""
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
          <div class="modal-body">
            <div id="accordion" class="accordeon-detail">
              <div class="card">
                <div class="card-header">
                  <a
                    class="card-link"
                    data-toggle="collapse"
                    href="#collapseOne"
                  >
                    <div><span class="icon-ico_calcul2 icon white"></span></div>
                    <div>Méthodologie de calcul</div>
                  </a>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="mb-3">
                      Selon les chiffres de l’INSEE de 2015, la part de légumes
                      moyenne pour un habitant des Bouches du Rhône représente
                      27 % d’une assiette.
                    </div>
                    <div
                      class="cadre-resultat methodo-detail d-flex flex-row justify-content-around"
                    >
                      <span
                        class="col-6 d-flex flex-column justify-content-center"
                        ><span class="icon-ico_poids icon legumes"></span
                        ><span class="nbr-ha"> 7 742 kg</span
                        ><span class="hectares"> nécessitant </span></span
                      >
                      <span
                        class="col-6 d-flex flex-column justify-content-center"
                        ><span class="icon-ico_champ icon legumes"></span
                        ><span class="nbr-ha"> 3 249</span
                        ><span class="hectares"> hectares </span></span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <a
                    class="collapsed card-link"
                    data-toggle="collapse"
                    href="#collapseTwo"
                  >
                    <span class="icon-ico_detail icon white"></span> Détail par
                    produit
                  </a>
                </div>
                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                  <div class="card-body">
                    <span class="mb-2"
                      ><strong
                        >en pourcentage de surfaces cultivées</strong
                      ></span
                    >
                    <div class="list-produits">
                      <ul>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit"
                            >Ail, échalottes, oignons</span
                          >
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit">Artichauts</span>
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit">Asperges</span>
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit">Aubergines</span>
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit"
                            >Betteraves, Radis, Salsifis, Similaires</span
                          >
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit"
                            >Bettes, Cardes, Brèdes, Christophine</span
                          >
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit"
                            >Carottes, Navets potagers, Céleris raves</span
                          >
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit">Céleris branche</span>
                        </li>
                      </ul>
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
          <div class="modal-body">
            <div id="accordion" class="accordeon-detail fruits-fonce">
              <div class="card">
                <div class="card-header">
                  <a
                    class="card-link fruits-fonce"
                    data-toggle="collapse"
                    href="#collapseOne"
                  >
                    <div><span class="icon-ico_calcul2 icon white"></span></div>
                    <div>Méthodologie de calcul</div>
                  </a>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div class="mb-3">
                      Selon les chiffres de l’INSEE de 2015, la part de légumes
                      moyenne pour un habitant des Bouches du Rhône représente
                      27 % d’une assiette.
                    </div>
                    <div
                      class="cadre-resultat fruits-fonce methodo-detail d-flex flex-row justify-content-around"
                    >
                      <span
                        class="col-6 d-flex flex-column justify-content-center"
                        ><span class="icon-ico_poids icon fruits"></span
                        ><span class="nbr-ha"> 7 742 kg</span
                        ><span class="hectares"> nécessitant </span></span
                      >
                      <span
                        class="col-6 d-flex flex-column justify-content-center"
                        ><span class="icon-ico_champ icon fruits"></span
                        ><span class="nbr-ha"> 3 249</span
                        ><span class="hectares"> hectares </span></span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <a
                    class="collapsed card-link"
                    data-toggle="collapse"
                    href="#collapseTwo"
                  >
                    <span class="icon-ico_detail icon white"></span> Détail par
                    produit
                  </a>
                </div>
                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                  <div class="card-body">
                    <span class="mb-2"
                      ><strong
                        >en pourcentage de surfaces cultivées</strong
                      ></span
                    >
                    <div class="list-produits">
                      <ul>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit"
                            >Ail, échalottes, oignons</span
                          >
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit">Artichauts</span>
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit">Asperges</span>
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit">Aubergines</span>
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit"
                            >Betteraves, Radis, Salsifis, Similaires</span
                          >
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit"
                            >Bettes, Cardes, Brèdes, Christophine</span
                          >
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit"
                            >Carottes, Navets potagers, Céleris raves</span
                          >
                        </li>
                        <li>
                          <span class="badge-detail-produit bg-legumes-fonce"
                            >0,13</span
                          ><span class="nom-produit">Céleris branche</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modalImpact v-if="modalActive" :modalId="modalActive" />
    <nav id="asy-sidebar" :class="montrerClasse">
      <modal-affiner-choix @fermerModalAffiner="fermerModal" />
    </nav>
  </div>
</template>

<script>
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";
import resumeChoix from "./modal/resumeChoix.vue";
import ModalAffinerChoix from "./modal/modalAffinerChoix.vue";
import modalImpact from "./modal/modalImpact.vue";
import { getImpacts } from "@/plugins/getImpacts.js";
export default {
  components: {
    BarreNavigation,
    resumeChoix,
    ModalAffinerChoix,
    modalImpact,
  },
  data() {
    return {
      montrerClasse: "",
      impacts: [],
      modalActive: null,
    };
  },
  methods: {
    montrerModalAffiner() {
      this.montrerClasse = "show";
      console.log("montrerModalAffinage");
    },
    fermerModal() {
      this.montrerClasse = "";
    },
    ouvrirModal(id) {
      console.log(id);
      this.modalActive = id;
    },
  },
  async mounted() {
    this.impacts = await getImpacts();
    console.log(this.impacts);
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
