<template>
  <h1>Benutzer Analytics</h1>
  <el-row style="margin-top: 40px">
    <el-col :span="12" :xs="20">
      <MemberGenderChart />
    </el-col>
    <el-col :span="12" :xs="20">
      <MemberNationalityChart />
    </el-col>
  </el-row>
</template>

<script setup>
import MemberGenderChart from "../../components/charts/MemberGenderChart.vue";
import MemberNationalityChart from "@/components/charts/MemberNationalityChart.vue";
</script>

<style></style>
