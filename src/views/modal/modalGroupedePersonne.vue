<template>
  <div
    class="modals modal-simple"
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
            <span class="icon-ico_navigation_population icon vert-clair"></span>
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
            @click="
              this.$store.dispatch('resetPopulation');
              this.$emit('close');
            "
          >
            <span class="icon-ico_fermer icon"></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="bloc">
            <span class="nombres-ajout pop">
              <div class="handle-counter" id="handleCounterenfants">
                <span
                  @click="
                    this.$store.dispatch('reduirePopulation', 'nbEnfants')
                  "
                  class="btn-moins counter-minus"
                  >-</span
                >
                <input
                  type="text"
                  class="nombre groupe"
                  name="nbenfants"
                  id="nbenfants"
                  value="150"
                  v-model="this.$store.state.population.nbEnfants"
                />
                <span
                  @click="
                    this.$store.dispatch('incrementerPopulation', 'nbEnfants')
                  "
                  class="btn-plus counter-plus"
                  >+</span
                ><span class="labelnb"> Enfants (0-17 ans)</span>
              </div>
            </span>
          </div>
          <div class="bloc">
            <span class="nombres-ajout pop">
              <div class="handle-counter" id="handleCounteradultes">
                <span
                  @click="
                    this.$store.dispatch('reduirePopulation', 'nbAdultes')
                  "
                  class="btn-moins counter-minus"
                  >-</span
                >
                <input
                  type="text"
                  class="nombre groupe"
                  name="nbadultes"
                  id="nbadultes"
                  v-model="this.$store.state.population.nbAdultes"
                />
                <span
                  @click="
                    this.$store.dispatch('incrementerPopulation', 'nbAdultes')
                  "
                  class="btn-plus counter-plus"
                  >+</span
                ><span class="labelnb"> Adultes (18-64 ans)</span>
              </div>
            </span>
          </div>
          <div class="bloc">
            <span class="nombres-ajout pop">
              <div class="handle-counter" id="handleCounterseniors">
                <span
                  @click="
                    this.$store.dispatch('reduirePopulation', 'nbSeniors')
                  "
                  class="btn-moins counter-minus"
                  >-</span
                >
                <input
                  type="text"
                  class="nombre groupe"
                  name="nbseniors"
                  id="nbseniors"
                  value="150"
                  v-model="this.$store.state.population.nbSeniors"
                />
                <span
                  @click="
                    this.$store.dispatch('incrementerPopulation', 'nbSeniors')
                  "
                  class="btn-plus counter-plus"
                  >+</span
                ><span class="labelnb"> Personnes âgées (65+ ans)</span>
              </div>
            </span>
          </div>
          <router-link to="/3-type-dalimentation"
            ><button type="button" class="btn btn-principal">
              Valider
            </button></router-link
          >
        </div>
      </div>
      <!-- modal body-->
    </div>
  </div>
</template>

<script></script>
<style scoped>
.modals {
  position: absolute;
  top: 0;
  width: 100vw;
  margin: auto;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}

.btn-moins,
.btn-plus {
  cursor: pointer;
  height: 39px;
}

.nombre {
  height: 21.5px !important;
}

.handle-counter {
  display: flex;
  align-items: flex-start;
}
</style>
