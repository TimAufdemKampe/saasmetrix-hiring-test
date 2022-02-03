<template>
  <div id="memberGenderChart" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApexCharts from "apexcharts";
import { api } from "@/api";

export default defineComponent({
  async mounted(): Promise<void> {
    const response = await api.getMembers();
    const members = response.data.results;
    const options = {
      chart: {
        type: "pie",
      },
      labels: ["Männlich", "Weiblich"],
      series: [
        members.filter((member: any) => member.gender === "male").length,
        members.filter((member: any) => member.gender === "female").length,
      ],
    };

    const chart = new ApexCharts(
      document.getElementById("memberGenderChart"),
      options
    );

    chart.render();
  },
});
</script>
