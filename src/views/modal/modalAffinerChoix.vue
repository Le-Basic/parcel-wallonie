<template>
  <!-- Modal -->
  <div
    id="menu-affiner"
    class="menuDroit"
  >
    <div
      v-if="showParametres"
      class="modal-dialog"
      role="document"
    >
      <div class="modal-content">
        <button
          class="text-center close"
          @click="changeActive"
        >
          <div class="revoir-select">
            Revoir votre sélection
          </div>
        </button>
        <div class="modal-header d-flex align-items-center justify-between">
          <div
            id="head-affiner"
            class="modal-title mr-auto w-100"
          >
            <span class="icon-ico_menu_affiner icon" />Mes paramètres
          </div>
          <button
            id="asy-sidebarCollapse2"
            type="button"
            @click="fermerModalAffiner"
          >
            <span class="icon-ico_fermer icon" />
          </button>
        </div>
        <div class="modal-body">
          <div style="display:<?php echo $reloc; ?>;">
            <div class="header-filtre ml-auto mr-auto">
              <span class="icon-ico_filtres-reloc icon" /><span class="titre-filtre">Quelle part de l’alimentation souhaitez-vous relocaliser ?
              </span>
            </div>
            <div class="legumes mb-2">
              <div
                class="range-slider5 ml-auto mr-auto"
                style="max-width: 500px"
              >
                <div class="mb-3">
                  <output class="range-output"><span
                    id="partlocaleval"
                    class="text-bold output legumes"
                  /><span class="text-bold legumes">{{ $store.state.part_relocalisee }} %</span></output>
                </div>
                <input
                  id="partlocale"
                  v-model="$store.state.part_relocalisee"
                  type="range"
                  class="slider-range"
                  min="0"
                  max="100"
                  step="1.000"
                  value="100"
                >
                <div class="range-values">
                  <span class="range-min">0</span><span class="range-max">100</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="header-filtre ml-auto mr-auto">
              <span class="icon-gaspillage icon" /><span class="titre-filtre">Quelle part de pertes et gaspillage souhaitez-vous réduire ?
              </span>
            </div>
            <div class="legumes mb-2">
              <div
                class="range-slider4 ml-auto mr-auto"
                style="max-width: 500px"
              >
                <div class="mb-3">
                  <output class="range-output"><span
                    id="valpartpertes"
                    class="text-bold output legumes"
                  /><span class="text-bold legumes">{{ $store.state.partpertes }} %</span></output>
                </div>
                <input
                  id="partpertes"
                  v-model="$store.state.partpertes"
                  type="range"
                  class="slider-range"
                  min="0"
                  max="100"
                  step="1.000"
                  value="100"
                >
                <div class="range-values">
                  <span class="range-min">0</span><span class="range-max">100</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="header-filtre ml-auto mr-auto">
              <span class="icon-ico_filtres_bio icon" /><span class="titre-filtre">Quelle part de produits bio ?</span><a
                href="#"
                class="info tooltip-affiner"
                data-tooltip="Le pourcentage de produits bio ne peut être fixé en-dessous d'un seuil qui correspond à la part de production bio actuelle sur le territoire (uniquement sur les produits de PARCEL). En relocalisant, votre alimentation contient au moins cette part de bio.
