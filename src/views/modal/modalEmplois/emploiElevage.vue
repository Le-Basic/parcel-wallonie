<template>
  <div class="modal-dialog" role="document">
    <div class="modal-content modal-repart-cat-detail">
      <div class="modal-header d-flex align-items-center">
        <div><span class="icon-ico_CATEGORIES_viande icon viande"></span></div>
        <div class="d-flex flex-column">
          <div class="titre-categorie">Emplois en élevage</div>
          <div class="hectares" id="-totaljobviande2">
            Intègre l'ensemble des emplois agricoles liés aux cultures destinées
            à l’alimentation de l’élevage (prairies, céréales, tourteaux, etc.)
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
        <div id="accordeon-fiche" class="accordeon-detail viande-fonce">
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
                  class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail viande-fonce"
                >
                  <span
                    class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                    ><span class="icon-ico_groupe icon viande"></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete">Emplois en élevage</span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 40% </span
                        ><span class="hectares"
                          >(environ) de l’emploi agricole total en Région
                          wallonne</span
                        ></span
                      >
                    </div>
                  </span>
                  <span
                    class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                    ><span
                      class="icon-ico_navigation_surface icon viande"
                    ></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete">Surface par emploi</span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 39 ha </span
                        ><span class="hectares">par emploi agricole</span></span
                      >
                    </div>
                  </span>
                  <span
                    class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                    ><span class="icon-ico_filtres-reloc icon viande"></span>
                    <div class="info-infos">
                      <span class="d-flex flex-column info-intro"
                        ><span class="info-entete">Salariés </span
                        ><span class="info-verbe">=</span></span
                      ><span class="d-flex flex-column info-detail"
                        ><span class="nbr-ha"> 15% </span
                        ><span class="hectares"
                          >de l’ensemble de la main d’œuvre des exploitations en
                          élevage est salariée</span
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
                      La donnée d’emploi agricole donne un ordre de grandeur du
                      <strong
                        >nombre de personnes travaillant à temps plein qu’il
                        faudrait mobiliser pour satisfaire la consommation
                        humaine en produits de l’élevage</strong
                      >, compte tenu des paramètres choisis par l’utilisateur (%
                      relocalisation, % bio, assiette).
                    </li>
                    <li>
                      Au sein de PARCEL, les emplois liés aux productions de
                      céréales et autres grandes cultures destinées à
                      l’alimentation animale sont comptabilisés dans cette
                      catégorie « Elevage ».
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
                        >PARCEL-Wallonie comptabilise uniquement les emplois
                        agricoles</strong
                      >. La relocalisation de l’alimentation impacte aussi les
                      emplois du milieu et de l’aval des chaînes alimentaires.
                      Ces modifications ne sont pas quantifiées.
                    </li>
                    <li>
                      <strong
                        >Les produits pris en compte par PARCEL-Wallonie
                        représentent environ 84% de notre alimentation (en
                        volume)</strong
                      >. Ce sont les produits recensés par les données
                      statistiques de STATBEL. PARCEL-Wallonie ne prend pas en
                      compte :
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
                      >On utilise les données statistiques de STATBEL (2020) qui
                      comptabilise les Unité de travail annuel par hectare en
                      fonction des Orientations technico-économique
                      (OTE).</strong
                    >.
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
                      >Pour l’élevage, on utilise l’indicateur UTA/ha des OTE :
                      « Bovins lait », « Bovins viande », « Ovins et caprins »,
                      « Elevages porcins », « Elevage avicole »</strong
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
<style>
.modal-repart-cat-detail .modal-header .icon {
  font-size: 50px;
  margin-right: 20px;
  margin-left: 10px;
}

.btn-link-open {
  display: flex;
  flex-direction: row;
  background-color: #463025 !important;
  color: #fff !important;
  gap: 8px;
}

.card-header {
  background-color: #463025 !important;
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
