<template>
  <div class="modal modal-simple-petit">
    <div class="modal-body text-center">
      <div class="modal-header">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
          @click="fermerModale"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="titre-categorie">{{ props.nomInstitution }}</div>
      <div class="">Nombre de couverts à la cantine par jour</div>
      <div class="text-center mt-4">
        <div
          class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
        >
          <CompteurPersonnes
            nbCouvertsDefaut="50"
            @changerNbCouverts="nbCouverts = $event"
          />
        </div>
      </div>
      <div class="div-continuer">
        <button
          type="button"
          class="btn btn-principal mt-5"
          @click="confirmNbCouverts"
        >
          Continuer
        </button>
      </div>
    </div>
    <!-- modal body-->
    <!-- modal-content -->
  </div>
  <!-- modal-dialog -->
</template>
<script setup>
import { defineProps, defineEmits, ref } from "vue";
import CompteurPersonnes from "@/components/bas-niveau/CompteurPersonnes.vue";

const emits = defineEmits({
  fermerModale: null,
  changerNbCouverts: { nb_couverts: Number, id: Number },
});
const props = defineProps({
  nomInstitution: String,
  idInstitution: Number,
});

const nbCouverts = ref(150);

const fermerModale = () => {
  console.log("fermerModale");
  emits("fermerModale");
};

const confirmNbCouverts = () => {
  console.log("confirmNbCouverts", nbCouverts.value);
  emits("fermerModale");
  emits("changerNbCouverts", {
    nb_couverts: nbCouverts.value,
    id: props.idInstitution,
  });
};
</script>

<style scoped>
.modal {
  position: fixed;
  display: block !important;
  top: 0;
  left: 0;
  opacity: 1 !important;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  z-index: 9999;
  width: 100%;
}

.modal-body {
  background-color: white;
  padding: 20px;
  width: 600px;
  margin: 0 auto;
  margin-top: 10%;
}
</style>
