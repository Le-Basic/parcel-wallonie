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
    left: "10%",
    right: "10%",
    top: 0,
    bottom: 0,
  },
  label: {
    show: true,
    fontSize: 18,
  },
  tooltip: {
    borderRadius: 0,
    formatter: function (categorieProduit) {
      let nomProduit = categorieProduit.name;
      let partTotal = categorieProduit.data.part ?? 0;
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
      nodeClick: false,
      breadcrumb: {
        show: false,
      },
      data: props.serieDonnees,
      //   [
      //     {
      //       name: "nodeA",
      //       value: 40,
      //       part: 0.1,
      //       itemStyle: {
      //         color: "#B57A60",
      //       },
      //     },
      //     {
      //       name: "nodeB",
      //       value: 20,
      //       part: 0.2,
      //       // choose color of nodeB
      //       itemStyle: {
      //         color: "#ff0000",
      //       },
      //     },
      //   ],
    },
  ],
};
</script>

<style scoped>
.chart {
  width: 550px;
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
