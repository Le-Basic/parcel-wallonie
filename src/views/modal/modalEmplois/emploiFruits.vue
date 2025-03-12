<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content modal-repart-cat-detail">
      <div class="modal-header d-flex align-items-center">
        <div>
          <span class="icon-ico_CATEGORIES_fruits icon fruits"></span>
        </div>
        <div class="d-flex flex-column">
          <div class="titre-categorie">Emplois en arboriculture</div>
          <div class="hectares" id="-totaljobfruits2"></div>
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
        <div id="accordeon-fiche" class="accordeon-detail fruits-fonce">
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
                  class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail fruits-fonce"
                >
                  <span
                    class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                    ><span class="icon-ico_groupe icon fruits"></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete">Emplois arboricole</span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 5% </span
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
                      class="icon-ico_navigation_surface icon fruits"
                    ></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete">Surface par emploi</span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 7,5 ha </span
                        ><span class="hectares">par emploi agricole</span></span
                      >
                    </div>
                  </span>
                  <span
                    class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                    ><span class="icon-ico_filtres-reloc icon fruits"></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete">Salariés </span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 60% </span
                        ><span class="hectares"
                          >de l’ensemble de la main d’œuvre des exploitations
                          arboricoles</span
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
                      La donnée d’emploi agricole donne un ordre de grandeur
                      du<strong>
                        nombre de personnes travaillant à temps plein qu’il
                        faudrait mobiliser pour satisfaire la consommation en
                        fruits</strong
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
                        >Les produits pris en compte par PARCEL-Wallonie
                        représentent environ 91% de notre alimentation (en
                        volume)</strong
                      >. Ce sont les produits recensés par la Statistique
                      Agricole Annuelle d’Agreste. PARCEL-Wallonie ne prend pas
                      en compte :
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
                      (OTE). </strong
                    >. Les données seront mises à jour avec le prochain
                    recensement agricole.
                  </li>
                  <li>
                    <strong
                      >Une exploitation est spécialisée au sein d’une
                      OTE</strong
                    >
                    si la Production Brute Standard (indicateur économique sur
                    le potentiel de production d’une exploitation) de la ou des
                    productions concernées dépasse deux tiers du total.
                  </li>
                  <li>
                    <strong
                      >Pour l'arboriculture, on utilise l’indicateur UTA/ha de
                      l’OTE « Fruits et autres cultures permanentes ».</strong
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
                      ><a
                        href="https://statbel.fgov.be/fr/themes/agriculture-peche/exploitations-agricoles-et-horticoles#figures"
                        >Chiffres Agricoles</a
                      > </span
                    ><span class="source-auteur"> – Statbel</span
                    ><span class="source-année"></span>
                    <div>
                      <a
                        class=""
                        href="https://statbel.fgov.be/fr/themes/agriculture-peche/exploitations-agricoles-et-horticoles#figures"
                        >Voir la page de statistiques</a
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
  name: "emploiFruits",
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
  background-color: #4f2065 !important;
  color: #fff !important;
  gap: 8px;
}

.card-header {
  background-color: #4f2065 !important;
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
</style>
