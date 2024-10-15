<template>
  <div class="information-box">
    <slot name="texte"> </slot>
  </div>
</template>

<style scoped>
.information-box {
  font-size: 20px;
  color: var(--vert);
  font-weight: 400;
  border: 1px solid var(--vert);
  font-family: "Work Sans", sans-serif;
  padding: 16px;
  margin: 16px;
}
</style>
