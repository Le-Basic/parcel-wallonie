<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation :active="1" menu-type="resultats-surface" />
      <div class="section centrervh" id="section0">
        <div class="container">
          <resumeChoixSurface />
          <!-- <h1 class="animated fadeInUp fast mb-2">Avec <span id="choixsurface">100</span> <span id="typesurface">hectares</span> à <br><span id="nomvilleter">- </span>-</h1>-->
          <div
            class="d-flex align-items-center titre-page-p2 animated fadeInUp justify-content-center"
          >
            <div class="text-h1 mb-0 mr-4">Avec</div>
            <span class="text-h1 vert-clair" id="choixsurface">
              {{ choixsurface }}</span
            >
            <div class="text-h1 mb-0 ml-3">
              <span id="typesurface">hectares</span>
            </div>
          </div>
          <div class="animated fadeInUp text-h1 text-center">
            je peux nourrir
          </div>
          <pre>{{ this.$store.state.resultatSimulationSurface }}</pre>
          <!--
          <div class="titre-page animated fadeInUp h1-result">
            <h1 class="h1-result">Avec</h1>
          </div>
          <div class="text-center animated fadeIn delay-05s">
            <div class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center mb-2">
              <div class="handle-counter" id="handleCountersurface">
                <span class="btn-moins counter-minus updnb">-</span>
                <input type="text" class="nombre" name="choixsurface" id="choixsurface" value="150" data-num="150" style="width:150px;">
                <span class="btn-plus counter-plus updnb">+</span>
              </div>
            </div>
          </div>-->

          <!--<div class="titre-page animated fadeInUp">
            <h1>
              <div class="vert-fonce"><span id="typesurface">hectares</span>-->
          <!-- à <span id="nomvilleter"></span>,-->
          <!--</div>
              <div> je peux nourrir</div>
            </h1>
          </div>-->
          <div class="mb-4">
            <!-- <?php include '../partials/resum-result2.php'; ?> -->
          </div>
          <!--
          <div class="ligne-prereglages animated fadeInDown delay-2s" onclick="" data-toggle="modal" data-target="#menu-affiner" style="cursor: pointer;">
            <div class="filtres">
              <div class="titre-prereglage">Production et alimentation</div>
              <button class="affiner-param">
                <div class="prereglage">
                  <div class="result-type"><span class="icon-ico_filtres_bio icon vert-clair"></span></div>
                  <div class="result-chiffres"><span><strong>% bio : </strong></span><span><span id="bioval3">1,8</span>%</span></div>
                  <div class="result-plus"><span class="icon-ico_fleche_detail_gros icon vert-clair"></span></div>
                </div>
              </button>
              <button class="affiner-param">
                <div class="prereglage">
                  <div class="result-type"><span class="icon-ico_CATEGORIES_viande icon vert-clair mr-2"></span></div>
                  <div class="result-chiffres"><span><strong>conso viande : </strong></span><span id="assiette3">actuelle</span></div>
                  <div class="result-plus"><span class="icon-ico_fleche_detail_gros icon vert-clair"></span></div>
                </div>
              </button>
            </div>
            <div class="btn-affiner-rond"><button type="button" class="" data-toggle="modal" data-target="#menu-affiner">
                <span class="icon-ico_menu_affiner icon"></span>Affiner</button></div>
          </div>-->

          <div class="resultats-generaux">
            <router-link
              to="/repartition-des-cultures-dans-la-relocalisation"
              class="cadre-resultat animated cadre-btn fadeIn delay-05s cadre-parcours2 flex-row"
            >
              <span
                class="icon-ico_groupe icon flipInX animated delay-1s"
              ></span>
              <div class="d-flex flex-sm-row flex-column">
                <div class="nbr-ha animated flipInX delay-1-5s">
                  <span id="couvertstotal0" class="odometer">{{
                    nbPersonnesBesoinsCombles
                  }}</span>
                </div>
                <div class="hectares animated flipInX delay-1-5s">
                  personnes
                </div>
              </div>
              <div class="result-plus icon fadeIn animated delay-2s">
                <span class="icon-ico_fleche_detail_gros icon"></span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <nav id="asy-sidebar" class="">
      <!-- <?php include '../partials/menu-affiner-2modales.php'; ?> -->
    </nav>
  </div>
</template>

<script>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoixSurface from "@/views/parcours-surface/ResumeChoixSurface.vue";

export default {
  components: {
    BarreNavigation,
    resumeChoixSurface,
  },
  data() {
    return {
      choixsurface: this.$store.state.surfacesMobilisables,
      nbPersonnesBesoinsCombles:
        this.$store.state.resultatSimulationSurface.populationAvecBesoinComblé,
    };
  },
};
</script>
