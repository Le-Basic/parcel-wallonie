<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="surface" active="3" />

      <div class="section centrervh" id="section0">
        <div class="container">
          <h1 class="animated fadeInUp">Choisissez le type d'alimentation</h1>
          <div class="row choix-alim">
            <div class="col-md-6 col-12 bloc-2col animated fadeIn delay-05s">
              <div class="header-filtre">
                <span class="icon-ico_filtres_bio ico-medium"></span
                ><span class="titre-filtre">Quel mode de production ?</span>
              </div>
              <p>
                Sur la surface agricole renseignée, voulez-vous produire votre
                alimentation en bio ?
              </p>
              <div class="legumes">
                <div
                  class="tout-bio d-flex ml-auto mr-auto"
                  style="max-width: 500px"
                >
                  <div class="mr-auto">Tout bio ?</div>
                  <div>
                    <label class="switch">
                      <input
                        type="checkbox"
                        id="toutbio2"
                        @click="updatetoutbio()"
                        value="1"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
                <div
                  class="range-slider"
                  style="max-width: 650px; display: none"
                >
                  <div class="mb-4">
                    <output class="range-output"
                      ><span
                        class="text-bold output legumes"
                        id="valpartbio"
                      ></span
                      ><span class="text-bold legumes">%</span></output
                    >
                  </div>
                  <input
                    type="range"
                    id="partbio"
                    min="0"
                    max="100"
                    step="1.000"
                    value="1.8"
                  />
                  <div class="range-values">
                    <span class="range-min">0</span
                    ><span class="range-max">100</span>
                  </div>
                </div>
              </div>
              <div class="note" style="display: none">
                <sup>*</sup>Le pourcentage minimum affiché correspond à la part,
                en volume, de production bio actuelle du territoire.
                <br /><br />En relocalisant, votre alimentation contient a
                minima cette part de produits bio.
                <a
                  href="#"
                  class="info pb-3"
                  style="font-style: normal"
                  data-tooltip="Cette donnée est calculée uniquement sur les produits de PARCEL, à partir des surfaces agricoles (bio et non bio) du département et intègre les différences de rendements entre agriculture biologique et agriculture conventionnelle.  Il ne s'agit ni du pourcentage de la surface agricole (SAU) en bio sur le territoire ni de la consommation actuelle de produits bio sur le territoire."
                  data-placement="left"
                  ><span class="icon-ico_element_info"></span
                ></a>
              </div>
            </div>
            <div class="col-md-6 col-12 bloc-2col animated fadeIn delay-1s">
              <div class="header-filtre">
                <span class="icon-ico_navigation_alimentation ico-medium"></span
                ><span class="titre-filtre"
                  >Quelle part de produits animaux ?</span
                >
              </div>
              <p>
                Faites varier le régime alimentaire<sup>*</sup> (actuellement,
                plus de <strong>60% des protéines consommées</strong> par les
                Français proviennent de produits animaux) :
              </p>
              <div class="mt-5" id="partviande">
                <label class="container-checkbox"
                  ><strong>Régime actuel</strong>
                  <input
                    type="radio"
                    checked="checked"
                    name="id_assiette"
                    id="actuel"
                    value="actuel"
                    v-model="regimeChoisi"
                  />
                  <span class="checkmark checkmark-radio"></span>
                </label>
                <label class="container-checkbox"
                  ><strong>Réduction moyenne des produits animaux</strong>
                  <br />(-25% environ)
                  <input
                    type="radio"
                    name="id_assiette"
                    id="quart"
                    value="quart"
                    v-model="regimeChoisi"
                  />
                  <span class="checkmark checkmark-radio"></span>
                </label>
                <label class="container-checkbox"
                  ><strong>Réduction forte des produits animaux</strong><br />
                  (-50% environ)
                  <input
                    type="radio"
                    name="id_assiette"
                    id="moitie"
                    value="moitie"
                    v-model="regimeChoisi"
                  />
                  <span class="checkmark checkmark-radio"></span>
                </label>

                <label class="container-checkbox"
                  ><strong>Régime végétarien</strong><br />
                  <input
                    type="radio"
                    name="id_assiette"
                    id="vegetarien"
                    value="vegetarien"
                    v-model="regimeChoisi"
                  />
                  <span class="checkmark checkmark-radio"></span>
                </label>

                <!--label class="container-checkbox"><strong>Régime végétalien</strong><br />
                  <input type="radio" name="id_assiette" id="vegetalienne" value="vegetalienne">
                  <span class="checkmark checkmark-radio"></span>
                </label-->
              </div>
              <div class="note">
                <sup>*</sup>Les régimes proposés sont calculés pour garantir un
                équilibre nutritionnel (pour plus d'informations voir la page
                annexe "<a
                  href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
                  >méthodologie de calcul</a
                >")
              </div>
            </div>
          </div>
          <div class="div-continuer animated fadeInUp delay-1-5s">
            <router-link to="/resultats-de-la-relocalisation-de-surface"
              ><button type="button" class="btn btn-principal mt-5">
                Commencer
              </button></router-link
            >
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
import { getRegimeParNomCourt } from "@/config/regimeListe";
import { fetchCurseurBio } from "@/plugins/getPartdeBio";

export default {
  name: "ChoixTypeAlimentationSurface",
  components: {
    BarreNavigation,
  },
  data: function () {
    return {
      partbiolegumes: this.$store.state.partbiolegumes,
      partbiofruits: this.$store.state.partbiofruits,
      partbiocereales: this.$store.state.partbiocereales,
      partBioElevage: this.$store.state.partbioelevage,
      regimeChoisi: this.$store.state.regime_alimentaire.nomCourt,
    };
  },
  mounted() {
    let url = window.apiURL + "parcel/belgique/curseurs_bio";
    let codesTerritoireParcel = this.$store.getters.getcodesTerritoireParcel;

    fetchCurseurBio(url, codesTerritoireParcel).then((data) => {
      console.log(data);
      this.partbiolegumes = Math.round(data * 100);
      this.partbiofruits = Math.round(data * 100);
      this.partbiocereales = Math.round(data * 100);
      this.partBioElevage = Math.round(data * 100);
    });
  },
  methods: {
    updatetoutbio() {
      const toutBio = document.getElementById("toutbio2").checked;
      if (toutBio) {
        document.getElementById("partbio").value = 100;
        this.partbiolegumes = 100;
        this.partbiofruits = 100;
        this.partbiocereales = 100;
        this.partBioElevage = 100;
      } else {
        this.partBioElevage = 1.8;
        this.partbiolegumes = 1.8;
        this.partbiofruits = 1.8;
        this.partbiocereales = 1.8;
      }
    },
  },
  watch: {
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
  },
};
</script>
