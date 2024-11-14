<template>
  <div id="map" ref="map"></div>
</template>

<script setup>
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import { onMounted, defineProps } from "vue";
import bbox from "@turf/bbox";

// add props geojson
const props = defineProps({
  territoireGeojson: {
    type: Object,
    required: true,
  },
  belgiqueGeojson: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const BoundingBox = bbox(props.belgiqueGeojson);
  let carte = creerCarte("");
  carte.on("style.load", () => {
    carte.fitBounds(BoundingBox);
    carte.addSource("geojson-data", {
      type: "geojson",
      data: props.territoireGeojson,
    });
    carte.addSource("fond-geojson-data", {
      type: "geojson",
      data: props.belgiqueGeojson,
    });
    carte.addLayer({
      id: "fond-geojson-layer",
      type: "fill",
      source: "fond-geojson-data",
      paint: {
        "fill-color": "#F1EDEA",

        "fill-opacity": 1,
        "fill-outline-color": "#F1EDEA40",
      },
    });
    carte.addLayer({
      id: "geojson-layer",
      type: "fill",
      source: "geojson-data",
      paint: {
        "fill-color": "#bdc660",

        "fill-opacity": 1,
      },
    });
  });
});

let STYLE_BASE_CARTE = {
  version: 8,
  sources: {
    empty: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    },
  },
  layers: [],
};

function creerCarte(attributionHtml) {
  const carte = new maplibregl.Map({
    container: "map",
    style: STYLE_BASE_CARTE,
    center: [10, 50],
    interactive: true,
    dragPan: false,
    dragRotate: false,
    scrollZoom: false,
    minZoom: 5,
    maxZoom: 12,
    attributionControl: {
      customAttribution: attributionHtml,
      compact: true,
    },
  });

  return carte;
}
</script>

<style scoped>
#map {
  width: 100%;
  max-height: 80%;
  min-height: 350px;
  display: flex;
  margin: auto;
  flex-grow: 10;
  height: 60%;
}

.legende-palette {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.element-legende {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  gap: 4px;
}

.carre-couleur {
  height: 16px;
  width: 16px;
}
</style>
