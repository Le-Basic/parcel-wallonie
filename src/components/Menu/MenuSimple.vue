<template>
  <div>
    <nav
      id="nav-simple"
      class="navbar nav-modal menu-principal"
      style="box-shadow: unset"
    >
      <!--sticky-top-->
      <div class="container-fluid mt-3 flex-column">
        <div
          class="w-100 d-flex row justify-content-between align-items-center flex-row"
        >
          <a
            class="col-4 col-sm-5 navbar-brand-simple text-left d-block"
            href="/"
          >
            <picture>
              <source
                srcset="../../assets/img/logos/logo-parcel.svg"
                media="(min-width: 600px)"
              >
              <source
                srcset="../../assets/img/logos/logo.svg"
                media="(max-width: 600px)"
                sizes="200px"
              >
              <img
                srcset="../../assets/img/logos/logo-parcel.svg"
                alt="logo appli"
                width="100%"
                height="auto"
                style="max-width: 350px; min-width: 200px"
              >
            </picture>
          </a>
          <div class="d-flex align-items-center btns-menu">
            <!-- <a href="#" class="btn-notification d-flex align-items-center px-2" data-toggle="collapse" href="#modalNotification" role="button" aria-expanded="false" aria-controls="modalNotification"><img src="assets/img/icons/notification.svg" class="mr-2"/>PARCEL évolue</a>  -->
            <a
              id="btn-notification"
              class="btn btn-notification"
              data-toggle="collapse"
              href="#modalNotification"
              role="button"
              aria-expanded="false"
              aria-controls="modalNotification"
            >
              <img
                :src="require('@/assets/img/icons/notification.svg')"
                class="bell"
              ><span class="notification-text">PARCEL évolue</span>
            </a>
            <button
              class="btn navbar-btn btn-link text-right mt-0"
              data-target="#modalNavigation"
              data-toggle="modal"
              type="button"
              @click="changeActive"
            >
              <span class="icon-ico_menu_hamburger" />
            </button>
          </div>
        </div>
        <div class="w-100">
          <nav
            class="navbar-expand menu-icons text-center justify-content-center"
          />
        </div>
      </div>
    </nav>
    <div
      id="modalNavigation"
      class="fade modal-fullscreen-menu show modal"
      role="dialog"
      :class="{ 'modal-montre': active }"
    >
      <button
        aria-label="Close"
        class="close"
        data-dismiss="modal"
        type="button"
        @click="changeActive"
      >
        <span class="sr-only">Fermer</span>
        <span
          class="icon-ico_fermer icon"
          style="font-size: 27px"
        />
      </button>

      <div
        id="side-calc"
        class="modal-dialog d-flex justify-content-between flex-md-row flex-column"
      >
        <div class="d-flex align-items-center col-12 col-md-7 col-lg-8">
          <nav class="list-group">
            <a
              class="list-group-item"
              href="index"
            >Accueil</a>

            <!--<a class="list-group-item" href="projet">Le projet</a>-->
            <a
              class="list-group-item"
              href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
            >Méthodologie de calcul</a>

            <a
              class="list-group-item"
              href="/agir-pour-une-relocalisation-durable"
            >Agir</a>
            <a
              class="list-group-item"
              href="/partenaires-du-projet"
            >Partenaires</a>
            <a
              class="list-group-item"
              href="/ressources-sur-lalimentation-durable"
            >Ressources</a>
            <a
              class="list-group-item"
              href="/faq"
            >FAQ</a>
            <a
              class="list-group-item"
              href="/contacter-parcel"
            >Nous contacter</a>
          </nav>
        </div>

        <div
          class="col-12 col-md-5 col-lg-4 menu-calcul h-100 align-items-center"
        >
          <div class="text-center title-parcours-menu">
            Choisissez un parcours
          </div>
          <div
            class="d-flex flex-column choix-alim align-content-around flex-wrap"
          >
            <div
              class="parcours1 d-flex col-12 align-items-center"
              style="height: 45vh; flex: 1"
            >
              <div class="cadreImage text-center ml-auto mr-auto">
                <div class="">
                  <a
                    href="/1-choix-du-territoire"
                    onclick="localStorage.clear();"
                  >
                    <img
                      alt="parcours1"
                      src="../../assets/img/parcours/parcours1.svg"
                      width="100%"
                      height="auto"
                    >
                  </a>
                </div>
                <div>
                  <div class="sous-titre-parcours">
                    Quels sont les effets d’une alimentation plus locale et
                    durable ?
                  </div>
                </div>
                <div>
                  <a
                    href="/1-choix-du-territoire"
                    onclick="localStorage.clear();"
                  ><button
                    type="button"
                    class="btn btn-principal mt-3"
                  >
                    Commencer
                  </button></a>
                </div>
              </div>
            </div>
            <div
              class="parcours2 d-flex col-12 align-items-center mb-2"
              style="height: 45vh; flex: 1"
            >
              <div class="cadreImage text-center ml-auto mr-auto">
                <div class="">
                  <a
                    href="/1-relocaliser-une-surface-disponible"
                    onclick="localStorage.clear();"
                  >
                    <img
                      alt="parcours2"
                      src="../../assets/img/parcours/parcours2-small.svg"
                      width="100%"
                      height="auto"
                    >
                  </a>
                </div>
                <div>
                  <!-- <div class="titre-parcours">J'ai une parcelle, un terrain</div>-->
                  <div class="sous-titre-parcours">
                    Combien de personnes peut-on nourrir avec une parcelle ou un
                    terrain donné ?
                  </div>
                </div>
                <div>
                  <a
                    href="/1-relocaliser-une-surface-disponible"
                    onclick="localStorage.clear();"
                  ><button
                    type="button"
                    class="btn btn-principal mt-3"
                  >
                    Commencer
                  </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuSimple",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    changeActive() {
      if (this.active === false) {
        this.active = true;
      } else {
        this.active = false;
      }
    },
  },
};
</script>

<style scoped>
.modal-montre {
  display: block;
}
</style>
