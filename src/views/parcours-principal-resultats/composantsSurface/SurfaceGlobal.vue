<template>
  <div>
    <div class="position-relative w-100 text-center">
      <div class="w-100 d-flex position-absolute">
        <a
          href="#zone-surface-actuelle"
          class="down-arrow d-block d-flex flex-column justify-content-center text-center mx-auto"
          style="width: 200px"
          ><span class="mb-3 vert-fonce">Scrollez pour lire la suite </span
          ><img
            alt=""
            :src="require('@/assets/img/fleches/fleche-bas-vert.svg')"
            width="40px"
            class="mb-0 mx-auto"
        /></a>
      </div>
    </div>
    <div class="pt-5"></div>
    <div
      class="row align-items-center block-surface animate__animated bigmap"
      id="zone-surface-actuelle"
    >
      <div class="col-12 col-lg-auto map-surface is-flex">
        <div id="globalView-images" class="my-auto">
          <div id="div-image-surface-territoire" class="animate__animated">
            <img
              alt=""
              class="mx-auto"
              :style="{
                width: (data.surface / max_potentiel_surface) * 100 + '%',
                opacity: 1,
              }"
              :src="this.territoireCarteGriseUrl"
            />
          </div>
          <div id="div-image-sau-actuelle" class="animate__animated">
            <img
              alt=""
              class="mx-auto"
              :style="{
                width: (surfaces_actuelles / max_potentiel_surface) * 100 + '%',
                opacity: 1,
              }"
              :src="this.territoireCarteBleueUrl"
            />
          </div>
          <div
            id="div-image-surface-a-mobiliser"
            class="animate__animated"
            :style="{
              opacity: 0,
              'z-index':
                surfaces_actuelles >
                this.$store.state.resultatSimulation.surfaceAMobiliser
                  ? 10
                  : 0,
            }"
          >
            <img
              alt=""
              class="mx-auto"
              :style="{
                width:
                  (this.$store.state.resultatSimulation.surfaceAMobiliser /
                    max_potentiel_surface) *
                    100 +
                  '%',
                opacity: 1,
              }"
              :src="territoireCarteVerteUrl"
            />
          </div>
          <div id="div-image-potentiel-nourricier" class="animate__animated">
            <img alt="" class="mx-auto" style="width: 0%; opacity: 0" />
          </div>
        </div>
        <div id="legend-map" class="row justify-content-center">
          <div class="col-auto">
            <div class="d-flex align-items-center justify-content-center mb-3">
              <span class="legende bg-grey-light"></span
              ><span class="legend-name">Surface totale du territoire</span>
            </div>
          </div>
          <div
            class="col-auto d-flex align-items-center justify-content-center mb-3"
          >
            <span class="legende bg-legumes"></span>
            <span class="legend-name">Empreinte alimentaire</span>
          </div>
          <div
            class="col-auto d-flex align-items-center justify-content-center mb-3"
          >
            <span class="legende bg-vert-fonce"></span>
            <span class="legend-name">Surface agricole actuelle</span>
          </div>
        </div>
      </div>

      <div
        class="col-12 col-lg-6 content-map flex-column"
        style="opacity: 1"
        id="content2"
      >
        <div class="text-map">
          <h3 class="">Surface totale du territoire</h3>
          <div
            class="cadre-resultat resultat-ha animate__animated flipInX delay-05s fond-gris-fonce ml-0 mt-3"
          >
            <div class="d-inline-flex align-items-center">
              <div
                class="animate__animated flipInY delay-1s nbr-ha odometer odometer-auto-theme"
                id="surface_territoire_actuelle1"
              >
                <div class="odometer-inside">
                  <span class="chiffre-encart">{{
                    formatterChiffres(data.surface)
                  }}</span>

                  <!--<span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">4</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-formatting-mark"> </span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">6</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">8</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">0</span></span
                        ></span
                      ></span -->
                  <!-- ></span
                  > -->
                </div>
              </div>
              <div
                class="hectares animate__animated fadeIn delay-1-5s"
                style="color: #ffffff"
              >
                hectares
              </div>
            </div>
          </div>
          <div class="map-content"></div>
        </div>
        <div class="text-map">
          <h3 class="">Surface agricole actuelle</h3>
          <div
            class="cadre-resultat resultat-ha animate__animated flipInX delay-05s ml-0 mt-3"
          >
            <div class="d-inline-flex align-items-center">
              <div
                class="animate__animated flipInY delay-1s nbr-ha odometer odometer-auto-theme surface_act"
                id="surface_act"
              >
                <div class="odometer-inside">
                  <span class="chiffre-encart">{{
                    formatterChiffres(surfaces_actuelles)
                  }}</span>
                  <!-- <span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">4</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-formatting-mark"> </span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">6</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">8</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">0</span></span
                        ></span
                      ></span
                    ></span
                  > -->
                </div>
              </div>
              <div class="hectares animate__animated fadeIn delay-1-5s">
                hectares agricoles
              </div>
            </div>
          </div>
          <div class="map-content">
            La différence entre la surface grise et la surface verte matérialise
            les espaces artificialisés, boisés, semi-naturels et les zones
            humides.
            <div class="subtext" id="txt_artificialisation">
              Sur le territoire, les surfaces naturelles agricoles et
              forestières ont diminué de
              <span id="artificialisation"></span> hectares entre 2012 et 2022.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row align-items-center block-surface animate__animated bigmap"
      id="zone-surface-a-mobiliser"
    >
      <div class="col-12 col-lg-auto map-surface"></div>
      <div
        class="col-12 col-lg-6 content-map animate__animated flex-column"
        id="conteneur-surface-agricole-a-mobiliser"
      >
        <div class="text-map">
          <h3 class="">Surface agricole à mobiliser</h3>
          <div
            class="cadre-resultat resultat-ha animate__animated flipInX delay-05s bg-vert-clair ml-0 mt-3"
          >
            <div class="d-inline-flex align-items-center">
              <div
                class="animate__animated flipInY delay-1s nbr-ha odometer odometer-auto-theme surface_potentiel"
                id="surface_potentiel"
              >
                <div class="odometer-inside" v-if="potentiel_nourricier">
                  {{
                    formatterChiffres(
                      Math.round(
                        this.$store.state.resultatSimulation.surfaceAMobiliser,
                      ),
                    )
                  }}
                </div>
              </div>
              <div class="hectares animate__animated fadeIn delay-1-5s">
                hectares agricoles
              </div>
            </div>
          </div>
          <div class="map-content">
            sont théoriquement nécessaires pour satisfaire les besoins
            alimentaires de la population choisie
          </div>
        </div>
      </div>
    </div>
    <div
      class="row align-items-center block-surface animate__animated bigmap"
      id="zone-potentiel-nourricier"
    >
      <div class="col-12 col-lg-auto map-surface"></div>
      <div
        class="col-12 col-lg-6 content-map animate__animated flex-column"
        id="conteneur-potentiel-nourricier"
      >
        <h3 class="">Potentiel nourricier</h3>
        <div class="d-flex align-items-center">
          <div
            class="cadre-resultat resultat-ha bg-white vert-fonce animate__animated flipInX delay-05s mx-0 mt-3"
            style="border: 1px solid #594231"
          >
            <div class="d-inline-flex align-items-center">
              <div
                class="animate__animated flipInY delay-1s nbr-ha odometer odometer-auto-theme potentiel"
                id="potentiel"
              >
                <div class="odometer-inside">
                  {{ potentiel_nourricier }}
                  <!-- <span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">4</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-formatting-mark"> </span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">6</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">8</span></span
                        ></span
                      ></span
                    ></span
                  ><span class="odometer-digit"
                    ><span class="odometer-digit-spacer">8</span
                    ><span class="odometer-digit-inner"
                      ><span class="odometer-ribbon"
                        ><span class="odometer-ribbon-inner"
                          ><span class="odometer-value">0</span></span
                        ></span
                      ></span
                    ></span
                  > -->
                </div>
              </div>
              <div class="hectares animate__animated fadeIn delay-1-5s">%</div>
            </div>
          </div>
        </div>
        <div
          id="chartPotential"
          class="map-content contentPotential active w-100"
        >
          <div class="row">
            <div class="col">
              <div>
                <span class="surface_potentiel" id="surface_potentiel2">
                  {{
                    formatterChiffres(
                      this.$store.state.resultatSimulation.surfaceAMobiliser,
                    )
                  }}</span
                >
                hectares
              </div>
              <div class="potentialLegend">Surface agricole à mobiliser</div>
              <div class="position-relative mb-5 pb-3">
                <div id="bar1" class="position-absolute" style="z-index: 2">
                  <div
                    id="sbar1"
                    class="bar bg-vert-clair animate__animated"
                    :style="{
                      width:
                        (this.$store.state.resultatSimulation
                          .surfaceAMobiliser /
                          max_potentiel_sau) *
                          100 +
                        '%',
                    }"
                  ></div>
                </div>
                <div class="position-absolute bargrey w-100" style="z-index: 1">
                  <div
                    class="bar bg-grey-light animate__animated"
                    style="width: 100%"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="">
                <span class="surface_act" id="surface_act2">
                  {{ formatterChiffres(Math.round(surfaces_actuelles)) }}</span
                >
                hectares
              </div>
              <div class="potentialLegend">Surface agricole actuelle</div>
              <div class="position-relative">
                <div id="bar2" class="position-absolute" style="z-index: 2">
                  <div
                    v-if="max_potentiel_sau"
                    id=" sbar2"
                    class="bar bg-vert-fonce animate__animated"
                    :style="{
                      width:
                        (surfaces_actuelles / max_potentiel_sau) * 100 + '%',
                    }"
                  ></div>
                </div>
                <div class="position-absolute bargrey w-100" style="z-index: 1">
                  <div
                    class="bar bg-grey-light animate__animated"
                    style="width: 100%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="textPotential" class="map-content contentPotential active">
          C’est le rapport entre la surface agricole actuelle et la surface
          agricole à mobiliser. Cela traduit la capacité théorique des surfaces
          agricoles du territoire à répondre à la demande alimentaire de la
          population choisie.
          <div class="subtext">
            Sur la base de la part de bio et des régimes alimentaires actuels,
            le potentiel nourricier du territoire est de
            <span class="potentiel" id="potentiel2">{{
              potentiel_nourricier
            }}</span
            >%.
          </div>
        </div>

        <div class="div-continuer text-left">
          <button
            type="button"
            class="btn btn-principal mt-5"
            @click="nextStep('#produit')"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAssets } from "@/plugins/getAssets";
