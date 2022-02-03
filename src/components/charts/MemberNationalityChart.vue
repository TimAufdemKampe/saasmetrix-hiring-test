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
    const nationalities: string[] = [];
    let nationalityCounts: Record<string, number> = {};

    members.forEach((member) => {
      if (!nationalities.includes(member.nat)) {
        nationalities.push(member.nat);
      }
    });

    members.forEach((member) => {
      if (nationalities.includes(member.nat)) {
        const nationality: string =
          nationalities.find(
            (nationality: string) => nationality === member.nat
          ) || "error";

        const { [nationality]: count } = nationalityCounts;

        if (count) {
          nationalityCounts = {
            ...nationalityCounts,
            [nationality]: nationalityCounts[nationality] + 1,
          };
        } else
          nationalityCounts = {
            ...nationalityCounts,
            [nationality]: 1,
          };
      }
    });

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
          data: Object.values(nationalityCounts),
        },
      ],
      dataLabels: {
        enabled: true,
      },
      xaxis: {
        categories: Object.keys(nationalityCounts),
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
