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
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3 } from "@/config/categorieProduitsPotentielNourricier";
import { AfficherEntier, trouverChiffre } from "@/plugins/utils";
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
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.CEREALES.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_3"
    ),
    itemStyle: {
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.CEREALES
          .couleur,
    },
    label: {
      show: true,
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.CEREALES
          .couleur,
    },
    nomSerie: LIBELLE_XAXIS[0],
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.LEGUMES.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_3"
    ),
    itemStyle: {
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.LEGUMES
          .couleur,
    },
    label: {
      show: true,
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.LEGUMES
          .couleur,
    },
    nomSerie: LIBELLE_XAXIS[1],
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.FRUITS.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_3"
    ),
    itemStyle: {
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.FRUITS.couleur,
    },
    label: {
      show: true,
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.FRUITS.couleur,
    },
    nomSerie: LIBELLE_XAXIS[2],
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.PRODUITS_LAITIERS
        .libelle,
      "consommation_kg",
      "libelle_parcel_niveau_3"
    ),
    itemStyle: {
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3
          .PRODUITS_LAITIERS.couleur,
    },
    label: {
      show: true,
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3
          .PRODUITS_LAITIERS.couleur,
    },
    nomSerie: LIBELLE_XAXIS[3],
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.VIANDE_ROUGE
        .libelle,
      "consommation_kg",
      "libelle_parcel_niveau_3"
    ),
    itemStyle: {
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.VIANDE_ROUGE
          .couleur,
    },
    label: {
      show: true,
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.VIANDE_ROUGE
          .couleur,
    },
    nomSerie: LIBELLE_XAXIS[4],
  },
  {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.VIANDE_BLANCHE
        .libelle,
      "consommation_kg",
      "libelle_parcel_niveau_3"
    ),
    itemStyle: {
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.VIANDE_BLANCHE
          .couleur,
    },
    label: {
      show: true,
      color:
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE_NIVEAU3.VIANDE_BLANCHE
          .couleur,
    },
    nomSerie: LIBELLE_XAXIS[5],
  },
]);

use([GridComponent, BarChart, CanvasRenderer]);

const options = ref({
  grid: {
    containLabel: true,
    left: 0,
    top: 30,
    right: 30,
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
      show: false,
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
        position: ["0", "-32"],
        align: "left",

        formatter: function (d) {
          console.log(d.data);
          return (
            "{bold|" +
            d.data.nomSerie +
            "}\n" +
            AfficherEntier(d.data.value / 1000)
          );
        },
        rich: {
          bold: {
            fontWeight: "bold",
          },
        },
      },
    },
  ],
  textStyle: { fontFamily: "Work Sans", rich: { test: { color: "red" } } },
});
</script>

<style scoped>
.graphique-container {
  margin: auto;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.graphique {
  height: 100%;
  width: 100%;
}
</style>
