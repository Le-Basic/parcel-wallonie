<template>
  <div
    id="modal-impact-climat1"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div>
            <span
              class="icon-impact-co2 ico-medium ico-impact mr-3 cereales"
            />
          </div>
          <div class="d-flex flex-column">
            <div class="titre-categorie">
              Le climat et l’air : les émissions de gaz à effet de serre
            </div>
            <div class="hectares" />
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="icon-ico_fermer icon" />
          </button>
        </div>
        <!--modal-header--->
        <div class="modal-body">
          <div
            id="accordeon-fiche"
            class="accordeon-detail cereales-fonce"
          >
            <blocImpact>
              <template #icon>
                <span class="icon-source icon white" />
              </template>
              <template #nomBouton>
                Principales ressources
              </template>
              <template #contenu>
                <div>
                  <div class="row cadre-impacts mb-4">
                    <div class="col cadre-impact">
                      <div class="cadre-impact-detail">
                        <div class="impact-graph text-center">
                          <span
                            class="icon-impact-co2 ico-medium ico-impact"
                          /><span class="impact-result"><span
                            id="flechemodalair12"
                            class="ico-medium"
                          /><span
                            id="impactmodalair12"
                            class="impact-nbr"
                          ><span id="gaz_effet_serre32">-</span>%
                          </span></span>
                        </div>
                        <div class="impact-nom text-center">
                          Emissions de gaz à effet de serre
                        </div>
                        <div class="impact-nom text-center">
                          <strong>par hectare</strong>
                        </div>
                      </div>
                      <div>
                        <strong>Quel est l’impact environnemental d’un hectare moyen
                          nécessaire à la production de mon alimentation
                          ?</strong>
                      </div>
                    </div>
                    <div class="col cadre-impact">
                      <div class="cadre-impact-detail">
                        <div class="impact-graph text-center">
                          <span
                            class="icon-impact-co2 ico-medium ico-impact"
                          /><span class="impact-result"><span
                            id="flechemodalair22"
                            class="ico-medium"
                          /><span
                            id="impactmodalair22"
                            class="impact-nbr"
                          ><span id="gaz_effet_serre42">-</span>%
                          </span></span>
                        </div>
                        <div class="impact-nom text-center">
                          Emissions de gaz à effet de serre
                        </div>
                        <div class="impact-nom text-center">
                          <strong>par personne</strong>
                        </div>
                      </div>
                      <div>
                        <strong>Quel est l’impact environnemental de mon alimentation
                          ?</strong>
                      </div>
                    </div>
                  </div>
                  <p>
                    <strong>Par personne</strong>, on donne l’impact écologique
                    global d’un changement d’alimentation. Les évolutions de ces
                    impacts dépendent :
                  </p>
                  <ul>
                    <li>
                      D’une part de l’évolution du nombre total d’hectares
                      nécessaires pour satisfaire cette nouvelle demande
                      alimentaire ;
                    </li>
                    <li>
                      et d’autre part de l’impact de chacun de ces hectares.
                    </li>
                  </ul>
                  <p>
                    <strong>La vision par hectare</strong> permet d’isoler ce
                    deuxième élément. Puisque la surface de terre disponible et
                    son état écologique est l’une des ressources les plus
                    limitantes pour la production alimentaire, il est essentiel
                    d’identifier les pratiques qui diminuent les impacts par
                    hectare.
                  </p>
                </div>
                <!--card-body--->
              </template>
            </blocImpact>
            <blocImpact>
              <template #icon>
                <span class="icon-source icon white" />
              </template>
              <template #nomBouton>
                Principales ressources
              </template>
              <template #contenu>
                <div class="card-body">
                  <!-- def indicateur-->
                  <div class="def-indicateur">
                    <div
                      class="line1 d-flex align-items-end flex-md-row flex-column"
                    >
                      <div class="col-md-7 col-12">
                        <div class="cadre-resultat cadre-clair text-left">
                          <div class="indic-titre cereales">
                            Alimentation actuelle
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_navigation_territoire icon cereales icon-medium"
                            />Pas de relocalisation
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_CATEGORIES_viande icon cereales icon-medium"
                            />Régime actuel
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-affiner-reloc icon cereales icon-medium"
                            />Agriculture actuelle
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-gaspillage icon cereales icon-medium"
                            />Pertes et gaspillage actuelles
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
                          >
                        </div>
                      </div>
                      <div class="pl-3 pr-3">
                        <div class="alert alert-danger align-items-center h-25">
                          <div>
                            <strong>Parcel ne se prononce pas sur les impacts de la
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
                          <div class="indic-titre cereales">
                            Alimentation relocalisée
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_filtres-reloc icon cereales icon-medium"
                            />Relocalisation
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_CATEGORIES_viande icon cereales icon-medium"
                            />Régime actuel
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-affiner-reloc icon cereales icon-medium"
                            />Agriculture actuelle
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-gaspillage icon cereales icon-medium"
                            />Pertes et gaspillage actuelles
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
                          >
                        </div>
                        <div class="cadre-resultat cadre-clair">
                          <div class="indic-titre cereales">
                            Alimentation scénarisée
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_filtres-reloc icon cereales icon-medium"
                            />Relocalisation
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_navigation_alimentation icon cereales icon-medium"
                            />Changement de régime
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-ico_filtres_bio icon cereales icon-medium"
                            />% d'agriculture en bio ?
                          </div>
                          <div class="line-ico d-flex align-items-center">
                            <span
                              class="icon-gaspillage icon cereales icon-medium"
                            />Réduction des pertes et gaspillage
                          </div>
                        </div>
                      </div>
                      <div class="pl-3 pr-3">
                        <div class="alert alert-success">
                          <strong>Parcel donne l'impact d'un passage au bio, d'un
                            changement de régime alimentaire et de réduction des
                            pertes et gaspillage.</strong>
                        </div>
                        <div class="alert alert-success">
                          <div class="indic-legende">
                            EMISSIONS DE GAZ A EFFET DE SERRE
                          </div>
                          <div class="indic-detail">
                            (Différence d'emissions de DIOXYDE DE CARBONE (CO2)
                            + MÉTHANE (CH4) + PROTOXYDE D’AZOTE (N2O))
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--line2-->
                  </div>
                  <div class="mb-3 mt-5">
                    <div class="mb-3">
                      <strong>Autrement dit, on calcule la différence entre les
                        impacts entre une alimentation relocalisée avec des
                        régimes, des parts de bio et des pertes et gaspillage
                        actuels et une alimentation relocalisée avec des
                        régimes, des parts de bio et des réductions des pertes
                        et gaspillage choisis par l’utilisateur. </strong>On ne calcule pas l’impact de la relocalisation seule de
                      l’alimentation (trop d’incertitudes en l’état actuel des
                      connaissances).
                    </div>
                  </div>
                  <!--mb-3 mt-5 -->
                </div>
                <!--card-body--->
              </template>
            </blocImpact>
            <blocImpact>
              <template #icon>
                <span class="icon-source icon white" />
              </template>
              <template #nomBouton>
                Principales ressources
              </template>
              <template #contenu>
                <template>
                  <div
                    id="modalImpacts"
                    class="modal fade"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="modalImpactsLabel"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered modal-repart-cat-detail"
                      role="document"
                    >
                      <div class="modal-content modal-repart-cat-detail">
                        <div class="modal-header">
                          <h5
                            id="modalImpactsLabel"
                            class="modal-title"
                          >
                            Impacts climatiques
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div
                            id="accordeon"
                            class="accordeon"
                          >
                            <blocImpact>
                              <template #icon>
                                <span class="icon-source icon white" />
                              </template>
                              <template #nomBouton>
                                Principales ressources
                              </template>
                              <template #contenu>
                                <div class="card-body">
                                  <div class="d-flex align-items-center">
                                    <span
                                      class="icon-ico_filtres_bio icon cereales icon-medium"
                                    />
                                    <strong>Les effets d’un passage au bio</strong>
                                  </div>
                                  <ul>
                                    <li>
                                      Par hectare, la diminution des émissions
                                      de gaz à effet de serre est principalement
                                      liée à la non-utilisation d’engrais
                                      minéraux en agriculture biologique (en
                                      particulier les engrais azotés de
                                      synthèse, dont la fabrication est très
                                      énergivore) et à la mise en œuvre de
                                      systèmes d’élevage plus extensifs en
                                      moyenne ;
                                    </li>
                                    <li>
                                      Par personne, l’impact est faible du fait
                                      de la diminution des rendements en bio (on
                                      mobilise un plus grand nombre d’hectares
                                      et on additionne les effets de chacun
                                      d’eux).
                                    </li>
                                  </ul>
                                </div>
                                <!--card-body-->
                              </template>
                            </blocImpact>
                            <blocImpact>
                              <template #icon>
                                <span class="icon-source icon white" />
                              </template>
                              <template #nomBouton>
                                Principales ressources
                              </template>
                              <template #contenu>
                                <div class="card-body">
                                  <div class="d-flex align-items-center">
                                    <span
                                      class="icon-ico_navigation_alimentation icon cereales icon-medium"
                                    />
                                    <strong>Les effets d’une réduction des produits
                                      animaux</strong>
                                  </div>
                                  <ul>
                                    <li>
                                      Par hectare, les émissions ne diminuent
                                      pas forcément avec la réduction des
                                      produits animaux : l’élevage n’est pas
                                      toujours plus émetteur en gaz à effet de
                                      serre lorsqu’on la ramène à l’unité de
                                      surface, comparé aux cultures végétales
                                      que l’on ajoute pour assurer l’apport
                                      protéique (fruits à coque, légumineuses…)
                                      ;
                                    </li>
                                    <li>
                                      Cependant, c’est l’élevage qui mobilise le
                                      plus d’hectare (plus de 80% de l’empreinte
                                      spatiale de notre alimentation actuelle),
                                      une réduction des produits animaux fait
                                      rapidement diminuer le nombre d’hectares
                                      (explication dans les détails de
                                      l’indicateur « Empreinte au sol ») et donc
                                      les impacts qui leurs sont liés (émissions
                                      de méthane, de protoxyde d’azote…) : par
                                      personne, les émissions diminuent
                                      fortement avec la réduction des produits
                                      animaux ;
                                    </li>
                                  </ul>
                                </div>
                                <!--card-body-->
                              </template>
                            </blocImpact>
                            <blocImpact>
                              <template #icon>
                                <span class="icon-source icon white" />
                              </template>
                              <template #nomBouton>
                                Principales ressources
                              </template>
                              <template #contenu>
                                <div class="card-body">
                                  <div class="d-flex align-items-center">
                                    <span
                                      class="icon-gaspillage icon cereales icon-medium"
                                    />
                                    <strong>Les effets d’une réduction des pertes et
                                      gaspillage</strong>
                                  </div>
                                  <ul>
                                    <li>
                                      On ne mesure pas les effets d’une
                                      réduction des pertes et gaspillage par
                                      hectare.
                                    </li>
                                    <li>
                                      Par personne, la réduction des pertes et
                                      gaspillages permet de réduire les
                                      quantités nécessaires à produire et réduit
                                      donc d’autant les émissions de gaz à effet
                                      de serre.
                                    </li>
                                  </ul>
                                </div>
                                <!--card-body-->
                              </template>
                            </blocImpact>
                            <blocImpact>
                              <template #icon>
                                <span class="icon-source icon white" />
                              </template>
                              <template #nomBouton>
                                Principales ressources
                              </template>
                              <template #contenu>
                                <div class="card-body">
                                  <ul>
                                    <li>
                                      Lorsqu’il est défini par hectare, la
                                      mesure d’impact dans PARCEL correspond à
                                      la différence d’impact entre :
                                      <ul>
                                        <li>
                                          1 hectare moyen permettant de répondre
                                          aux besoins alimentaires associés à un
                                          régime actuel et à une agriculture
                                          actuelle ;
                                        </li>
                                        <li>
                                          1 hectare moyen qui permettrait de
                                          répondre aux besoins alimentaires
                                          associés à des choix de production
                                          agricole et de consommation différents
                                          (% de bio et changement de régime
                                          alimentaire).
                                        </li>
                                      </ul>
                                      Attention : il n’est pas possible de
                                      mesurer la différence d’impact engendrée
                                      par les hectares supplémentaires qu’il
                                      faudrait potentiellement mobiliser.
                                      Autrement dit, si l’alimentation
                                      scénarisée via PARCEL requiert 20% de plus
                                      de surfaces agricoles, les différentiels
                                      d’impacts de ces nouvelles surfaces ne
                                      sont pas calculés car il n’est pas
                                      possible de savoir où seraient situés ces
                                      hectares ni de connaitre leur utilisation
                                      actuelle (forêts, villes etc.).
                                    </li>
                                    <li>
                                      L’indicateur « émissions de gaz à effet de
                                      serre » ne prend pas en compte le
                                      changement d’usage des sols. Dans certains
                                      cas, cela pourrait participer à des
                                      émissions supplémentaires (de CO2
                                      notamment).
                                    </li>
                                    <li>
                                      L’utilisation des inventaires d’Analyse
                                      Cycle de Vie de la base de données FoodGES
                                      de l’ADEME implique notamment :
                                      <ul>
                                        <li>
                                          Que le périmètre retenu est celui
                                          «&nbsp;depuis la production des
                                          intrants agricoles jusqu’à la sortie
                                          magasin&nbsp;»
                                        </li>
                                        <li>
                                          Que les phénomènes de stockage /
                                          déstockage de carbone des surfaces
                                          mobilisées ne sont pas pris en compte
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <!--card-body-->
                              </template>
                            </blocImpact>
                            <blocImpact>
                              <template #icon>
                                <span class="icon-source icon white" />
                              </template>
                              <template #nomBouton>
                                Principales ressources
                              </template>
                              <template #contenu>
                                <div class="card-body">
                                  <div class="mb-3">
                                    • Pour les éléments sur la méthode de calcul
                                    des indicateurs, se référer à la
                                    <a
                                      href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >page annexe méthodologique</a>, accessible par le menu principal
                                  </div>
                                </div>
                                <!--card-body-->
                              </template>
                            </blocImpact>
                            <blocImpact>
                              <template #icon>
                                <span class="icon-source icon white" />
                              </template>
                              <template #nomBouton>
                                Principales ressources
                              </template>
                              <template #contenu>
                                <div class="card-body">
                                  <ul>
                                    <li>
                                      ­<span class="source-titre">Base de Données FoodGES </span><span class="source-auteur">
                                        – ADEME</span><span class="source-année"> – 2016</span>
                                      <div>
                                        <a
                                          class=""
                                          href="http://www.bilans-ges.ademe.fr/fr/actualite/actualite/detail/id/23"
                                        >Voir l'étude</a>
                                      </div>
                                    </li>
                                    <li>
                                      ­<span class="source-titre">Quantifier et chiffrer économiquement
                                        les externalités de l’agriculture
                                        biologique ?</span><span class="source-auteur">
                                        – ITAB, Sautereau, N., Benoît, M. </span><span class="source-année"> – 2016</span>
                                      <div>
                                        <a
                                          class=""
                                          href="http://www.itab.asso.fr/downloads/amenites/amenites-ab-rapport-nov2016.pdf"
                                        >Voir l'étude</a>
                                      </div>
                                    </li>
                                    <li>
                                      ­<span class="source-titre">Many shades of gray - The
                                        context-dependent performance of organic
                                        agriculture</span><span class="source-auteur">
                                        – Seufert, V., Ramankutty, N.</span><span class="source-année"> – 2017</span>
                                      <div>
                                        <a
                                          class=""
                                          href="https://www.researchgate.net/publication/314682330_Many_shades_of_gray-The_context-dependent_performance_of_organic_agriculture"
                                        >Voir l'étude</a>
                                      </div>
                                    </li>
                                    <li>
                                      ­<span class="source-titre">L’empreinte énergétique et carbone de
                                        l’alimentation en France – de la
                                        production à la consommation</span><span class="source-auteur">
                                        – Barbier, C., Couturier C. et al.</span><span class="source-année">– 2019</span>
                                      <div>
                                        <a
                                          class=""
                                          href="https://www.actu-environnement.com/media/pdf/news-32955-etude.pdf"
                                        >Voir l'étude</a>
                                      </div>
                                    </li>
                                    <li>
                                      ­<span class="source-titre">Une Europe agroécologique en 2050 : une
                                        agriculture multifonctionnelle pour une
                                        alimentation saine.</span><span class="source-auteur">
                                        – Aubert, P.M., Poux, X. </span><span class="source-année"> – 2018</span>
                                      <div>
                                        <a
                                          class=""
                                          href="https://www.iddri.org/sites/default/files/PDF/Publications/Catalogue%20Iddri/Etude/201809-ST0918-tyfa_0.pdf"
                                        >Voir l'étude</a>
                                      </div>
                                    </li>
                                    <li>
                                      ­<span class="source-titre">Elevage bovin et environnement : les
                                        chiffres clés.</span><span class="source-auteur">
                                        – IDELE</span><span class="source-année"> – 2018</span>
                                      <div>
                                        <a
                                          class=""
                                          href="http://idele.fr/?eID=cmis_download&oID=workspace://SpacesStore/22418327-4fcf-4f1c-9b45-eb7d0c3e5682"
                                        >Voir l'étude</a>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <!--card-body-->
                              </template>
                            </blocImpact>
                          </div>
                          <!--accordeon--->
                        </div>
                        <!--modal-body--->
                      </div>
                      <!--modal-content modal-repart-cat-detail-->
                    </div>
                    <!--modal dialog-->
                  </div>
                  <!--modal fade -->
                </template>
              </template>
            </blocImpact>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
