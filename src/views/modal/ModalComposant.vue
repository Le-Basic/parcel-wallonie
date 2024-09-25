<template>
  <div
    class="modals"
    id="modal-impact-climat1"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
      role="document"
      :style="{ 'max-width': maxWidth + 'px' }"
    >
      <div class="modal-content modal-repart-cat-detail">
        <ContenuModal @fermerModal="fermerModal" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineAsyncComponent, defineEmits } from "vue";

const emit = defineEmits(["fermerModal"]);

const props = defineProps({
  modalId: {
    type: String,
    required: true,
  },
  dossierModal: {
    type: String,
    required: false,
  },
  maxWidth: {
    type: Number,
    required: false,
    default: 950,
  },
});

const ContenuModal = defineAsyncComponent(() => {
  if (!props.dossierModal) {
    return import(`@/views/modal/${props.modalId}.vue`);
  } else {
    return import(`@/views/modal/${props.dossierModal}/${props.modalId}.vue`);
  }
});

const fermerModal = () => {
  console.log("fermerModal");
  emit("fermerModal");
};
</script>

<style scoped>
.modals {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
}
</style>
