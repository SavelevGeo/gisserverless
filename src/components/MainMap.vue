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
    style="min-width: 100vw; height: 100vh"
  >
    <ol-view :center="[3375000, 8380000]" :zoom="11" />

    <ol-vector-tile-layer>
      <ol-source-vector-tile :url="vectorUrl" :format="mvtFormat">
      </ol-source-vector-tile>
    </ol-vector-tile-layer>

    <ol-tile-layer>
      <ol-source-xyz :url="rasterUrl" />
    </ol-tile-layer>

    <ol-tile-layer :opacity="0.5">
      <ol-source-osm />
    </ol-tile-layer>
  </ol-map>
</template>
