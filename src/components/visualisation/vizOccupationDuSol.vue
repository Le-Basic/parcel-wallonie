<template>
  <div class="graphique">
    <v-chart :option="option" style="width: 100%; height: 100%" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { AfficherEntier } from "@/plugins/utils";

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

const colors = ["#bdc660", "#594231", "#B0C7C7"];
const option = {
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },

  series: [
    {
      type: "pie",
      color: colors,
      startAngle: 180,
      label: {
        formatter: function (d) {
          return (
            "{bold|" + AfficherEntier(d.data.value * 100) + "%}\n" + d.data.name
          );
        },
        overflow: "break",
        rich: {
          bold: {
            fontWeight: "bold",
          },
        },
      },
      data: [
        "Surface Agricole",
        "Espaces Naturels",
        "Espaces Artificialisés",
      ].map((name, sid) => {
        return {
          name: name,
          value: dataOccupationDuSol[sid] / totalData,
          label: {
            color: colors[sid],
          },
        };
      }),
    },
  ],
  textStyle: { fontFamily: "Work Sans", rich: { test: { color: "red" } } },
};
</script>

<style scoped>
.graphique {
  margin: auto;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.echarts-inner {
  margin: auto;
}
</style>
