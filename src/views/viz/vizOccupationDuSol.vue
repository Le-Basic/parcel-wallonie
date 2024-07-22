<template>
  <p class="text-h3">Occupation du sol sur le territoire</p>
  <div class="graphique">
    <v-chart :option="option" style="width: 100%" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const dataOccupationDuSol = [
  store.state.indicateurPortraits.walstat_espace_agricoles_ha,
  store.state.indicateurPortraits.walstat_espaces_naturels_ha,
  store.state.indicateurPortraits.walstat_espace_artificialise_ha,
];

console.log(dataOccupationDuSol);
let totalData = 0;

for (let j = 0; j < dataOccupationDuSol.length; ++j) {
  totalData += dataOccupationDuSol[j];
}

const colors = ["#91C423", "#025A5C", "#0c1321"];
const grid = {
  left: 100,
  right: 0,
  top: 0,
  bottom: 0,
};
const series = [
  "Surface Agricole",
  "Espaces Naturels",
  "Espaces Artificialisés",
].map((name, sid) => {
  return {
    name,
    type: "bar",
    stack: "total",
    barWidth: "50%",
    color: colors[sid],
    label: {
      show: true,
      position: "left",
      distance: 50,
      color: colors[sid],
      formatter: (params) =>
        name + "\n" + Math.round(params.value * 1000) / 10 + "%",
    },

    data: [dataOccupationDuSol[sid] / totalData],
  };
});

console.log(series);
const option = {
  grid,
  yAxis: {
    type: "value",
    show: false,
  },
  xAxis: {
    type: "category",
    data: ["Occupation du sol"],
    show: false,
  },
  series,
};
</script>

<style scoped>
.graphique {
  min-width: 100px;
  height: 100%;
  min-width: 200px;
  width: 100%;
  margin: auto;
}

.echarts-inner {
  margin: auto;
}
</style>