import { formatterChiffres } from "@/plugins/surfaceProduits";
export default {
  inject: ["$axios"],
  data() {
    return {
      codesTerritoireParcel: this.$store.getters.getcodesTerritoireParcel,
      data: {
        surface: this.$store.state.indicateurPortraits.surface_ha,
        sau: this.$store.state.indicateurPortraits.sau_ha,
        potentiel_nourricier: 0,
        geoList: this.$store.state.geoList,
      },
      territoireCarteGriseUrl: undefined,
      territoireCarteBleueUrl: undefined,
      territoireCarteVerteUrl: undefined,
    };
  },
  methods: {
    formatterChiffres,
    gererVisibiliteImage() {
      let zoneScrollableSurfaceActuelle = document.getElementById(
        "zone-surface-actuelle",
      );
      let zoneScrollableSurfaceAMobiliser = document.getElementById(
        "zone-surface-a-mobiliser",
      );
      let zoneScrollablePotentielNourricier = document.getElementById(
        "zone-potentiel-nourricier",
      );
      let imageSurfaceTerritoire = document.getElementById(
        "div-image-surface-territoire",
      );
      let imageSauActuelle = document.getElementById("div-image-sau-actuelle");
      let imagePotentielNourricier = document.getElementById(
        "div-image-surface-a-mobiliser",
      );
      if (
        window.scrollY >=
        zoneScrollableSurfaceActuelle.offsetHeight +
          zoneScrollableSurfaceAMobiliser.offsetHeight -
          400
      ) {
        imagePotentielNourricier.classList.add("fadeIn");
        imageSauActuelle.classList.remove("fadeIn");
        imageSauActuelle.style.opacity = 0;
        imagePotentielNourricier.style.opacity = 1;
        imageSauActuelle.classList.add("fadeOut");
      } else if (
        window.scrollY <
        zoneScrollableSurfaceActuelle.offsetHeight +
          zoneScrollableSurfaceAMobiliser.offsetHeight -
          400
      ) {
        imagePotentielNourricier.style.opacity = 0;
        imageSauActuelle.classList.add("fadeIn");
        imageSauActuelle.classList.remove("fadeOut");
        imageSauActuelle.style.opacity = 1;
        imagePotentielNourricier.classList.remove("fadeIn");
      }
      if (
        window.scrollY >=
        zoneScrollableSurfaceActuelle.offsetHeight +
          zoneScrollableSurfaceAMobiliser.offsetHeight +
          zoneScrollablePotentielNourricier.offsetHeight
      ) {
        imageSauActuelle.classList.remove("fadeOut");
        imageSauActuelle.style.opacity = 1;
        imageSurfaceTerritoire.style.opacity = 0;
        imageSurfaceTerritoire.classList.remove("fadeIn");
        imageSurfaceTerritoire.classList.add("fadeOut");
        if (
          this.surfaces_actuelles >
          this.$store.state.resultatSimulation.surfaceAMobiliser
        ) {
          imageSauActuelle.classList.add("position-devant2");
        }
      } else if (
        window.scrollY <
        zoneScrollableSurfaceActuelle.offsetHeight +
          zoneScrollableSurfaceAMobiliser.offsetHeight +
          zoneScrollablePotentielNourricier.offsetHeight
      ) {
        imageSurfaceTerritoire.classList.add("fadeIn");
        imageSurfaceTerritoire.style.opacity = 1;
        imageSurfaceTerritoire.classList.remove("fadeOut");
      }
    },
    nextStep(step) {
      window.scrollTo(0, 0);
      this.$emit("nextStep", step);
      this.$router.replace({ hash: step });
    },
  },
  computed: {
    potentiel_nourricier() {
      return this.$store.state.resultatSimulation.potentielNourricier;
    },
    surfaces_actuelles() {
      console.log(
        "isnan number",
        isNaN(this.$store.state.resultatSimulation.surfacesActuelles),
      );
      return this.$store.state.resultatSimulation.surfacesActuelles;
    },
    max_potentiel_sau() {
      return Math.max(
        this.$store.state.resultatSimulation.surfacesActuelles,
        this.$store.state.resultatSimulation.surfaceAMobiliser,
      );
    },
    max_potentiel_surface() {
      return Math.max(
        this.data.surface,
        this.$store.state.resultatSimulation.surfaceAMobiliser,
      );
    },
  },
  async mounted() {
    window.addEventListener("scroll", this.gererVisibiliteImage);
    this.data.potentiel_nourricier =
      this.$store.state.resultatSimulation.potentielNourricier;

    // cartes bleues / grises /vertes
    try {
      const imageResponse = await getAssets(
        this.$store.getters.getCarteColoreeTerritoireParcel("grises"),
      );
      this.territoireCarteGriseUrl = imageResponse.request.responseURL;
      console.log(this.territoireCarteGriseUrl);
    } catch (error) {
      this.territoireCarteGriseUrl = require("@/assets/img/surfaces/circle-agricole-gris.svg");
    }
    try {
      const imageResponse = await getAssets(
        this.$store.getters.getCarteColoreeTerritoireParcel("bleues"),
      );
      this.territoireCarteBleueUrl = imageResponse.request.responseURL;
      console.log(this.territoireCarteBleueUrl);
    } catch (error) {
      this.territoireCarteBleueUrl = require("@/assets/img/surfaces/circle-agricole-bleu.svg");
    }
    try {
      const imageResponse = await getAssets(
        this.$store.getters.getCarteColoreeTerritoireParcel("vertes"),
      );
      this.territoireCarteVerteUrl = imageResponse.request.responseURL;
      console.log(this.territoireCarteVerteUrl);
    } catch (error) {
      this.territoireCarteVerteUrl = require("@/assets/img/surfaces/circle-agricole-vert.svg");
    }
  },
  unmounted() {
    window.removeEventListener("scroll", this.gererVisibiliteImage);
  },
};
</script>

<style scoped>
.chiffre-encart {
  font-size: 34px;
  color: #ffffff;
}

.hectares {
  font-size: 18px;
  color: #ffffff;
}
</style>
