<template>
  <div class="graphique">
    <v-chart :option="option" style="width: 100%; height: 100%" />
  </div>
</template>

<script setup>
const colors = ["#BDC660 ", "#f8f8f3"];

const grid = {
  top: 0,
  bottom: 0,
  right: 0,
};

const option = {
  grid: grid,
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
