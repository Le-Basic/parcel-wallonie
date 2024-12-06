<template>
  <div class="chart">
    <v-chart :option="option" autoresize ref="treemap" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { TreemapChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { FormatterPourcentage } from "@/plugins/utils";

function enrichirSeriesAvecLabels(serieArray) {
  let series = serieArray.map((serie) => {
    serie.label = {
      fontSize: serie.value > 20 ? 40 : 16,
      overflow: "break",
      show: !props.hideLabels,
    };
    return { ...serie };
  });
  return series;
}

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
  couleurLabels: {
    type: String,
    default: "#000",
  },
  hideLabels: {
    type: Boolean,
    default: false,
  },
});

const option = computed(() => {
  return {
    grid: {
      left: "0%",
      right: "0%",
      top: 0,
      bottom: 0,
      containLabel: true,
    },
    textStyle: { fontFamily: "Work Sans", color: "#000", overflow: "break" },
    label: {
      show: !props.hideLabels,
      textStyle: {
        color: "#000",
      },
    },
    tooltip: {
      borderRadius: 0,
      formatter: function (categorieProduit) {
        let nomProduit = categorieProduit.name;
        let partTotal = categorieProduit.value / 100 ?? 0;
        let couleur = categorieProduit.data.itemStyle?.color ?? "#00a8ff";
        let tooltip = `<div class="tooltip-title" style="color:${couleur}">`;

        console.log("tooltip", tooltip);
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
        data: enrichirSeriesAvecLabels(props.serieDonnees),
      },
    ],
  };
});
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
