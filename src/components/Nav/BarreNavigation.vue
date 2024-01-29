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
            <router-link to="/recommencer<?php echo $parcours; ?>" v-if="false"
              ><button type="button" class="btn btn-principal btn-menu-new">
                Nouvelle recherche
              </button></router-link
            >
          </div>
          <router-link
            class="col-0 col-sm-4 navbar-brand text-center d-sm-block d-none"
            to="/"
            ><img
              alt="logo"
              :src="require('@/assets/img/logos/logo.svg')"
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
        <div class="w-100">
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
      <div
        class="modal-dialog d-flex justify-content-between flex-md-row flex-column"
        id="side-calc"
      >
        <div class="d-flex align-items-center col-12 col-md-7 col-lg-8">
          <nav class="list-group">
            <router-link class="list-group-item" to="/">Accueil</router-link>

            <!-- <router-link class="list-group-item" to="projet">Le projet</router-link>-->
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
            <router-link
              class="list-group-item"
              to="/partenaires-du-projet"
              v-if="false"
              >Partenaires</router-link
            >
            <router-link
              class="list-group-item"
              to="/ressources-sur-lalimentation-durable"
              v-if="false"
              >Ressources</router-link
            >
            <router-link class="list-group-item" to="/faq" v-if="false"
              >FAQ
            </router-link>
            <router-link class="list-group-item" to="/contacter-parcel"
              >Nous contacter</router-link
            >
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
                  <router-link
                    to="/1-choix-du-territoire"
                    onclick="localStorage.clear();"
                  >
                    <img
                      alt="parcours1"
                      :src="require('@/assets/img/parcours/parcours1.svg')"
                      width="100%"
                      height="auto"
                    />
                  </router-link>
                </div>
                <div>
                  <!-- <div class="titre-parcours">Et si on mangeait local et durable,</div>-->
                  <div class="sous-titre-parcours">
                    Quels sont les effets d’une alimentation plus locale et
                    durable ?
                  </div>
                </div>
                <div>
                  <router-link
                    to="/1-choix-du-territoire"
                    onclick="localStorage.clear();"
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
                    to="/1-relocaliser-une-surface-disponible"
                    onclick="localStorage.clear();"
                  >
                    <img
                      alt="parcours2"
                      :src="
                        require('@/assets/img/parcours/parcours2-small.svg')
                      "
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
                    onclick="localStorage.clear();"
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
    </div>
  </div>
</template>

<script>
import MenuResultats from "@/components/Menu/MenuResultats.vue";
import MenuRecherche from "@/components/Menu/MenuRecherche.vue";

export default {
  components: {
    MenuResultats,
    MenuRecherche,
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
