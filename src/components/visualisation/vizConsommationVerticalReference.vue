<template>
  <div class="graphique-container">
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
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE } from "@/config/categorieProduitsPotentielNourricier";
import { trouverChiffre } from "@/plugins/utils";
const store = useStore();
const LIBELLE_XAXIS = [
  "Céréales",
  "Légumes",
  "Fruits",
  "Produits laitiers",
  "Viande Rouge",
  "Viande Blanche",
];

const data = ref([
  {
    value: trouverChiffre(
      store.state.resultatReference.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.CEREALES.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_2"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.CEREALES.couleur,
    },
  },
  {
    value: trouverChiffre(
      store.state.resultatReference.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LEGUMES.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_2"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LEGUMES.couleur,
    },
  },
  {
    value: trouverChiffre(
      store.state.resultatReference.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.FRUITS.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_2"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.FRUITS.couleur,
    },
  },
  {
    value: trouverChiffre(
      store.state.resultatReference.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LAIT.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_2"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LAIT.couleur,
    },
  },
  {
    value: trouverChiffre(
      store.state.resultatReference.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.ELEVAGE.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_2"
    ),
    itemStyle: {
      color: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.ELEVAGE.couleur,
    },
  },
]);

const dataBio = ref(
  data.value.map((item) => {
    return { value: item.value * 0.6 };
  })
);

use([GridComponent, BarChart, CanvasRenderer]);

const options = ref({
  grid: {
    containLabel: true,
    left: 10,
    top: 0,
    right: 0,
    bottom: 0,
  },
  yAxis: {
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
    },
    axisTick: {
      show: false,
      interval: 0,
    },
  },
  xAxis: {
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
      barGap: "0%",
      barCategoryGap: "5%",
      label: {
        show: true,
      },
    },
    {
      data: dataBio.value,
      barWidth: "5px",
      colorBy: "series",
      itemStyle: {
        color: "#38A13F",
      },
      barGap: "0%",
      type: "bar",
      label: {
        show: false,
      },
    },
  ],
});
</script>

<style scoped>
.graphique-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 50;
}

.graphique {
  min-height: 500px;
}
</style>
