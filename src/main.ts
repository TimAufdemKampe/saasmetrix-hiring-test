import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "@/router";
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(ElementPlus).use(VueApexCharts).use(router).mount("#app");
