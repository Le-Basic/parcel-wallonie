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
              onclick="majitem('maternelle',$('#nbmaternelle').val());"
              @change="
                $event.target.checked
                  ? montrerModal(institution.id)
                  : changerCouverts({
                      nbCouverts: 0,
                      idInstitution: institution.id,
                    })
              "
              >{{ institution.libelle_pluriel }}
              <input type="checkbox" :name="institution.libelle_singulier" />
              <span class="checkmark"></span>
            </label>
            <div>
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
            <a href="/3-type-dalimentation"
              ><button
                type="button"
                onclick="initEgalim()"
                class="btn btn-principal mt-5"
                href="/3-type-dalimentation"
              >
                Continuer
              </button></a
            >
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
import { INSTITUTIONS, INSTITUTIONS_IDS } from "@/config/Institutions.js";
import { ref } from "vue";
import modalInstitutionCouverts from "@/views/modal/modalInstitutionCouverts.vue";

const modalActive = ref(null);

const montrerModal = (id) => {
  console.log("montrerModal", id);
  modalActive.value = id;
};

const nbCouvertsParInstitution = ref([
  {
    institutionId: INSTITUTIONS_IDS.MATERNELLES,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.PRIMAIRES,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.COLLEGES,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.LYCEES,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.UNIVERSITES,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.HOPITAUX,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.MAISONS_DE_RETRAITE,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.ENTREPRISES,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.AUTRES,
    nbCouverts: 0,
  },
]);

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

//TODO: Faire le commit dans le store
//TODO: Changer les liens pour des router-link
//TODO: Ajouter dans le chapeau résumé informations les données pour les couverts
</script>
