<template>
  <ul class="grille">
    <li
      v-for="i in 100"
      :key="i"
    >
      <!-- Your Vue dynamic content here -->
      <span
        class="icon-emploi"
        :style="{ color: i < emplois_nombre ? couleur : '' }"
      />
    </li>
  </ul>
</template>

<script>
import { trouverChiffre } from "@/plugins/utils";

export default {
  name: "VizEmploi",
  props: {
    objetEmplois: {
      type: Object,
      required: true,
    },
    couleur: {
      type: String,
      default: "red",
    },
    categorieProduitLibelle: {
      type: String,
      required: true,
    },
  },
  computed: {
    emplois_nombre() {
      console.log(this.objetEmplois);
      return trouverChiffre(
        this.objetEmplois,
        this.categorieProduitLibelle,
        "emploi_conventionnel"
      );
    },
  },
  methods: {
    trouverChiffre,
  },
};
</script>

<!-- Optionally, add a style block for any CSS styles -->
<style scoped>
.grille {
  display: grid;
  grid-template-columns: repeat(25, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
}

.grille li {
  list-style: none;
}
.cereales-emploi {
  color: red;
}
</style>
