<template>
  <div id="app">
    <div class="app-wrapper">
      <navbar></navbar>
      <div class="main-container">
        <section class="app-container">
          <router-view />
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "@/components/navbar/Navbar.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.app-container {
  min-height: 100%;
  margin: 0 100px;
}
.main-container {
  margin-top: 100px;
  min-height: 50vh;
}
@media only screen and (max-width: 768px) {
  .app-container {
    margin: 0 20px;
  }
}
</style>
