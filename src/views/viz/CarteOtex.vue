<template>
  <p class="text-h3">Carte des spécialisations par commune</p>

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
    couleur: "#b57a60",
  },
  {
    label: "Grandes cultures",
    couleur: "#f5a623",
  },
  {
    label: "Bovins laitiers et viandeux",
    couleur: "#FF6B8B",
  },
  {
    label: "Cultures et bovins",
    couleur: "#FF2D5D",
  },
  {
    label: "Horticulture / Fruiticulture",
    couleur: "#91c423",
  },
  {
    label: "Bovins laitiers",
    couleur: "#4a90e2",
  },
  {
    label: "Autres",
    couleur: "#D3D3D3",
  },
  {
    label: "Non disponible",
    couleur: "#F1EDEA",
  },
  {
    label: "Hors scope",
    couleur: "#F1EDEA",
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

let labelsUtilisesAvecCouleur = labelsUtilisesListe.map((label) => {
  return {
    label: label,
    couleur: otexEtCouleurDict.find((couleur) => couleur.label === label)
      ?.couleur,
  };
});

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
  height: 400px;
  display: flex;
  position: relative !important;
  margin: auto;
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
