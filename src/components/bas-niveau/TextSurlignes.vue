<template>
  <span class="texte-surligne" @click="ouvrirModal()">
    <slot></slot>
  </span>
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
.texte-surligne {
  text-decoration-line: underline;
  text-decoration-style: dashed;
  cursor: pointer;
}

.texte-surligne:hover {
  text-decoration: underline;
  background-color: var(--vert);
  color: white;
  cursor: pointer;
}
</style>
