<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation :active="3" menu-type="resultats-surface" />
      <div class="section centrervh" id="section0">
        <div class="container">
          <resumeChoixSurface />

          <div class="mb-5">
            <!-- <?php include '../partials/resum-result2.php'; ?> -->
          </div>

          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-12 col-sm-12 col-12">
              <div class="header-filtre">
                <span class="titre-filtre justify-content-center">
                  <h1 class="animated fadeInUp fast">
                    Je choisis de répartir mes
                    <span id="choixsurface">100</span>
                    <span id="typesurface">hectares</span> ainsi
                  </h1>
                </span>
              </div>

              <div class="range-slider legumes animated fadeInUp delay-1s">
                <div class="range-titre-categorie">
                  <div class="range-categorie">
                    <span class="icon-ico_CATEGORIES_legumes icon"></span>
                    <div class="titre-categorie">Légumes (bio et non bio)</div>
                  </div>
                  <div class="ml-auto">
                    <output class="range-output"
                      ><span
                        class="text-bold output legumes"
                        id="partsurfacelegumesval"
                        >{{ AfficherEntier(portionLegumes) }}</span
                      ><span class="text-bold legumes">%</span></output
                    >
                  </div>
                </div>
                <VueSlider
                  v-model="portionLegumes"
                  :process-style="{ backgroundColor: '#BDC660' }"
                  :width="200"
                  :height="10"
                />

                <div class="range-values">
                  <span class="range-min">0</span
                  ><span class="range-max">0</span>
                </div>
              </div>
              <div class="range-slider2 fruits animated fadeInUp delay-1s">
                <div class="range-titre-categorie">
                  <div class="range-categorie">
                    <span class="icon-ico_CATEGORIES_fruits icon"></span>
                    <div class="titre-categorie">Fruits (bio et non bio)</div>
                  </div>
                  <div class="ml-auto">
                    <output class="range-output"
                      ><span
                        class="text-bold output fruits"
                        id="partsurfacefruitsval"
                        >{{ AfficherEntier(portionFruits) }}</span
                      ><span class="text-bold fruits">%</span></output
                    >
                  </div>
                </div>
                <VueSlider
                  v-model="portionFruits"
                  :process-style="{ backgroundColor: '#a261c0' }"
                  :width="200"
                  :height="10"
                />

                <div class="range-values">
                  <span class="range-min">0</span
                  ><span class="range-max">0</span>
                </div>
              </div>
              <div class="range-slider3 cereales animated fadeInUp delay-1s">
                <div class="range-titre-categorie">
                  <div class="range-categorie">
                    <span class="icon-ico_CATEGORIES_cereales icon"></span>
                    <div class="titre-categorie">
                      Céréales et autres (bio et non bio)
                    </div>
                  </div>
                  <div class="ml-auto">
                    <output class="range-output"
                      ><span
                        class="text-bold output cereales"
                        id="partsurfacecerealesval"
                        >{{ AfficherEntier(portionCereales) }}</span
                      ><span class="text-bold cereales">%</span></output
                    >
                  </div>
                </div>
                <VueSlider
                  v-model="portionCereales"
                  :process-style="{ backgroundColor: '#f5a623' }"
                  :width="200"
                  :height="10"
                />

                <div class="range-values">
                  <span class="range-min">0</span
                  ><span class="range-max">0</span>
                </div>
              </div>
              <div class="range-slider4 viande animated fadeInUp delay-1s">
                <div class="range-titre-categorie">
                  <div class="range-categorie">
                    <span class="icon-ico_CATEGORIES_viande icon"></span>
                    <div class="titre-categorie mb-1">
                      Elevage (bio et non bio)
                    </div>
                  </div>
                  <div class="ml-auto">
                    <output class="range-output"
                      ><span
                        class="text-bold output viande"
                        id="partsurfaceelevageval"
                        >{{ AfficherEntier(portionElevage) }}</span
                      ><span class="text-bold viande">%</span></output
                    >
                  </div>
                </div>
                <VueSlider
                  v-model="portionElevage"
                  :process-style="{ backgroundColor: '#b57a60' }"
                  :width="200"
                  :height="10"
                  :tooltip="'none'"
                />

                <div class="range-values">
                  <span class="range-min">0</span
                  ><span class="range-max">0</span>
                </div>
              </div>
              <div
                class="div-continuer col-12 animated fadeInUp delay-3s"
              ></div>
            </div>
            <div
              class="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12 text-center align-items-center animated fadeIn delay-2s"
            >
              <div style="max-width: 600px; margin: 0 auto 0 auto">
                <div class="text-center">
                  <span class="sous-titre"
                    ><strong
                      ><span id="choixsurface2">100</span>
                      <span id="typesurface2">hectares</span> ainsi
                      répartis</strong
                    ></span
                  >
                </div>
                <div class="text-center mb-4 sous-titre">
                  répondent aux besoins de
                </div>
                <div
                  class="resultats-categories repartition graph w-100"
                  style="
                    background-color: #fff;
                    text-align: center;
                    height: unset;
                  "
                >
                  <table
                    summary="Repartition"
                    class="auto-style1"
                    border="0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          valign="bottom"
                          align="center"
                          id="man2_legumes"
                          width="50"
                          class="col-lg-3 col-md-3 col-sm-3 col-12"
                        >
                          <span
                            class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                          ></span
                          ><br />
                        </td>
                        <td
                          valign="bottom"
                          align="center"
                          id="man2_fruits"
                          width="50"
                          class="col-lg-3 col-md-3 col-sm-3 col-12"
                        >
                          <span
                            class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                          ></span
                          ><br />
                        </td>
                        <td
                          valign="bottom"
                          align="center"
                          id="man2_cereales"
                          width="50"
                          class="col-lg-3 col-md-3 col-sm-3 col-12"
                        >
                          <span
                            class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                          ></span
                          ><br />
                        </td>
                        <td
                          valign="bottom"
                          align="center"
                          id="man2_elevage"
                          width="50"
                          class="col-lg-3 col-md-3 col-sm-3 col-12"
                        >
                          <span
                            class="icon-ico_CATEGORIES_viande ico-medium viande"
                          ></span
                          ><br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row repart-personnes">
                  <div
                    class="col-lg-3 col-md-3 col-sm-3 col-12 cadre-categorie legumes"
                  >
                    <div class="result-pers d-inline-flex">
                      <div
                        class="text-left text-md-center justify-content-start justify-content-md-center"
                      >
                        a
                        <div>
                          <span class="icon-personne ico-medium legumes"
                            >a</span
                          >
                        </div>
                        <div class="nbr-personne legumes" id="couvertslegumes">
                          0
                        </div>
                        <div class="personnes legumes">personnes</div>
                      </div>
                    </div>
                    <div class="result-chiffres">
                      <div class="titre-categorie">en légumes</div>
                    </div>
                    <div class="result-type">
                      <span
                        class="icon-ico_CATEGORIES_legumes ico-medium legumes"
                      ></span>
                    </div>
                    <div class="result-plus disabled">
                      <span
                        class="icon-ico_fleche_detail_gros icon legumes"
                      ></span>
                    </div>
                  </div>
                  <div
                    class="col-lg-3 col-md-3 col-sm-3 col-12 cadre-categorie fruits"
                  >
                    <div class="result-pers d-inline-flex">
                      <div>
                        <span class="icon-personne ico-medium fruits"></span>
                      </div>
                      <div
                        class="text-left text-md-center justify-content-start justify-content-md-center"
                      >
                        <div class="nbr-personne fruits" id="couvertsfruits">
                          0
                        </div>
                        <div class="personnes fruits">personnes</div>
                      </div>
                    </div>
                    <div class="result-chiffres">
                      <div class="titre-categorie">en fruits</div>
                    </div>
                    <div class="result-type">
                      <span
                        class="icon-ico_CATEGORIES_fruits ico-medium fruits"
                      ></span>
                    </div>
                    <div class="result-plus disabled">
                      <span
                        class="icon-ico_fleche_detail_gros icon fruits"
                      ></span>
                    </div>
                  </div>
                  <div
                    class="col-lg-3 col-md-3 col-sm-3 col-12 cadre-categorie cereales"
                  >
                    <div class="result-pers d-inline-flex">
                      <div>
                        <span class="icon-personne ico-medium cereales"></span>
                      </div>
                      <div
                        class="text-left text-md-center justify-content-start justify-content-md-center"
                      >
                        <div
                          class="nbr-personne cereales"
                          id="couvertscereales"
                        >
                          0
                        </div>
                        <div class="personnes cereales">personnes</div>
                      </div>
                    </div>
                    <div class="result-chiffres">
                      <div class="titre-categorie">en cereales</div>
                    </div>
                    <div class="result-type">
                      <span
                        class="icon-ico_CATEGORIES_cereales ico-medium cereales"
                      ></span>
                    </div>
                    <div class="result-plus disabled">
                      <span
                        class="icon-ico_fleche_detail_gros icon cereales"
                      ></span>
                    </div>
                  </div>
                  <div
                    class="col-lg-3 col-md-3 col-sm-3 col-12 cadre-categorie viande"
                  >
                    <div class="result-pers d-inline-flex">
                      <div>
                        <span class="icon-personne ico-medium viande"></span>
                      </div>
                      <div
                        class="text-left text-md-center justify-content-start justify-content-md-center"
                      >
                        <div class="nbr-personne viande" id="couvertselevage">
                          1
                        </div>
                        <div class="personnes viande">personnes</div>
                      </div>
                    </div>
                    <div class="result-chiffres">
                      <div class="titre-categorie">en élevage</div>
                    </div>
                    <div class="result-type">
                      <span
                        class="icon-ico_CATEGORIES_viande ico-medium viande"
                      ></span>
                    </div>
                    <div class="result-plus disabled">
                      <span
                        class="icon-ico_fleche_detail_gros icon viande"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--end colonne 2-->
            <div
              class="cadre-resultat d-flex animated fadeInUp delay-2-5s besoins-alim w-100 mb-0"
            >
              <div class="text-left legende">
                répondent aux besoins alimentaires complets de
              </div>
              <div class="ml-auto nbr-affiche">
                <div class="nbr-ha" id="couvertstotal">
                  {{ populationAvecBesoinComblé }}
                </div>
                <div class="hectares">personnes</div>
              </div>
            </div>
            <div
              class="text-center animated fadeInUp delay-2-5s besoins-alim w-100 mb-0 nav-item"
            >
              <a href="/agir-pour-une-relocalisation-durable-avec-une-surface"
                ><button type="button" class="btn btn-principal mt-5">
                  Agir
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav id="asy-sidebar" class="">
      <!-- <?php include '../partials/menu-affiner-2modales.php'; ?> -->
    </nav>
  </div>
  <!-- <?php include '../partials/scripts-footer.php'; ?> -->
