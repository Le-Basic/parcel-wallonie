<template>
  <div class="asy-wrapper">
    <div class="content">
      <!-- <?php include '../partials/nav2.php'; ?> -->
      <div class="section centrervh" id="section0">
        <div class="container">
          <h1>Choisissez la population concernée</h1>
          <!-- <?php include '../partials/resum-result.php'; ?> -->
          <div
            class="select-etablissement"
            v-for="institution in INSTITUTIONS"
            v-bind:key="institution.id"
          >
            <label
              class="container-checkbox"
              data-toggle="modal"
              onclick="majitem('maternelle',$('#nbmaternelle').val());"
              @change="if ($event.target.checked) montrerModal(institution.id);"
              >{{ institution.libelle_pluriel }}
              <input type="checkbox" :name="institution.libelle_singulier" />
              <span class="checkmark"></span>
            </label>
            <div>
              <span class="nbr-couverts">50</span
              ><span class="couverts">couverts</span>
            </div>
            <modalInstitutionCouverts
              v-if="modalActive === institution.id"
              :nomInstitution="institution.libelle_singulier"
              @fermerModale="modalActive = -1"
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
import { INSTITUTIONS, INSTITUTIONS_IDS } from "@/config/Institutions";
import { ref } from "vue";
import modalInstitutionCouverts from "@/views/modal/modalInstitutionCouverts.vue";

const modalActive = ref(null);

const montrerModal = (id) => {
  console.log("montrerModal", id);
  modalActive.value = id;
};

const nbCouvertsParInstitution = ref([
  {
    institutionId: INSTITUTIONS_IDS.MATERNELLE,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.PRIMAIRE,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.COLLEGE,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.LYCEE,
    nbCouverts: 0,
  },
  {
    institutionId: INSTITUTIONS_IDS.ETABLISSEMENT_SPECIALISE,
    nbCouverts: 0,
  },
]);
</script>
