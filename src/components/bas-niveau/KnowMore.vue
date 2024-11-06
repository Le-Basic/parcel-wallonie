<template>
  <div class="en-savoir-plus-container" @click="ouvrirModal()">
    C'est quoi ces chiffres ?
    <span class="icon-ico_element_info"></span>
  </div>
  <Modal v-if="isModalOpen" @close="isModalOpen = false" />
</template>

<script setup>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
const props = defineProps({
  ModalComposant: {
    type: String,
    required: true,
    default: "KnowMoreModal/ModalTest.vue",
  },
});

const Modal = defineAsyncComponent(() => import(`./${props.ModalComposant}`));

const isModalOpen = ref(false);
const ouvrirModal = () => {
  isModalOpen.value = true;
};
</script>

<style scoped>
.en-savoir-plus-container {
  display: flex;
  color: var(--vert);
  gap: 8px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  cursor: pointer;
}
</style>
