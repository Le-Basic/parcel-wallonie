<template>
  <div class="card">
    <div class="card-header" id="Reperes">
      <button
        class="btn btn-link btn-link-open"
        data-toggle="collapse"
        href="#collapseReperes"
        aria-expanded="true"
        data-target="#collapseReperes"
      >
        <div><span class="icon-repere icon white"></span></div>
        <div>Repères</div>
      </button>
    </div>
    <div
      id="collapseReperes"
      class="collapse show"
      data-parent="#accordion"
      aria-labelledby="Reperes"
    >
      <div class="card-body">
        <div
          class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail viande-fonce"
        >
          <span
            class="col-4 d-flex flex-sm-column flex-row justify-content-center"
            ><span class="icon-ico_poids icon viande"></span>
            <div class="info-infos">
              <span class="d-flex flex-column info-intro"
                ><span class="info-entete">Production</span
                ><span class="info-verbe">=</span></span
              ><span class="d-flex flex-column info-detail"
                ><span class="nbr-ha"> 64% </span
                ><span class="hectares"
                  >de la surface agricole en France métropolitaine</span
                ></span
              >
            </div>
          </span>
          <span
            class="col-4 d-flex flex-sm-column flex-row justify-content-center"
            ><span class="icon-ico_champ icon viande"></span>
            <div class="info-infos">
              <span class="d-flex flex-column info-intro"
                ><span class="info-entete">Consommation</span
                ><span class="info-verbe">=</span></span
              ><span class="d-flex flex-column info-detail"
                ><span class="nbr-ha"> 30% </span
                ><span class="hectares"
                  >de l’assiette d’un Français moyen (en volume)</span
                ></span
              >
            </div>
          </span>
          <span
            class="col-4 d-flex flex-sm-column flex-row justify-content-center"
            ><span class="icon-ico_CATEGORIES_viande icon viande"></span>
            <div class="info-infos">
              <span class="d-flex flex-column info-intro"
                ><span class="info-entete">Importation</span
                ><span class="info-verbe">=</span></span
              ><span class="d-flex flex-column info-detail"
                ><span class="nbr-ha"> 29% </span
                ><span class="hectares">
                  des produits de l’élevage consommés en France métropolitaine
                  sont importés</span
                ></span
              >
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="perimetre">
      <button
        class="btn btn-link btn-link-open"
        data-toggle="collapse"
        href="#collapsePerimetre"
        aria-expanded="false"
        data-target="#collapsePerimetre"
      >
        <div><span class="icon-perimetre icon white"></span></div>
        <div>Domaine de validité</div>
      </button>
    </div>
    <div
      id="collapsePerimetre"
      class="collapse show"
      data-parent="#accordion"
      aria-labelledby="perimetre"
    >
      <div class="card-body">
        <div class="mb-3">
          <ul>
            <li>
              La donnée de surface donne un ordre de grandeur
              <strong
                >des hectares de terres agricoles qu’il faudrait mobiliser pour
                satisfaire la consommation en produits de l’élevage</strong
              >, compte tenu des paramètres choisis par l’utilisateur (%
              relocalisation, % bio, assiette).
            </li>
            <li>
              Dans le cas de l’élevage, ces surfaces correspondent à
              l’alimentation des animaux d’élevage, soit :
              <ul>
                ­
                <li>Des surfaces de prairies ;</li>
                ­
                <li>Des surfaces de céréales et autres grandes cultures :</li>
                <ul>
                  <li>
                    Les animaux d’élevage consomment les co-produits ou
                    sous-produits de certaines cultures et notamment des
                    filières oléagineuses. Par exemple, lors des étapes de
                    trituration des graines oléagineuses, une partie solide et
                    riche en protéines est formée : les tourteaux, qui sont
                    valorisés en alimentation animale.
                  </li>
                  <li>
                    Au sein de PARCEL, les surfaces d’oléagineux destinées à la
                    production d’huiles pour la consommation humaine sont
                    comptabilisées dans la catégorie « Céréales et autres
                    cultures ». Les surfaces d’oléagineux destinées aux
                    agrocarburants sont comptabilisées dans la catégorie «
                    Élevage » du fait des co-produits ou sous-produits qui
                    servent à l’alimentation des animaux d’élevage.
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              Actuellement en France métropolitaine, la production
              d’alimentation pour les animaux se répartit environ entre 37% de
              prairies et 63% de cultures.
            </li>
            <li>
              Au sein des systèmes d’élevage, une partie de l’alimentation
              provient d’importations, particulièrement de tourteaux de soja.
              Les surfaces correspondant à la part de l’alimentation qui est
              importée apparaissent dans le niveau de détails par produits.
              PARCEL utilise les références de production de la statistique
              agricole annuelle et ne modifie pas le fonctionnement technique
              des systèmes qui y sont décrits. Ainsi, PARCEL ne relocalise pas
              la part de l’alimentation des animaux qui est actuellement
              importée, (ce qui pourrait être proposé dans une version
              ultérieure).
            </li>
            <li>
              <strong
                >Les produits pris en compte par PARCEL représentent environ 91%
                de notre alimentation (en volume)</strong
              >. Ce sont les produits recensés par la Statistique Agricole
              Annuelle d’Agreste. PARCEL ne prend pas en compte : ­
              <ul>
                <li>
                  Les produits qui ne possèdent pas de potentiel de production
                  en France métropolitaine (café, cacao, fruits exotiques etc.)
                  ;
                </li>
                ­
                <li>
                  Les boissons (bières, vins etc.) qui pourraient être intégrées
                  dans une prochaine version ;
                </li>
                ­
                <li>
                  Les produits de la mer (difficulté de donner un indicateur
                  d’empreinte spatiale) ;
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="methode">
      <button
        class="btn btn-link btn-link-open"
        data-toggle="collapse"
        href="#collapseMethod"
        aria-expanded="false"
        data-target="#collapseMethod"
      >
        <div><span class="icon-ico_calcul2 icon white"></span></div>
        <div>Quelques points de méthode</div>
      </button>
    </div>
    <div
      id="collapseMethod"
      class="collapse show"
      data-parent="#accordion"
      aria-labelledby="methode"
    >
      <div class="card-body">
        <ul>
          <li>
            On calcul la surface nécessaire pour produire 1 kg d’un certain
            produit animal. Pour ce faire, on identifie les surfaces
            actuellement mobilisées pour les productions d’élevage françaises
            (prairies, cultures fourragères, céréales etc.). Ces surfaces sont
            ensuite réparties entre les différentes espèces d’animaux selon leur
            besoin.
          </li>
          <li>
            Pour calculer ces surfaces, en se basant sur les données de
            consommation, PARCEL utilise un coefficient, appelé « rendement
            corrigé de l’utilisation du territoire ». Les rendements
            agronomiques ne peuvent pas être directement utilisés pour réaliser
            ces calculs car ils sont rattachés à des produits particuliers
            (tomates par exemple) et pourraient ainsi mener à des doubles
            comptages. En effet, les surfaces mobilisées pour une production
            donnée (par exemple les tomates de saison) peuvent être utilisées
            pendant le reste de l’année pour d’autres productions (pois,
            salades…).
          </li>
          <li>
            Pour éviter ce biais, PARCEL calcule le nombre total d’hectares
            nécessaires en termes d’utilisation du territoire, ces hectares
            pouvant être le support de différentes productions d’une même
            catégorie (légumes, fruits, céréales…) selon les saisons (par
            exemple tomates, pois…).
          </li>
          <li>
            Pour ce faire, les rendements agronomiques sont pondérés de manière
            à s’assurer que la somme des surfaces calculées pour chacun des 61
            produits correspond exactement à la part du territoire mobilisée
            pendant une année pour leur production. Ces rendements pondérés
            correspondent aux « rendements corrigés de l’utilisation du
            territoire ».
          </li>
          <li>
            Ces rendements sont calculés sur des moyennes de 3 ans (les trois
            dernières années disponibles pour l’ensemble des données utilisées,
            soit la période 2014-2016 pour la version 2019 de PARCEL). Des mises
            à jour auront lieu fréquemment pour mettre à jour ces moyennes sur
            la base des dernières données disponibles
          </li>
          <li>
            On divise la donnée de consommation (différente selon le régime
            choisi) par le rendement corrigé de l’utilisation du territoire,
            pour obtenir la surface agricole à mobiliser par produit.
          </li>
          <li>
            Pour l’agriculture biologique, un différentiel de rendement a été
            calculé, principalement à partir de fiches techniques régionales.
          </li>
          <li>
            Pour plus d’éléments sur la méthode de calcul, se référer à la
            <a href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
              >page annexe méthodologique</a
            >, accessible par le menu principal.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="sources">
      <button
        class="btn btn-link btn-link-open"
        data-toggle="collapse"
        href="#collapseSource"
        aria-expanded="false"
        data-target="#collapseSource"
      >
        <div><span class="icon-source icon white"></span></div>
        <div>Principales sources de données</div>
      </button>
    </div>
    <div
      id="collapseSource"
      class="collapse show"
      data-parent="#accordion"
      aria-labelledby="sources"
    >
      <div class="card-body">
        <ul>
          <li>
            <div class="h1-liste">Production et surface</div>
            <ul>
              <li>
                ­<span class="source-titre"
                  >La Statistique Agricole Annuelle d’Agreste</span
                ><span class="source-auteur">
                  – Ministère de l’Agriculture et de l’Alimentation</span
                ><span class="source-année"></span>
                <div>
                  <a
                    class=""
                    href="http://agreste.agriculture.gouv.fr/donnees-de-synthese/statistique-agricole-annuelle-saa/"
                    >Voir la page de statistiques</a
                  >
                </div>
              </li>
              <li>
                ­<span class="source-titre">Enquête Teruti-Lucas d’Agreste</span
                ><span class="source-auteur">
                  – Ministère de l’Agriculture et de l’Alimentation</span
                >
                <div>
                  <a
                    class=""
                    href="http://agreste.agriculture.gouv.fr/enquetes/territoire-prix-des-terres/teruti-lucas-utilisation-du/"
                    >Voir l'enquête</a
                  >
                </div>
              </li>
              <li>­<span class="source-titre">Entretiens d’experts</span></li>
            </ul>
          </li>
          <li>
            <div class="h1-liste">Alimentation animale</div>
            <ul>
              <li>
                ­<span class="source-titre">­­Conjoncture d’Agreste </span
                ><span class="source-auteur">
                  – ­Ministère de l’Agriculture et de l’Alimentation</span
                ><span class="source-année"></span>
                <div>
                  <a
                    class=""
                    href="http://agreste.agriculture.gouv.fr/conjoncture/"
                    >Voir la conjoncture</a
                  >
                </div>
              </li>
              <li>
                <span class="source-titre"
                  >­­ Bilans d’Approvisionnements d’Agreste </span
                ><span class="source-auteur">
                  - Ministère de l’Agriculture et de l’Alimentation</span
                >
                <div>
                  <a
                    class=""
                    href="http://agreste.agriculture.gouv.fr/donnees-de-synthese/bilans-d-approvisionnement/"
                    >Voir les bilans</a
                  >
                </div>
              </li>
              <li>
                <span class="source-titre"
                  >­­ Recensement Agricole 2010 d’Agreste </span
                ><span class="source-auteur">
                  - Ministère de l’Agriculture et de l’Alimentation</span
                >
                <div>
                  <a
                    class=""
                    href="http://agreste.agriculture.gouv.fr/recensement-agricole-2010/"
                    >Voir le recensement</a
                  >
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div class="h1-liste">Consommation</div>
            <ul>
              <li>
                ­<span class="source-titre"
                  >­ Bilans d’Approvisionnements d’Agreste </span
                ><span class="source-auteur">
                  – ­Ministère de l’Agriculture et de l’Alimentation</span
                ><span class="source-année"></span>
                <div>
                  <a
                    class=""
                    href="http://agreste.agriculture.gouv.fr/donnees-de-synthese/bilans-d-approvisionnement/"
                    >Voir les bilans</a
                  >
                </div>
              </li>
              <li>
                <span class="source-titre">­Données de l'INSEE</span
                ><span class="source-auteur">
                  - Institut national de la statistique et des études
                  économiques (INSEE)</span
                >
                <div>
                  <a class="" href="https://www.insee.fr/fr/accueil"
                    >Voir le site de l'INSEE</a
                  >
                </div>
              </li>
              <li>
                <span class="source-titre"
                  >­Étude individuelle nationale des consommations alimentaires
                  3 (INCA 3)</span
                ><span class="source-auteur"> - ANSES</span
                ><span class="source-année"> - 2017</span>
                <div>
                  <a
                    class=""
                    href="https://www.anses.fr/fr/system/files/NUT2014SA0234Ra.pdf"
                    >Voir l'étude</a
                  >
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div class="h1-liste">Agriculture Biologique</div>
            <ul>
              <li>
                ­<span class="source-titre">­Agence Bio </span>
                <div>
                  <a class="" href="https://www.agencebio.org/"
                    >Voir le site d'Agence Bio</a
                  >
                </div>
              </li>
              <li>
                ­<span class="source-titre"
                  >­Observatoire des viandes bio d’Interbev</span
                >
                <div>
                  <a
                    class=""
                    href="http://www.interbev.fr/espace-presse/observatoire-des-viandes-bio-2017/"
                    >Voir le site d’Interbev</a
                  >
                </div>
              </li>
              <li>
                ­<span class="source-titre"
                  >­­Fiches techniques régionales</span
                >
              </li>
              <li>­<span class="source-titre">­Entretiens d’experts</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-link-open {
  display: flex;
  flex-direction: row;
  background-color: #015a5a !important;
  color: #fff;
  gap: 8px;
}

.card-header {
  background-color: #015a5a !important;
  color: #fff;
}
</style>
