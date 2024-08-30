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
          <div class="handle-counter" id="handleCountermaternelle">
            <span class="btn-moins counter-minus">-</span>
            <input
              type="text"
              class="nombre"
              name="nbmaternelle"
              id="nbmaternelle"
              value="150"
            />
            <span class="btn-plus counter-plus">+</span>
          </div>
        </div>
      </div>
      <div class="div-continuer">
        <button
          type="button"
          onclick="initEgalim()"
          class="btn btn-principal mt-5"
          href="/3-type-dalimentation"
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
import { defineProps, defineEmits } from "vue";

const emits = defineEmits(["fermerModale"]);
const props = defineProps({
  nomInstitution: String,
});

const fermerModale = () => {
  console.log("fermerModale");
  emits("fermerModale");
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
