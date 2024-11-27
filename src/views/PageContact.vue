<template>
  <MenuSimple />
  <div class="container mt-auto mb-auto">
    <div class="bloc-titre">
      <h1>Nous contacter</h1>
      <h2>
        Une bug, une question, une requête ou bien une félicitation! N'hésitez
        pas à nous contacter à l'adresse suivante: contact@parcel-wallonie.be
      </h2>
    </div>
    <a href="contact@parcel-app.org"
      ><button type="button" class="btn btn-principal mt-4 mb-5">
        Nous écrire
      </button></a
    >
  </div>
</template>

<script setup>
import MenuSimple from "@/components/Menu/MenuSimple.vue";
</script>

<style scoped>
h2 {
  font-size: 32px;
  line-height: 1.1;
}
</style>
