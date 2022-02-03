<template>
  <GMapMap
    :center="center"
    :options="options"
    :zoom="14"
    map-type-id="satellite"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type State = {
  center: {
    lat: number;
    lng: number;
  };
  markers: {
    position: {
      lat: number;
      lng: number;
    };
  }[];
  options: {
    zoomControl: boolean;
    mapTypeControl: boolean;
    scaleControl: boolean;
    streetViewControl: boolean;
    rotateControl: boolean;
    fullscreenControl: boolean;
    disableDefaultUi: boolean;
  };
};

export default defineComponent({
  props: ["lat", "lng"],
  data(): State {
    return {
      center: { lat: this.lat, lng: this.lng },
      markers: [
        {
          position: {
            lat: this.lat,
            lng: this.lng,
          },
        },
      ],
      options: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
      },
    };
  },
});
</script>

<style>
.vue-map-container {
  height: 500px;
}
</style>
