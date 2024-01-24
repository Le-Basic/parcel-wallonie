<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  setup() {
    const option = ref({
      series: [
        {
          name: "Traffic Sources",
          type: "pie",
          color: ["#00a8ff", "#EEEEEE"],
          radius: ["50%", "70%"],
          data: [
            { value: 1.3, name: "1%" },
            { value: 99, name: "" },
          ],
          label: {
            show: true,
            position: "center",
            fontSize: 10,
            fontWeight: "bold",
          },
          itemStyle: {
            borderRadius: 1,
            borderColor: "#fff",
            borderWidth: 1,
          },
        },
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 100px;
}
</style>
