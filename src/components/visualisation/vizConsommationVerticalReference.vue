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
  "Viande \net oeufs",
];

const data = ref([
  {
    libelle: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.CEREALES.libelle,
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
    libelle: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LEGUMES.libelle,
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
    libelle: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.FRUITS.libelle,
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
    libelle: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LAIT.libelle,
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
    libelle: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.ELEVAGE.libelle,
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

let dataTotal = data.value
  .map((item) => {
    return Number(item.value);
  })
  .reduce((total, valeur) => total + valeur, 0);
console.log("total", dataTotal);
const dataBio = ref(
  data.value.map((item) => {
    let valeur;
    switch (item.libelle) {
      case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LEGUMES.libelle:
        valeur = (item.value * store.state.curseursBioMin.partbiolegumes) / 100;
        break;
      case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.ELEVAGE.libelle:
        valeur = (item.value * store.state.curseursBioMin.partbioelevage) / 100;
        break;
      case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LAIT.libelle:
        valeur = (item.value * store.state.curseursBioMin.partbioelevage) / 100;
        break;
      case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.CEREALES.libelle:
        valeur =
          (item.value * store.state.curseursBioMin.partbiocereales) / 100;
        break;
      case CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.FRUITS.libelle:
        valeur = (item.value * store.state.curseursBioMin.partbiofruits) / 100;
        break;
    }
    console.log("value", item.value, valeur);
    return { value: valeur };
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
    max: 1000000000,
  },
  series: [
    {
      data: data.value,

      type: "bar",
      barGap: "0%",
      barCategoryGap: "5%",
      label: {
        position: "insideLeft",
        color: "white",
        show: true,
        formatter: (item) => {
          console.log(item.value / dataTotal);
          return item.value / dataTotal > 0.05
            ? Intl.NumberFormat("fr-FR").format(item.value)
            : "";
        },
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
  width: 1000px;
  align-items: flex-start;
}

.graphique {
  height: 450px;
}
</style>
