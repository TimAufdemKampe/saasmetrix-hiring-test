<template>
  <div class="border">
    <h5 class="ml-2">Demo Company</h5>
    <el-menu default-active="0" class="el-menu-vertical-demo borderDelete">
      <router-link class="text-decoration" :to="{ name: 'Members' }">
        <el-menu-item class="menu-item" index="0">
          <el-icon><stamp /></el-icon>
          <span>Benutzer Übersicht</span>
        </el-menu-item>
      </router-link>
      <Divider />
      <router-link class="text-decoration" :to="{ name: 'MemberAnalytics' }">
        <el-menu-item class="menu-item" index="1">
          <el-icon><stamp /></el-icon>
          <span>Benutzer Analytics</span>
        </el-menu-item>
      </router-link>
      <Divider />
      <router-link class="text-decoration" to="/">
        <el-menu-item class="menu-item" index="2">
          <el-icon><SoldOut /></el-icon>
          <span>Zahlungen</span>
        </el-menu-item>
      </router-link>
      <Divider />
      <router-link class="text-decoration" to="/">
        <el-menu-item class="menu-item" index="3">
          <el-icon><Document /></el-icon>
          <span>Anfragen</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { Stamp, SoldOut, Document } from "@element-plus/icons-vue";
import Divider from "../components/Divider.vue";
</script>

<style>
.border {
  height: 100vw;
  margin: 10px;
  padding-right: 10px;
  border-right: 1px solid rgba(53, 67, 80, 0.2);
}
.borderDelete {
  border: none;
}
.ml-2 {
  margin: 10px;
}
.text-decoration {
  text-decoration: none;
}
</style>
