<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation menuType="recherche" active="2" />
      <div class="section centrervh" id="section0">
        <div class="container">
          <h1>Choisissez la population concernée</h1>
          <resumeChoix />
          <div
            class="select-etablissement"
            v-for="institution in INSTITUTIONS"
            v-bind:key="institution.id"
          >
            <label
              class="container-checkbox"
              data-toggle="modal"
              @change="
                $event.target.checked
                  ? montrerModal(institution.id)
                  : changerCouverts({
                      nbCouverts: 0,
                      idInstitution: institution.id,
                    })
              "
              >{{ institution.libelle_pluriel }}
              <input
                type="checkbox"
                :name="institution.libelle_singulier"
                :checked="
                  nbCouvertsParInstitution.find(
                    (instit) => instit.institutionId == institution.id
                  ).nbCouverts > 0
                "
              />
              <span class="checkmark"></span>
            </label>
            <div
              v-if="
                nbCouvertsParInstitution.find(
                  (instit) => instit.institutionId == institution.id
                ).nbCouverts > 0
              "
            >
              <span class="nbr-couverts" v-if="nbCouvertsParInstitution">
                {{ trouverNbCouverts(institution.id) }}</span
              ><span class="couverts">couverts</span>
            </div>
            <modalInstitutionCouverts
              v-if="modalActive === institution.id"
              :nomInstitution="institution.libelle_singulier"
              :idInstitution="institution.id"
              @fermerModale="modalActive = -1"
              @changerNbCouverts="changerCouverts($event)"
            />
          </div>

          <div class="div-continuer">
            <router-link to="/3-type-dalimentation"
              ><button
                type="button"
                class="btn btn-principal mt-5"
                href="/3-type-dalimentation"
                @click="
                  dispatchActionModifierNbCouvertsInstitution(
                    nbCouvertsParInstitution
                  )
                "
              >
                Continuer
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <!-- modal-dialog -->
    </div>
  </div>
  <!-- modal -->
</template>

<script setup>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import resumeChoix from "@/views/modal/resumeChoix.vue";
import { INSTITUTIONS } from "@/config/Institutions.js";
import { ref } from "vue";
import modalInstitutionCouverts from "@/views/modal/modalInstitutionCouverts.vue";
import { useStore } from "vuex";

const store = useStore();
const modalActive = ref(null);

const montrerModal = (id) => {
  modalActive.value = id;
};

const nbCouvertsParInstitution = ref(store.state.nbCouvertsParInstitution);

const changerCouverts = (eventValue) => {
  const { nbCouverts, idInstitution } = eventValue;
  nbCouvertsParInstitution.value = nbCouvertsParInstitution.value.map((item) =>
    item.institutionId === idInstitution
      ? { institutionId: idInstitution, nbCouverts: nbCouverts }
      : item
  );
};

const trouverNbCouverts = (idInstitution) => {
  return (
    nbCouvertsParInstitution.value.find(
      (item) => item.institutionId === idInstitution
    ).nbCouverts ?? 0
  );
};

const dispatchActionModifierNbCouvertsInstitution = (
  nbCouvertsParInstitution
) => {
  store.dispatch(
    "actionModifierNbCouvertsParInstitution",
    nbCouvertsParInstitution
  );
};
</script>