</template>

<script setup>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoixSurface from "@/views/parcours-surface/ResumeChoixSurface.vue";
import VueSlider from "vue-3-slider-component";
import { AfficherEntier } from "@/plugins/utils";
import { ref } from "vue";
import { watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
const portionLegumes = ref(25);
const portionFruits = ref(25);
const portionCereales = ref(25);
const portionElevage = ref(25);
const totalPortions = 100;
const populationAvecBesoinComblé =
  store.state.resultatSimulationSurface.populationAvecBesoinComblé;

// watcher
watch(
  () => portionCereales.value,
  (value) => {
    console.log("valeur watcher cereales", value);
    if (
      portionCereales.value +
        portionElevage.value +
        portionLegumes.value +
        portionFruits.value !=
      totalPortions
    ) {
      let resteADistribuer =
        totalPortions -
        portionCereales.value -
        portionElevage.value -
        portionLegumes.value -
        portionFruits.value;
      console.log("restant", resteADistribuer);
      portionElevage.value += resteADistribuer / 3;
      portionLegumes.value += resteADistribuer / 3;
      portionFruits.value += resteADistribuer / 3;
      portionLegumes.value = Math.max(0, portionLegumes.value);
      portionElevage.value = Math.max(0, portionElevage.value);
      portionLegumes.value = Math.min(100, portionLegumes.value);
      portionElevage.value = Math.min(100, portionElevage.value);
      portionCereales.value = Math.min(100, portionCereales.value);
      portionCereales.value = Math.max(0, portionCereales.value);
      portionFruits.value = Math.min(100, portionFruits.value);
      portionFruits.value = Math.max(0, portionFruits.value);
    }
  }
);
watch(
  () => portionElevage.value,
  (value) => {
    console.log("valeur watcher cereales", value);
    if (
      portionCereales.value +
        portionElevage.value +
        portionLegumes.value +
        portionFruits.value +
        portionFruits.value !=
      totalPortions
    ) {
      let resteADistribuer =
        totalPortions -
        portionCereales.value -
        portionElevage.value -
        portionLegumes.value -
        portionFruits.value;
      console.log("restant", resteADistribuer);
      portionCereales.value += resteADistribuer / 3;
      portionLegumes.value += resteADistribuer / 3;
      portionFruits.value += resteADistribuer / 3;
      portionLegumes.value = Math.max(0, portionLegumes.value);
      portionElevage.value = Math.max(0, portionElevage.value);
      portionLegumes.value = Math.min(100, portionLegumes.value);
      portionElevage.value = Math.min(100, portionElevage.value);
      portionCereales.value = Math.min(100, portionCereales.value);
      portionCereales.value = Math.max(0, portionCereales.value);
      portionFruits.value = Math.min(100, portionFruits.value);
      portionFruits.value = Math.max(0, portionFruits.value);
    }
  }
);
watch(
  () => portionLegumes.value,
  (value) => {
    console.log("valeur watcher cereales", value);
    if (
      portionCereales.value +
        portionElevage.value +
        portionLegumes.value +
        portionFruits.value !=
      totalPortions
    ) {
      let resteADistribuer =
        totalPortions -
        portionCereales.value -
        portionElevage.value -
        portionLegumes.value -
        portionFruits.value;
      console.log("restant", resteADistribuer);
      portionElevage.value += resteADistribuer / 3;
      portionCereales.value += resteADistribuer / 3;
      portionFruits.value += resteADistribuer / 3;
      portionLegumes.value = Math.max(0, portionLegumes.value);
      portionElevage.value = Math.max(0, portionElevage.value);
      portionLegumes.value = Math.min(100, portionLegumes.value);
      portionElevage.value = Math.min(100, portionElevage.value);
      portionCereales.value = Math.min(100, portionCereales.value);
      portionCereales.value = Math.max(0, portionCereales.value);
      portionFruits.value = Math.min(100, portionFruits.value);
      portionFruits.value = Math.max(0, portionFruits.value);
    }
  }
);
watch(
  () => portionFruits.value,
  (value) => {
    console.log("valeur watcher cereales", value);
    if (
      portionCereales.value +
        portionElevage.value +
        portionLegumes.value +
        portionFruits.value !=
      totalPortions
    ) {
      let resteADistribuer =
        totalPortions -
        portionCereales.value -
        portionElevage.value -
        portionLegumes.value -
        portionFruits.value;
      console.log("restant", resteADistribuer);
      portionElevage.value += resteADistribuer / 3;
      portionCereales.value += resteADistribuer / 3;
      portionLegumes.value += resteADistribuer / 3;
      portionLegumes.value = Math.max(0, portionLegumes.value);
      portionElevage.value = Math.max(0, portionElevage.value);
      portionLegumes.value = Math.min(100, portionLegumes.value);
      portionElevage.value = Math.min(100, portionElevage.value);
      portionCereales.value = Math.min(100, portionCereales.value);
      portionCereales.value = Math.max(0, portionCereales.value);
      portionFruits.value = Math.min(100, portionFruits.value);
      portionFruits.value = Math.max(0, portionFruits.value);
    }
  }
);
</script>
