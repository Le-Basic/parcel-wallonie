<template>
  <div class="modal-header d-flex align-items-center">
    <div>
      <span class="icon-impact-co2 ico-medium ico-impact mr-3 cereales"></span>
    </div>
    <div class="d-flex flex-column">
      <div class="titre-categorie">
        Le climat et l’air : les émissions de gaz à effet de serre
      </div>
      <div class="hectares"></div>
    </div>
    <button
      type="button"
      class="close"
      data-dismiss="modal"
      aria-label="Close"
      @click="fermerModal"
    >
      <span class="icon-ico_fermer icon"></span>
    </button>
  </div>
  <!--modal-header--->
  <div class="modal-body">
    <div id="accordeon-fiche" class="accordeon-detail cereales-fonce">
      <div class="card">
        <!--l'indicateur-->
        <div class="card-header" id="headingUnit">
          <button
            class="btn btn-link"
            data-toggle="collapse"
            data-target="#collapseResult"
            aria-expanded="true"
            aria-controls="collapseResult"
          >
            <div><span class="icon-unite icon white"></span></div>
            <div>
              Des résultats variables selon l’unité : par hectare ou par
              personne
            </div>
          </button>
        </div>
        <!--card-header--->
        <div
          id="collapseResult"
          aria-labelledby="headingUnit"
          data-parent="#accordeon-fiche"
        >
          <div class="card-body">
            <div class="row cadre-impacts mb-4">
              <div class="col cadre-impact">
                <div class="cadre-impact-detail">
                  <div class="impact-graph text-center">
                    <span class="icon-impact-co2 ico-medium ico-impact"></span
                    ><span class="impact-result"
                      ><span id="flechemodalair12" class="ico-medium"></span
                      ><span id="impactmodalair12" class="impact-nbr"
                        ><span id="gaz_effet_serre32">-</span>%
                      </span></span
                    >
                  </div>
                  <div class="impact-nom text-center">
                    Emissions de gaz à effet de serre
                  </div>
                  <div class="impact-nom text-center">
                    <strong>par hectare</strong>
                  </div>
                </div>
                <div>
                  <strong
                    >Quel est l’impact environnemental d’un hectare moyen
                    nécessaire à la production de mon alimentation ?</strong
                  >
                </div>
              </div>
              <div class="col cadre-impact">
                <div class="cadre-impact-detail">
                  <div class="impact-graph text-center">
                    <span class="icon-impact-co2 ico-medium ico-impact"></span
                    ><span class="impact-result"></span
                    ><span id="flechemodalair22" class="ico-medium"></span
                    ><span id="impactmodalair22" class="impact-nbr"
                      ><span id="gaz_effet_serre42">-</span>%
                    </span>
                  </div>
                  <div class="impact-nom text-center">
                    Emissions de gaz à effet de serre
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
            <p>
              <strong>Par personne</strong>, on donne l’impact écologique global
              d’un changement d’alimentation. Les évolutions de ces impacts
              dépendent :
            </p>
            <ul>
              <li>
                D’une part de l’évolution du nombre total d’hectares nécessaires
                pour satisfaire cette nouvelle demande alimentaire ;
              </li>
              <li>et d’autre part de l’impact de chacun de ces hectares.</li>
            </ul>
            <p>
              <strong>La vision par hectare</strong> permet d’isoler ce deuxième
              élément. Puisque la surface de terre disponible et son état
              écologique est l’une des ressources les plus limitantes pour la
              production alimentaire, il est essentiel d’identifier les
              pratiques qui diminuent les impacts par hectare.
            </p>
          </div>
          <!--card-body--->
        </div>
        <!--collapse--->
      </div>
      <!--card indic--->
      <blocImpact>
        <template v-slot:icon>
          <span class="icon-ico_navigation_alimentation icon white"></span>
        </template>
        <template v-slot:nomBouton>Définition de l’indicateur</template>
        <template v-slot:contenu>
          <div class="card-body">
            <!-- def indicateur-->
            <div class="def-indicateur">
              <div class="line1 d-flex align-items-end flex-md-row flex-column">
                <div class="col-md-7 col-12">
                  <div class="cadre-resultat cadre-clair text-left">
                    <div class="indic-titre legumes">Alimentation actuelle</div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-ico_navigation_territoire icon legumes icon-medium"
                      ></span
                      >Pas de relocalisation
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-ico_CATEGORIES_viande icon legumes icon-medium"
                      ></span
                      >Régime actuel
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-affiner-reloc icon legumes icon-medium"
                      ></span
                      >Agriculture actuelle
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-gaspillage icon legumes icon-medium"
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
                      (l'état de la rechercher actuelle ne permet pas de les
                      objectiver)
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="line2 d-flex align-items-center flex-md-row flex-column"
              >
                <div class="col-md-7 col-12">
                  <div class="cadre-resultat cadre-clair">
                    <div class="indic-titre legumes">
                      Alimentation relocalisée
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-ico_filtres-reloc icon legumes icon-medium"
                      ></span
                      >Relocalisation
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-ico_CATEGORIES_viande icon legumes icon-medium"
                      ></span
                      >Régime actuel
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-affiner-reloc icon legumes icon-medium"
                      ></span
                      >Agriculture actuelle
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-gaspillage icon legumes icon-medium"
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
                    <div class="indic-titre legumes">
                      Alimentation scénarisée
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-ico_filtres-reloc icon legumes icon-medium"
                      ></span
                      >Relocalisation
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-ico_navigation_alimentation icon legumes icon-medium"
                      ></span
                      >Changement de régime
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-ico_filtres_bio icon legumes icon-medium"
                      ></span
                      >% d'agriculture en bio ?
                    </div>
                    <div class="line-ico d-flex align-items-center">
                      <span
                        class="icon-gaspillage icon legumes icon-medium"
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
                    <div class="indic-legende">DÉCLIN DES ESPÈCES</div>
                    <div class="indic-detail">
                      DIFFERENCE DU NOMBRE DE PAPILLONS, ABEILLES, VERS DE TERRE
                      ET INVERTÉBRÉS
                    </div>
                  </div>
                </div>
              </div>
              <!--line2-->
            </div>
            <div class="mb-3 mt-5">
              <div class="mb-3">
                <strong
                  >Autrement dit, on calcule la différence entre les impacts
                  entre une alimentation relocalisée avec des régimes, des parts
                  de bio et des pertes et gaspillage actuels et une alimentation
                  relocalisée avec des régimes, des parts de bio et des
                  réductions des pertes et gaspillage choisis par l’utilisateur. </strong
                >On ne calcule pas l’impact de la relocalisation seule de
                l’alimentation (trop d’incertitudes en l’état actuel des
                connaissances).
              </div>
            </div>
            <!--mb-3 mt-5 -->
          </div>
          <!--card-body--->
          <!--collapse--->
        </template>
      </blocImpact>
      <!--card def--->

      <!--cles-->
      <bloc-impact>
        <template v-slot:icon>
          <span class="icon-cles icon white"></span>
        </template>
        <template v-slot:nomBouton>Quelques clés d'interprétation</template>
        <template v-slot:contenu>
          <div class="card-body">
            <div class="d-flex align-items-center">
              <span
                class="icon-ico_filtres_bio icon legumes icon-medium"
              ></span>
              <strong>Les effets d’un passage au bio</strong>
            </div>
            <ul>
              <li>
                La diminution de la destruction des espèces est liée à certaines
                pratiques mises en œuvre par les fermes bio: rotations plus
                longues et plus diversifiées, davantage de prairies, absence de
                pesticides chimiques…
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <span
                class="icon-ico_navigation_alimentation icon legumes icon-medium"
              ></span>
              <strong>Les effets d’une réduction des produits animaux</strong>
            </div>
            <ul>
              <li>
                Les surfaces liées aux productions d’élevage comportent des
                prairies, habitats agricoles favorables au développement de
                divers espèces. La réduction des produits animaux augmente la
                destruction des espèces, en diminuant ces espaces.
              </li>
            </ul>
            <div class="d-flex align-items-center">
              <span class="icon-gaspillage icon legumes icon-medium"></span>
              <strong>
                Les effets d’une réduction des pertes et gaspillage</strong
              >
            </div>
            <ul>
              <li>
                On ne mesure pas les effets d’une réduction des pertes et
                gaspillage par hectare.
              </li>
            </ul>

            <!--mb-3 mt-5 -->
          </div>
          <!--card-body--->
        </template>
        <!--collapse--->
      </bloc-impact>
      <!--card cles--->

      <!--collapse--->
      <bloc-impact>
        <template v-slot:icon
          ><span class="icon-contexte icon white"></span
        ></template>
        <template v-slot:nomBouton>Eléments de contexte </template>
        <template v-slot:contenu>
          <div class="card-body">
            <div
              class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail legumes-fonce"
            >
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span class="icon-impact-especes icon icon legumes"></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span class="info-entete legumes">espèces menacées</span
                    ><span class="info-verbe">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha">1 million</span
                    ><span class="hectares"
                      >d’espèces animales et végétales dans le monde pourraient
                      être menacées d’extinction dans les prochaines décennies
                    </span></span
                  >
                </div>
              </span>
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span class="icon-impact-biodiversite icon legumes"></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span class="info-entete legumes"
                      >diversité en Région wallonne</span
                    ><span class="info-verbe">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha">10%</span
                    ><span class="hectares"
                      >de la diversité des espèces connues au niveau mondial
                      serait abritée en Région wallonne (Avec les
                      outre-mer)</span
                    ></span
                  >
                </div>
              </span>
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span class="icon-affiner-reloc icon legumes"></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span class="info-entete legumes"
                      >artificialisation et agriculture intensive<sup
                        >1
                      </sup></span
                    ><span class="info-verbe">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha">1eres causes</span
                    ><span class="hectares"
                      >de perte de biodiversité</span
                    ></span
                  >
                </div>
              </span>
            </div>
            <div class="mt-5">
              <sup>1 </sup>L’artificialisation et l’agriculture intensive
              figurent parmi les premières causes de perte de biodiversité
            </div>
          </div>
          <!--card-body-->
        </template>
        <!--collapse-->
      </bloc-impact>
      <!--card contexte--->
      <blocImpact>
        <template #contenu>
          <div class="card-body">
            <ul>
              <li>
                Lorsqu’il est défini par hectare, le résultat correspond à la
                différence d’impact entre :
                <ul>
                  <li>
                    1 hectare moyen permettant de répondre aux besoins
                    alimentaires associés à un régime actuel et à une
                    agriculture actuelle ;
                  </li>
                  <li>
                    1 hectare moyen qui permettrait de répondre aux besoins
                    alimentaires associés à des choix de production agricole et
                    de consommation différents (% de bio et changement de
                    régime).
                  </li>
                </ul>
                Attention : il n’est pas possible de mesurer la différence
                d’impact avec des hectares supplémentaires qu’il faudrait
                potentiellement mobiliser. Autrement dit, si l’alimentation
                scénarisée au sein de PARCEL requiert 20% de plus de surfaces
                agricoles, les différentiels d’impacts ne concernent pas ces
                nouvelles surfaces car il n’est pas possible de connaitre
                l’utilisation actuelle (forêts, villes etc.) de ces hectares.
              </li>
              <li>
                Plusieurs indicateurs permettent de rendre compte de l'état de
                la biodiversité. En l’état des données disponibles, PARCEL
                utilise celui de la destruction des espèces (qui correspond
                juste à l’inverse de l’abondance des espèces), à travers les
                travaux de l’Observatoire Agricole de la Biodiversité, sur des
                papillons, des abeilles, des vers de terre et des invertébrés.
              </li>
              <li>
                L’abondance des espèces correspond au nombre d’organismes
                constituant une espèce sur un espace donné. Il est différent de
                la richesse spécifique des espèces, qui correspond au nombre de
                différentes espèces présentes sur un espace donné. La richesse
                spécifique n’est pas mesurée par PARCEL.
              </li>
              <li>
                Il s'agit une vision partielle de l’ensemble de la biodiversité
                (animale et végétale). Cependant, les principaux facteurs
                d’érosion de la biodiversité sont communs pour la grande
                majorité des espèces. Ainsi, les tendances illustrées ne sont
                probablement pas contradictoires avec une vision plus globale de
                cet enjeu.
              </li>
            </ul>
            <!--ul-->
          </div>
        </template>
      </blocImpact>
      <!--card def--->

      <!--cles-->
      <bloc-impact>
        <template v-slot:icon>
          <span class="icon-cles icon white"></span>
        </template>
        <template v-slot:nomBouton>Quelques clés d'interprétation</template>
        <template v-slot:contenu>
          <div class="card-body">
            <div class="d-flex align-items-center">
              <span
                class="icon-ico_filtres-reloc icon cereales icon-medium"
              ></span>
              <strong>Les effets d’une relocalisation</strong>
            </div>
            <ul>
              <li>
                Par hectare, la diminution des émissions de gaz à effet de serre
                est principalement liée à la non-utilisation d’engrais minéraux
                en agriculture biologique (en particulier les engrais azotés de
                synthèse, dont la fabrication est très énergivore) et à la mise
                en œuvre de systèmes d’élevage plus extensifs en moyenne ;
              </li>
              <li>
                Par personne, l’impact est faible du fait de la diminution des
                rendements en bio (on mobilise un plus grand nombre d’hectares
                et on additionne les effets de chacun d’eux).
              </li>
            </ul>
          </div>
          <!--card-body-->
        </template>
      </bloc-impact>
      <!--card-header-->
      <div
        id="collapseCles"
        class="collapse"
        aria-labelledby="heading-cles"
        data-parent="#accordeon-fiche"
      >
        <div class="card-body">
          <div class="d-flex align-items-center">
            <span class="icon-ico_filtres_bio icon cereales icon-medium"></span>
            <strong>Les effets d’un passage au bio</strong>
          </div>
          <ul>
            <li>
              Par hectare, la diminution des émissions de gaz à effet de serre
              est principalement liée à la non-utilisation d’engrais minéraux en
              agriculture biologique (en particulier les engrais azotés de
              synthèse, dont la fabrication est très énergivore) et à la mise en
              œuvre de systèmes d’élevage plus extensifs en moyenne ;
            </li>
            <li>
              Par personne, l’impact est faible du fait de la diminution des
              rendements en bio (on mobilise un plus grand nombre d’hectares et
              on additionne les effets de chacun d’eux).
            </li>
          </ul>

          <div class="d-flex align-items-center">
            <span
              class="icon-ico_navigation_alimentation icon cereales icon-medium"
            ></span>
            <strong>Les effets d’une réduction des produits animaux</strong>
          </div>
          <ul>
            <li>
              Par hectare, les émissions ne diminuent pas forcément avec la
              réduction des produits animaux : l’élevage n’est pas toujours plus
              émetteur en gaz à effet de serre lorsqu’on la ramène à l’unité de
              surface, comparé aux cultures végétales que l’on ajoute pour
              assurer l’apport protéique (fruits à coque, légumineuses…) ;
            </li>
            <li>
              Cependant, c’est l’élevage qui mobilise le plus d’hectare (plus de
              80% de l’empreinte spatiale de notre alimentation actuelle), une
              réduction des produits animaux fait rapidement diminuer le nombre
              d’hectares (explication dans les détails de l’indicateur «
              Empreinte au sol ») et donc les impacts qui leurs sont liés
              (émissions de méthane, de protoxyde d’azote…) : par personne, les
              émissions diminuent fortement avec la réduction des produits
              animaux ;
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <span class="icon-gaspillage icon cereales icon-medium"></span>
            <strong>Les effets d’une réduction des pertes et gaspillage</strong>
          </div>
          <ul>
            <li>
              On ne mesure pas les effets d’une réduction des pertes et
              gaspillage par hectare.
            </li>
            <li>
              Par personne, la réduction des pertes et gaspillages permet de
              réduire les quantités nécessaires à produire et réduit donc
              d’autant les émissions de gaz à effet de serre.
            </li>
          </ul>
        </div>
        <!--card-body--->
      </div>
      <!--collapse--->
      <bloc-impact>
        <template v-slot:icon
          ><span class="icon-contexte icon white"></span
        ></template>
        <template v-slot:nomBouton>Eléments de contexte </template>
        <template v-slot:contenu>
          <div class="card-body">
            <div
              class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail cereales-fonce"
            >
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span
                  class="icon-ico_navigation_alimentation icon icon cereales"
                ></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span class="info-entete cereales"
                      >alimentation<sup>1 </sup></span
                    ><span class="info-verbe">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha"> 24 %</span
                    ><span class="hectares"
                      >de l’empreinte carbone des ménages wallon</span
                    ></span
                  >
                </div>
              </span>
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span class="icon-affiner-reloc icon cereales"></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span class="info-entete cereales"
                      >production agricole </span
                    ><span class="info-verbe">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha"> 2/3</span
                    ><span class="hectares"
                      >de l’empreinte carbone de l’alimentation en Région
                      wallonne</span
                    ></span
                  >
                </div>
              </span>
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span class="icon-ico_CATEGORIES_viande icon cereales"></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span class="info-entete cereales">produits animaux</span
                    ><span class="info-verbe">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha"> 80% </span
                    ><span class="hectares">
                      de l’empreinte carbone de l’alimentation des ménages
                      wallon</span
                    ></span
                  >
                </div>
              </span>
            </div>
            <div class="mt-5">
              <sup>1 </sup>émissions de gaz à effet de serre issues de
              l'alimentation des ménages
            </div>
          </div></template
        >
      </bloc-impact>
      <bloc-impact />
      <div class="card">
        <!--domaine de validite-->
        <!--card-header-->
        <!--collapse-->
      </div>
      <!--card--->
      <blocImpact>
        <template v-slot:icon>
          <span class="icon-ico_calcul2 ipcon white"></span>
        </template>
        <template v-slot:nomBouton>Méthodologie de calcul</template>
        <template v-slot:contenu>
          <div class="card-body">
            <div class="mb-3">
              • Pour les éléments sur la méthode de calcul des indicateurs, se
              référer à la
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
      <blocImpact>
        <template v-slot:icon>
          <span class="icon-source icon white"></span>
        </template>
        <template v-slot:nomBouton>Principales ressources</template>
        <template v-slot:contenu>
          <div class="card-body">
            <ul>
              <li>
                ­<span class="source-titre">Base de Données FoodGES </span
                ><span class="source-auteur"> – ADEME</span
                ><span class="source-année"> – 2016</span>
                <div>
                  <a
                    class=""
                    href="http://www.bilans-ges.ademe.fr/fr/actualite/actualite/detail/id/23"
                    >Voir l'étude</a
                  >
                </div>
              </li>
              <li>
                ­<span class="source-titre"
                  >Quantifier et chiffrer économiquement les externalités de
                  l’agriculture biologique ?</span
                ><span class="source-auteur">
                  – ITAB, Sautereau, N., Benoît, M. </span
                ><span class="source-année"> – 2016</span>
                <div>
                  <a
                    class=""
                    href="http://www.itab.asso.fr/downloads/amenites/amenites-ab-rapport-nov2016.pdf"
                    >Voir l'étude</a
                  >
                </div>
              </li>
              <li>
                ­<span class="source-titre"
                  >Many shades of gray - The context-dependent performance of
                  organic agriculture</span
                ><span class="source-auteur">
                  – Seufert, V., Ramankutty, N.</span
                ><span class="source-année"> – 2017</span>
                <div>
                  <a
                    class=""
                    href="https://www.researchgate.net/publication/314682330_Many_shades_of_gray-The_context-dependent_performance_of_organic_agriculture"
                    >Voir l'étude</a
                  >
                </div>
              </li>
              <li>
                ­<span class="source-titre"
                  >L’empreinte énergétique et carbone de l’alimentation en
                  Région wallonne – de la production à la consommation</span
                ><span class="source-auteur">
                  – Barbier, C., Couturier C. et al.</span
                ><span class="source-année">– 2019</span>
                <div>
                  <a
                    class=""
                    href="https://www.actu-environnement.com/media/pdf/news-32955-etude.pdf"
                    >Voir l'étude</a
                  >
                </div>
              </li>
              <li>
                ­<span class="source-titre"
                  >Une Europe agroécologique en 2050 : une agriculture
                  multifonctionnelle pour une alimentation saine.</span
                ><span class="source-auteur"> – Aubert, P.M., Poux, X. </span
                ><span class="source-année"> – 2018</span>
                <div>
                  <a
                    class=""
                    href="https://www.iddri.org/sites/default/files/PDF/Publications/Catalogue%20Iddri/Etude/201809-ST0918-tyfa_0.pdf"
                    >Voir l'étude</a
                  >
                </div>
              </li>
              <li>
                ­<span class="source-titre"
                  >Elevage bovin et environnement : les chiffres clés.</span
                ><span class="source-auteur"> – IDELE</span
                ><span class="source-année"> – 2018</span>
                <div>
                  <a
                    class=""
                    href="http://idele.fr/?eID=cmis_download&oID=workspace://SpacesStore/22418327-4fcf-4f1c-9b45-eb7d0c3e5682"
                    >Voir l'étude</a
                  >
                </div>
              </li>
            </ul>
          </div></template
        >
      </blocImpact>
      <!--card--->
    </div>
    <!--accordeon--->
  </div>
  <!--modal-body--->
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
    fermerModal() {
      this.$emit("fermerModal");
    },
  },
};
</script>
