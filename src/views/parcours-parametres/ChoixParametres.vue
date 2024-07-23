<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="recherche" :active="3" />
      <div class="section centrervh selec-alim" id="section0">
        <div class="container">
          <h1 class="animated fadeInUp mb-5">
            Choisissez l’alimentation liée à votre simulation de relocalisation
          </h1>
          <resumeChoix />
          <div id="egalimWarning" class="egalimBox d-none">
            <div class="row align-items-center">
              <div class="col-12 col-md-auto logoEgalim mb-3 mb-md-0">
                Loi Egalim
              </div>
              <div class="col-12 col-md">
                Attention, les paramètres "produits bio" et/ou "produits
                animaux" ne respectent plus les objectifs de la loi ÉGalim.
              </div>
              <div class="col-auto">
                <a href="#" class="btn" onclick="initEgalim()">réinitialiser</a>
              </div>
            </div>
          </div>
          <div id="egalimDefault" class="egalimBox d-none">
            <div class="row align-items-center">
              <div class="col-12 col-md-auto logoEgalim mb-3 mb-md-0">
                Loi Egalim
              </div>
              <div class="col-12 col-md btn">
                <b
                  >Les leviers bio et part de produits animaux sont préréglés
                  sur les objectifs de la loi Égalim.</b
                >
                En effet, vous avez choisi de relocaliser l’alimentation pour
                des établissements de restauration collective, vous devrez donc
                respecter la loi ÉGalim.
                <a
                  class="info pb-3"
                  data-toggle="modal"
                  data-target="#tooltipDetail"
                  onclick="tooltip('pourcent_egalim')"
                  ><span class="icon-ico_element_info vert-fonce"></span
                ></a>
              </div>
            </div>
          </div>
          <div id="egalimBetter" class="egalimBox d-none">
            <div class="row align-items-center">
              <div class="col-12 col-md-auto logoEgalim mb-3 mb-md-0">
                Loi Egalim
              </div>
              <div class="col-12 col-md">
                Les paramètres "produits bio" et/ou "produits animaux" dépassent
                les attendus de la loi ÉGalim.
              </div>
              <div class="col-auto">
                <a href="#" class="btn" onclick="initEgalim()">réinitialiser</a>
              </div>
            </div>
          </div>

          <div class="row choix-alim mt-5" id="contentEgalim">
            <div class="col-lg-4 col-12 bloc-3col animated fadeIn delay-05s">
              <div class="card-alim egalim" id="bio">
                <div class="header-cardalim">
                  <div class="icon-ico_filtres_bio ico-medium mx-auto"></div>
                  <div class="titre-filtre">Quelle part de produits bio ?</div>
                </div>
                <p class="subtitle">
                  Faites varier le pourcentage<sup>*</sup> de produits bio (en
                  volume) de l’alimentation relocalisée
                </p>
                <div class="legumes">
                  <div class="range-slider mx-auto" style="max-width: 650px">
                    <div class="mb-4">
                      <output class="range-output"
                        ><span class="text-bold output legumes" id="valpartbio">
                          {{ partbioText }}</span
                        ><span class="text-bold legumes">%</span></output
                      >
                    </div>

                    <VueSlider
                      v-model="partbio"
                      :process-style="{ backgroundColor: '#91c423' }"
                      :tooltip="'none'"
                      :height="10"
                      :dot-size="20"
                    >
                      <template v-slot:dot>
                        <div :class="['custom-dot']"></div>
                      </template>
                    </VueSlider>
                    <div class="range-values">
                      <span class="range-min">0</span
                      ><span class="range-max">100</span>
                    </div>
                  </div>
                </div>
                <div class="note">
                  <sup>*</sup>Le pourcentage minimum affiché correspond à la
                  part, en volume, de production bio actuelle du territoire.
                  <br /><br />En relocalisant, votre alimentation contient a
                  minima cette part de produits bio.
                  <a
                    href="#bio"
                    class="info pb-3"
                    style="font-style: normal"
                    data-toggle="modal"
                    data-target="#tooltipDetail"
                    @click="showTooltip('bio')"
                    ><span class="icon-ico_element_info"></span
                  ></a>
                </div>
              </div>
            </div>
            <modalBioCurseur
              v-if="montrerModal == 'bio'"
              @close="fermerModal"
            ></modalBioCurseur>
            <div
              class="col-lg-4 col-12 bloc-3col animated fadeIn delay-1s"
              style="z-index: 2"
            >
              <div class="card-alim egalim" id="meat">
                <div class="header-cardalim">
                  <div
                    class="icon-ico_navigation_alimentation ico-medium mx-auto"
                  ></div>
                  <div class="titre-filtre">
                    Quelle part de produits animaux ?
                  </div>
                </div>
                <p class="subtitle">
                  Faites varier le régime alimentaire<sup>*</sup> (actuellement,
                  environ
                  <strong> trois quarts des protéines consommées</strong> par
                  les Français proviennent de produits animaux)
                </p>

                <div class="mt-5" id="partviande">
                  <div
                    class="card-diet d-flex align-items-center"
                    onclick=" document.getElementById('listDiets').classList.toggle('d-block')"
                  >
                    <div
                      class="diet d-flex align-items-center"
                      id="dietSelected"
                    >
                      <img
                        alt=""
                        :src="regime.img"
                        width="20"
                        style="padding: 4px"
                      />
                      <span style="flex: 1; padding: 4px"
                        >{{ regime.nom }}
                      </span>
                    </div>
                    <div class="arrows mx-auto">
                      <span class="pointer mb-2"></span>
                      <span
                        ><img
                          alt=""
                          :src="require('@/assets/img/elements/top.svg')"
                          width="16" />
                        <img
                          alt=""
                          :src="require('@/assets/img/elements/bottom.svg')"
                          width="16"
                      /></span>
                    </div>
                  </div>
                  <!-- <?php include '../partials/listdiets.php'; ?> -->
                  <listeRegime @changementRegime="changementRegime" />
                </div>
                <div class="note mb-4">
                  <sup>*</sup>Les régimes proposés sont calculés pour garantir
                  un équilibre nutritionnel (pour plus d'informations voir la
                  page annexe "<a
                    href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
                    >méthodologie de calcul</a
                  >")
                </div>
                <!-- <div class="text-center w-100"><a href="/regime-personnalise" class="mx-auto btn-line">Composer vous-même<br>votre régime alimentaire</a></div> -->
                <div class="text-center w-100">
                  <router-link
                    to="/regime-personnalise"
                    class="mx-auto url-simple"
                    >Professionnels ? Accédez au choix de régimes alimentaires
                    détaillés</router-link
                  >
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-12 bloc-3col animated fadeIn delay-1-5s"
              style="z-index: 1"
            >
              <div class="card-alim" id="waste">
                <div class="header-cardalim">
                  <div class="icon-gaspillage ico-medium mx-auto"></div>
                  <div class="titre-filtre">
                    Quelle part de pertes et gaspillage souhaitez-vous réduire?
                  </div>
                  <p class="subtitle">
                    Réduisez la part des pertes et gaspillages qui ont lieu du
                    stade de la production agricole et agroalimentaire à la
                    consommation.
                    <a
                      class="info pb-3"
                      data-toggle="modal"
                      data-target="#tooltipDetail"
                      onclick="tooltip('waste')"
                      ><span class="icon-ico_element_info vert-fonce"></span
                    ></a>
                    <!-- <a href="#waste" class="info pb-3" style="font-style:normal;" data-tooltip="Cette donnée est calculée uniquement sur les produits de PARCEL, à partir des surfaces agricoles (bio et non bio) du département et intègre les différences de rendements entre agriculture biologique et agriculture conventionnelle.  Il ne s'agit ni du pourcentage de la surface agricole (SAU) en bio sur le territoire ni de la consommation actuelle de produits bio sur le territoire." data-placement="left"><span class="icon-ico_element_info"></span></a></p> -->
                  </p>
                </div>

                <div class="legumes">
                  <div class="range-slider2 mx-auto" style="max-width: 650px">
                    <div class="mb-4">
                      <output class="range-output"
                        ><span
                          class="text-bold output legumes"
                          id="valpartpertes"
                        >
                          {{ partpertes }}</span
                        ><span class="text-bold legumes">%</span></output
                      >
                    </div>

                    <VueSlider
                      v-model="partpertes"
                      :process-style="{ backgroundColor: '#91c423' }"
                      :tooltip="'none'"
                      :height="10"
                      :dot-size="20"
                    >
                      <template v-slot:dot>
                        <div :class="['custom-dot']"></div>
                      </template>
                    </VueSlider>
                    <div class="range-values">
                      <span class="range-min">0</span
                      ><span class="range-max">100</span>
                    </div>
                  </div>
                </div>
                <div class="note" id="note_pertes">
                  <sup>*</sup>Actuellement, 1/5 de la production agricole est
                  perdue ou gaspillée
                </div>
              </div>
            </div>
          </div>
          <!--div class="text-center mt-3"><a href="#" onclick="selectEgalim('none')" class="mr-4">aucun</a><a href="#" onclick="selectEgalim('default')" class="mr-4">defaut</a><a href="#" onclick="selectEgalim('warning')" class="mr-4">pire</a><a href="#" onclick="selectEgalim('better')">mieux</a></div-->
          <div
            class="div-continuer animated fadeInUp posiiton-relative"
            style="z-index: 1"
          >
            <router-link to="/resultats-de-votre-relocalisation"
              ><button type="button" class="btn btn-principal mt-5">
                Continuer
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "rangeslider.js/dist/rangeslider.css";
import VueSlider from "vue-3-slider-component";

import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import listeRegime from "@/views/modal/listeRegime.vue";
import resumeChoix from "@/views/modal/resumeChoix.vue";
import modalBioCurseur from "@/views/modal/modalBioCurseur.vue";

export default {
  inject: ["$axios"],
  name: "ChoixParametres",
  components: {
    BarreNavigation,
    listeRegime,
    resumeChoix,
    modalBioCurseur,
    VueSlider,
  },
  data() {
    return {
      data: {
        curseur_bio: 0,
      },
      montrerModal: "",
      partbio: 1.8,
      partpertes: 0,
      partviande: "actuel",
      partviandeText: "Régime actuel",
      regime: this.$store.state.regime_alimentaire,
      regimeListe: [
        {
          nom: "Régime actuel",
          img: require("@/assets/img/parcours/regime-actuel.svg"),
          nomCourt: "actuel",
        },
        {
          nom: "Diminution d'1/4 des produits animaux",
          img: require("@/assets/img/parcours/regime-quart.svg"),
          nomCourt: "quart",
        },
        {
          nom: "Diminution de moitié des produits animaux",
          img: require("@/assets/img/parcours/regime-moitie.svg"),
          nomCourt: "moitie",
        },
        {
          nom: "VÉGÉTARIEN",
          img: require("@/assets/img/parcours/regime-vegetarien.svg"),
          nomCourt: "vegetarien",
        },
        {
          nom: "VÉGÉTALIEN",
          img: require("@/assets/img/parcours/regime-vegetalien.svg"),
          nomCourt: "vegetalien",
        },
        {
          nom: "Régime personnalisé",
          img: require("@/assets/img/parcours/regime-personnalise.svg"),
          nomCourt: "personnalise",
        },
      ],
    };
  },
  methods: {
    recupererDonnees() {
      console.log("recupererDonnees");
      const bodyFormData = new FormData();
      var codesTerritoireParcel = this.$store.state.geoList.map(
        (el) => el.code_territoire
      );
      codesTerritoireParcel = this.$store.getters.getcodesTerritoireParcel;

      console.log(codesTerritoireParcel);
      bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
      this.$axios
        .post(
          window.apiURL + "parcel/belgique/curseurs_bio",
          codesTerritoireParcel, // Request body data
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          this.data.curseur_bio = response.data[0]["curseur_bio"];
          if (!this.$store.state.part_bio) {
            this.partbio = Math.round(this.data.curseur_bio * 100);
          }
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changementRegime(regime) {
      console.log(regime);
      this.regime = this.regimeListe.find((r) => r.nomCourt === regime);
    },
    showTooltip(id) {
      this.montrerModal = id;
    },
    fermerModal() {
      this.montrerModal = "";
    },
  },
  computed: {
    partbioText() {
      return this.partbio;
    },
    partpertesText() {
      return this.partpertes;
    },
  },
  watch: {
    partbio: function (val) {
      this.$store.commit("partBio", val);
      this.$store.commit("partBioLegumes", val);
      this.$store.commit("partBioFruits", val);
      this.$store.commit("partBioElevage", val);
      this.$store.commit("partBioCereales", val);
    },
    partpertes: function (val) {
      this.$store.commit("partPertes", val);
    },
  },
  mounted() {
    this.recupererDonnees();
    this.regime = this.$store.state.regime_alimentaire;
    if (this.$store.state.partpertes) {
      this.partpertes = this.$store.state.partpertes;
    }
    if (this.$store.state.part_bio) {
      this.partbio = this.$store.state.part_bio;
    }
  },
};
</script>
<style>
.label-menu {
  background-color: #91c423;
  height: 33px;
}

@media (max-width: 768px) {
  .type-menu {
    display: none;
  }
}

.card-alim {
  background: #ffffff;
  box-shadow: 0 4px 21px 0 rgba(193, 193, 193, 0.5);
  border-radius: 5px;
  padding: 2rem;
  height: 100%;
  max-width: 568px;
  margin: auto;
}

.selec-alim {
  width: 100% !important;
  /* max-width: 1400px; */
}

.selec-alim .choix-alim {
  max-width: 1600px;
  margin: auto;
  z-index: 10;
  position: relative;
}

.selec-alim .titre-filtre {
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.selec-alim .subtitle {
  text-align: center;
}

.choix-alim .note {
  background: #f3f2eb;
  border: 1px solid #f5f5f5;
  border-radius: 6px;
  font-size: 15px;
  text-align: center;
  padding: 1rem;
}

/*------------- block product -----------*/

.block-products {
  background-color: #015a5a;
  padding: 2rem;
}

.block-products .product {
  background-color: #d9eab2;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  letter-spacing: 0.01px;
  text-align: center;
  line-height: 1.1;
  width: 100%;
  margin-bottom: 1rem;
  min-height: 180px;
}

.block-products .product .icon {
  font-size: 2.5rem;
  margin-bottom: 0.4rem;
  color: #015a5a;
  margin-top: -0.7rem;
}

.block-products .nombres-ajout .nombre {
  width: 58px;
}

.block-products input.nombre.groupe {
  height: 39px;
}

.block-products .nbr-ajout-big .nombre,
.block-products .nbr-ajout-big .btn-moins,
.block-products .nbr-ajout-big .btn-plus {
  padding: 8px;
  line-height: 20px;
  /* font-size: 22px;
    line-height: 0px;
    padding: 0px; */
}

.block-products .title-bloc {
  font-size: 22px;
  line-height: 1.2;
  max-width: 610px;
  margin: 1rem auto 2rem;
}

.card-alim .btn-line {
  border: 1px solid #015a5a;
  border-radius: 35px;
  color: #015a5a;
  text-align: center;
  display: inline-block;
  padding: 0.5rem 2rem;
}

.card-alim .btn-line:hover {
  background-color: #015a5a;
  color: #fff;
}

.nutrition {
  font-size: 18px;
  margin: auto;
  max-width: 500px;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.row-products {
  max-width: 1400px;
  margin: auto;
}

.block-products .icon-nutrition {
  font-size: 4rem;
  margin-right: 2rem;
}

.block-products .product {
  display: flex;
  flex-direction: column;
}

.block-products .product .nombres-ajout {
  margin: auto 0 0.4rem !important;
}

#collapseProducts {
  width: 200px;
  background-color: #f5f5f5;
  border-radius: 9px;
  max-width: 180px;
  color: #015a5a;
  margin-top: 1rem;
}

#collapseProducts .detailProducts {
  padding: 0.2rem;
}

#collapseProducts .iconProduct {
  font-size: 1.5rem;
  padding: 0.2rem;
}

.detailproductscollapse {
  /* background: url("../img/elements/left.svg") no-repeat left 23px center; */
  text-decoration: none;
  max-width: 465px;
  margin: 0 auto 4rem;
  text-align: left;
  color: #000;
  margin-top: -2rem;
}

.detailproductscollapse:hover {
  color: #000;
}

.detailproductscollapse[aria-expanded="true"] {
  /* background: url("../img/elements/top.svg") no-repeat left 10px center; */
  text-decoration: none;
}

@media (max-width: 576px) {
  .detailproductscollapse {
    /* background: url(../img/elements/left.svg) no-repeat left 18px center; */
    max-width: 385px;
    padding: 0 1rem 0 3rem;
  }
}

@media (max-width: 350px) {
  .block-products {
    padding: 1rem;
  }

  .detailproductscollapse {
    /* background: url(../img/elements/left.svg) no-repeat left 18px center; */
    max-width: unset;
    padding: 0 1rem 0 3rem;
  }
}

/*------------- select diet -----------*/

.select-choice {
  max-width: 1100px;
  margin: 0 auto 2rem;
}

.selec-diet {
  width: 100% !important;
}

.selec-diet .card-protein {
  font-size: 19px;
  background: #ffffff;
  border: 1px solid #d7d7d7;
  box-shadow: 0 11px 21px 0 rgba(0, 0, 0, 0.21);
  border-radius: 6px;
  /* height: 148px; */
  height: 170px;
  padding: 1rem;
  /* max-width: 385px; */
  line-height: 1.3;
}

.selec-diet .card-protein .badge {
  font-family: "Varela", sans-serif;
  font-size: 23px;
  margin-bottom: 0.7rem;
}

/* .twoBlocks .contentText {
    max-width: 250px;
} */

.title-protein {
  font-size: 23px;
  color: #015a5a;
  margin: 2rem 0;
}

.diet .details {
  color: #000;
  font-weight: normal;
  font-size: 14px;
  line-height: 1.2;
  margin-top: 0.2rem;
}

.card-diet {
  background: #ffffff;
  box-shadow: 0 4px 21px 0 rgba(193, 193, 193, 0.5);
  border-radius: 5px;
  cursor: pointer;
}

.card-diet .diet {
  border-right: 1px solid #d7d7d7;
  padding: 1rem;
  width: calc(100% - 40px);
  color: #015a5a;
  font-weight: 600;
}

.diet {
  color: #015a5a;
  font-weight: 600;
}

.diet img {
  width: auto;
  height: 41px;
  margin: auto;
}

.diet .iconDiet {
  width: 77px;
  display: flex;
}

.card-diet .diet .title,
.card-compose .vert-fonce {
  color: #015a5a;
  font-weight: bold;
  font-size: 18px;
}

.card-diet .arrows {
  padding: 0 0.7rem;
}

.card-diet .arrows a {
  display: block;
}

.card-compose {
  padding: 1rem 2rem;
}

@media (max-width: 1100px) {
  .twoBlocks,
  .selec-diet .card-protein {
    max-width: unset;
  }

  .twoBlocks .contentText {
    font-size: 16px;
  }
}

@media (max-width: 650px) {
  .twoBlocks .col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .diet .details {
    display: none;
  }

  .selec-diet .card-protein {
    font-size: 14px;
    width: 100%;
  }

  .twoBlocks .card-protein img {
    max-width: 70px;
  }
}

/*------------- jauges -----------*/

.jauges {
  margin-top: 4rem;
  margin-bottom: 2rem;
}

.jauge-card {
  text-align: center;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.jauge-card .icon-medium {
  width: 25px;
  font-size: 25px;
  margin-right: 0.5rem;
}

.jauges canvas {
  display: block;
  margin-bottom: 1rem;
}

.badges {
  background: #91c322;
  border-radius: 8px;
  color: #fff;
  padding: 0.4rem 0.6rem;
}

.badge.warning {
  background-color: #ffe337;
  color: #000;
}

.badge.danger {
  background-color: #ff0000;
}

#message-diet {
  border-radius: 5px;
  padding: 1rem;
  margin-top: -1rem;
  text-align: center;
  max-width: 660px;
  margin: -1rem auto 1rem;
}

#message-diet.warning {
  color: #000;
  background-color: #fce2b7;
}

#message-diet.danger {
  background-color: #ffe7e7;
  color: #ff0000;
}

