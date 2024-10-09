<template>
  <div class="graphique">
    <v-chart :option="option" style="width: 100%" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const colors = ["#91c423", "#f8f8f3"];

const option = {
  tooltip: {
    show: false,
  },
  legend: {
    show: false,
  },
  animation: false,

  series: [
    {
      type: "pie",
      color: colors,
      roam: "move",
      nodeClick: false,
      silent: true,

      startAngle: 0,
      label: {
        show: false,
      },
      data: [
        { name: "Emplois Agricoles", value: 0.015 },
        { name: "Autres", value: 0.985 },
      ],
    },
  ],
  textStyle: { fontFamily: "Work Sans", rich: { test: { color: "red" } } },
};
</script>

<style scoped>
.graphique {
  height: 400px;
  min-width: 200px;
  width: 400px;
  margin: auto;
}

.echarts-inner {
  margin: auto;
}
</style>
