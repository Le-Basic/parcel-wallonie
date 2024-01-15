<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="recherche" active="2" />
      <div class="section centrervh" id="section0">
        <div class="container">
          <div class="mb-5 animated fadeInUp">
            <h1 class="mb-3">Choisissez la population concernée</h1>
            <div class="sous-titre">
              dont vous souhaitez relocaliser l’alimentation
            </div>
          </div>
          <resumeChoix />
          <div class="choix-pop mt-5">
            <div class="animated fadeInUp delay-05s">
              <router-link
                to="/3-type-dalimentation"
                id="toute"
                @click="choisirPopulation('toute')"
                ><button type="button" class="btn btn-big-light">
                  Toute la population du territoire
                </button></router-link
              >
            </div>
            <div class="animated fadeInUp delay-1s">
              <a
                href="/2-choix-de-la-population-par-etablissement"
                id="type"
                onclick="majitem('population','type');"
                ><button type="button" class="btn btn-big-light">
                  Ou les consommateurs d’un ou plusieurs établissements (école,
                  hôpital…)
                </button></a
              >
            </div>
            <div class="animated fadeInUp delay-1-5s">
              <a
                href="#secondPage"
                id="groupe"
                onclick="majitem('population','groupe');"
                ><button
                  type="button"
                  class="btn btn-big-light"
                  data-toggle="modal"
                  data-target="#modal-population-groupe"
                >
                  ou un groupe de personnes
                </button></a
              >
            </div>
          </div>
          <div class="text-center note animated fadeInUp delay-2s">
            <em
              >*En fonction du choix de population, PARCEL détermine les
              consommations alimentaires qui varient en fonction de l'âge et du
              sexe</em
            >
          </div>
        </div>
      </div>
    </div>
    <nav id="asy-sidebar" class="">
      <!-- <?php include '../partials/menu-affiner-2modales.php'; ?> -->
    </nav>
  </div>
  <!-- Modal s-->
  <div
    class="modal fade modal-simple"
    id="modal-population-groupe"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-repart-cat-detail">
        <div class="modal-header d-flex align-items-center">
          <div>
            <span class="icon-ico_navigation_population icon vert-clair"></span>
          </div>
          <div class="">
            <div class="titre-categorie">
              Définissez votre groupe de personne
            </div>
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
        <div class="modal-body">
          <div class="bloc">
            <span class="nombres-ajout pop">
              <div class="handle-counter" id="handleCounterenfants">
                <span class="btn-moins counter-minus">-</span>
                <input
                  type="text"
                  class="nombre groupe"
                  name="nbenfants"
                  id="nbenfants"
                  value="150"
                />
                <span class="btn-plus counter-plus">+</span
                ><span class="labelnb"> Enfants (0-17 ans)</span>
              </div>
            </span>
          </div>
          <div class="bloc">
            <span class="nombres-ajout pop">
              <div class="handle-counter" id="handleCounteradultes">
                <span class="btn-moins counter-minus">-</span>
                <input
                  type="text"
                  class="nombre groupe"
                  name="nbadultes"
                  id="nbadultes"
                  value="150"
                />
                <span class="btn-plus counter-plus">+</span
                ><span class="labelnb"> Adultes (18-64 ans)</span>
              </div>
            </span>
          </div>
          <div class="bloc">
            <span class="nombres-ajout pop">
              <div class="handle-counter" id="handleCounterseniors">
                <span class="btn-moins counter-minus">-</span>
                <input
                  type="text"
                  class="nombre groupe"
                  name="nbseniors"
                  id="nbseniors"
                  value="150"
                />
                <span class="btn-plus counter-plus">+</span
                ><span class="labelnb"> Personnes âgées (65+ ans)</span>
              </div>
            </span>
          </div>
          <router-link to="/3-type-dalimentation"
            ><button
              type="button"
              class="btn btn-principal"
              onclick="majitem('nbenfants',$('#nbenfants').val());majitem('nbadultes',$('#nbadultes').val());majitem('nbseniors',$('#nbseniors').val());"
            >
              Valider
            </button></router-link
          >
        </div>
      </div>
      <!-- modal body-->
    </div>
    <!-- modal-content -->
  </div>
  <!-- modal-dialog -->
</template>

<script>
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";
import resumeChoix from "./modal/resumeChoix.vue";
export default {
  components: {
    BarreNavigation,
    resumeChoix,
  },
  methods: {
    choisirPopulation(item) {
      this.rechercheInput = "";
      this.list_geo = [];
      this.$store.commit("choisirPopulation", item);
      console.log("store", this.$store.state);
    },
  },
};
</script>