"
                data-placement="left"
                title="Tooltip on left"
                style="<?php echo $displaysliders; ?>"
              ><span class="icon-ico_element_info" /></a>
            </div>
            <div
              class="tout-bio d-flex ml-auto mr-auto"
              style="max-width: 500px"
            >
              <div class="mr-auto">
                Tout bio ?
              </div>
              <div>
                <label class="switch">
                  <input
                    id="toutbio"
                    type="checkbox"
                    value="1"
                    @change="
                      partbiolegumes = 100;
                      partbiofruits = 100;
                      partbiocereales = 100;
                      partbioelevage = 100;
                    "
                  >
                  <span class="slider round" />
                </label>
              </div>
            </div>
            <div
              v-if="false"
              class="tout-bio bg-white legumes d-flex ml-auto mr-auto"
              style="max-width: 500px"
            >
              <span class="icon-ico_CATEGORIES_legumes legumes icon" />
              <div class="mr-auto">
                Légumes en bio
              </div>
              <div>
                <label class="switch">
                  <input
                    id="chktoutbiolegumes"
                    type="checkbox"
                    onclick="updatetoutbiocat('legumes');"
                    value="1"
                  >
                  <span class="slider legumes round" />
                </label>
              </div>
            </div>
            <div
              class="range-slider6 legumes ml-auto mr-auto"
              style="max-width:500px;<?php echo $displaysliders; ?>"
            >
              <div class="range-titre-categorie">
                <div class="range-categorie">
                  <span class="icon-ico_CATEGORIES_legumes icon" />
                  <div class="titre-categorie">
                    Légumes en bio
                  </div>
                </div>
                <div class="ml-auto">
                  <output class="range-output"><span
                    id="partbiolegumesval"
                    class="text-bold output legumes"
                  /><span class="text-bold legumes">{{ $store.state.partbiolegumes }} %</span></output>
                </div>
              </div>
              <input
                id="partbiolegumes"
                v-model="$store.state.partbiolegumes"
                type="range"
                min="0"
                max="100"
                step="1.000"
                value="100"
                class="slider-range"
              >
              <div class="range-values">
                <span class="range-min">0</span><span class="range-max">100</span>
              </div>
            </div>
            <div
              v-if="false"
              class="tout-bio bg-white fruits d-flex ml-auto mr-auto"
              style="max-width: 500px"
            >
              <span class="icon-ico_CATEGORIES_fruits fruits icon" />
              <div class="mr-auto">
                Fruits en bio
              </div>
              <div>
                <label class="switch">
                  <input
                    id="chktoutbiofruits"
                    type="checkbox"
                    onclick="updatetoutbiocat('fruits');"
                    value="1"
                  >
                  <span class="slider fruits round" />
                </label>
              </div>
            </div>
            <div
              class="range-slider7 fruits ml-auto mr-auto"
              style="max-width: 500px"
            >
              <div class="range-titre-categorie">
                <div class="range-categorie">
                  <span class="icon-ico_CATEGORIES_fruits icon" />
                  <div class="titre-categorie">
                    Fruits en bio
                  </div>
                </div>
                <div class="ml-auto">
                  <output class="range-output"><span
                    id="partbiofruitsval"
                    class="text-bold output fruits"
                  /><span class="text-bold fruits">{{ $store.state.partbiofruits }} %</span></output>
                </div>
              </div>
              <input
                id="partbiofruits"
                v-model="$store.state.partbiofruits"
                type="range"
                class="slider-range"
                min="0"
                max="100"
                step="1.000"
                value="100"
              >
              <div class="range-values">
                <span class="range-min">0</span><span class="range-max">100</span>
              </div>
            </div>
            <div
              v-if="false"
              class="tout-bio bg-white cereales d-flex ml-auto mr-auto"
              style="max-width: 500px"
            >
              <span class="icon-ico_CATEGORIES_cereales cereales icon" />
              <div class="mr-auto">
                Céréales et autres en bio
              </div>
              <div>
                <label class="switch">
                  <input
                    id="chktoutbiocereales"
                    type="checkbox"
                    onclick="updatetoutbiocat('cereales');"
                    value="1"
                  >
                  <span class="slider cereales round" />
                </label>
              </div>
            </div>
            <div
              class="range-slider8 cereales ml-auto mr-auto"
              style="max-width:500px;<?php echo $displaysliders; ?>"
            >
              <div class="range-titre-categorie">
                <div class="range-categorie">
                  <span class="icon-ico_CATEGORIES_cereales icon" />
                  <div class="titre-categorie">
                    Céréales et autres en bio
                  </div>
                </div>
                <div class="ml-auto">
                  <output class="range-output"><span
                    id="partbiocerealesval"
                    class="text-bold output cereales"
                  /><span class="text-bold cereales">{{ $store.state.partbiocereales }} %</span></output>
                </div>
              </div>
              <input
                id="partbiocereales"
                v-model="$store.state.partbiocereales"
                type="range"
                min="0"
                max="100"
                step="1.000"
                value="100"
                class="slider-range"
              >
              <div class="range-values">
                <span class="range-min">0</span><span class="range-max">100</span>
              </div>
            </div>
            <div
              v-if="false"
              class="tout-bio bg-white viande d-flex ml-auto mr-auto"
              style="max-width: 500px"
            >
              <span class="icon-ico_CATEGORIES_viande viande icon" />
              <div class="mr-auto">
                Elevage en bio
              </div>
              <div>
                <label class="switch">
                  <input
                    id="chktoutbioelevage"
                    type="checkbox"
                    onclick="updatetoutbiocat('elevage');"
                    value="1"
                  >
                  <span class="slider viande round" />
                </label>
              </div>
            </div>
            <div
              class="range-slider9 viande ml-auto mr-auto"
              style="max-width:500px;<?php echo $displaysliders; ?>"
            >
              <div class="range-titre-categorie">
                <div class="range-categorie">
                  <span class="icon-ico_CATEGORIES_viande icon" />
                  <div class="titre-categorie">
                    Elevage en bio
                  </div>
                </div>
                <div class="ml-auto">
                  <output class="range-output"><span
                    id="partbioelevageval"
                    class="text-bold output viande"
                  /><span class="text-bold viande">{{ $store.state.partbioelevage }} %</span></output>
                </div>
              </div>
              <input
                id="partbioelevage"
                v-model="$store.state.partbioelevage"
                type="range"
                min="0"
                max="100"
                step="1.000"
                value="100"
                class="slider-range"
              >
              <div class="range-values">
                <span class="range-min">0</span><span class="range-max">100</span>
              </div>
            </div>
          </div>
          <div id="partviande2">
            <div class="header-filtre ml-auto mr-auto">
              <span class="icon-ico_navigation_alimentation icon" /><span class="titre-filtre">Quelle part de produits animaux ?</span><a
                href="#"
                class="info tooltip-affiner"
                data-tooltip="Les régimes proposés sont calculés pour garantir un équilibre nutritionnel (pour plus d'informations voir la page annexe de méthodologie de calcul)"
                data-placement="left"
                title="Tooltip on left"
              ><span class="icon-ico_element_info" /></a>
            </div>
            <div
              class="ml-auto mr-auto"
              style="max-width: 500px"
            >
              <label class="container-checkbox"><strong>Régime actuel</strong>
                <input
                  id="2flexi0"
                  v-model="regimeChoisi"
                  type="radio"
                  checked="checked"
                  name="id_assiette2"
                  value="actuel"
                >
                <span class="checkmark checkmark-radio" />
              </label>
              <label class="container-checkbox"><strong>Diminution d'1/4 des produits animaux</strong>
                <input
                  id="2flexi1"
                  v-model="regimeChoisi"
                  type="radio"
                  name="id_assiette2"
                  value="quart"
                >
                <span class="checkmark checkmark-radio" />
              </label>
              <label class="container-checkbox"><strong>Diminution de moitié des produits animaux</strong>
                <input
                  id="2flexi2"
                  v-model="regimeChoisi"
                  type="radio"
                  name="id_assiette2"
                  value="moitie"
                >
                <span class="checkmark checkmark-radio" />
              </label>
              <label class="container-checkbox"><strong>Végétarien</strong> <br>
                <input
                  id="2vegetarienne"
                  v-model="regimeChoisi"
                  type="radio"
                  name="id_assiette2"
                  value="vegetarien"
                >
                <span class="checkmark checkmark-radio" />
              </label>
              <!--label class="container-checkbox"><strong>Végétalien</strong> <br />
              <input type="radio" name="id_assiette2" value="vegetalienne" id="2vegetalienne">
              <span class="checkmark checkmark-radio"></span>
            </label-->
              <!-- <?php if (isset($parcours) && $parcours != "2") : ?> -->
              <label
                v-if="false"
                class="container-checkbox"
              ><strong>Régime perso</strong> <br>
                <input
                  id="2flexi5"
                  type="radio"
                  name="id_assiette2"
                  value=""
                >
                <span class="checkmark checkmark-radio" />
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
    <div
      id="menu-selection"
      class="menuDroit"
    >
      <div
        v-if="!showParametres"
        class="modal-dialog"
        role="document"
      >
        <div class="modal-content">
          <button class="text-center close">
            <div class="revoir-select">
              Affiner votre sélection
            </div>
          </button>
          <div class="modal-header d-flex align-items-center justify-between">
            <div
              id="head-selection"
              class="modal-title mr-auto w-100"
            >
              Votre sélection
            </div>
            <button
              id="asy-sidebarCollapse5"
              type="button"
              @click="fermerModalAffiner"
            >
              <span class="icon-ico_fermer icon" />
            </button>
          </div>
          <div class="modal-body h-100 align-items-center">
            <div class="">
              <div class="selection-ligne">
                <div class="header-filtre">
                  <span class="icon-ico_navigation_territoire icon" /><span class="titre-filtre">Territoire </span><span class="modifier"><a href="/1-choix-du-territoire">modifier</a></span>
                </div>
                <span
                  id="selection"
                  class="text-white"
                />
              </div>
              <div class="selection-ligne">
                <div class="header-filtre">
                  <span class="icon-ico_navigation_population icon" /><span class="titre-filtre">Population </span><span class="modifier"><a href="/2-choix-de-la-population">modifier</a></span>
                </div>
                <span
                  id="population"
                  class="badge badge-pill badge-blanc"
                />
              </div>
              <div class="selection-ligne">
                <div class="header-filtre">
                  <span class="icon-ico_navigation_alimentation icon" /><span class="titre-filtre">Alimentation </span><span class="modifier"><a href="/3-type-dalimentation">modifier</a></span>
                </div>
                <span class="badge badge-pill badge-blanc">Bio:<span id="bioval">1,8</span>%</span>
                <span
                  id="assiette2"
                  href=""
                />
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
      partpertes: this.$store.state.partpertes,
      partbiolegumes: this.$store.state.partbiolegumes,
      partbiofruits: this.$store.state.partbiofruits,
      partbiocereales: this.$store.state.partbiocereales,
      partbioelevage: this.$store.state.partbioelevage,
      showParametres: true,
      regimeChoisi: this.$store.state.regime_alimentaire.nomCourt,
    };
  },
  watch: {
    partpertes: function (val) {
      this.$store.commit("partPertes", val);
    },
    partbiocereales: function (val) {
      this.$store.commit("partBioCereales", val);
    },
    partbioelevage: function (val) {
      this.$store.commit("partBioElevage", val);
    },
    partbiofruits: function (val) {
      this.$store.commit("partBioFruits", val);
    },
    partbiolegumes: function (val) {
      this.$store.commit("partBioLegumes", val);
    },
    regimeChoisi: function (nomCourtRegime) {
      // TODO : choix pour utiliser nomCourt ou id comme clé partout pour les régimes
      const regimeChoisi = getRegimeParNomCourt(nomCourtRegime);
      this.$store.dispatch("actionChoisirRegimeAlimentaire", regimeChoisi);
    },
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
</style>
