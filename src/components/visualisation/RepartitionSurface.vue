<template>
  <div class="chart">
    <v-chart :option="option" autoresize ref="treemap" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { TreemapChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { FormatterPourcentage } from "@/plugins/utils";

use([
  CanvasRenderer,
  TreemapChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const props = defineProps({
  serieDonnees: {
    type: Array,
    required: true,
  },
});

const option = {
  grid: {
    left: "0%",
    right: "0%",
    top: 0,
    bottom: 0,
    containLabel: true,
  },
  label: {
    show: true,
    overflow: "break",
    fontSize: 18,
  },
  tooltip: {
    borderRadius: 0,
    formatter: function (categorieProduit) {
      let nomProduit = categorieProduit.name;
      console.log(categorieProduit);
      let partTotal = categorieProduit.value / 100 ?? 0;
      let couleur = categorieProduit.data.itemStyle.color ?? "#00a8ff";
      let tooltip = `<div class="tooltip-title" style="color:${couleur}">`;

      console.log(tooltip);
      return [
        tooltip + nomProduit + "</div>",
        "Part : " + FormatterPourcentage(partTotal),
      ].join("");
    },
  },
  series: [
    {
      type: "treemap",
      roam: "move",
      width: "100%",
      height: "100%",
      nodeClick: false,
      breadcrumb: {
        show: false,
      },
      data: props.serieDonnees,
    },
  ],
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 450px;
  max-width: 100%;
  max-height: 100%;
}

.tooltip-title {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}
</style>
