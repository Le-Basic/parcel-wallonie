<template>
  <div class="graphique-container">
    <v-chart class="graphique" :option="options" autoresize />
    <div class="arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 85 89.6875"
        enable-background="new 0 0 85 71.75"
        xml:space="preserve"
        fill="#38A13F"
      >
        <path
          d="M9.921,1.949L0.31,22.754c-0.777,1.684-0.043,3.678,1.64,4.455c1.684,0.776,3.677,0.043,4.455-1.64H6.404l6.41-13.874  c4.849,19.145,12.89,32.377,21.896,41.376c10.578,10.583,22.37,15.247,31.464,17.233c9.106,1.99,15.558,1.352,15.806,1.33  c1.844-0.188,3.188-1.834,3.002-3.678c-0.081-0.801-0.438-1.507-0.965-2.034c-0.688-0.688-1.67-1.073-2.713-0.968l-0.001,0.001  c0,0,0,0-0.022,0.001c-0.479,0.045-6.402,0.495-14.442-1.384c-8.05-1.884-18.178-6.048-27.381-15.249  c-8.105-8.112-15.574-20.192-20.174-38.43l13.689,6.188c1.689,0.764,3.679,0.014,4.442-1.676c0.591-1.31,0.273-2.799-0.687-3.758  c-0.278-0.278-0.61-0.512-0.991-0.685L14.35,0.298C12.67-0.46,10.694,0.277,9.921,1.949z"
        />
      </svg>
      <strong class="text-vert-bio"
        >Part de bio pour chacune des catégories</strong
      >
    </div>
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import { GridComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { computed } from "vue";
import { useStore } from "vuex";
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE } from "@/config/categorieProduitsPotentielNourricier";
import { trouverChiffre, AfficherEntier } from "@/plugins/utils";
const store = useStore();
const LIBELLE_XAXIS = [
  "Céréales",
  "Légumes",
  "Fruits",
  "Produits laitiers",
  "Viande \net oeufs",
];
function trouverPartBio(objectNomenclature) {
  switch (objectNomenclature["libelle"]) {
    case "Elevage":
      return store.state.partbioelevage;
    case "Fruits":
      return store.state.partbiofruits;
    case "Légumes":
      return store.state.partbiolegumes;
    case "Céréales et autres cultures":
      return store.state.partbiocereales;
    case "Produits Laitiers":
      return store.state.partbioelevage;
  }
}

function creerDataDict(objetNomenclature) {
  return {
    value: trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      objetNomenclature.libelle,
      "consommation_kg",
      "libelle_parcel_niveau_2"
    ),
    differenceEntreReferenceSimulation: AfficherEntier(
      (trouverChiffre(
        store.state.resultatSimulation.surfacesEmploisAMobiliser,
        objetNomenclature.libelle,
        "consommation_kg",
        "libelle_parcel_niveau_2"
      ) /
        trouverChiffre(
          store.state.resultatReference.surfacesEmploisAMobiliser,
          objetNomenclature.libelle,
          "consommation_kg",
          "libelle_parcel_niveau_2"
        ) -
        1) *
        100
    ),
    consommationBio:
      (trouverChiffre(
        store.state.resultatSimulation.surfacesEmploisAMobiliser,
        objetNomenclature.libelle,
        "consommation_kg",
        "libelle_parcel_niveau_2"
      ) *
        trouverPartBio(objetNomenclature)) /
      100,

    itemStyle: {
      color: objetNomenclature.couleur,
    },
  };
}

const data = computed(() => {
  return [
    creerDataDict(CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.CEREALES),
    creerDataDict(CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LEGUMES),
    creerDataDict(CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.FRUITS),
    creerDataDict(CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.LAIT),
    creerDataDict(CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE.ELEVAGE),
  ];
});

const dataBio = computed(() => {
  return data.value.map((item) => {
    return { value: item.consommationBio };
  });
});

use([GridComponent, BarChart, CanvasRenderer]);

const options = computed(() => {
  return {
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
      position: "right",

      axisLabel: {
        show: true,
        interval: 0,
        color: "white",
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
          show: true,
          formatter: (item) => {
            console.log(item);
            return (
              "Diff. \nde conso: \n" +
              item.data.differenceEntreReferenceSimulation +
              "%"
            );
          },
          position: "right",
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
  };
});
</script>

<style scoped>
.graphique-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 50;
  width: 1000px;
}

.graphique {
  height: 450px;
}

.arrow {
  padding-left: calc(10px + 1%);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
}

.arrow > svg {
  width: 50px;
}
</style>
