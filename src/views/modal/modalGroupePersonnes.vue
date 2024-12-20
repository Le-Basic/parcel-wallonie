<template>
  <div
    class="modals modal-simple"
    id="modal-population-groupe"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-simple"
      id="modal-population-groupe"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content modal-repart-cat-detail">
          <div class="modal-header d-flex align-items-center">
            <div>
              <span
                class="icon-ico_navigation_population icon vert-clair"
              ></span>
            </div>
            <div class="">
              <div class="titre-categorie">
                Définissez votre groupe de personne
              </div>
            </div>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="fermerModale"
            >
              <span class="icon-ico_fermer icon"></span>
            </button>
          </div>
          <div class="modal-body">
            <div class="bloc">
              <span class="nombres-ajout pop">
                <div class="handle-counter" id="handleCounterenfants">
                  <span
                    class="btn-moins counter-minus"
                    @click="this.nombreEnfants--"
                    >-</span
                  >
                  <input
                    type="text"
                    class="nombre groupe"
                    name="nbenfants"
                    id="nbenfants"
                    v-model="this.nombreEnfants"
                  />
                  <span
                    class="btn-plus counter-plus"
                    @click="this.nombreEnfants++"
                    >+</span
                  ><span class="labelnb"> Enfants (0-17 ans)</span>
                </div>
              </span>
            </div>
            <div class="bloc">
              <span class="nombres-ajout pop">
                <div class="handle-counter" id="handleCounteradultes">
                  <span
                    class="btn-moins counter-minus"
                    @click="this.nombreAdultes--"
                    >-</span
                  >
                  <input
                    type="text"
                    class="nombre groupe"
                    name="nbadultes"
                    id="nbadultes"
                    v-model="this.nombreAdultes"
                  />
                  <span
                    class="btn-plus counter-plus"
                    @click="this.nombreAdultes++"
                    >+</span
                  ><span class="labelnb"> Adultes (18-64 ans)</span>
                </div>
              </span>
            </div>
            <div class="bloc">
              <span class="nombres-ajout pop">
                <div class="handle-counter" id="handleCounterseniors">
                  <span
                    class="btn-moins counter-minus"
                    @click="this.nombreSeniors--"
                    >-</span
                  >
                  <input
                    type="text"
                    class="nombre groupe"
                    name="nbseniors"
                    id="nbseniors"
                    v-model="this.nombreSeniors"
                  />
                  <span
                    class="btn-plus counter-plus"
                    @click="this.nombreSeniors++"
                    >+</span
                  ><span class="labelnb"> Personnes âgées (65+ ans)</span>
                </div>
              </span>
            </div>
            <router-link to="/3-type-dalimentation"
              ><button
                type="button"
                class="btn btn-principal"
                @click="
                  dispatchPopulation(
                    this.nombreAdultes,
                    this.nombreSeniors,
                    this.nombreEnfants
                  )
                "
              >
                Valider
              </button></router-link
            >
          </div>
        </div>
        <!-- modal body-->
      </div>
      <!-- modal-content -->
    </div>
  </div>
  <!-- modal-dialog -->
</template>

<script>
export default {
  data() {
    return {
      nombreAdultes: 0,
      nombreSeniors: 0,
      nombreEnfants: 0,
    };
  },
  methods: {
    fermerModale() {
      this.$emit("fermerModale");
    },
    dispatchPopulation(nombreAdultes, nombreSeniors, nombreEnfants) {
      this.$store.dispatch("actionModifierPopulation", {
        nombreAdultes,
        nombreSeniors,
        nombreEnfants,
      });
    },
  },
};
</script>
<style scoped>
.modals {
  display: static !important;
  width: 100% !important;
  height: 100% !important;
  background: rgba(0, 0, 0, 0.5) !important;
  position: absolute;
  top: 0;
  z-index: 9999;
}
</style>
