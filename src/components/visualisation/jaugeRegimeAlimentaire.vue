<template>
  <div class="section-jauge-categorie-alimentaire">
    <section class="titre-categorie-alimentaire">
      <span :class="[iconeCategorieAlimentaire]" class="icon-medium"></span>
      <p class="titre-categorie-alimentaire-texte">
        {{ props.titreCategorieAlimentaire }}
      </p>
    </section>
    <v-chart class="chart" :option="options" />
    <p class="badge-categorie-alimentaire" :class="[labelClasse]">
      {{ labelJauge }}
    </p>
    <div
      v-if="props.montreDetailProduits"
      class="detailProduits d-flex justify-content-center"
    >
      <div
        v-for="iconeProduit in props.listeIconesProduits"
        :key="iconeProduit"
        :class="[iconeProduit, iconProduct]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { defineProps, watch, defineEmits, ref, computed } from "vue";

const props = defineProps({
  titreCategorieAlimentaire: {
    type: String,
    default: "energie totale",
  },
  iconeCategorieAlimentaire: {
    type: String,
    default: "icon-lipides",
  },
  categoriesAlimentaires: {
    type: Array,
    default: () => [
      {
        nom: "Fort déficit",
        valeur: 10,
        couleur: "#FF0000",
        classe: "fort",
      },
      {
        nom: "Léger déficit",
        valeur: 70,
        couleur: "#FFE337",
        classe: "leger",
      },
      {
        nom: "Correct",
        valeur: 110,
        couleur: "#8BC903",
        classe: "correct",
      },
    ],
  },
  valeurJauge: {
    type: Number,
    default: 68,
  },
  montreDetailProduits: {
    type: Boolean,
    default: false,
  },
  listeIconesProduits: {
    type: Array,
    default: () => ["icon-cereales2", "icon-oleagineux", "icon-viande-rouge"],
  },
});
const emit = defineEmits(["update:categoriesAlimentaires"]);

use([GaugeChart, CanvasRenderer]);
const maxValeur = props.categoriesAlimentaires.reduce(
  (acc, categorie) => Math.max(acc, categorie.valeur),
  0
);
const data = props.categoriesAlimentaires.map((categorie) => {
  return [categorie.valeur / maxValeur, categorie.couleur];
});

const labelJauge = ref(
  props.categoriesAlimentaires.find(
    (categorie) => props.valeurJauge <= categorie.valeur
  ).nom
);

const labelClasse = ref(
  props.categoriesAlimentaires.find(
    (categorie) => props.valeurJauge <= categorie.valeur
  ).classe
);

watch(
  () => props.valeurJauge,
  (newValue) => {
    const label = props.categoriesAlimentaires.find(
      (categorie) => newValue <= categorie.valeur
    ).nom;
    const classe = props.categoriesAlimentaires.find(
      (categorie) => newValue <= categorie.valeur
    ).classe;
    labelJauge.value = label;
    labelClasse.value = classe;
    emit("update:categoriesAlimentaires", classe);
  }
);
const options = computed(() => {
  return {
    grid: {
      left: "0%",
      right: "0%",
      top: 0,
      bottom: 0,
      containLabel: true,
    },
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        radius: "120%",
        min: 0,
        max: maxValeur,

        center: ["50%", "80%"],
        axisLine: {
          lineStyle: {
            width: 10,
            color: data,
          },
        },
        pointer: {
          length: "90%",
          width: 5,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 5,
          itemStyle: {
            borderWidth: 5,
          },
        },
        detail: {
          valueAnimation: true,
          show: false,
        },
        data: [
          {
            value: props.valeurJauge,
          },
        ],
      },
    ],
  };
});
</script>

<style scoped>
.section-jauge-categorie-alimentaire {
  width: fit-content;
}
.chart {
  width: 200px;
  height: 100px;
}
.titre-categorie-alimentaire {
  display: flex;
  flex-direction: center;
  justify-content: center;
}

.titre-categorie-alimentaire-texte {
  text-align: center;
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  text-transform: uppercase;
  margin-bottom: 0;
}

.badge-categorie-alimentaire {
  text-align: center;
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  width: fit-content;
  margin: auto;
  padding: 0.1rem 0.5rem;
  border-radius: 0.5rem;
}

.icon-medium {
  width: 25px;
  font-size: 25px;
  margin-right: 0.5rem;
}

.fort {
  background-color: #ff0000;
  color: white;
}

.leger {
  background-color: #ffe337;
}

.correct {
  background-color: #8bc903;
}

.detailProduits {
  margin: 1rem auto;
  color: var(--bleu);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  background-color: #f5f5f5;
  border-radius: 9px;
  max-width: 150px;
  padding: 0.2rem;
  -webkit-transform: translateX(5px);
}
</style>
