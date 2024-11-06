<template>
  <div>
    <h2 @click="changeAnswerVisibility()" class="title-question">
      <img
        src="img/fleches/fleche-bas-vert.svg"
        :class="{ 'arrow-up': isAnswerShown }"
      />
      <slot name="titreQuestion"></slot>
    </h2>
    <p v-if="isAnswerShown" class="answer">
      <slot name="reponseQuestion"></slot>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isAnswerShown = ref(false);

const changeAnswerVisibility = () => {
  isAnswerShown.value = !isAnswerShown.value;
};
</script>

<style scoped>
.title-question {
  font-weight: 500;
  font-size: 19px;
  color: var(--bleu);
  line-height: 1.2;
  padding-left: 8px;
  margin-top: 0.5rem;
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--vert);
  text-align: left;
}
.arrow-up {
  transform: rotate(180deg);
}

.answer {
  transition: max-height 0.5s;
  text-align: left;
  padding-left: 40px;
}
</style>
