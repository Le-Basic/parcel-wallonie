<script setup></script>

<template>
  <div class="container">
    <div class="row">
      <div class="coltest">
        <h1>Test Motion</h1>
        <div class="target" v-motion-slide-visible-bottom>1</div>
        <div class="target2" v-motion-slide-visible-bottom>2</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.target {
  width: 100vh;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
}
.target2 {
  width: 100vh;
  height: 100vh;
  background-color: purple;
  display: flex;
  flex-direction: column;
}

.coltest {
  display: flex;
  flex-direction: column;
}
</style>
