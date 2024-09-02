<template>
  <div class="bloc">
    <span class="nombres-ajout nbr-ajout-big pop">
      <div class="handle-counter" id="handleCounteradultes">
        <span class="btn-moins counter-minus" @click="nbCouverts--">-</span>
        <input
          type="text"
          class="nombre groupe"
          name="nbadultes"
          id="nbadultes"
          v-model="nbCouverts"
        />
        <span class="btn-plus counter-plus" @click="nbCouverts++">+</span>
      </div>
    </span>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  nbCouvertsDefaut: Number,
});

const emits = defineEmits(["changerNbCouverts"]);

const nbCouverts = ref(props.nbCouvertsDefaut);
emits("changerNbCouverts", nbCouverts.value);

watch(nbCouverts, (newValue) => {
  console.log("nbCouverts", newValue);
  emits("changerNbCouverts", newValue);
});
</script>

<style scoped>
.handle-counter input {
  height: auto !important;
}
</style>
