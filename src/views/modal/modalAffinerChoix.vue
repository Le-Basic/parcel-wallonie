<template>
  <!-- Modal -->
  <div class="menuDroit" id="menu-affiner">
    <div class="modal-dialog" role="document" v-if="showParametres">
      <div class="modal-content">
        <button class="text-center close" @click="changeActive">
          <div class="revoir-select">Revoir votre sélection</div>
        </button>
        <div class="modal-header d-flex align-items-center justify-between">
          <div class="modal-title mr-auto w-100" id="head-affiner">
            <span class="icon-ico_menu_affiner icon"></span>Mes paramètres
          </div>
          <button
            type="button"
            id="asy-sidebarCollapse2"
            @click="fermerModalAffiner"
          >
            <span class="icon-ico_fermer icon"></span>
          </button>
        </div>
        <div class="modal-body">
          <div style="display:<?php echo $reloc; ?>;">
            <div class="header-filtre ml-auto mr-auto">
              <span class="icon-ico_filtres-reloc icon"></span
              ><span class="titre-filtre"
                >Quelle part de l’alimentation souhaitez-vous relocaliser ?
              </span>
            </div>
            <div class="legumes mb-2">
              <div
                class="range-slider5 ml-auto mr-auto"
                style="max-width: 500px"
              >
                <div class="mb-3">
                  <output class="range-output"
                    ><span
                      class="text-bold output legumes"
                      id="partlocaleval"
                    ></span
                    ><span class="text-bold legumes"
                      >{{ part_relocalisee }} %</span
                    ></output
                  >
                </div>
                <input
                  type="range"
                  class="slider-range"
                  min="0"
                  max="100"
                  step="1.000"
                  value="100"
                  id="partlocale"
                  v-model="part_relocalisee"
                />
                <div class="range-values">
                  <span class="range-min">0</span
                  ><span class="range-max">100</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="header-filtre ml-auto mr-auto">
              <span class="icon-gaspillage icon"></span
              ><span class="titre-filtre"
                >Quelle part de pertes et gaspillage souhaitez-vous réduire ?
              </span>
            </div>
            <div class="legumes mb-2">
              <div
                class="range-slider4 ml-auto mr-auto"
                style="max-width: 500px"
              >
                <div class="mb-3">
                  <output class="range-output"
                    ><span
                      class="text-bold output legumes"
                      id="valpartpertes"
                    ></span
                    ><span class="text-bold legumes"
                      >{{ partPertes }} %</span
                    ></output
                  >
                </div>
                <input
                  type="range"
                  class="slider-range"
                  min="0"
                  max="100"
                  step="1.000"
                  value="100"
                  id="partpertes"
                  v-model="partPertes"
                />
                <div class="range-values">
                  <span class="range-min">0</span
                  ><span class="range-max">100</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="header-filtre ml-auto mr-auto">
              <span class="icon-ico_filtres_bio icon"></span
              ><span class="titre-filtre">Quelle part de produits bio ?</span
              ><a
                href="#"
                class="info tooltip-affiner"
                data-tooltip="Le pourcentage de produits bio ne peut être fixé en-dessous d'un seuil qui correspond à la part de production bio actuelle sur le territoire (uniquement sur les produits de PARCEL). En relocalisant, votre alimentation contient au moins cette part de bio.
