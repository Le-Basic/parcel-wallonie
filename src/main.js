import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/surfaces.css";
import "./css/styles.css";
import "./css/animate-perso.css";
import "./css/animate-simplifie.css";
import "./css/animate.css";
import "./css/nav.css";
import "./css/odometer-theme-default.css";
import "./css/select-alim.css";
import "./css/sidebar.css";
import "./css/style-modal-right.css";
import "./css/style-range.css";
import "./css/style-font.css";
import ECharts from "vue-echarts";
import $axios from "./plugins/axios.js";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import { MotionPlugin } from "@vueuse/motion";

window.apiURL = "https://lebasic.nohost.me/api/";
const resizeObserverErrMsg = "ResizeObserver loop limit exceeded";

window.addEventListener("error", (e) => {
  if (e.message === resizeObserverErrMsg) {
    e.stopImmediatePropagation();
  }
});
createApp(App)
  .use(store)
  .use(router)
  .use($axios)
  .use(PrimeVue)
  .use(MotionPlugin)
  .component("v-chart", ECharts)
  .mount("#app");
