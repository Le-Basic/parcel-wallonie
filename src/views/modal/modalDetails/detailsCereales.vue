<template>
  <div class="modal-content modal-repart-cat-detail">
    <div class="modal-header d-flex align-items-center">
      <div>
        <span class="icon-ico_CATEGORIES_cereales icon cereales"></span>
      </div>
      <div class="d-flex flex-column">
        <div class="titre-categorie">Céréales</div>
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
    <div class="card">
      <div class="card-header" id="Reperes">
        <button
          class="btn btn-link btn-link-open"
          data-toggle="collapse show"
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
            class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail cereales-fonce mb-4"
          >
            <span
              class="col-4 d-flex flex-sm-column flex-row justify-content-center"
              ><span class="icon-ico_poids icon cereales"></span>
              <div class="info-infos">
                <span class="d-flex flex-column info-intro"
                  ><span class="info-entete">Production <sup>1</sup></span
                  ><span class="info-verbe">=</span></span
                ><span class="d-flex flex-column info-detail"
                  ><span class="nbr-ha"> 46% </span
                  ><span class="hectares"
                    >de la surface agricole en Région wallonne</span
                  ></span
                >
              </div>
            </span>
            <span
              class="col-4 d-flex flex-sm-column flex-row justify-content-center"
              ><span class="icon-ico_champ icon cereales"></span>
              <div class="info-infos">
                <span class="d-flex flex-column info-intro"
                  ><span class="info-entete">Consommation</span
                  ><span class="info-verbe">=</span></span
                ><span class="d-flex flex-column info-detail"
                  ><span class="nbr-ha"> 54% </span
                  ><span class="hectares"
                    >de l’assiette d’un Français moyen (en volume)</span
                  ></span
                >
              </div>
            </span>
            <span
              class="col-4 d-flex flex-sm-column flex-row justify-content-center"
              ><span class="icon-ico_CATEGORIES_cereales icon cereales"></span>
              <div class="info-infos">
                <span class="d-flex flex-column info-intro"
                  ><span class="info-entete">Importation</span
                  ><span class="info-verbe">=</span></span
                ><span class="d-flex flex-column info-detail"
                  ><span class="nbr-ha"> 8% </span
                  ><span class="hectares">
                    des céréales et autres grandes cultures consommées en Région
                    wallonne métropolitaine sont importés</span
                  ></span
                >
              </div>
            </span>
          </div>
          <sup>1</sup> 37% de cette production est destinée directement à
          l’alimentation humaine
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header" id="perimetre">
        <button
          class="btn btn-link btn-link-open"
          data-toggle="collapse show"
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
                La production de céréales et autres grandes cultures a plusieurs
                destination : ­ l’alimentation humaine (37%), ­ l’alimentation
                animale (40%) ­ les usages industriels (18%).
              </li>

              <li>
                Au sein de Parcel : ­ Les productions de céréales et autres
                grandes cultures destinées directement à l’alimentation humaine
                est prise en compte dans la catégorie « Céréales et autres
                cultures » ­ Les productions de céréales et autres grandes
                cultures destinées à l’alimentation animale est quant à elle
                prise en compte dans la catégorie « Élevage ».
              </li>
              <li>
                La donnée de surface donne un ordre de grandeur des hectares de
                terres agricoles qu’il faudrait mobiliser pour satisfaire la
                consommation humaine en céréales et autres grandes cultures,
                compte tenu des paramètres choisis par l’utilisateur (%
                relocalisation, % bio, assiette).
              </li>
              <li>
                <strong
                  >Les produits pris en compte par PARCEL représentent environ
                  91% de notre alimentation (en volume)</strong
                >. Ce sont les produits recensés par la Statistique Agricole
                Annuelle d’Agreste. PARCEL ne prend pas en compte :
                <ul>
                  ­
                  <li>
                    Les produits qui ne possèdent pas de potentiel de production
                    en Région wallonne (café, cacao, fruits exotiques etc.) ;
                  </li>
                  ­
                  <li>
                    Les boissons (bières, vins etc.) qui pourraient être
                    intégrées dans une prochaine version ;
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
          data-toggle="collapse show"
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
              L’indicateur de surface de PARCEL correspond à la surface à
              mobiliser au sein d’un territoire sur une année pour produire les
              matières premières agricoles nécessaires à l’alimentation
              relocalisée d’une population donnée.
            </li>
            <li>
              Pour calculer ces surfaces, en se basant sur les données de
              consommation, PARCEL utilise un coefficient, appelé « rendement
              corrigé de l’utilisation du territoire ». Les rendements
              agronomiques ne peuvent pas être directement utilisés pour
              réaliser ces calculs car ils sont rattachés à des produits
              particuliers (tomates par exemple) et pourraient ainsi mener à des
              doubles comptages. En effet, les surfaces mobilisées pour une
              production donnée (par exemple les tomates de saison) peuvent être
              utilisées pendant le reste de l’année pour d’autres productions
              (pois, salades…).
            </li>
            <li>
              Pour éviter ce biais, PARCEL calcule le nombre total d’hectares
              nécessaires en termes d’utilisation du territoire, ces hectares
              pouvant être le support de différentes productions d’une même
              catégorie (légumes, fruits, céréales…) selon les saisons (par
              exemple tomates, pois…).
            </li>
            <li>
              Pour ce faire, les rendements agronomiques sont pondérés de
              manière à s’assurer que la somme des surfaces calculées pour
              chacun des 61 produits correspond exactement à la part du
              territoire mobilisée pendant une année pour leur production. Ces
              rendements pondérés correspondent aux « rendements corrigés de
              l’utilisation du territoire ».
            </li>
            <li>
              Ces rendements sont calculés sur des moyennes de 3 ans (les trois
              dernières années disponibles pour l’ensemble des données
              utilisées, soit la période 2014-2016 pour la version 2019 de
              PARCEL). Des mises à jour auront lieu fréquemment pour mettre à
              jour ces moyennes sur la base des dernières données disponibles
            </li>
            <li>
              On divise la donnée de consommation (différente selon le régime
              choisi) par le rendement corrigé de l’utilisation du territoire,
              pour obtenir la surface agricole à mobiliser par produit.
            </li>
            <li>
              Pour l’agriculture biologique, un différentiel de rendement a été
              calculé, principalement à partir de l’étude ROTAB (ITAB, 2011) et
              de fiches techniques régionales.
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
          data-toggle="collapse show"
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
                  ­<span class="source-titre"
                    >Enquête Teruti-Lucas d’Agreste</span
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
              <div class="h1-liste">Consommation</div>
              <ul>
                <li>
                  ­<span class="source-titre"
                    >­ Bilans d’Approvisionnements d’Agreste </span
                  ><span class="source-auteur">
                    – ­Ministère de l’Agriculture et de l’Alimentation </span
                  ><span class="source-année"></span>
                  <div>
                    <a
                      class=""
                      href="http://agreste.agriculture.gouv.fr/donnees-de-synthese/bilans-d-approvisionnement/"
                      >Voir le site des Douanes</a
                    >
                  </div>
                </li>
                <li>
                  ­<span class="source-titre">­Douanes belges </span
                  ><span class="source-auteur">
                    – ­Ministère de l’Action et de comptes publics </span
                  ><span class="source-année"></span>
                  <div>
                    <a class="" href="http://www.douane.gouv.fr/"
                      >Voir le site des Douanes</a
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
                    >­Étude individuelle nationale des consommations
                    alimentaires 3 (INCA 3)</span
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
                  <span class="source-titre"
                    >­Rotations en grandes cultures biologiques sans élevage </span
                  ><span class="source-auteur"> - ­ITAB</span
                  ><span class="source-année"> - 2011</span>
                  <div>
                    <a
                      class=""
                      href="http://www.itab.asso.fr/downloads/rotab/rotab-broch-fertilite.pdf"
                      >Voir l'étude</a
                    >
                  </div>
                </li>
                <li>
                  ­<span class="source-titre"
                    >­­Fiches techniques régionales</span
                  >
                </li>
                <li>
                  ­<span class="source-titre">­Entretiens d’experts</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailsCereales",
  methods: {
    fermerModal() {
      this.$emit("fermerModal");
    },
  },
};
</script>
<style>
.modal-repart-cat-detail .modal-header .icon {
  font-size: 50px;
  margin-right: 20px;
  margin-left: 10px;
}

.btn-link-open {
  display: flex;
  flex-direction: row;
  background-color: #015a5a !important;
  color: #fff !important;
  gap: 8px;
}

.card-header {
  background-color: #015a5a !important;
  color: #fff !important;
}
</style>