"
                data-placement="left"
                title="Tooltip on left"
                style="<?php echo $displaysliders; ?>"
                ><span class="icon-ico_element_info"></span
              ></a>
            </div>
            <div
              class="tout-bio d-flex ml-auto mr-auto"
              style="max-width: 500px"
            >
              <div class="mr-auto">Tout bio ?</div>
              <div>
                <label class="switch">
                  <input
                    type="checkbox"
                    id="toutbio"
                    @change="
                      partbiolegumes = 100;
                      partbiofruits = 100;
                      partbiocereales = 100;
                      partBioElevage = 100;
                    "
                    value="1"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <div
              class="tout-bio bg-white legumes d-flex ml-auto mr-auto"
              style="max-width: 500px"
              v-if="false"
            >
              <span class="icon-ico_CATEGORIES_legumes legumes icon"></span>
              <div class="mr-auto">Légumes en bio</div>
              <div>
                <label class="switch">
                  <input
                    type="checkbox"
                    id="chktoutbiolegumes"
                    onclick="updatetoutbiocat('legumes');"
                    value="1"
                  />
                  <span class="slider legumes round"></span>
                </label>
              </div>
            </div>
            <div
              class="range-slider6 legumes ml-auto mr-auto"
              style="max-width:500px;<?php echo $displaysliders; ?>"
            >
              <div class="range-titre-categorie">
                <div class="range-categorie">
                  <span class="icon-ico_CATEGORIES_legumes icon"></span>
                  <div class="titre-categorie">Légumes en bio</div>
                </div>
                <div class="ml-auto">
                  <output class="range-output"
                    ><span
                      class="text-bold output legumes"
                      id="partbiolegumesval"
                    ></span
                    ><span class="text-bold legumes"
                      >{{ partbiolegumes }} %</span
                    ></output
                  >
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1.000"
                value="100"
                id="partbiolegumes"
                v-model="partbiolegumes"
                class="slider-range"
              />
              <div class="range-values">
                <span class="range-min">0</span
                ><span class="range-max">100</span>
              </div>
            </div>
            <div
              class="tout-bio bg-white fruits d-flex ml-auto mr-auto"
              style="max-width: 500px"
              v-if="false"
            >
              <span class="icon-ico_CATEGORIES_fruits fruits icon"></span>
              <div class="mr-auto">Fruits en bio</div>
              <div>
                <label class="switch">
                  <input
                    type="checkbox"
                    id="chktoutbiofruits"
                    onclick="updatetoutbiocat('fruits');"
                    value="1"
                  />
                  <span class="slider fruits round"></span>
                </label>
              </div>
            </div>
            <div
              class="range-slider7 fruits ml-auto mr-auto"
              style="max-width: 500px"
            >
              <div class="range-titre-categorie">
                <div class="range-categorie">
                  <span class="icon-ico_CATEGORIES_fruits icon"></span>
                  <div class="titre-categorie">Fruits en bio</div>
                </div>
                <div class="ml-auto">
                  <output class="range-output"
                    ><span
                      class="text-bold output fruits"
                      id="partbiofruitsval"
                    ></span
                    ><span class="text-bold fruits"
                      >{{ partbiofruits }} %</span
                    ></output
                  >
                </div>
              </div>
              <input
                type="range"
                class="slider-range"
                min="0"
                max="100"
                step="1.000"
                value="100"
                id="partbiofruits"
                v-model="partbiofruits"
              />
              <div class="range-values">
                <span class="range-min">0</span
                ><span class="range-max">100</span>
              </div>
            </div>
            <div
              class="tout-bio bg-white cereales d-flex ml-auto mr-auto"
              style="max-width: 500px"
              v-if="false"
            >
              <span class="icon-ico_CATEGORIES_cereales cereales icon"></span>
              <div class="mr-auto">Céréales et autres en bio</div>
              <div>
                <label class="switch">
                  <input
                    type="checkbox"
                    id="chktoutbiocereales"
                    onclick="updatetoutbiocat('cereales');"
                    value="1"
                  />
                  <span class="slider cereales round"></span>
                </label>
              </div>
            </div>
            <div
              class="range-slider8 cereales ml-auto mr-auto"
              style="max-width:500px;<?php echo $displaysliders; ?>"
            >
              <div class="range-titre-categorie">
                <div class="range-categorie">
                  <span class="icon-ico_CATEGORIES_cereales icon"></span>
                  <div class="titre-categorie">Céréales et autres en bio</div>
                </div>
                <div class="ml-auto">
                  <output class="range-output"
                    ><span
                      class="text-bold output cereales"
                      id="partbiocerealesval"
                    ></span
                    ><span class="text-bold cereales"
                      >{{ partbiocereales }} %</span
                    ></output
                  >
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1.000"
                value="100"
                id="partbiocereales"
                class="slider-range"
                v-model="partbiocereales"
              />
              <div class="range-values">
                <span class="range-min">0</span
                ><span class="range-max">100</span>
              </div>
            </div>
            <div
              class="tout-bio bg-white viande d-flex ml-auto mr-auto"
              style="max-width: 500px"
              v-if="false"
            >
              <span class="icon-ico_CATEGORIES_viande viande icon"></span>
              <div class="mr-auto">Elevage en bio</div>
              <div>
                <label class="switch">
                  <input
                    type="checkbox"
                    id="chktoutbioelevage"
                    onclick="updatetoutbiocat('elevage');"
                    value="1"
                  />
                  <span class="slider viande round"></span>
                </label>
              </div>
            </div>
            <div
              class="range-slider9 viande ml-auto mr-auto"
              style="max-width:500px;<?php echo $displaysliders; ?>"
            >
              <div class="range-titre-categorie">
                <div class="range-categorie">
                  <span class="icon-ico_CATEGORIES_viande icon"></span>
                  <div class="titre-categorie">Elevage en bio</div>
                </div>
                <div class="ml-auto">
                  <output class="range-output"
                    ><span
                      class="text-bold output viande"
                      id="partbioelevageval"
                    ></span
                    ><span class="text-bold viande"
                      >{{ partBioElevage }} %</span
                    ></output
                  >
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1.000"
                value="100"
                id="partbioelevage"
                class="slider-range"
                v-model="partBioElevage"
              />
              <div class="range-values">
                <span class="range-min">0</span
                ><span class="range-max">100</span>
              </div>
            </div>
          </div>
          <div id="partviande2">
            <div class="header-filtre ml-auto mr-auto">
              <span class="icon-ico_navigation_alimentation icon"></span
              ><span class="titre-filtre"
                >Quelle part de produits animaux ?</span
              ><a
                href="#"
                class="info tooltip-affiner"
                data-tooltip="Les régimes proposés sont calculés pour garantir un équilibre nutritionnel (pour plus d'informations voir la page annexe de méthodologie de calcul)"
                data-placement="left"
                title="Tooltip on left"
                ><span class="icon-ico_element_info"></span
              ></a>
            </div>
            <div class="ml-auto mr-auto" style="max-width: 500px">
              <label class="container-checkbox"
                ><strong>Régime actuel</strong>
                <input
                  type="radio"
                  checked="checked"
                  name="id_assiette2"
                  value="actuel"
                  id="2flexi0"
                  v-model="regimeChoisi"
                />
                <span class="checkmark checkmark-radio"></span>
              </label>
              <label class="container-checkbox"
                ><strong>Diminution d'1/4 des produits animaux</strong>
                <input
                  type="radio"
                  name="id_assiette2"
                  value="quart"
                  id="2flexi1"
                  v-model="regimeChoisi"
                />
                <span class="checkmark checkmark-radio"></span>
              </label>
              <label class="container-checkbox"
                ><strong>Diminution de moitié des produits animaux</strong>
                <input
                  type="radio"
                  name="id_assiette2"
                  value="moitie"
                  id="2flexi2"
                  v-model="regimeChoisi"
                />
                <span class="checkmark checkmark-radio"></span>
              </label>
              <label class="container-checkbox"
                ><strong>Végétarien</strong> <br />
                <input
                  type="radio"
                  name="id_assiette2"
                  value="vegetarien"
                  id="2vegetarienne"
                  v-model="regimeChoisi"
                />
                <span class="checkmark checkmark-radio"></span>
              </label>
              <label class="container-checkbox"
                ><strong>Régime perso</strong> <br />
                <input
                  type="radio"
                  name="id_assiette2"
                  value="vegetarien"
                  id="2vegetarienne"
                  @input="$router.push('/regime-personnalise')"
                />
                <span class="checkmark checkmark-radio"></span>
              </label>
              <!--label class="container-checkbox"><strong>Végétalien</strong> <br />
              <input type="radio" name="id_assiette2" value="vegetalienne" id="2vegetalienne">
              <span class="checkmark checkmark-radio"></span>
            </label-->
              <!-- <?php if (isset($parcours) && $parcours != "2") : ?> -->
              <label class="container-checkbox" v-if="false"
                ><strong>Régime perso</strong> <br />
                <input type="radio" name="id_assiette2" value="" id="2flexi5" />
                <span class="checkmark checkmark-radio"></span>
              </label>
              <!-- <?php endif; ?> -->
            </div>
          </div>
          <!-- <?php if ($menu == 'menu2-resultats') { ?>
          <a href="/repartition-des-cultures-dans-la-relocalisation"
            ><button type="button" class="btn btn-principal mt-5">
              Voir la répartition optimale pour ces choix
            </button></a
          >
        </div>
        <?php } ?> -->
        </div>
        <!-- modal-content -->
      </div>
      <!-- modal-dialog -->
    </div>
    <!-- modal -->
    <div class="menuDroit" id="menu-selection">
      <div class="modal-dialog" role="document" v-if="!showParametres">
        <div class="modal-content">
          <button class="text-center close">
            <div class="revoir-select">Affiner votre sélection</div>
          </button>
          <div class="modal-header d-flex align-items-center justify-between">
            <div class="modal-title mr-auto w-100" id="head-selection">
              Votre sélection
            </div>
            <button
              type="button"
              id="asy-sidebarCollapse5"
              @click="fermerModalAffiner"
            >
              <span class="icon-ico_fermer icon"></span>
            </button>
          </div>
          <div class="modal-body h-100 align-items-center">
            <div class="">
              <div class="selection-ligne">
                <div class="header-filtre">
                  <span class="icon-ico_navigation_territoire icon"></span
                  ><span class="titre-filtre">Territoire </span
                  ><span class="modifier"
                    ><a href="/1-choix-du-territoire">modifier</a></span
                  >
                </div>
                <span id="selection" class="text-white"></span>
              </div>
              <div class="selection-ligne">
                <div class="header-filtre">
                  <span class="icon-ico_navigation_population icon"></span
                  ><span class="titre-filtre">Population </span
                  ><span class="modifier"
                    ><a href="/2-choix-de-la-population">modifier</a></span
                  >
                </div>
                <span
                  id="population"
                  class="badge badge-pill badge-blanc"
                ></span>
              </div>
              <div class="selection-ligne">
                <div class="header-filtre">
                  <span class="icon-ico_navigation_alimentation icon"></span
                  ><span class="titre-filtre">Alimentation </span
                  ><span class="modifier"
                    ><a href="/3-type-dalimentation">modifier</a></span
                  >
                </div>
                <span class="badge badge-pill badge-blanc"
                  >Bio:<span id="bioval">1,8</span>%</span
                >
                <span href="" id="assiette2"></span>
              </div>
            </div>
            <!--<a href=""><button type="button" class="btn btn-principal btn-principal-fonce mt-5">Commencer</button></a>-->
          </div>
        </div>
        <!-- modal-content -->
      </div>
      <!-- modal-dialog -->
    </div>
    <!-- modal -->
  </div>
