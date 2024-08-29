<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content modal-repart-cat-detail">
      <div class="modal-header d-flex align-items-center">
        <div>
          <span class="icon-ico_CATEGORIES_cereales icon cereales"></span>
        </div>
        <div class="d-flex flex-column">
          <div class="titre-categorie">
            Emplois en cultures céréalières et autres cultures…
          </div>
          <div class="hectares" id="-totaljobcereales2">
            Consommés directement (pain, lentilles, huiles, etc.)
          </div>
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
      <div class="modal-body">
        <div id="accordeon-fiche" class="accordeon-detail cereales-fonce">
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
                  class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail cereales-fonce"
                >
                  <span
                    class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                    ><span class="icon-ico_groupe icon cereales"></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete"
                          >emplois en céréales <sup>1</sup> </span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 11% </span
                        ><span class="hectares"
                          >(environ) de l’emploi agricole total en Région
                          wallonne métropolitaine</span
                        ></span
                      >
                    </div>
                  </span>
                  <span
                    class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                    ><span
                      class="icon-ico_navigation_surface icon cereales"
                    ></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete">Surface par emploi</span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 85 ha </span
                        ><span class="hectares">par emploi agricole</span></span
                      >
                    </div>
                  </span>
                  <span
                    class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                    ><span class="icon-ico_filtres-reloc icon cereales"></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete">Salariés </span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 15% </span
                        ><span class="hectares"
                          >de l’ensemble de la main d’œuvre des exploitations en
                          céréales et autres grandes cultures est salariée</span
                        ></span
                      >
                    </div>
                  </span>
                </div>
                1. et autres grandes cultures
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
                <div>Périmètre</div>
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
                      La production de céréales et autres grandes cultures a
                      plusieurs destination :
                      <ul>
                        <li>l’alimentation humaine (37%),</li>
                        <li>l’alimentation animale (40%)</li>
                        <li>les usages industriels (18%).</li>
                      </ul>
                    </li>
                    <li>
                      Au sein de Parcel :
                      <ul>
                        <li>
                          Les emplois liés aux productions de céréales et autres
                          grandes cultures destinées directement à
                          l’alimentation humaine est prise en compte dans la
                          catégorie « Céréales et autres cultures »
                        </li>
                        <li>
                          Les emplois liés aux productions de céréales et autres
                          grandes cultures destinées à l’alimentation animale
                          est quant à elle prise en compte dans la catégorie «
                          Élevage ».
                        </li>
                      </ul>
                    </li>
                    <li>
                      La donnée d’emploi agricole donne un ordre de grandeur du
                      <strong
                        >nombre de personnes travaillant à temps plein qu’il
                        faudrait mobiliser pour satisfaire la consommation
                        humaine en céréales et autres grandes cultures</strong
                      >, compte tenu des paramètres choisis par l’utilisateur (%
                      relocalisation, % bio, assiette).
                    </li>
                    <li>
                      <strong
                        >L’indicateur utilisé pour mesurer l’emploi est l'unité
                        de travail annuel (UTA)</strong
                      >. C’est l'unité de mesure de la quantité de travail
                      humain fourni sur chaque exploitation agricole. Cette
                      unité équivaut au travail d'une personne travaillant à
                      temps plein pendant une année.
                    </li>
                    <li>
                      <strong
                        >Parcel comptabilise uniquement les emplois
                        agricoles</strong
                      >. La relocalisation de l’alimentation impacte aussi les
                      emplois du milieu et de l’aval des chaînes alimentaires.
                      Ces modifications ne sont pas quantifiées.
                    </li>
                    <li>
                      <strong
                        >Les produits pris en compte par PARCEL représentent
                        environ 91% de notre alimentation (en volume)</strong
                      >. Ce sont les produits recensés par la Statistique
                      Agricole Annuelle d’Agreste. PARCEL ne prend pas en compte
                      :
                      <ul>
                        <li>
                          Les produits qui ne possèdent pas de potentiel de
                          production en Région wallonne (café, cacao, fruits
                          exotiques etc.) ;
                        </li>
                        <li>
                          Les boissons (bières, vins etc.) qui pourraient être
                          intégrées dans une prochaine version ;
                        </li>
                        <li>
                          Les produits de la mer (difficulté de donner un
                          indicateur d’empreinte spatiale) ;
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
                    <strong
                      >On utilise les données du dernier recensement agricole
                      (2010) qui comptabilise les Unité de travail annuel par
                      hectare en fonction des Orientations technico-économique
                      (OTEX)</strong
                    >. Les données seront mises à jour avec le prochain
                    recensement agricole.
                  </li>
                  <li>
                    <strong
                      >Une exploitation est spécialisée au sein d’une
                      OTEX</strong
                    >
                    si la Production Brute Standard (indicateur économique sur
                    le potentiel de production d’une exploitation) de la ou des
                    productions concernées dépasse deux tiers du total.
                  </li>
                  <li>
                    <strong
                      >Pour les céréales et autres grandes cultures, on utilise
                      l’indicateur UTA/ha de l’OTEX « Céréales et
                      oléoprotéagineux ».</strong
                    >
                  </li>
                  <li>
                    Pour plus d’éléments sur la méthode de calcul, se référer à
                    la
                    <a
                      href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
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
                    ­<span class="source-titre"
                      >Recensement agricole 2010 d’Agreste </span
                    ><span class="source-auteur">
                      – Ministère de l’Agriculture et de l’Alimentation</span
                    ><span class="source-année"></span>
                    <div>
                      <a
                        class=""
                        href="http://agreste.agriculture.gouv.fr/recensement-agricole-2010/"
                        >Voir le recensement</a
                      >
                    </div>
                  </li>
                  <li>
                    ­<span class="source-titre"
                      >Statistique Agricole Annuelle d’Agreste </span
                    ><span class="source-auteur">
                      – Ministère de l’Agriculture et de l’Alimentation</span
                    >
                    <div>
                      <a
                        class=""
                        href="http://agreste.agriculture.gouv.fr/donnees-de-synthese/statistique-agricole-annuelle-saa/"
                        >Voir la Statistique Agricole</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "emploiElevage",
  methods: {
    fermerModal() {
      this.$emit("fermerModal");
    },
  },
};
</script>
<style scoped>
.modal-repart-cat-detail .modal-header .icon {
  font-size: 50px;
  margin-right: 20px;
  margin-left: 10px;
}

.btn-link-open {
  display: flex;
  flex-direction: row;
  background-color: #874e00 !important;
  color: #fff !important;
  gap: 8px;
}

.card-header {
  background-color: #874e00 !important;
  color: #fff !important;
}

.card-body ul {
  text-align: left;
  text-decoration: none;
}

.card-body ul li {
  list-style: none;
  margin-bottom: 10px;
}

.modal-dialog {
  max-width: 100%;
  margin: 1.75rem auto;
}
</style>
