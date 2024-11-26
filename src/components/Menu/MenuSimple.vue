<template>
  <div>
    <nav
      class="navbar nav-modal menu-principal"
      id="nav-simple"
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
                srcset="../../assets/img/logos/logoPARCELWAL_baseline_vert.png"
                media="(min-width: 600px)"
              />
              <source
                srcset="../../assets/img/logos/logoPARCELWAL_vert.png"
                media="(max-width: 600px)"
                sizes="200px"
              />
              <img
                srcset="../../assets/img/logos/logoPARCELWAL_baseline_vert.png"
                alt="logo appli"
                width="100%"
                height="auto"
                style="max-width: 350px; min-width: 200px"
              />
            </picture>
          </a>
          <div class="d-flex align-items-center btns-menu">
            <!-- <a href="#" class="btn-notification d-flex align-items-center px-2" data-toggle="collapse" href="#modalNotification" role="button" aria-expanded="false" aria-controls="modalNotification"><img src="assets/img/icons/notification.svg" class="mr-2"/>PARCEL-Wallonieévolue</a>  -->
            <button
              class="btn navbar-btn btn-link text-right mt-0"
              data-target="#modalNavigation"
              data-toggle="modal"
              type="button"
              @click="changeActive"
            >
              <span class="icon-ico_menu_hamburger"></span>
            </button>
          </div>
        </div>
        <div class="w-100">
          <nav
            class="navbar-expand menu-icons text-center justify-content-center"
          ></nav>
        </div>
      </div>
    </nav>
    <div
      class="fade modal-fullscreen-menu show modal"
      id="modalNavigation"
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
        <span class="icon-ico_fermer icon" style="font-size: 27px"></span>
      </button>
      <OverlayMenu />
    </div>
  </div>
</template>

<script>
import OverlayMenu from "@/components/OverlayMenu.vue";
export default {
  name: "MenuSimple",
  components: { OverlayMenu },
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
