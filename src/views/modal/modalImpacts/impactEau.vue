<template>
  <div
    id="modal-impact-eau1"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div>
            <span
              class="icon-impact-eau-conso ico-medium ico-impact mr-3 eau"
            ></span>
          </div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">Eau : Consommation d’eau</div>
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
        <!--modal-header--->
        <div class="modal-body">
          <div id="accordeon-fiche" class="accordeon-detail eau-fonce">
            <blocImpact>
              <template v-slot:icon>
                <span class="icon-source icon white"></span>
              </template>
              <template v-slot:nomBouton>Principales ressources</template>
              <template v-slot:contenu>
                <div class="card-body">
                  <div class="row cadre-impacts">
                    <div class="col cadre-impact">
                      <div class="cadre-impact-detail">
                        <div class="impact-graph text-center">
                          <span
                            class="icon-impact-eau-conso ico-medium ico-impact"
                          ></span
                          ><span class="impact-result"
                            ><span
                              id="flechemodaleau22"
                              class="ico-medium"
                            ></span
                            ><span id="impactmodaleau22" class="impact-nbr"
                              ><span id="consommation_eau32">-</span>%
                            </span></span
                          >
                        </div>
                        <div class="impact-nom text-center">
                          Consommation d’eau
                        </div>
                        <div class="impact-nom text-center">
                          <strong>par hectare</strong>
                        </div>
                      </div>
                      <div>
                        <strong
                          >Quel est l’impact environnemental d’un hectare moyen
                          nécessaire à la production de mon alimentation
                          ?</strong
                        >
                      </div>
                    </div>
                    <div class="col cadre-impact">
                      <div class="cadre-impact-detail">
                        <div class="impact-graph text-center">
                          <span
                            class="icon-impact-eau-conso ico-medium ico-impact"
                          ></span
                          ><span class="impact-result"
                            ><span
                              id="flechemodaleau12"
                              class="ico-medium"
                            ></span
                            ><span id="impactmodaleau12" class="impact-nbr"
                              ><span id="consommation_eau22">-</span>%
                            </span></span
                          >
                        </div>
                        <div class="impact-nom text-center">
                          Consommation d’eau
                        </div>
                        <div class="impact-nom text-center">
                          <strong>par personne</strong>
                        </div>
                      </div>
                      <div>
                        <strong
                          >Quel est l’impact environnemental de mon alimentation
                          ?</strong
                        >
                      </div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <strong>Par personne</strong>, on donne l’impact écologique
                    global d’un changement d’alimentation. Les évolutions de ces
                    impacts dépendent :
                    <ul>
                      <li>
                        D’une part de l’évolution du nombre total d’hectares
                        nécessaires pour satisfaire cette nouvelle demande
                        alimentaire ;
                      </li>
                      <li>
                        Et d’autre part de l’impact de chacun de ces hectares.
                      </li>
                    </ul>
                    <strong>La vision par hectare</strong> permet d’isoler ce
                    deuxième élément. Puisque la surface de terre disponible et
                    son état écologique est l’une des ressources les plus
                    limitantes pour la production alimentaire, il est essentiel
                    d’identifier les pratiques qui diminuent les impacts par
                    hectare.
                  </div>
                </div>
                <!--card-body--->
              </template>
            </blocImpact>
            <!--card def--->

            <!--cles-->
            <blocImpact>
              <template v-slot:icon>
                <span class="icon-cles icon white"></span>
              </template>
              <template v-slot:nomBouton
                >Quelques clés d'interprétation</template
              >
              <template v-slot:contenu>
                <div class="card-body">
                  <!-- def indicateur-->
                  <div class="def-indicateur">
                    <div
                      class="line1 d-flex align-items-end flex-md-row flex-column"
                    >
                      <div class="col-md-7 col-12">
                        <div class="cadre-resultat cadre-clair text-left">
                          <div class="indic-titre eau">
                            Alimentation actuelle
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_navigation_territoire icon eau icon-medium"
                            ></span
                            >Pas de relocalisation
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_CATEGORIES_viande icon eau icon-medium"
                            ></span
                            >Régime actuel
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-affiner-reloc icon eau icon-medium"
                            ></span
                            >Agriculture actuelle
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-gaspillage icon eau icon-medium"
                            ></span
                            >Pertes et gaspillage actuelles
                          </div>
                        </div>
                        <div class="alim-distance text-center mb-3">
                          <img
                            :src="
                              require('@/assets/img/detail/distance-vertical.svg')
                            "
                            alt="…"
                            width="40px"
                            class="ml-auto mr-auto"
                          />
                        </div>
                      </div>
                      <div class="pl-3 pr-3">
                        <div class="alert alert-danger align-items-center h-25">
                          <div>
                            <strong
                              >Parcel ne se prononce pas sur les impacts de la
                              relocalisation
                            </strong>
                            (l'état de la rechercher actuelle ne permet pas de
                            les objectiver)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="line2 d-flex align-items-center flex-md-row flex-column"
                    >
                      <div class="col-md-7 col-12">
                        <div class="cadre-resultat cadre-clair">
                          <div class="indic-titre eau">
                            Alimentation relocalisée
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_filtres-reloc icon eau icon-medium"
                            ></span
                            >Relocalisation
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_CATEGORIES_viande icon eau icon-medium"
                            ></span
                            >Régime actuel
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-affiner-reloc icon eau icon-medium"
                            ></span
                            >Agriculture actuelle
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-gaspillage icon eau icon-medium"
                            ></span
                            >Pertes et gaspillage actuelles
                          </div>
                        </div>
                        <div class="alim-distance text-center mb-3">
                          <img
                            :src="
                              require('@/assets/img/detail/distance-vertical.svg')
                            "
                            alt="…"
                            width="40px"
                            class="ml-auto mr-auto"
                          />
                        </div>
                        <div class="cadre-resultat cadre-clair">
                          <div class="indic-titre eau">
                            Alimentation scénarisée
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_filtres-reloc icon eau icon-medium"
                            ></span
                            >Relocalisation
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_navigation_alimentation icon eau icon-medium"
                            ></span
                            >Changement de régime
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-affiner-reloc icon eau icon-medium"
                            ></span
                            >Agriculture actuelle
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-gaspillage icon eau icon-medium"
                            ></span
                            >Réduction des pertes et gaspillage
                          </div>
                        </div>
                      </div>
                      <div class="pl-3 pr-3">
                        <div class="alert alert-success">
                          <strong
                            >Parcel donne l'impact d'un passage au bio, d'un
                            changement de régime alimentaire et de réduction des
                            pertes et gaspillage.</strong
                          >
                        </div>
                        <div class="alert alert-success">
                          <div class="indic-legende">CONSOMMATION D’EAU</div>
                          <div class="indic-detail">
                            DIFFERENCE DE CONSOMMATION D’EAU DOUCE DE SURFACE OU
                            SOUTERRAINE<br />
                            (Indicateur Eau Bleu de Water FootPrint Network)
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--line2-->
                  </div>
                  <div class="mb-3 mt-5">
                    <div class="mb-3">
                      <strong
                        >Autrement dit, on calcule la différence entre les
                        impacts entre une alimentation relocalisée avec des
                        régimes, des parts de bio et des pertes et gaspillage
                        actuels et une alimentation relocalisée avec des
                        régimes, des parts de bio et des réductions des pertes
                        et gaspillage choisis par l’utilisateur.</strong
                      >
                      On ne calcule pas l’impact de la relocalisation et d’un
                      passage au bio (trop d’incertitudes en l’état actuel des
                      connaissances).
                    </div>
                  </div>
                </div>
                <!--card-body--->
              </template>
            </blocImpact>
            <!--card def--->

            <!--cles-->
            <blocImpact>
              <template v-slot:icon>
                <span class="icon-cles icon white"></span>
              </template>
              <template v-slot:nomBouton
                >Quelques clés d'interprétation</template
              >
              <template v-slot:contenu>
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <span
                      class="icon-ico_filtres_bio icon eau icon-medium"
                    ></span>
                    <strong>Les effets d’un passage au bio</strong>
                  </div>
                  <ul>
                    <li>
                      PARCEL ne calcule pas les effets d’un passage au bio sur
                      la consommation en eau, par manque de données consolidées.
                    </li>
                  </ul>
                  <div class="d-flex align-items-center">
                    <span
                      class="icon-ico_navigation_alimentation icon eau icon-medium"
                    ></span>
                    <strong
                      >Les effets d’une réduction des produits animaux</strong
                    >
                  </div>
                  <ul>
                    <li>
                      L’augmentation de la consommation en eau par hectare
                      résulte du fait qu’on remplace des productions d’élevage
                      (peu consommatrices en eau lorsqu’on les ramène à l’unité
                      de surface) par des productions végétale (dont certaines
                      sont plus consommatrices en eau par unité de surface) ;
                    </li>
                    <li>
                      Par personne, la consommation en eau diminue avec la
                      réduction des produits animaux, puisqu’on réduit
                      significativement le nombre d’hectares nécessaires.
                    </li>
                  </ul>
                  <div class="d-flex align-items-center">
                    <span class="icon-gaspillage icon eau icon-medium"></span>
                    <strong
                      >Les effets d’une réduction des pertes et
                      gaspillage</strong
                    >
                  </div>
                  <ul>
                    <li>
                      Par personne, la consommation en eau diminue avec la
                      réduction des produits animaux, puisqu’on réduit le nombre
                      d’hectares nécessaires.
                    </li>
                  </ul>
                  <!--mb-3 mt-5 -->
                </div>
                <!--card-body--->
              </template>
            </blocImpact>
            <!--card def--->

            <!--cles-->
            <blocImpact>
              <template v-slot:icon>
                <span class="icon-cles icon white"></span>
              </template>
              <template v-slot:nomBouton
                >Quelques clés d'interprétation</template
              >
              <template v-slot:contenu>
                <div class="card-body">
                  <div
                    class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail eau-fonce"
                  >
                    <span
                      class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                      ><span
                        class="icon-ico_navigation_alimentation icon icon eau"
                      ></span>
                      <div class="info-infos">
                        <span class="d-flex flex-column info-intro"
                          ><span class="info-entete eau">alimentation</span
                          ><span class="info-verbe">=</span></span
                        ><span class="d-flex flex-column info-detail"
                          ><span class="nbr-ha">20%</span
                          ><span class="hectares"
                            >de l’empreinte en eau moyenne d’un Français (1
                            875m3)
                          </span></span
                        >
                      </div>
                    </span>
                    <span
                      class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                      ><span class="icon-affiner-reloc icon eau"></span>
                      <div class="info-infos">
                        <span class="d-flex flex-column info-intro"
                          ><span class="info-entete eau">agriculture</span
                          ><span class="info-verbe">=</span></span
                        ><span class="d-flex flex-column info-detail"
                          ><span class="nbr-ha">50%</span
                          ><span class="hectares"
                            >de la consommation d'eau en Région wallonne (en
                            période ordinaire)</span
                          ></span
                        >
                      </div>
                    </span>
                    <span
                      class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                      ><span class="icon-impact-eau-conso icon eau"></span>
                      <div class="info-infos">
                        <span class="d-flex flex-column info-intro"
                          ><span class="info-entete eau"
                            >Consommation d’eau </span
                          ><span class="info-verbe">=</span></span
                        ><span class="d-flex flex-column info-detail"
                          ><span class="nbr-ha">4 Mds m<sup>3</sup></span
                          ><span class="hectares"
                            >d’eau sont prélevés chaque année pour la production
                            agricole</span
                          ></span
                        >
                      </div>
                    </span>
                  </div>
                  <div class="mt-5"></div>
                </div>
                <!--card-body-->
              </template>
            </blocImpact>
            <!--card def--->

            <!--cles-->
            <blocImpact>
              <template v-slot:icon>
                <span class="icon-cles icon white"></span>
              </template>
              <template v-slot:nomBouton
                >Quelques clés d'interprétation</template
              >
              <template v-slot:contenu>
                <div class="card-body">
                  <ul>
                    <li>
                      L’impact de l’agriculture biologique sur la consommation
                      en eau n’est pas calculé, par manque de données
                      consolidées. Seul l’impact d’un changement de régime
                      alimentaire et de réduction des pertes et gaspillage est
                      quantifié.
                    </li>
                    <li>
                      Lorsqu’il est défini par hectare, le résultat correspond à
                      la différence d’impact entre :
                      <ul>
                        <li>
                          1 hectare moyen permettant de répondre aux besoins
                          alimentaires associés à un régime actuel et à une
                          agriculture actuelle ;
                        </li>
                        <li>
                          1 hectare moyen qui permettrait de répondre aux
                          besoins alimentaires associés à des choix de
                          production agricole et de consommation différents (%
                          de bio et changement de régime).
                        </li>
                      </ul>
                      Attention : il n’est pas possible de mesurer la différence
                      d’impact avec des hectares supplémentaires qu’il faudrait
                      potentiellement mobiliser. Autrement dit, si
                      l’alimentation scénarisée au sein de PARCEL requiert 20%
                      de plus de surfaces agricoles, les différentiels d’impacts
                      ne concernent pas ces nouvelles surfaces car il n’est pas
                      possible de connaitre l’utilisation actuelle (forêts,
                      villes etc.) de ces hectares.
                    </li>
                    <li>
                      L’indicateur consommation en eau calcule la consommation
                      d’eau et non le prélèvement d’eau. Certains prélèvements
                      donnent lieu à un rejet quasi-immédiat sur place sans que
                      l’eau prélevée n’ait fait l’objet d’un traitement ou d’une
                      pollution. Une fraction seulement des prélèvements fait
                      l’objet d’une consommation, c’est-à-dire d’une utilisation
                      éloignée du lieu de prélèvement et, à cette occasion, d’un
                      traitement ou d’une pollution.
                    </li>
                  </ul>
                  <!--ul-->
                </div>
                <!--card-body-->
              </template>
            </blocImpact>
            <!--card def--->

            <!--cles-->
            <blocImpact>
              <template v-slot:icon>
                <span class="icon-cles icon white"></span>
              </template>
              <template v-slot:nomBouton
                >Quelques clés d'interprétation</template
              >
              <template v-slot:contenu>
                <div class="card-body">
                  <div class="mb-3">
                    • Pour les éléments sur la méthode de calcul des
                    indicateurs, se référer à la
                    <a
                      href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
                      target="_blank"
                      rel="noopener noreferrer"
                      >page annexe méthodologique</a
                    >, accessible par le menu principal
                  </div>
                </div>
                <!--card-body-->
              </template>
            </blocImpact>
            <!--card def--->

            <!--cles-->
            <blocImpact>
              <template v-slot:icon>
                <span class="icon-cles icon white"></span>
              </template>
              <template v-slot:nomBouton
                >Quelques clés d'interprétation</template
              >
              <template v-slot:contenu>
                <div class="card-body">
                  <ul>
                    <li>
                      ­<span class="source-titre"
                        >The Water Footprint Assessment Manual Setting the
                        Global Standart</span
                      ><span class="source-auteur"> – Hoekstra et al.,</span
                      ><span class="source-année"> – 2011</span>
                      <div>
                        <a
                          class=""
                          href="https://waterfootprint.org/media/downloads/TheWaterFootprintAssessmentManual_2.pdf"
                          >Voir l'étude</a
                        >
                      </div>
                    </li>
                    <li>
                      ­<span class="source-titre"
                        >Eau et Agriculture, Tome 1 Aspects quantitatifs</span
                      ><span class="source-auteur"> – CGAAER</span
                      ><span class="source-année"> – 2015</span>
                      <div>
                        <a
                          class=""
                          href="https://agriculture.gouv.fr/telecharger/76633?token=c9074114540bf02504eaeaccfc0a47b9"
                          >Voir l'étude</a
                        >
                      </div>
                    </li>
                    <li>
                      ­<span class="source-titre"
                        >L’eau et les milieux aquatiques - Chiffres clés</span
                      ><span class="source-auteur"> – CGDD</span
                      ><span class="source-année"> – 2016</span>
                      <div>
                        <a
                          class=""
                          href="https://www.eaufrance.fr/sites/default/files/2018-06/eau_cles_2016_201602.pdf"
                          >Voir l'étude</a
                        >
                      </div>
                    </li>
                    <li>
                      ­<span class="source-titre"
                        >Water Foot Print Network Data Base</span
                      >
                      <div>
                        <a
                          class=""
                          href="https://waterfootprint.org/en/resources/waterstat/product-water-footprint-statistics/"
                          >Voir l'étude</a
                        >
                      </div>
                    </li>
                  </ul>
                  <!--ul-->
                </div>
              </template>
              <!--card-body-->
            </blocImpact>
            <!--collapseRessources-->
          </div>
          <!--card ressoucres --->
        </div>
        <!--accordeon--->
      </div>
      <!--modal-body--->
    </div>
    <!--modal-content modal-repart-cat-detail-->
  </div>
  <!--modal dialog-->
  <!--modal fade -->
</template>

<script>
import blocImpact from "./composant/blocImpact.vue";
export default {
  name: "modalImpactGes",
  components: {
    blocImpact,
  },
  data() {
    return {
      ouvert: false,
    };
  },
  methods: {
    toggle() {
      this.ouvert = !this.ouvert;
    },
  },
};
</script>
