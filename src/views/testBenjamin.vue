<template>
  <h2>Salut Benjam</h2>
  Store:
  <pre>{{ $store.state }} </pre>
  <pre v-if="surfaces"> {{ surfaces }}</pre>
</template>

<script>
import { getSurfaceAMobiliser } from "@/plugins/getSurfacesNecessaires";

export default {
  name: "TestBenjamin",
  data() {
    return {
      surfaces: null,
    };
  },
  async mounted() {
    this.surfaces = await getSurfaceAMobiliser();
  },
};

// <!-- enrichir la fonction getSurfaceAMobiliser qui est pour l'instant fausse
// - le surfaces_a_mobiliser est une somme des surface_necessaire_conventionnel alors que ca doit être cette fonction:<template>
//   partbioelevage * surface necessaire bio elevage + (1 - partbioelevage) * surface necessaire conventionnel + surface necessaire bio vegetal * partbiovegetal + surface necessaire bio vegetal * (1 - partbiovegetal) ... ca pour les 4 postes
// - les part bios sont dans le store qu'on utilise qui s'appelle vuex
// - il faudrait aussi ajouter dans la liste surfaces_emplois_a_mobiliser_parcel_niveau_1 pour chaque item la part  -->
</script>

<style></style>