@media (max-width: 990px) {
  .bloc-3col {
    margin-bottom: 3rem;
  }
}

@media (max-width: 500px) {
  .bloc-3col {
    padding: 0;
  }
}

/*----------egalim ------*/

.egalimBox {
  max-width: 800px;
  margin: 2rem auto;
}

.egalim .btn {
  border-radius: 30px;
}

.logoEgalim {
  font-size: 26px;
  font-weight: bold;
}

#egalimBetter {
  color: #91c322;
}

#egalimWarning {
  color: #c90000;
}

#egalimDefault {
  color: #015a5a;
}

#egalimBetter .btn {
  color: #fff;
  background-color: #91c322;
}

#egalimWarning .btn {
  color: #fff;
  background-color: #ee3838;
}

.card-alim.egalim {
  border: 2px solid #fff;
}

.egalimWarning.card-alim.egalim {
  border: 2px solid #ee3838;
}

.egalimBetter.card-alim.egalim {
  border: 2px solid #91c322;
}

/*----------select diet--------*/

#listDiets {
  position: absolute;
  background-color: #fff;
  padding: 2rem;
  /* background: #FFFFFF; */
  box-shadow: 0 4px 21px 0 rgb(193 193 193 / 50%);
  border-radius: 5px;
  /* margin-left: -2.5rem; */
  margin-top: 1rem;
  z-index: 3;
  width: calc(100% - 2rem);
}

#listDiets .diet {
  border-bottom: 1px solid #f3f2eb;
  padding: 0.5rem;
}

#listDiets .diet:last-child {
  border-bottom: 0px solid #f3f2eb;
}

#listDiets .diet:hover {
  background-color: #f3f2eb;
  cursor: pointer;
  border-radius: 5px;
}

/*--------modal detail product-------*/

#detailProduct .modal-content,
.modalTooltip .modal-content {
  border-radius: 5px;
  max-width: 400px;
  margin: auto;
}

#detailProduct .modal-body,
.modalTooltip .modal-body {
  padding: 0rem 3rem 3rem 3rem !important;
}

#detailProduct h5.modal-title {
  font-weight: bold;
  color: #015a5a;
  display: block;
}

.custom-dot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #91c423;
  margin: auto;
}
</style>
