<template>
  <div>
    <div class="position-relative w-100 text-center">
      <div class="w-100 d-flex position-absolute">
        <a
          href="#map1"
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
      id="map1"
    >
      <div class="col-12 col-lg-auto map-surface is-flex">
        <div id="globalView-images" class="my-auto">
          <div id="imgmap1" class="animate__animated">
            <img
              id="shape1"
              alt=""
              class="mx-auto"
              :style="{
                width: (data.surface / max_potentiel_surface) * 100 + '%',
                opacity: 1,
              }"
              :src="require('@/assets/img/surfaces/circle1.svg')"
            />
          </div>
          <div id="imgmap2" class="animate__animated">
            <img
              id="shape3"
              alt=""
              class="mx-auto"
              :style="{
                width:
                  (data.surfaces_a_mobiliser / max_potentiel_surface) * 100 +
                  '%',
                opacity: 1,
                'z-index': 200,
              }"
              :src="require('@/assets/img/surfaces/circle-agricole.svg')"
            />
          </div>
          <div id="imgmap3" class="animate__animated" style="opacity: 0">
            <img
              id="shape2"
              alt=""
              class="mx-auto"
              :style="{
                width: (data.sau / max_potentiel_surface) * 100 + '%',
                opacity: 1,
              }"
              :src="require('@/assets/img/surfaces/circle-empreinte.svg')"
            />
          </div>
          <div id="imgmap4" class="animate__animated">
            <img
              id="shape4"
              alt=""
              class="mx-auto"
              style="width: 0%; opacity: 0"
            />
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
        <div id="text-map1" class="text-map">
          <h3 class="">Surface totale du territoire</h3>
          <div
            class="cadre-resultat resultat-ha animate__animated flipInX delay-05s bg-grey-light ml-0 mt-3"
          >
            <div class="d-inline-flex align-items-center">
              <div
                class="animate__animated flipInY delay-1s nbr-ha odometer odometer-auto-theme"
                id="surface_territoire_actuelle1"
              >
                <div class="odometer-inside">
                  <span class="chiffre-encart">{{ data.surface }}</span>

                  ><!--<span class="odometer-digit-spacer">8</span
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
              <div class="hectares animate__animated fadeIn delay-1-5s">
                hectares
              </div>
            </div>
          </div>
          <div class="map-content"></div>
        </div>
        <div id="text-map2" class="text-map">
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
                  <span class="chiffre-encart">{{ data.sau }}</span>
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
      id="map3"
    >
      <div class="col-12 col-lg-auto map-surface"></div>
      <div
        class="col-12 col-lg-6 content-map animate__animated flex-column"
        id="content3"
      >
        <div id="text-map3" class="text-map">
          <h3 class="">Surface agricole à mobiliser</h3>
          <div
            class="cadre-resultat resultat-ha animate__animated flipInX delay-05s bg-vert-clair ml-0 mt-3"
          >
            <div class="d-inline-flex align-items-center">
              <div
                class="animate__animated flipInY delay-1s nbr-ha odometer odometer-auto-theme surface_potentiel"
                id="surface_potentiel"
              >
                <div class="odometer-inside" v-if="data.potentiel_nourricier">
                  {{ data.surfaces_a_mobiliser }}
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
            sont théoriquement nécessaires pour satisfaire les besoins
            alimentaires de la population choisie
          </div>
        </div>
      </div>
    </div>
    <div
      class="row align-items-center block-surface animate__animated bigmap"
      id="map4"
    >
      <div class="col-12 col-lg-auto map-surface"></div>
      <div
        class="col-12 col-lg-6 content-map animate__animated flex-column"
        id="content4"
      >
        <h3 class="">Potentiel nourricier</h3>
        <div class="d-flex align-items-center">
          <div
            class="cadre-resultat resultat-ha bg-white vert-fonce animate__animated flipInX delay-05s mx-0 mt-3"
            style="border: 1px solid #015a5a"
          >
            <div class="d-inline-flex align-items-center">
              <div
                class="animate__animated flipInY delay-1s nbr-ha odometer odometer-auto-theme potentiel"
                id="potentiel"
              >
                <div class="odometer-inside">
                  {{ data.potentiel_nourricier }}
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
                  {{ data.surfaces_a_mobiliser }}</span
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
                        (data.surfaces_a_mobiliser / max_potentiel_sau) * 100 +
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
                  {{ data.sau }}</span
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
                      width: (data.sau / max_potentiel_sau) * 100 + '%',
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
            <span class="potentiel" id="potentiel2">0</span>%.
          </div>
        </div>

        <div class="div-continuer text-left">
          <button
            type="button"
            class="btn btn-principal mt-5"
            @click="nextStep('product')"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getSurfaceActuelle,
  getSurfaceAMobiliser,
} from "@/plugins/getSurfacesNecessaires";

