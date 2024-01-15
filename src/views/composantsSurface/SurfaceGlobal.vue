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
              style="width: 100%; opacity: 1"
              :src="require('@/assets/img/surfaces/circle1.svg')"
            />
          </div>
          <div id="imgmap2" class="animate__animated">
            <img
              id="shape3"
              alt=""
              class="mx-auto"
              style="width: 50%; opacity: 1"
              :src="require('@/assets/img/surfaces/circle-empreinte.svg')"
            />
          </div>
          <div id="imgmap3" class="animate__animated">
            <img
              id="shape2"
              alt=""
              class="mx-auto"
              style="width: 20%; opacity: 1 z-index: 100"
              :src="require('@/assets/img/surfaces/circle-agricole.svg')"
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
                  <span class="odometer-digit"
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
                  >
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
                  <span class="odometer-digit"
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
                  >
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
              <span id="artificialisation"></span> hectares entre 2009 et 2019.
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
                <div class="odometer-inside">
                  <span class="odometer-digit"
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
                  >
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
                  <span class="odometer-digit"
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
                  >
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
                <span class="surface_potentiel" id="surface_potentiel2">0</span>
                hectares
              </div>
              <div class="potentialLegend">Surface agricole à mobiliser</div>
              <div class="position-relative mb-5 pb-3">
                <div id="bar1" class="position-absolute" style="z-index: 2">
                  <div
                    id="sbar1"
                    class="bar bg-vert-clair animate__animated"
                    style="width: 100%"
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
                <span class="surface_act" id="surface_act2">0</span> hectares
              </div>
              <div class="potentialLegend">Surface agricole actuelle</div>
              <div class="position-relative">
                <div id="bar2" class="position-absolute" style="z-index: 2">
                  <div
                    id=" sbar2"
                    class="bar bg-vert-fonce animate__animated"
                    style="width: 100%"
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
            @click="nextStep('productView')"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextStep(step) {
      this.$router.push({ hash: step });
      this.$emit("nextStep", step);
    },
  },
};
</script>
