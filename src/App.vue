<template>
  <div id="app">
    <el-row class="fix" :gutter="20">
      <el-col :span="4">
        <Sidebar />
      </el-col>
      <el-col class="fix" :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "./components/Sidebar.vue";
import { ElRow, ElCol } from "element-plus";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vw;
}
.fix {
  height: 100vw;
}
</style>
