<template>
  <div id="app">
    <el-container>
      <el-aside width="300px">
        <Sidebar />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "./components/Sidebar.vue";
import { ElContainer, ElAside } from "element-plus";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vw;
}
</style>
