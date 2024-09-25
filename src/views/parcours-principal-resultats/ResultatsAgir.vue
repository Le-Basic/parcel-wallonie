<template>
  <div class="asy-wrapper" style="flex-direction: row">
    <div>
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="4"
      />
      <div class="section centrervh" id="section0">
        <div class="container">
          <h1 class="animated fadeInUp fast h1-result">Agir</h1>

          <!-- <a href="https://www.facebook.com/sharer/sharer.php?u=URLENCODED&t=TITLE" class="share facebook" data-network="facebook">Partager sur Facebook</a>
          <a href="https://twitter.com/share?url=URLENCODED&text=TITLE" class="share twitter" data-network="twitter">Partager sur Twitter</a>
          <a href="https://www.linkedin.com/shareArticle?mini=true&url=URLENCODED&title=TITLE&source=COMPANY" class="share linkedin" data-network="linkedin">Partager sur LinkedIn</a>-->
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
                    <div class="title">
                      <a
                        href="mailto:?subject=L'agriculture et l'alimentation sont des enjeux majeurs du développement de notre territoire.
&&body=Grâce à PARCEL - Pour une Alimentation Résiliente, Citoyenne et Locale – outil interactif accessible en ligne (parcel-app.org), j'ai découvert que la relocalisation de notre alimentation, le développement de l'agriculture biologique locale et l'évolution de nos régimes alimentaires auraient des effets bénéfiques sur l'emploi local et la préservation de nos ressources naturelles.
%0D%0A %0D%0A
Introduire des produits bio en restauration collective, faire évoluer les menus proposés, installer et appuyer la conversion des agriculteurs en bio, préserver et mobiliser des terres agricoles pour les mettre au service de l'intérêt général, développer des filières bio territoriales... Les collectivités locales ont de nombreuses cartes en main pour participer au développement d'une agriculture et d'une alimentation durable, au bénéfice de tous.
%0D%0A %0D%0A
Et si nous agissions en faveur de la transition agricole et alimentaire de notre territoire ?
%0D%0A %0D%0A
Par ce présent courrier, je vous appelle à vous engager dès maintenant en ce sens, pour une alimentation résiliente citoyenne et locale.
%0D%0A %0D%0A
Pour en savoir plus, découvrez PARCEL (parcel-app.org) et contactez vos interlocuteurs locaux sur ces sujets (parcel-app.org/contact).
                      "
                        >J’écris à mon élu.e local
                      </a>
                    </div>
                    pour l’inciter à relocaliser l’alimentation et soutenir le
                    développement de la bio sur mon territoire.
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
                          href="https://www.data.gouv.fr/fr/reuses/adresses-mairies-fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="url-simple"
                          >1. Retrouver les contacts de vos mairies
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.nosdeputes.fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="url-simple"
                          >2. Retrouver les contacts de vos élus locaux
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.voxpublic.org/-Annuaires-partages-.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="url-simple"
                          >3. Retrouver les contacts d’autres décideurs
                        </a>
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
                      <a
                        href="javascript:location='mailto:\u0070\u0061\u0072\u0063\u0065\u006c\u0040\u0074\u0065\u0072\u0072\u0065\u0064\u0065\u006c\u0069\u0065\u006e\u0073\u002e\u006f\u0072\u0067\u0020\u0020\u0020';void 0"
                        class="url-simple"
                        >Je découvre les initiatives de transition dans mon
                        territoire :</a
                      >
                    </div>
                    <a
                      href="https://terredeliens.org/agir-avec-les-collectivites.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="url-simple"
                    >
                      <ul>
                        <li>Les coopératives citoyennes - Collectif 5C</li>
                        <li>Les ceintures alimentaires</li>
                        <li>Les Conseils de Politiques Alimentaires</li>
                        <li>Les Groupes d'action locale</li>
                        <li>
                          Une aide pour un projet d'économie sociale – SAW-B
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
                    6
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      <a
                        href="https://www.agencebio.org/profil/consommateur/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je veux en savoir plus sur l’agriculture biologique</a
                      >
                    </div>
                    <ul>
                      <li>Agriculture biologique – Biowallonie</li>
                      <li>Accès à la terre – Terre-en-Vue</li>
                      <li>Gaspillage alimentaire – Plan regal</li>
                      <li>Les scénarios de transition – SYTRA</li>
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
                        >Je partage mes résultats de PARCEL sur les réseaux
                        sociaux</a
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
                        <!-- <p>
                          <input type="button" value="Copier l'url" class="js-copy" data-target="#inputpartage">
                        </p>-->
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
                    <div class="title">
                      <a
                        href="javascript:location='mailto:\u0070\u0061\u0072\u0063\u0065\u006c\u0040\u0074\u0065\u0072\u0072\u0065\u0064\u0065\u006c\u0069\u0065\u006e\u0073\u002e\u006f\u0072\u0067\u0020\u0020\u0020';void 0"
                        class="url-simple"
                        >Je souhaite rester informé.e:</a
                      >
                    </div>
                    <a
                      href="https://terredeliens.org/agir-avec-les-collectivites.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="url-simple"
                    >
                      <ul>
                        <li>Newsletter de Sytra</li>
                        <li>
                          Site de la Direction du Développement Durable
                          –Alimentation durable
                        </li>
                        <li>Site du Baromètre de l’Alimentation durbale</li>
                        <li>Stratégie Food Wallonia</li>
                        <li>Etat de l’agriculture Wallonne</li>
                        <li>Etat de l’Environnement Wallon</li>
                      </ul>
                    </a>
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
                      <a
                        href="javascript:location='mailto:\u0070\u0061\u0072\u0063\u0065\u006c\u0040\u0074\u0065\u0072\u0072\u0065\u0064\u0065\u006c\u0069\u0065\u006e\u0073\u002e\u006f\u0072\u0067\u0020\u0020\u0020';void 0"
                        class="url-simple"
                        >Je souhaite contacter les structures partenaires :</a
                      >
                    </div>
                    <a
                      href="https://terredeliens.org/agir-avec-les-collectivites.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="url-simple"
                    >
                      <ul>
                        <li>SYTRA (contact@sytra.be)</li>
                        <li>Le Basic (parcel@lebasic.com)</li>
                      </ul>
                    </a>
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
                        >J'utilise PARCEL pour:</a
                      >
                    </div>
                    <a
                      href="https://terredeliens.org/agir-avec-les-collectivites.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="url-simple"
                    >
                      <ul>
                        <li>
                          Pour connaître la situation agricole de mon territoire
                          et les enjeux
                        </li>
                        <li>
                          Accéder à un ensemble données officielles et
                          consolidée
                        </li>
                        <li>
                          Créer du dialogue et des réflexions sur des bases
                          communes sur mon territoire
                        </li>
                      </ul>
                    </a>
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
                    <div class="title">Je contacte Terre en vue pour:</div>
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
                      <li>
                        La cellule Manger Demain - pour connaître la situation
                        des cantines de mon territoire (et d’autres initiatives)
                        (https://www.mangerdemain.be/)
                      </li>
                      <li>
                        Les coopératives citoyennes - Collectif 5C
                        (https://www.collectif5c.be/)
                      </li>
                      <!--li><a href="https://open-ressources.fr/" class="url-simple" target="_blank" rel="noopener noreferrer">Newsletter propulsée par Le BASIC : OpenRessources</a></li-->
                      <li>
                        Les ceintures alimentaires
                        (https://www.mangerdemain.be/2021/02/01/developper-un-projet-de-ceinture-alimentaire-en-wallonie-freins-et-leviers/)
                      </li>
                      <li>
                        Les Conseil de Politiques Alimentaires,
                        (https://www.mangerdemain.be/cpa-locaux/)
                      </li>
                      <li>
                        Les Groupes d’action locale
                        (https://www.reseauwallonpac.be/sections/gal)
                      </li>
                      <li>
                        Une aide pour un projet d’économie sociale – SAW-B
                        (https://saw-b.be/)
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
                    3
                  </div>
                  <div class="puce-text">
                    <div class="title">
                      <a
                        href="javascript:location='mailto:\u0070\u0061\u0072\u0063\u0065\u006c\u0040\u006c\u0065\u0062\u0061\u0073\u0069\u0063\u002e\u0063\u006f\u006d';void 0"
                        >Je contacte SYTRA pour :</a
                      >
                    </div>
                    <a
                      href="http://www.lebasic.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="url-simple"
                    >
                      <ul>
                        <li>• Le développement de scénarios de transition ;</li>
                        <li>
                          • Avoir une compréhension des filières et de leurs
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
                        href="https://www.produire-bio.fr/contact-en-region/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je veux en savoir plus sur l’/le:
                      </a>
                    </div>
                    <ul>
                      <li>
                        Agriculture biologique – Biowallonie
                        (https://www.biowallonie.com/)
                      </li>
                      <li>
                        Accès à la terre – Terre-en-Vue
                        (https://terre-en-vue.be/)
                      </li>
                      <li>
                        Gaspillage alimentaire – Plan regal
                        (https://moinsdedechets.wallonie.be/gaspillage-alimentaire/le-plan-regal.php)
                      </li>
                      <li>
                        Les scénarios de transition – Newsletter SYTRA
                        (www.sytra.be)
                      </li>
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
                    <div class="title">
                      <a
                        href="https://www.produire-bio.fr/contact-en-region/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je contacte Biowallonie pour:
                      </a>
                    </div>
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
              <button
                class="w-100 btn btn-link collapsed"
                type="button"
                data-toggle="collapse show"
                data-target="#collapseAgir3"
                aria-expanded="false"
                aria-controls="collapseAgir3"
              >
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
                    <div class="title">
                      <a
                        href="mailto:?subject=L'agriculture et l'alimentation sont des enjeux majeurs du développement de notre territoire.
&&body=Grâce à PARCEL - Pour une Alimentation Résiliente, Citoyenne et Locale – outil interactif accessible en ligne (parcel-app.org), j'ai découvert que la relocalisation de notre alimentation, le développement de l'agriculture biologique locale et l'évolution de nos régimes alimentaires auraient des effets bénéfiques sur l'emploi local et la préservation de nos ressources naturelles.
%0D%0A %0D%0A
Introduire des produits bio en restauration collective, faire évoluer les menus proposés, installer et appuyer la conversion des agriculteurs en bio, préserver et mobiliser des terres agricoles pour les mettre au service de l'intérêt général, développer des filières bio territoriales... Les collectivités locales ont de nombreuses cartes en main pour participer au développement d'une agriculture et d'une alimentation durable, au bénéfice de tous.
%0D%0A %0D%0A
Et si nous agissions en faveur de la transition agricole et alimentaire de notre territoire ?
%0D%0A %0D%0A
Par ce présent courrier, je vous appelle à vous engager dès maintenant en ce sens, pour une alimentation résiliente citoyenne et locale.
%0D%0A %0D%0A
Pour en savoir plus, découvrez PARCEL (parcel-app.org) et contactez vos interlocuteurs locaux sur ces sujets (parcel-app.org/contact).

                      "
                        >J’écris à mon élu.e local
                      </a>
                    </div>
                    pour l’inciter à relocaliser l’alimentation et soutenir le
                    développement de la bio sur mon territoire.
                    <br />
                    <br />
                    <ul>
                      <li>
                        <a
                          href="https://www.data.gouv.fr/fr/reuses/adresses-mairies-fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="url-simple"
                          >1. Retrouver les contacts de vos Commu,es
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.nosdeputes.fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="url-simple"
                          >2. Retrouver les contacts de vos élus locaux
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.voxpublic.org/-Annuaires-partages-.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="url-simple"
                          >3. Retrouver les contacts d’autres décideurs
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
                    <div class="title">
                      <a
                        href="https://www.produire-bio.fr/contact-en-region/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je contacte Biowallonie</a
                      >
                    </div>
                    <ul>
                      <li>
                        • Me renseigner sur la conversion à l’agriculture
                        biologique
                      </li>
                      <li>
                        Faire évoluer mes pratiques et mes modes de
                        commercialisation
                      </li>
                    </ul>
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
                      <a
                        href="javascript:location='mailto:\u0070\u0061\u0072\u0063\u0065\u006c\u0040\u0074\u0065\u0072\u0072\u0065\u0064\u0065\u006c\u0069\u0065\u006e\u0073\u002e\u006f\u0072\u0067\u0020\u0020\u0020';void 0"
                        class="url-simple"
                        >Je contacte Terre en vue pour:</a
                      >
                    </div>
                    <a
                      href="https://terredeliens.org/agir-avec-les-collectivites.html"
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
                      <a
                        href="javascript:location='mailto:\u0070\u0061\u0072\u0063\u0065\u006c\u0040\u0074\u0065\u0072\u0072\u0065\u0064\u0065\u006c\u0069\u0065\u006e\u0073\u002e\u006f\u0072\u0067\u0020\u0020\u0020';void 0"
                        class="url-simple"
                      >
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
                      <a href="#"
                        >Je contacte les initiatives de transition pour vérifier
                        ce qui existe dans mon territoire :</a
                      >
                    </div>
                    <ul>
                      <li>
                        La cellule Manger Demain - pour connaître la situation
                        des cantines de mon territoire (et d’autres initiatives)
                        (https://www.mangerdemain.be/)
                      </li>
                      <li>
                        Les coopératives citoyennes - Collectif 5C
                        (https://www.collectif5c.be/)
                      </li>
                      <!--li><a href="https://open-ressources.fr/" class="url-simple" target="_blank" rel="noopener noreferrer">Newsletter propulsée par Le BASIC : OpenRessources</a></li-->
                      <li>
                        Les ceintures alimentaires
                        (https://www.mangerdemain.be/2021/02/01/developper-un-projet-de-ceinture-alimentaire-en-wallonie-freins-et-leviers/)
                      </li>
                      <li>
                        Les Conseil de Politiques Alimentaires,
                        (https://www.mangerdemain.be/cpa-locaux/)
                      </li>
                      <li>
                        Les Groupes d’action locale
                        (https://www.reseauwallonpac.be/sections/gal)
                      </li>
                      <li>
                        Une aide pour un projet d’économie sociale – SAW-B
                        (https://saw-b.be/)
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
                        href="https://www.produire-bio.fr/contact-en-region/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je contacte Biowallonie</a
                      >
                    </div>
                    <ul>
                      <li>
                        <a
                          href="javascript:location='mailto:\u0070\u0061\u0072\u0063\u0065\u006c\u0040\u0066\u006e\u0061\u0062\u002e\u006f\u0072\u0067';void 0"
                          class="url-simple"
                          >Développer des gammes de produits bio et locales</a
                        >
                      </li>
                      <li>
                        <a
                          href="http://www.repasbio.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="url-simple"
                          >Faire évoluer l’alimentation de mon entreprise vers
                          plus de bio et local</a
                        >
                        <a
                          href="javascript:location='mailto:\u006a\u0072\u0065\u006e\u0061\u0072\u0064\u0040\u0066\u006e\u0061\u0062\u002e\u006f\u0072\u0067';void 0"
                          class="url-simple"
                        >
                          Lien vers le contact national</a
                        >
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
                        href="https://terredeliens.org/-entreprises-.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Je contacte Terre en vue pour
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
                      <a href="#"
                        >Je contacte les initiatives de transition pour vérifier
                        ce qui existe dans mon territoire :</a
                      >
                    </div>
                    <ul>
                      <li>
                        La cellule Manger Demain - pour connaître la situation
                        des cantines de mon territoire (et d’autres initiatives)
                        (https://www.mangerdemain.be/)
                      </li>
                      <li>
                        Les coopératives citoyennes - Collectif 5C
                        (https://www.collectif5c.be/)
                      </li>
                      <!--li><a href="https://open-ressources.fr/" class="url-simple" target="_blank" rel="noopener noreferrer">Newsletter propulsée par Le BASIC : OpenRessources</a></li-->
                      <li>
                        Les ceintures alimentaires
                        (https://www.mangerdemain.be/2021/02/01/developper-un-projet-de-ceinture-alimentaire-en-wallonie-freins-et-leviers/)
                      </li>
                      <li>
                        Les Conseil de Politiques Alimentaires,
                        (https://www.mangerdemain.be/cpa-locaux/)
                      </li>
                      <li>
                        Les Groupes d’action locale
                        (https://www.reseauwallonpac.be/sections/gal)
                      </li>
                      <li>
                        Une aide pour un projet d’économie sociale – SAW-B
                        (https://saw-b.be/)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordeon-agir mx-auto" id="export">
            <div class="alert alert-success mb-5 text-center w-100">
              <button class="btn btn-principal btn-export m-1" onclick="save()">
                Export des données (Excel)
              </button>
              <a
                id="export_pdf"
                target="_blank"
                href="/pdf.php"
                class="d-none btn btn-principal btn-export m-1"
                >Export de la brochure (PDF)</a
              >
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
</style>
