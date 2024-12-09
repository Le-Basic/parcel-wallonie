<template>
  <div class="potentiel-nourricier-container">
    <p class="potentiel-nourricier-title">Potentiel Nourricier par catégorie</p>
    <div class="potentiel-nourricier-categorie-grid">
      <span class="icon-ico_CATEGORIES_viande ico-medium viande"> </span>
      <span class="categorie viande"> Elevage</span>
      <span class="potentiel-nourricier-chiffre">
        {{ potentielNourricierElevage }}</span
      >
      <span class="icon-ico_CATEGORIES_legumes ico-medium legumes"> </span>
      <span class="categorie legumes"> Légumes</span>
      <span class="potentiel-nourricier-chiffre">
        {{ potentielNourricierLegumes }}</span
      >
      <span class="icon-ico_CATEGORIES_fruits ico-medium fruits"> </span>
      <span class="categorie fruits"> Fruits</span>
      <span class="potentiel-nourricier-chiffre">
        {{ potentielNourricierFruits }}</span
      >
      <span class="icon-ico_CATEGORIES_cereales ico-medium cereales"> </span>
      <span class="categorie cereales"> Grandes Cultures</span>
      <span class="potentiel-nourricier-chiffre">
        {{ potentielNourricierCereales }}</span
      >
    </div>
    <KnowMore
      ModalComposant="KnowMoreModal/ModalPotentielNourricierCategories"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { trouverChiffre, FormatterPourcentage } from "@/plugins/utils";
import { CATEGORIE_PRODUITS_SURFACES_ACTUELLES } from "@/config/categorieProduitsActuel";
import { CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER } from "@/config/categorieProduitsPotentielNourricier";
import KnowMore from "../bas-niveau/KnowMore.vue";
const store = useStore();

const potentielNourricierCereales = computed(() => {
  return FormatterPourcentage(
    Number(
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.CEREALES.code,
        "sau_ha",
        "code_parcel"
      )
    ) /
      Number(
        trouverChiffre(
          store.state.resultatSimulation.surfacesEmploisAMobiliser,
          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.CEREALES.libelle,
          "surface_a_mobiliser",
          "libelle_parcel_niveau_1"
        )
      )
  );
});
const potentielNourricierLegumes = computed(() => {
  return FormatterPourcentage(
    Number(
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.LEGUMES.code,
        "sau_ha",
        "code_parcel"
      )
    ) /
      Number(
        trouverChiffre(
          store.state.resultatSimulation.surfacesEmploisAMobiliser,
          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle,
          "surface_a_mobiliser",
          "libelle_parcel_niveau_1"
        )
      )
  );
});

const potentielNourricierFruits = computed(() => {
  return FormatterPourcentage(
    Number(
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.FRUITS.code,
        "sau_ha",
        "code_parcel"
      )
    ) /
      Number(
        trouverChiffre(
          store.state.resultatSimulation.surfacesEmploisAMobiliser,
          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.libelle,
          "surface_a_mobiliser",
          "libelle_parcel_niveau_1"
        )
      )
  );
});

const potentielNourricierElevage = computed(() => {
  return FormatterPourcentage(
    Number(
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.ELEVAGE.code,
        "sau_ha",
        "code_parcel"
      )
    ) /
      Number(
        trouverChiffre(
          store.state.resultatSimulation.surfacesEmploisAMobiliser,
          CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.libelle,
          "surface_a_mobiliser",
          "libelle_parcel_niveau_1"
        )
      )
  );
});
</script>

<style scoped>
.potentiel-nourricier-container {
  display: flex;
  gap: 12px;
  border: 1px solid var(--vert);
  flex-direction: column;
  align-items: center;
  padding: 12px;
}

.potentiel-nourricier-title {
  font-size: 20px;
}

.potentiel-nourricier-categorie-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0.8fr 0.6fr 0.8fr;
  column-gap: 32px;
  grid-auto-flow: column;
}
span {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.categorie {
  font-size: 16px;
}

.potentiel-nourricier-chiffre {
  font-size: 20px;
}
</style>
