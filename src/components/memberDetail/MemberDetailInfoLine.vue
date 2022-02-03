<template>
  <div class="text item">
    <span class="card-info-header">{{ name }}:</span>
    <br />
    <span class="card-info-subHeader">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["name", "text"],
});
</script>

<style>
.text {
  font-size: 14px;
}
.card-info-header {
  font-size: 20px;
  font-weight: bold;
  padding: 50px 0;
}
.card-info-subHeader {
  font-size: 20px;
  padding: 50px 0;
}
.item {
  margin-bottom: 10px;
}
</style>
