<template>
  <div>
    <v-chart class="graphique" :option="option" autoresize />
  </div>
</template>

<script setup>
// There should not be negative values in rawData
const rawData = [[100], [320], [220], [150], [820]];
const totalData = [];
for (let i = 0; i < rawData[0].length; ++i) {
  let sum = 0;
  for (let j = 0; j < rawData.length; ++j) {
    sum += rawData[j][i];
  }
  totalData.push(sum);
}

const colors = ["#91C423", "#025A5C", "#0c1321"];
const grid = {
  left: 100,
  right: 100,
  top: 50,
  bottom: 50,
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
    barWidth: "60%",
    color: colors[sid],
    label: {
      show: true,
      position: "left",
      distance: 50,
      color: colors[sid],
      formatter: (params) =>
        name + "\n" + Math.round(params.value * 1000) / 10 + "%",
    },
    labelLine: {
      show: true,
      lineStyle: {
        join: "miter",
      },
    },
    data: rawData[sid].map((d, did) =>
      totalData[did] <= 0 ? 0 : d / totalData[did]
    ),
  };
});
const option = {
  grid,
  yAxis: {
    type: "value",
    show: false,
  },
  xAxis: {
    type: "category",
    data: ["Mon"],
    show: false,
  },
  series,
};
</script>

<style scoped>
.graphique {
  height: 450px;
  width: 600px;
}
</style>
