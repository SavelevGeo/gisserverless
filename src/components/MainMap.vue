<script setup lang="ts">
import type { Ref } from "vue";
import { ref, inject } from "vue";
const format = inject("ol-format");
const mvtFormat = new format.MVT();

const rasterUrl: Ref<string> = ref("xyz/osm/{z}/{x}/{y}.png");
const vectorUrl: Ref<string> = ref("pbf/spb_2/{z}/{x}/{y}.pbf");
</script>

<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    id="main_map"
  >
    <ol-view :center="[3375000, 8380000]" :zoom="11" />

    <ol-tile-layer :opacity="0.5">
      <ol-source-osm />
    </ol-tile-layer>

    <ol-tile-layer>
      <ol-source-xyz :url="rasterUrl" />
    </ol-tile-layer>

    <ol-vector-tile-layer>
      <ol-source-vector-tile :url="vectorUrl" :format="mvtFormat">
      </ol-source-vector-tile>
    </ol-vector-tile-layer>
  </ol-map>
</template>

<style scoped>
#main_map {
  height: 100%;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;

  overflow: hidden;
}

</style>
