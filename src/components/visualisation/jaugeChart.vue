<template>
  <v-chart class="chart" :option="option" autoresize ref="jauge" />
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
  props: {
    value: {
      type: Number,
      default: 10,
    },
    couleur: {
      type: String,
      default: "#00a8ff",
    },
  },
  provide: {
    [THEME_KEY]: "light",
  },
  methods: {
    updateChart() {
      // Use nextTick to ensure the chart updates after the data change
      this.$nextTick(() => {
        console.log("updateChart");
        this.$refs.jauge.clear();
        this.$refs.jauge.setOption(this.option);
      });
    },
  },
  setup(props) {
    const option = ref({
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      series: [
        {
          type: "pie",
          color: [props.couleur, "#EEEEEE"],
          radius: ["80%", "100%"],
          data: [
            {
              value: props.value,
              name: String(props.value) + "%",
              itemStyle: {
                borderRadius: 5,
                borderColor: "#fff",
              },
            },
            { value: 100 - props.value, name: "" },
          ],
          label: {
            show: true,
            position: "center",
            fontSize: 13,
            color: "#594231 ",
          },
          hoverAnimation: false,
          silent: true,
        },
      ],
    });

    return { option };
  },
});
</script>

<style scoped>
.chart {
  height: 100%;
  position: relative;
}
</style>
