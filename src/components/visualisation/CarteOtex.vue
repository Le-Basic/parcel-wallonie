<template>
  <div id="map" ref="map"></div>
  <div class="legende-palette">
    <div
      v-for="label in labelsUtilisesAvecCouleur"
      :key="label"
      class="element-legende"
    >
      <div
        class="carre-couleur"
        :style="{ 'background-color': label.couleur }"
      ></div>
      <div>{{ label.label }}</div>
    </div>
  </div>
</template>

<script setup>
import "maplibre-gl/dist/maplibre-gl.css";
import { useStore } from "vuex";
import maplibregl from "maplibre-gl";
import { onMounted, defineProps } from "vue";
import bbox from "@turf/bbox";

const store = useStore();
// add props geojson
const props = defineProps({
  geojson: {
    type: Object,
    required: true,
  },
});

const otexEtCouleurDict = [
  {
    label: "Bovins viandeux",
    couleur: "#C7DC91",
  },
  {
    label: "Grandes cultures",
    couleur: "#91C423",
  },
  {
    label: "Bovins laitiers et viandeux",
    couleur: "#015A5C",
  },
  {
    label: "Cultures et bovins",
    couleur: "#498F3F",
  },
  {
    label: "Horticulture / Fruiticulture",
    couleur: "#6EAA31",
  },
  {
    label: "Bovins laitiers",
    couleur: "#639A76",
  },
  {
    label: "Autres",
    couleur: "#25754E",
  },
  {
    label: "Non disponible",
    couleur: "#CABBAF",
  },
  {
    label: "Hors scope",
    couleur: "#f8f8f3",
  },
];

const otexEtCouleur = otexEtCouleurDict.flatMap((item) => [
  item.label,
  item.couleur,
]);

onMounted(() => {
  const BoundingBox = bbox(props.geojson);
  let carte = creerCarte("");
  carte.on("style.load", () => {
    carte.fitBounds(BoundingBox);
    carte.addSource("geojson-data", {
      type: "geojson",
      data: props.geojson,
    });
    carte.addLayer({
      id: "geojson-layer",
      type: "fill",
      source: "geojson-data",
      paint: {
        "fill-color": [
          "match",
          ["string", ["get", "value"]],
          ...otexEtCouleur,
          "#F1EDEA",
        ],

        "fill-opacity": 1,
        "fill-outline-color": "#F1EDEA40",
      },
    });
    carte.addLayer({
      id: "polygon-border",
      type: "line",
      source: "geojson-data",
      paint: {
        "line-color": "#ffffff", // Color of the border
        "line-width": 0.6, // Border thickness
        "line-opacity": 0.8, // Optional: border opacity
      },
    });
    let popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    carte.on("mousemove", "geojson-layer", (e) => {
      if (
        store.state.indicateurPortraits.otex_dominant_par_commune.find(
          (mun) => {
            return (
              mun.code_belgique_municipalite ===
              e.features[0].properties.code_belgique_municipalite
            );
          }
        ) ??
        [].length > 0
      ) {
        console.log(e.features[0].properties);
        console.log(e.features);
        carte.getCanvas().style.cursor = "pointer";
        popup = popup
          .setLngLat([4.3, 50.8])
          .setHTML(
            e.features[0].properties.libelle_commune +
              "</br>" +
              e.features[0].properties.value
          )
          .setLngLat(JSON.parse(e.features[0].properties.centroid))
          .addTo(carte);
        return popup;
      }
    });
    carte.on("mouseleave", "geojson-layer", () => {
      return popup.remove();
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

let labelsUtilisesListe = [
  ...new Set(
    props.geojson.features.map((element) => {
      return element.properties.value;
    })
  ),
].sort();

let labelsUtilisesAvecCouleur = labelsUtilisesListe
  .filter((label) => label !== "Hors scope")
  .map((label) => {
    if (label !== "Hors scope") {
      return {
        label: label,
        couleur: otexEtCouleurDict.find((couleur) => couleur.label === label)
          ?.couleur,
      };
    }
  });

console.log("labels", labelsUtilisesAvecCouleur);

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
  width: 600px;
  max-height: 400px;
  min-height: 200px;
  display: flex;
  margin: auto;
  flex-grow: 10;
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
