import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "@/router";
import VueApexCharts from "vue3-apexcharts";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(ElementPlus)
  .use(VueApexCharts)
  .use(VueGoogleMaps, {
    load: {
      key: process.env.VUE_APP_GOOGLE_MAPS_TOKEN,
    },
  })
  .use(router)
  .mount("#app");