export default {
  inject: ["$axios"],
  data() {
    return {
      codesTerritoireParcel: this.$store.state.geoList,
      data: {
        surface: 0,
        sau: 0,
        potentiel_nourricier: 0,
        surfaces_a_mobiliser: 0,
      },
    };
  },
  methods: {
    gererVisibiliteImage() {
      let map1 = document.getElementById("map1");
      // let map2 = document.getElementById("map2");
      let map3 = document.getElementById("map3");
      let map4 = document.getElementById("map4");
      let imgmap1 = document.getElementById("imgmap1");
      let imgmap2 = document.getElementById("imgmap2");
      let imgmap3 = document.getElementById("imgmap3");
      // let imgmap4 = document.getElementById("imgmap4");
      let content2 = document.getElementById("content2");
      let content3 = document.getElementById("content3");
      let content4 = document.getElementById("content4");
      // let variableHeight = 0;
      let shape1 = document.getElementById("shape1");
      let shape2 = document.getElementById("shape2");
      let shape3 = document.getElementById("shape3");
      console.log(window.scrollY);
      if (window.innerWidth <= 768) {
        shape3.style.opacity = 1;
        shape2.style.opacity = 1;
      }
      if (window.scrollY >= map1.offsetHeight + map3.offsetHeight - 400) {
        map3.classList.add("fadeIn");
        content3.classList.add("fadeInUp");
        imgmap3.classList.add("fadeIn");
        imgmap2.classList.remove("fadeIn");
        imgmap2.style.opacity = 0;
        imgmap3.style.opacity = 1;
        imgmap2.classList.add("fadeOut");
      } else if (window.scrollY < map1.offsetHeight + map3.offsetHeight - 400) {
        if (shape3.clientWidth > shape1.clientWidth) {
          imgmap1.classList.add("position-devant1");
        }
        imgmap3.style.opacity = 0;
        imgmap2.classList.add("fadeIn");
        imgmap2.classList.remove("fadeOut");
        imgmap2.style.opacity = 1;
        content3.style.opacity = 0;
        imgmap3.classList.remove("fadeIn");
        content3.classList.remove("fadeInUp");
        content2.style.opacity = 1;
        content2.classList.add("fadeInUp");
      }
      if (
        window.scrollY >=
        map1.offsetHeight + map3.offsetHeight + map4.offsetHeight
      ) {
        console.log("remove");
        let shape2 = document.getElementById("shape2");
        let shape3 = document.getElementById("shape3").clientWidth;
        if (shape2.clientWidth > shape3.clientWidth) {
          imgmap2.classList.add("position-devant2");
        }
        imgmap2.classList.remove("fadeOut");
        imgmap2.style.opacity = 1;
        // content2.style.opacity = 0;
        map4.classList.add("fadeIn");
        // imgmap4.classList.add("fadeIn");
        content4.classList.add("fadeInUp");
        imgmap1.style.opacity = 0;
        imgmap1.classList.remove("fadeIn");
        imgmap1.classList.add("fadeOut");
        if (this.data.sau > this.data.surfaces_a_mobiliser) {
          imgmap2.classList.add("position-devant2");
        }
      } else if (
        window.scrollY <
        map1.offsetHeight + map3.offsetHeight + map4.offsetHeight
      ) {
        // content4.style.opacity = 0;
        // imgmap4.style.opacity = 0;
        // imgmap4.classList.remove("fadeIn");
        content4.classList.remove("fadeInUp");
        imgmap1.classList.add("fadeIn");
        imgmap1.style.opacity = 1;
        // imgmap1.classList.add("fadeIn");
        imgmap1.classList.remove("fadeOut");
      }
    },
    nextStep(step) {
      console.log("nextStep", step);
      window.scrollTo(0, 0);
      this.$emit("nextStep", step);
    },
    recupererDonnees() {
      const bodyFormData = new FormData();
      var codesTerritoireParcel = this.$store.state.geoList.map(
        (el) => el.code_territoire
      );
      codesTerritoireParcel = ["mun91114"];

      console.log(codesTerritoireParcel);
      bodyFormData.append("Codes_territoire_parcel", codesTerritoireParcel);
      this.$axios
        .post(
          "https://observatoire-filieres.azurewebsites.net/parcel/belgique/surfaces_agregees",
          codesTerritoireParcel, // Request body data
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          this.data.surface = response.data[0]["surface_ha"];
          this.data.sau = response.data[0]["sau_ha"];
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    max_potentiel_sau() {
      return Math.max(this.data.sau, this.data.potentiel_nourricier);
    },
    max_potentiel_surface() {
      return Math.max(this.data.surface, this.data.potentiel_nourricier);
    },
  },
  async mounted() {
    window.addEventListener("scroll", this.gererVisibiliteImage);
    this.data.surfaces_a_mobiliser = Math.round(
      await getSurfaceAMobiliser().then((res) => res["surfaces_a_mobiliser"])
    );
    const surface_actuelle = await getSurfaceActuelle();
    console.log("ACTUELLE", surface_actuelle);
    this.data.surface = surface_actuelle["surface_ha"];
    this.data.sau = surface_actuelle["sau_ha"];
    this.data.potentiel_nourricier = Math.round(
      (this.data.sau * 100) / this.data.surfaces_a_mobiliser
    );
    console.log(this.data);
    this.recupererDonnees();
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
