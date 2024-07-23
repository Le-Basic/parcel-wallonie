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
                    class="col-12 cadre-impacts cadre-categorie"
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
                      <div class="impact-item2 col-sm-2 titre-impact">
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
                        class="impact-item2 col-sm-8 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <span class="impact-result texte-droite"
                            ><p class="texte-data texte-droite">
                              400 millions t CO2eq
                            </p>
                            Soit 15% de la consommation annuelle du territoire
                          </span>
                        </div>
                        <div class="cadre-impact">
                          <span class="impact-result texte-gauche"
                            ><p class="texte-data texte-gauche vert-clair">
                              -40<span class="texte-unite">%</span>
                            </p>
                            Soit 15% de la consommation annuelle du
                            territoire<br />
                            Objectif national de réduction:
                          </span>
                        </div>
                      </div>
                      <div
                        class="col-sm-2 result-plus d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('ImpactGes')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-12 cadre-impacts cadre-categorie"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-impact-climat1"
                    style="cursor: pointer"
                  >
                    <div class="impact-titre legumes">
                      <span
                        class="icon-impact-biodiversite ico-medium climat2"
                      ></span
                      >Impacts sur le biodiversité
                    </div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                    >
                      <div class="impact-item2 col-sm-2 titre-impact">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-especes ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Destruction des espèces</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-8 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <span class="impact-result texte-droite"
                            ><div class="texte-data texte-droite">
                              Une biodiversité fortement dégradée
                            </div>
                          </span>
                        </div>
                        <div class="cadre-impact">
                          <span class="impact-result texte-gauche"
                            ><p class="texte-data texte-gauche vert-clair">
                              +45<span class="texte-unite">%</span
                              ><span class="texte-legende"
                                >abondance d'espèces par hectare</span
                              >
                            </p>
                            Soit 15% de la consommation annuelle du
                            territoire<br />
                            Objectif national de réduction:
                          </span>
                        </div>
                      </div>
                      <div
                        class="col-sm-2 result-plus d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('ImpactGes')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                    >
                      <div class="impact-item2 col-sm-2 titre-impact">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-especes ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Déforestation importée</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-8 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <span class="impact-result texte-droite"
                            ><p class="texte-data texte-droite">
                              120 000 ha déforestés liés aux importations de
                              soja
                            </p>
                          </span>
                        </div>
                        <div class="cadre-impact">
                          <span class="impact-result texte-gauche"
                            ><p class="texte-data texte-gauche vert-clair">
                              -45<span class="texte-unite">%</span
                              ><span class="texte-legende"
                                >d'hectares de déforestation</span
                              >
                            </p>
                            Soit l'équivalent de XX terrains de football<br />
                          </span>
                        </div>
                      </div>
                      <div
                        class="col-sm-2 result-plus d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('ImpactGes')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-12 cadre-impacts cadre-categorie"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-impact-climat1"
                    style="cursor: pointer"
                  >
                    <div class="impact-titre eau">
                      <span class="icon-impact-eau ico-medium climat2"></span
                      >Impacts sur la ressource eau
                    </div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                    >
                      <div class="impact-item2 col-sm-2 titre-impact">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-eaupol ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Pollution de l'eau</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-8 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <span class="impact-result texte-droite"
                            ><div class="texte-data texte-droite">
                              120 000 € de coût de dépolution
                            </div>
                          </span>
                        </div>
                        <div class="cadre-impact">
                          <span class="impact-result texte-gauche"
                            ><p class="texte-data texte-gauche vert-clair">
                              -50<span class="texte-unite">%</span
                              ><span class="texte-legende"
                                >en coûts de dépollution</span
                              >
                            </p>
                            Soit XXX 000 € économisés chaque année<br />
                          </span>
                        </div>
                      </div>
                      <div
                        class="col-sm-2 result-plus d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('ImpactGes')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                    >
                      <div class="impact-item2 col-sm-2 titre-impact">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-eau-conso ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Consommation d'eau</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-8 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <span class="impact-result texte-droite"
                            ><p class="texte-data texte-droite">
                              120 000 m3 d'eau consommés en irrigation chaque
                              année (rivières et nappes)
                            </p>
                          </span>
                        </div>
                        <div class="cadre-impact">
                          <span class="impact-result texte-gauche"
                            ><p class="texte-data texte-gauche vert-clair">
                              -35<span class="texte-unite">%</span
                              ><span class="texte-legende"
                                >sur les prélèvement en eau</span
                              >
                            </p>
                            Soit XXX XXX m3<br />
                          </span>
                        </div>
                      </div>
                      <div
                        class="col-sm-2 result-plus d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('ImpactGes')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-12 cadre-impacts cadre-categorie"
                    onclick=""
                    data-toggle="modal"
                    data-target="#modal-impact-climat1"
                    style="cursor: pointer"
                  >
                    <div class="impact-titre viande">
                      <span class="icon-impact-sol ico-medium climat2"></span
                      >Impacts sur les sols
                    </div>
                    <div
                      class="impacts justify-content-around align-items-center flex-column flex-sm-row"
                    >
                      <div class="impact-item2 col-sm-2 titre-impact">
                        <div class="impact-graph">
                          <span
                            class="icon-impact-solqualit ico-medium ico-impact"
                          ></span>
                        </div>
                        <div class="impact-nom">Pauvreté des sols</div>
                      </div>
                      <div
                        class="impact-item2 col-sm-8 d-flex justify-content-around align-items-center"
                      >
                        <div class="cadre-impact">
                          <span class="impact-result texte-droite"
                            ><div class="texte-data texte-droite">
                              Etat très dégradé
                            </div>
                          </span>
                        </div>
                        <div class="cadre-impact">
                          <span class="impact-result texte-gauche"
                            ><p class="texte-data texte-gauche vert-clair">
                              +5<span class="texte-unite">%</span
                              ><span class="texte-legende"
                                >de manière organique dans le sol</span
                              >
                            </p>
                            Soit 15% de la consommation annuelle du
                            territoire<br />
                            Objectif national de réduction:
                          </span>
                        </div>
                      </div>
                      <div
                        class="col-sm-2 result-plus d-flex flex-column justify-content-center text-center"
                        @click="ouvrirModal('ImpactGes')"
                      >
                        <span class="icon-ico_fleche_detail_gros icon"></span
                        ><span class="explain">Explications</span>
                      </div>
                    </div>
                  </div>
                  <!-- ----------------->

                  <!-- ----------------->
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
    <modalImpact
      v-if="modalActive"
      :modalId="modalActive"
      @fermerModal="fermerModal"
    />
    <nav id="asy-sidebar" :class="montrerClasse">
      <modal-affiner-choix @fermerModalAffiner="fermerModalAffiner" />
    </nav>
    <BandeauResultat />
  </div>
</template>

<script>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoix from "@/views/modal/resumeChoix.vue";
import ModalAffinerChoix from "@/views/modal/modalAffinerChoix.vue";
import modalImpact from "@/views/modal/modalImpact.vue";
import BandeauResultat from "@/components/BandeauResultat.vue";
import { getImpacts } from "@/plugins/getImpacts.js";
export default {
  components: {
    BandeauResultat,
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
    fermerModalAffiner() {
      this.montrerClasse = "";
    },
    ouvrirModal(id) {
      console.log(id);
      this.modalActive = id;
    },
    fermerModal() {
      this.modalActive = null;
    },
  },
  async mounted() {
    this.impacts = await getImpacts(this.$store.state.partpertes);
    console.log(this.impacts);
  },
  // TODO: store les impacts dans le state
  watch: {
    "$store.state.resultatSimulation": function () {
      getImpacts(this.$store.state.partpertes).then((res) => {
        this.impacts = res;
      });
      console.log(this.impacts);
    },
    deep: true,
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
