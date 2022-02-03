<template>
  <div id="memberNationalityChart" />
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
    let nationalityCounts: Record<string, number> = {};

    members.forEach((member) => {
      const { [member.nat]: count } = nationalityCounts;

      if (!count) {
        nationalityCounts = {
          ...nationalityCounts,
          [member.nat]: 1,
        };
      } else
        nationalityCounts = {
          ...nationalityCounts,
          [member.nat]: nationalityCounts[member.nat] + 1,
        };
    });

    Object.entries(nationalityCounts).sort((a, b) => b[1] - a[1]);

    const options = {
      chart: {
        type: "bar",
        height: 1077,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      series: [
        {
          data: Object.entries(nationalityCounts)
            .sort((a, b) => b[1] - a[1])
            .map((entry) => {
              return entry[1];
            }),
        },
      ],
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        categories: Object.entries(nationalityCounts)
          .sort((a, b) => b[1] - a[1])
          .map((entry) => {
            return entry[0];
          }),
      },
    };

    const chart = new ApexCharts(
      document.getElementById("memberNationalityChart"),
      options
    );

    await chart.render();
  },
});
</script>
