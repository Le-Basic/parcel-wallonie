<template>
  <div class="wrap-viz repartition">
    <table
      summary="Resultats"
      class="auto-style1 w-100"
      id="CategoryresultsTable"
      border="1"
    >
      <thead></thead>
      <tbody>
        <tr v-for="produit in props.tableauProduits" :key="produit.libelle">
          <td colspan="5" @click="ouvrirModal(produit.nomModale)">
            <div
              class="cadre-categorie animated fadeIn delay-1s"
              :class="[produit.classeCouleur]"
              style="cursor: pointer"
            >
            <div class="" id="ppc5" style="width: 65px; height: 65px">
              <JaugeChart
                :value="
                  Math.round(
                   produit.fonctionTrouverChiffre(chiffre=produit.partSurfaces)
                  )
                "
                :couleur="
                  produit.couleur
                "
              ></JaugeChart>
            </div>
              <div class="">
                <span :class="[produit.icon]"> </span>
              </div>
              <div class="cadre-titre-categorie">
                <div class="titre-categorie">{{ produit.libelle }}</div>
                <div class="hectares">
                  {{
                    formatterSurfacesNecessaires(
                      produit.fonctionTrouverChiffre(chiffre=produit.valeurSurfaces)
                    )
                  }}
                </div>
              </div>
                    <div class="result-plus">
                      <span
                        @click="ouvrirModal(produit.nomModale)"
                        class="icon-ico_fleche_detail_gros icon"
                        :class="[produit.classeCouleur]"
                      >
                      </span>
                    </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { formatterSurfacesNecessaires } from "@/plugins/surfaceProduits";
import JaugeChart from "@/components/visualisation/jaugeChart.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["ouvrirModal"]);

const ouvrirModal = (categorie) => {
  emit("ouvrirModal", categorie);
  console.log("ouvrirModal", categorie);
};
const props = defineProps({
  tableauProduits: Array
})

</script>

<style scoped>
.cadre-categorie {
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 20px 20px;
  gap: 16px;
}

.cadre-categorie {
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 20px 20px;
  gap: 16px;
}

.cadre-titre-categorie {
  flex-grow: 1;
  margin: auto;
}

.cadre-titre-categorie .hectares {
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #0c1321;
  letter-spacing: 0;
  text-align: left;
}

.titre-categorie {
  text-align: left;
}

.result-plus {
  margin: auto;
}
</style>
