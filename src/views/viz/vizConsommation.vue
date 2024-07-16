<template>
  <div>
    <p class="text-h3">Consommation en matière première de la population</p>
    <v-chart class="graphique" :option="options" autoresize />
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { ref } from "vue";
import { useStore } from "vuex";
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER } from "@/config/categorieProduitsPotentielNourricier";
import { AfficherEntier, trouverChiffre } from "@/plugins/utils";
const store = useStore();
const LIBELLE_XAXIS = [
  "Céréales",
  "Fruits",
  "Légumes",
  "Produits laitiers",
  "Viande",
];

const data = ref([
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_1"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES.couleur,
    },
    label: { show: true, position: "top" },
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_1"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.couleur,
    },
    label: { show: true, position: "top" },
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_1"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.couleur,
    },
    label: { show: true, position: "top" },
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_1"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.couleur,
    },
    label: { show: true, position: "top" },
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_1"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.couleur,
    },
    label: { show: true, position: "top" },
  },
]);

use([GridComponent, BarChart, CanvasRenderer]);

const options = ref({
  grid: {
    containLabel: true,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  xAxis: {
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    type: "category",
    data: LIBELLE_XAXIS,
    axisLabel: {
      show: true,
      interval: 0,
      rotate: 45,
    },
    axisTick: {
      show: false,
      interval: 0,
    },
  },
  yAxis: {
    splitLine: {
      show: false,
    },
    axisLabel: { show: false },
    type: "value",
  },
  series: [
    {
      data: data.value,
      type: "bar",
      label: {
        show: true,
        position: "top",
        formatter: function (d) {
          return AfficherEntier(d.data.value / 1000);
        },
      },
    },
  ],
});
</script>

<style scoped>
.graphique {
  height: 450px;
  max-width: 600px;
}
</style>
