<template>
  <div
    class="modal-dialog d-flex justify-content-between flex-md-row flex-column"
    id="side-calc"
  >
    <div class="d-flex align-items-center col-12 col-md-7 col-lg-8">
      <nav class="list-group">
        <router-link class="list-group-item" to="/">Accueil</router-link>

        <!--<a class="list-group-item" href="projet">Le projet</a>-->
        <router-link
          class="list-group-item"
          to="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
          >Méthodologie de calcul</router-link
        >

        <router-link
          class="list-group-item"
          to="/agir-pour-une-relocalisation-durable"
          >Agir</router-link
        >
        <router-link class="list-group-item" to="/faq">FAQ</router-link>
        <router-link class="list-group-item" to="/contact"
          >Nous contacter</router-link
        >
      </nav>
    </div>

    <div class="col-12 col-md-5 col-lg-4 menu-calcul h-100 align-items-center">
      <div class="text-center title-parcours-menu">Choisissez un parcours</div>
      <div class="d-flex flex-column choix-alim align-content-around flex-wrap">
        <div
          class="parcours1 d-flex col-12 align-items-center"
          style="height: 45vh; flex: 1"
        >
          <div class="cadreImage text-center ml-auto mr-auto">
            <div class="">
              <router-link to="/1-choix-du-territoire">
                <img
                  alt="parcours1"
                  src="../assets/img/parcours/parcours1.svg"
                  width="100%"
                  height="auto"
                />
              </router-link>
            </div>
            <div>
              <div class="sous-titre-parcours">
                Quels sont les effets d’une alimentation plus locale et durable
                ?
              </div>
            </div>
            <div>
              <router-link to="/1-choix-du-territoire"
                ><button type="button" class="btn btn-principal mt-3">
                  Commencer
                </button></router-link
              >
            </div>
          </div>
        </div>
        <div
          class="parcours2 d-flex col-12 align-items-center mb-2"
          style="height: 45vh; flex: 1"
        >
          <div class="cadreImage text-center ml-auto mr-auto">
            <div class="">
              <router-link
                to="https://parcel-app.org/1-relocaliser-une-surface-disponible"
                target="_blank"
              >
                <img
                  alt="parcours2"
                  src="../assets/img/parcours/parcours2-small.svg"
                  width="100%"
                  height="auto"
                />
              </router-link>
            </div>
            <div>
              <!-- <div class="titre-parcours">J'ai une parcelle, un terrain</div>-->
              <div class="sous-titre-parcours">
                Combien de personnes peut-on nourrir avec une parcelle ou un
                terrain donné ?
              </div>
            </div>
            <div>
              <router-link
                to="/1-relocaliser-une-surface-disponible"
                target="_blank"
                ><button type="button" class="btn btn-principal mt-3">
                  Commencer
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverlayMenu",
};
</script>