</template>

<script>
import "rangeslider.js";
import "rangeslider.js/dist/rangeslider.css";
import { getRegimeParNomCourt } from "@/config/regimeListe";
export default {
  name: "MenuAffinerChoix",
  data: function () {
    return {
      partlocale: this.$store.state.partlocale,
      partPertes: this.$store.state.partpertes,
      partbiolegumes: this.$store.state.partbiolegumes,
      partbiofruits: this.$store.state.partbiofruits,
      partbiocereales: this.$store.state.partbiocereales,
      partBioElevage: this.$store.state.partbioelevage,
      showParametres: true,
      regimeChoisi: this.$store.state.regime_alimentaire.nomCourt,
      part_relocalisee: this.$store.state.part_relocalisee,
    };
  },
  methods: {
    fermerModalAffiner() {
      this.$emit("fermerModalAffiner");
      console.log("fermerModalAffiner");
    },
    changeActive() {
      this.showParametres = !this.showParametres;
    },
  },
  watch: {
    partPertes: function (partPertes) {
      this.$store.dispatch("actionModifierPartPertes", partPertes);
    },
    partbiocereales: function (partBioCereales) {
      this.$store.dispatch("actionModifierPartBioCereales", partBioCereales);
    },
    partBioElevage: function (partBioElevage) {
      this.$store.dispatch("actionModifierPartBioElevage", partBioElevage);
    },
    partbiofruits: function (partBioFruits) {
      this.$store.dispatch("actionModifierPartBioFruits", partBioFruits);
    },
    partbiolegumes: function (partBioLegumes) {
      this.$store.dispatch("actionModifierPartBioLegumes", partBioLegumes);
    },
    regimeChoisi: function (nomCourtRegime) {
      // TODO : choix pour utiliser nomCourt ou id comme clé partout pour les régimes
      const regimeChoisi = getRegimeParNomCourt(nomCourtRegime);
      this.$store.dispatch("actionChoisirRegimeAlimentaire", regimeChoisi);
    },
    part_relocalisee: function (part_relocalisee) {
      console.log("test");
      this.$store.dispatch("actionModifierPartRElocalisee", part_relocalisee);
    },
  },
};
</script>

<style>
input:checked + .slider {
  background-color: #015a5a;
}

input:checked + .slider.legumes {
  background-color: #91c423;
}

input:checked + .slider.fruits {
  background-color: #a261c0;
}

input:checked + .slider.cereales {
  background-color: #f5a623;
}

input:checked + .slider.viande {
  background-color: #b57a60;
}

.legumes.icon {
  color: #91c423 !important;
}

.fruits.icon {
  color: #a261c0 !important;
}

.cereales.icon {
  color: #f5a623 !important;
}

.viande.icon {
  color: #b57a60 !important;
}

.revoir-select {
  background-image: url("/public/img/fleches/fleche-gch-blanc.svg");
}
</style>
