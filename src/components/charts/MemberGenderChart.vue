<template>
  <div id="memberGenderChart" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ApexCharts from "apexcharts";
import { api } from "@/api";
import { Member } from "@/types/member.type";

export default defineComponent({
  async mounted(): Promise<void> {
    const response = await api.getMembers();
    const members: Member[] = response.data.results;
    const options = {
      chart: {
        type: "pie",
      },
      labels: ["Männlich", "Weiblich"],
      series: [
        members.filter((member) => {
          if (typeof member.gender === "string") {
            return member.gender === "male";
          }
        }).length,
        members.filter((member) => {
          if (typeof member.gender === "string") {
            return member.gender === "female";
          }
        }).length,
      ],
    };

    const chart = new ApexCharts(
      document.getElementById("memberGenderChart"),
      options
    );

    await chart.render();
  },
});
</script>
