<template>
  <div class="asy-wrapper" style="flex-direction: row">
    <div>
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="5"
      />
      <div class="section centrervh" id="section0">
        <div class="container">
          <h1 class="animated fadeInUp fast h1-result">Agir</h1>
          <div class="text-h2">Vous êtes :</div>
          <div
            class="accordion ml-auto mr-auto accordeon-agir"
            id="accordeon-Agir1"
          >
            <div class="w-100 h-auto" id="headingAgir1">
              <button
                class="w-100 btn btn-link collapsed"
                type="button"
                data-toggle="collapse show"
                data-target="#collapseAgir1"
                aria-expanded="false"
                aria-controls="collapseAgir1"
                onclick="partage();"
              >
                Un.e citoyen.ne
              </button>
            </div>
            <!--end heading accordeon-->
            <div
              id="collapseAgir1"
              class="collapse show"
              aria-labelledby="headingAgir1"
              data-parent="#accordeon-Agir1"
            >
              <div class="d-flex flex-wrap mt-4 mb-5">
                <div class="col-md-6 col-12 impacts-cle d-flex order-1">
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    1
                  </div>
                  <div class="puce-text">
                    <div class="title">J’écris à mon élu.e local</div>
                    pour l’inciter à relocaliser l’alimentation et soutenir le
                    développement de l'agriculture biologique sur mon
                    territoire.
                    <a
                      href="../assets/pdf/modele-courrier-elu-e.odt"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="url-simple"
                      >Télécharger le modèle de courrier</a
                    >
                    <br />
                    <br />
                    <ul>
                      <li>
                        <a
                          href="https://www.uvcw.be/fiches-locales/"
                          target="_blank"
                          >Retrouver les contacts de vos élus locaux</a
                        >
                      </li>
                    </ul>
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
                    <div class="title">
                      Je découvre les initiatives de transition dans mon
                      territoire :
                    </div>
                    <ul>
                      <a href="https://www.collectif5c.be/"
                        ><li>Les coopératives citoyennes - Collectif 5C</li></a
                      >
                      <a
                        href="https://www.mangerdemain.be/2021/02/01/developper-un-projet-de-ceinture-alimentaire-en-wallonie-freins-et-leviers/"
                      >
                        <li>Les ceintures alimentaires</li>
                      </a>
                      <a href="https://www.mangerdemain.be/cpa-locaux/"
                        ><li>Les Conseil de Politiques Alimentaires,</li></a
                      ><a href="https://www.reseauwallonpac.be/sections/gal">
                        <li>Les Groupes d’action locale</li></a
                      >
                      <a href="https://saw-b.be/"
                        ><li>
                          Une aide pour un projet d’économie sociale – SAW-B
                        </li></a
                      >
                    </ul>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-3 order-md-5"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    6
                  </div>
                  <div class="puce-text">
                    <div class="title">Je veux en savoir plus sur l’/le:</div>
                    <ul>
                      <a href="https://www.biowallonie.com/"
                        ><li>Agriculture biologique – Biowallonie</li></a
                      >
                      <a href="https://terre-en-vue.be/"
                        ><li>Accès à la terre – Terre-en-Vue</li></a
                      >
                      <a
                        href="https://moinsdedechets.wallonie.be/gaspillage-alimentaire/le-plan-regal.php"
                      >
                        <li>Gaspillage alimentaire – Plan regal</li></a
                      ><a href="https://sytra.be/fr/abonnement-newsletter/">
                        <li>
                          Les scénarios de transition – Newsletter SYTRA
                        </li></a
                      >
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
                    <div class="title">
                      <a href="#" onclick="partage();"
                        >Je partage mes résultats de PARCEL-Wallonie sur les
                        réseaux sociaux</a
                      >
                    </div>
                    <div class="mt-5">
                      <div id="divpartage" style="display: none" class="mb-3">
                        <label
                          >Afin de retrouver les paramètres de votre recherche
                          vous pouvez copier le lien ci-dessous et le coller
                          dans un navigateur</label
                        ><input
                          type="text"
                          value=""
                          id="inputpartage"
                          class="w-100"
                        />
                        <button
                          onclick="myFunction()"
                          class="btn btn-principal mt-3"
                        >
                          Copier l'url
                        </button>
                      </div>
                      <div class="mb-3 mt-5">
                        <a
                          href="https://www.facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          ><span
                            class="icon-ico_partage_facebook icon agir pointer"
                            onclick="partage();"
                          ></span
                        ></a>
                        <a
                          href="https://www.twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            class="icon-ico_partage_twitter icon agir pointer"
                            onclick="partage();"
                          ></span
                        ></a>
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          ><span
                            class="icon-linkedin icon agir pointer"
                            onclick="partage();"
                          ></span
                        ></a>
                        <a
                          href="mailto:"
                          target="_blank"
                          rel="noopener noreferrer"
                          ><span
                            class="icon-ico_partage_mail icon agir pointer"
                            onclick="partage();"
                          ></span></a
                        ><!-- <span class="icon-ico_partage_lien icon agir pointer" onclick="partage();"></span>-->
                      </div>
                    </div>
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
                    <div class="title">Je souhaite rester informé.e:</div>
                    <ul>
                      <a
                        href="https://sytra.be/fr/publication/abonnez-vous-a-notre-newsletter/"
                        ><li>Newsletter de Sytra</li></a
                      >
                      <li>
                        <a
                          href="https://www.wallonie.be/fr/acteurs-et-institutions/wallonie/pole-strategique/direction-du-developpement-durable"
                        >
                          Site de la Direction du Développement Durable
                          –Alimentation durable
                        </a>
                      </li>
                      <li>
                        Site du Baromètre de l’Alimentation Durable (à venir)
                      </li>
                      <a
                        href="https://developpementdurable.wallonie.be/thematiques/alimentation-durable/Food-Wallonia#:~:text=Adopt%C3%A9%20en%20octobre%202022%20par,aux%20enjeux%20de%20court%20terme."
                        ><li>Stratégie Food Wallonia</li></a
                      >
                      <a href="https://etat-agriculture.wallonie.be/home.html"
                        ><li>Etat de l’agriculture Wallonne</li>
                      </a>
                      <a href="http://etat.environnement.wallonie.be/home.html">
                        <li>Etat de l’Environnement Wallon</li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-5 order-md-4"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    3
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      Je souhaite contacter les structures partenaires
                    </div>
                    <ul>
                      <li>SYTRA (contact@sytra.be)</li>
                      <li>Le Basic (contact@parcel-wallonie.be)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end accordeon-->
          <div
            class="accordion ml-auto mr-auto accordeon-agir"
            id="accordeon-Agir2"
          >
            <div class="w-100 h-auto" id="headingAgir2">
              <button
                class="w-100 btn btn-link collapsed"
                type="button"
                data-toggle="collapse show"
                data-target="#collapseAgir2"
                aria-expanded="false"
                aria-controls="collapseAgir2"
              >
                Une collectivité territoriale
              </button>
            </div>
            <!--end heading accordeon-->
            <div
              id="collapseAgir2"
              class="collapse show"
              aria-labelledby="headingAgir2"
              data-parent="#accordeon-Agir2"
            >
              <div class="d-flex flex-wrap mt-4 mb-5">
                <div class="col-md-6 col-12 impacts-cle d-flex order-1">
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    1
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      <a
                        href="javascript:location='mailto:\u0070\u0061\u0072\u0063\u0065\u006c\u0040\u0074\u0065\u0072\u0072\u0065\u0064\u0065\u006c\u0069\u0065\u006e\u0073\u002e\u006f\u0072\u0067\u0020\u0020\u0020';void 0"
                        class="url-simple"
                        >J'utilise PARCEL-Walloniepour:</a
                      >
                    </div>

                    <ul>
                      <li>
                        Pour connaître la situation agricole de mon territoire
                        et les enjeux
                      </li>
                      <li>
                        Accéder à un ensemble données officielles et consolidée
                      </li>
                      <li>
                        Créer du dialogue et des réflexions sur des bases
                        communes sur mon territoire
                      </li>
                    </ul>
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
                    <div class="title">Je contacte Terre-en-vue pour:</div>
                    <ul>
                      <li>
                        Pour connaître la situation foncière de mon territoire
                        et les enjeux
                      </li>
                      <li>
                        Découvrir un ensemble de ressources utiles, pour agir
                        sur le foncier à l'échelle des territoires
                      </li>
                      <li>
                        Être accompagné dans une réflexion sur la stratégie
                        foncière du territoire
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-2 order-md-3"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    5
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      <a href="#"
                        >Je contacte les initiatives de transition pour vérifier
                        ce qui existe dans mon territoire :</a
                      >
                    </div>
                    <ul>
                      <a href="https://www.mangerdemain.be/">
                        <li>
                          La cellule Manger Demain - pour connaître la situation
                          des cantines de mon territoire (et d’autres
                          initiatives)
                        </li></a
                      >
                      <a href="https://www.collectif5c.be/"
                        ><li>Les coopératives citoyennes - Collectif 5C</li></a
                      >
                      <a
                        href="https://www.mangerdemain.be/2021/02/01/developper-un-projet-de-ceinture-alimentaire-en-wallonie-freins-et-leviers/"
                      >
                        <li>Les ceintures alimentaires</li>
                      </a>
                      <a href="https://www.mangerdemain.be/cpa-locaux/"
                        ><li>Les Conseil de Politiques Alimentaires,</li></a
                      ><a href="https://www.reseauwallonpac.be/sections/gal">
                        <li>Les Groupes d’action locale</li></a
                      >
                      <a href="https://saw-b.be/"
                        ><li>
                          Une aide pour un projet d’économie sociale – SAW-B
                        </li></a
                      >
                    </ul>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-4 order-md-2"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    3
                  </div>
                  <div class="puce-text">
                    <a href="https://sytra.be/fr/"
                      ><div class="title">Je contacte SYTRA pour :</div>
                      <ul>
                        <li>Le développement de scénarios de transition ;</li>
                        <li>
                          Avoir une compréhension des filières et de leurs
                          impacts sur mon territoire ;
                        </li>
                      </ul>
                    </a>
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
                    <div class="title">
                      <a
                        href="https://www.biowallonie.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je veux en savoir plus sur l’/le:
                      </a>
                    </div>
                    <ul>
                      <a href="https://www.biowallonie.com/"
                        ><li>Agriculture biologique – Biowallonie</li></a
                      >
                      <a href="https://terre-en-vue.be/"
                        ><li>Accès à la terre – Terre-en-Vue</li></a
                      >
                      <a
                        href="https://moinsdedechets.wallonie.be/gaspillage-alimentaire/le-plan-regal.php"
                      >
                        <li>Gaspillage alimentaire – Plan regal</li></a
                      ><a href="https://sytra.be/fr/abonnement-newsletter/">
                        <li>
                          Les scénarios de transition – Newsletter SYTRA
                        </li></a
                      >
                    </ul>
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
                    <a
                      href="https://www.biowallonie.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div class="title">Je contacte Biowallonie pour:</div>
                    </a>
                    <ul>
                      <li>
                        Mieux connaître le contexte agricole de mon territoire
                      </li>
                      <li>Participer au développement de filières bio</li>
                      <li>
                        Favoriser les conversions en bio sur mon territoire
                      </li>
                      <li>
                        Favoriser les conversions en bio sur mon territoire
                      </li>
                      <li>
                        Sécuriser les transmissions d’exploitations bio pour que
                        les terres bio restent bio
                      </li>
                      <li>
                        Faciliter techniquement l’installation de porteurs de
                        projets agricoles
                      </li>
                      <li>
                        Faciliter l’accès de tous aux produits bio et locaux sur
                        mon territoire, notamment en restauration collective
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end accordeon-->
          <div
            class="accordion ml-auto mr-auto accordeon-agir"
            id="accordeon-Agir3"
          >
            <div class="w-100 h-auto" id="headingAgir3">
              <button class="w-100 btn btn-link collapsed" type="button">
                Un.e agriculteur.trice
              </button>
            </div>
            <!--end heading accordeon-->
            <div
              id="collapseAgir3"
              class="collapse show"
              aria-labelledby="headingAgir3"
              data-parent="#accordeon-Agir3"
            >
              <div class="d-flex flex-wrap mt-4 mb-5">
                <div class="col-md-6 col-12 impacts-cle d-flex order-1">
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    1
                  </div>
                  <div class="puce-text">
                    <div class="title">J’écris à mon élu.e local</div>
                    pour l’inciter à relocaliser l’alimentation et soutenir le
                    développement de l'agriculture biologique sur mon
                    territoire.
                    <br />
                    <br />
                    <ul>
                      <li>
                        <a
                          href="https://www.uvcw.be/fiches-locales/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="url-simple"
                          >1. Retrouver les contacts de vos communes et élu.e.s
                          locaux
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-3 order-md-3"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    2
                  </div>
                  <div class="puce-text">
                    <a
                      href="https://www.biowallonie.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div class="title">Je contacte Biowallonie</div>
                      <ul>
                        <li>
                          Me renseigner sur la conversion à l’agriculture
                          biologique
                        </li>
                        <li>
                          Faire évoluer mes pratiques et mes modes de
                          commercialisation
                        </li>
                      </ul>
                    </a>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-5 order-md-6"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    3
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      <a href="https://terre-en-vue.be/"
                        >Je contacte Terre-en-vue pour:</a
                      >
                    </div>
                    <a
                      href="https://terre-en-vue.be/"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="url-simple"
                    >
                      <ul>
                        <li>
                          Pour faciliter la reprise de ma ferme par un.e
                          paysan.ne bio.
                        </li>
                      </ul>
                    </a>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-2 order-md-2"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    4
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      <a href="https://www.natagriwal.be/" class="url-simple">
                        Je contacte Natagriwal pour la mise en place de MAEC
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-4 order-md-5"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    5
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      Je contacte les initiatives de transition pour vérifier ce
                      qui existe dans mon territoire :
                    </div>
                    <ul>
                      <a href="https://www.mangerdemain.be/">
                        <li>
                          La cellule Manger Demain - pour connaître la situation
                          des cantines de mon territoire (et d’autres
                          initiatives)
                        </li>
                      </a>
                      <a href="https://www.collectif5c.be/"
                        ><li>Les coopératives citoyennes - Collectif 5C</li></a
                      >
                      <a
                        href="https://www.mangerdemain.be/2021/02/01/developper-un-projet-de-ceinture-alimentaire-en-wallonie-freins-et-leviers/"
                      >
                        <li>Les ceintures alimentaires</li>
                      </a>
                      <a href="https://www.mangerdemain.be/cpa-locaux/"
                        ><li>Les Conseil de Politiques Alimentaires,</li></a
                      ><a href="https://www.reseauwallonpac.be/sections/gal">
                        <li>Les Groupes d’action locale</li></a
                      >
                      <a href="https://saw-b.be/"
                        ><li>
                          Une aide pour un projet d’économie sociale – SAW-B
                        </li></a
                      >
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end accordeon-->
          <div
            class="accordion ml-auto mr-auto accordeon-agir"
            id="accordeon-Agir4"
          >
            <div class="w-100 h-auto" id="headingAgir4">
              <button
                class="w-100 btn btn-link collapsed"
                type="button"
                data-toggle="collapse show"
                data-target="#collapseAgir4"
                aria-expanded="false"
                aria-controls="collapseAgir4"
              >
                Une entreprise ou une association
              </button>
            </div>
            <!--end heading accordeon-->
            <div
              id="collapseAgir4"
              class="collapse show"
              aria-labelledby="headingAgir4"
              data-parent="#accordeon-Agir4"
            >
              <div class="d-flex flex-wrap mt-4 mb-5">
                <div class="col-md-6 col-12 impacts-cle d-flex order-1">
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    1
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      <a
                        href="https://www.biowallonie.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je contacte Biowallonie</a
                      >
                    </div>
                    <ul>
                      <li>Développer des gammes de produits bio et locales</li>
                      <li>
                        Faire évoluer l’alimentation de mon entreprise vers plus
                        de bio et local
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-3 order-md-5 order-2 order-md-3"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    2
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      <a
                        href="https://terre-en-vue.be/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je contacte Terre-en-vue pour
                      </a>
                    </div>
                    engager mon entreprise aux côtés d’un mouvement citoyen pour
                    préserver les terres agricoles proche de chez moi
                  </div>
                </div>
                <div
                  class="col-md-6 col-12 impacts-cle d-flex order-2 order-md-3"
                >
                  <div
                    class="puce-number d-flex align-items-center justify-content-center"
                  >
                    3
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      Je contacte les initiatives de transition pour vérifier ce
                      qui existe dans mon territoire :
                    </div>
                    <ul>
                      <a href="https://www.mangerdemain.be/">
                        <li>
                          La cellule Manger Demain - pour connaître la situation
                          des cantines de mon territoire (et d’autres
                          initiatives)
                        </li>
                      </a>
                      <a href="https://www.collectif5c.be/"
                        ><li>Les coopératives citoyennes - Collectif 5C</li></a
                      >
                      <a
                        href="https://www.mangerdemain.be/2021/02/01/developper-un-projet-de-ceinture-alimentaire-en-wallonie-freins-et-leviers/"
                      >
                        <li>Les ceintures alimentaires</li>
                      </a>
                      <a href="https://www.mangerdemain.be/cpa-locaux/"
                        ><li>Les Conseil de Politiques Alimentaires,</li></a
                      ><a href="https://www.reseauwallonpac.be/sections/gal">
                        <li>Les Groupes d’action locale</li></a
                      >
                      <a href="https://saw-b.be/"
                        ><li>
                          Une aide pour un projet d’économie sociale – SAW-B
                        </li></a
                      >
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--button class="btn btn-principal" onclick="savepdf()">Export PDF</button>
          <button class="btn btn-principal" onclick="savepdf2()">Export PDF 2</button-->
          <!--button class="btn btn-principal" onclick="savepdf3()">Export PDF 3</button-->
          <!--end accordeon-->
        </div>
        <!--end container-->
      </div>
      <!--end section-->
    </div>

    <nav id="asy-sidebar" :class="montrerClasse">
      <modal-affiner-choix @fermerModalAffiner="fermerModalAffiner" />
    </nav>
  </div>
</template>

<script>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import ModalAffinerChoix from "@/views/modal/modalAffinerChoix.vue";
import { getImpacts } from "@/plugins/getImpacts.js";
export default {
  components: {
    BarreNavigation,
    ModalAffinerChoix,
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

a {
  color: var(--bleu);
  text-decoration: underline;
}

a:hover {
  color: var(--vert);
  text-decoration: underline;
}
</style>
