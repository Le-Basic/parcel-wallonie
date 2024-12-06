<template>
  <div>
    <nav class="navbar nav-modal menu-principal" id="nav-steps">
      <!--sticky-top-->
      <div class="container-fluid mt-3 flex-column">
        <div
          class="w-100 d-flex row justify-content-between align-items-center flex-row"
        >
          <div class="col-10 col-sm-4 d-inline pl-0 justify-content-center">
            <router-link to="javascript:history.go(-1)"
              ><span class="mt-5"
                ><span
                  class="icon-ico_fleche_retour icon d-sm-none"
                ></span></span></router-link
            ><button
              type="button"
              class="btn btn-menu-affiner d-sm-none"
              id="asy-sidebarCollapse6"
              style="cursor: pointer"
            >
              <span class="icon-ico_menu_affiner icon"></span>Affiner
            </button>
            <router-link to="/recommencer">
              <button type="button" class="btn btn-principal btn-menu-new">
                Nouvelle recherche
              </button></router-link
            >
          </div>
          <router-link
            class="col-0 col-sm-4 navbar-brand text-center d-sm-block d-none"
            to="/"
            ><img
              alt="logo"
              :src="require('@/assets/img/logos/logoPARCELWAL_vert.png')"
              width="181"
              height="auto"
              @click="clearLocalStorage"
          /></router-link>
          <div
            class="col-2 col-sm-4 d-flex ml-auto justify-content-end align-items-center pr-0"
          >
            <button
              class="btn navbar-btn btn-link text-right mt-1"
              data-target="#modalNavigation"
              data-toggle="modal"
              type="button"
              @click="changeModalPrincipale"
            >
              <span class="icon-ico_menu_hamburger"></span>
            </button>
          </div>
        </div>
        <div class="w-100" v-if="menuType != ''">
          <!-- ajouter active -->
          <nav
            class="navbar-expand menu-icons text-center justify-content-center"
          >
            <div class="btn-affiner">
              <a
                class="sticky-top"
                id="asy-sidebarCollapse"
                v-if="menuType == 'resultats'"
                @click="drawgraphs"
              >
                <div
                  class="d-flex justify-content-center flex-column btn-affiner-rond"
                  @click="montrerModalAffinage"
                >
                  <span class="icon-ico_menu_affiner icon"></span>
                  <div class="affiner-head">Changer</div>
                  <div class="affiner-recherche">mes paramètres</div>
                </div>
              </a>
            </div>
            <div
              class="btn-affiner"
              style="position: fixed"
              v-if="menuType == 'resultats'"
            >
              <router-link
                class="btn-exporter"
                to="/agir-pour-une-relocalisation-durable#export"
                v-if="false"
              >
                <div class="<?php echo $active; ?> sticky-top">
                  <div>
                    <span
                      class="icon-export mr-2 d-inline-block"
                      style="font-size: 1rem"
                    ></span>
                  </div>
                  <div class="btn-exporter-head">Exporter</div>
                </div>
                <div class="affiner-recherche">mes résultats</div>
              </router-link>
            </div>
            <MenuResultats v-if="menuType == 'resultats'" :active="active" />
            <MenuRecherche v-if="menuType == 'recherche'" :active="active" />
            <MenuSurface v-if="menuType == 'surface'" :active="active" />
            <MenuResultatsSurface
              v-if="menuType == 'resultats-surface'"
              :active="active"
            />
            <MenuDiagnostic v-if="menuType == 'diagnostic'" :active="active" />
          </nav>
        </div>
      </div>
    </nav>

    <div
      class="fade modal-fullscreen-menu show modal"
      id="modalNavigation"
      role="dialog"
      v-if="montrerModalPrincipale"
    >
      <button
        aria-label="Close"
        class="close btn"
        data-dismiss="modal"
        type="button"
        @click="changeModalPrincipale"
      >
        <span class="sr-only">Fermer</span>
        <span class="icon-ico_fermer icon" style="font-size: 27px"></span>
      </button>
      <OverlayMenu />
    </div>
  </div>
</template>

<script>
import MenuResultats from "@/components/Menu/MenuResultats.vue";
import MenuRecherche from "@/components/Menu/MenuRecherche.vue";
import MenuSurface from "@/components/Menu/MenuSurface.vue";
import MenuResultatsSurface from "../Menu/MenuResultatsSurface.vue";
import MenuDiagnostic from "../Menu/MenuDiagnostic.vue";
import OverlayMenu from "@/components/OverlayMenu.vue";

export default {
  components: {
    MenuResultats,
    MenuRecherche,
    MenuSurface,
    MenuResultatsSurface,
    MenuDiagnostic,
    OverlayMenu,
  },
  name: "BarreNavigation",
  props: {
    menuType: {
      type: String,
      default: "resultats", // resultats, recherches
    },
    active: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      montrerModalPrincipale: false,
    };
  },

  methods: {
    montrerModalAffinage() {
      this.$emit("montrerModalAffinage");
      console.log("montrerModalAffinage");
    },
    changeModalPrincipale() {
      this.montrerModalPrincipale = !this.montrerModalPrincipale;
    },
    clearLocalStorage() {
      console.log("clearLocalStorage");
      localStorage.clear();
      this.$store.commit("RESET_STORE");
    },
  },
};
</script>

<style scoped>
.modal {
  display: block !important;
  opacity: 1 !important;
  height: 100vh;
}
</style>
