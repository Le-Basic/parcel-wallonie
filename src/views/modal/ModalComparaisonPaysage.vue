<template>
  <div class="modal-content modal-repart-cat-detail">
    <div class="modal-header d-flex align-items-center">
      <div class="d-flex flex-column">
        <div class="titre-categorie">
          Comparer l'actuel avec le prospectif: Vision produit
        </div>
        <div class="hectares"></div>
      </div>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        @click="fermerModal"
      >
        <span class="icon-ico_fermer icon"></span>
      </button>
    </div>
    <div class="modal-main">
      <div>
        <h4 class="text-center">Surface agricole actuelle du territoire</h4>
        <div class="cadre-resultat resultat-ha animated flipInX delay-05s">
          <div class="d-inline-flex align-items-center">
            <div
              class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme"
              id="surface_act8"
            >
              <div class="odometer-inside">
                {{
                  formatterChiffres(
                    Math.round(
                      this.$store.state.resultatSimulation.surfacesActuelles
                    )
                  )
                }}
              </div>
            </div>
            <div class="hectares blanc animated fadeIn delay-1-5s">
              hectares agricoles
            </div>
          </div>
        </div>
        <div
          :style="{ width: largeurActuelle, height: hauteurActuelle }"
          style="margin: auto"
        >
          <RepartitionSurface
            :serieDonnees="repartitionSurfaceActuelles()"
            width="200px"
          />
        </div>
      </div>

      <div>
        <h4 class="text-center">Surface agricole à mobiliser</h4>
        <div
          class="cadre-resultat resultat-ha animated flipInX delay-05s bg-vert-clair"
        >
          <div class="d-inline-flex align-items-center">
            <div
              class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme surface_potentiel"
              id="surface_potentiel6"
            >
              <div
                class="odometer-inside"
                v-if="store.state.resultatSimulation.surfaceAMobiliser"
              >
                {{
                  formatterChiffres(
                    Math.round(store.state.resultatSimulation.surfaceAMobiliser)
                  )
                }}
              </div>
            </div>
            <div class="hectares blanc animated fadeIn delay-1-5s">
              hectares agricoles
            </div>
          </div>
        </div>
        <div
          :style="{ width: largeurPotentielle, height: hauteurPotentielle }"
          style="margin: auto"
        >
          <RepartitionSurface
            :serieDonnees="repartitionSurfacePotentielNourricier()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import RepartitionSurface from "@/components/visualisation/RepartitionSurface.vue";
import { CATEGORIE_PRODUITS_ACTUELS_PAYSAGE } from "@/config/categorieProduitsActuelsPaysage";
import { trouverChiffre } from "@/plugins/utils";
import { formatterChiffres } from "@/plugins/surfaceProduits";
import { useStore } from "vuex";

const store = useStore();
const emit = defineEmits(["fermerModal"]);
const fermerModal = () => {
  emit("fermerModal");
};

const repartitionSurfaceActuelles = () => {
  let data = [];
  for (const [key, value] of Object.entries(
    CATEGORIE_PRODUITS_ACTUELS_PAYSAGE
  )) {
    console.log(key);
    value.part_surface_a_mobiliser = trouverChiffre(
      store.state.resultatSimulation.surfacesActuellesPaysage,
      value.libelle,
      "sau_ha",
      "libelle_parcel_paysage_actuel"
    );
    let donnePourGraphique = {
      value: value.part_surface_a_mobiliser,
      name: value.libelle,
      itemStyle: {
        color: value.couleur ? value.couleur : "red",
      },
    };
    data = [...data, donnePourGraphique];
  }
  let total = data.reduce((acc, el) => acc + el.value, 0);
  data.map((el) => (el.value = (el.value / total) * 100));
  return data;
};

const repartitionSurfacePotentielNourricier = () => {
  let data = [];
  for (const [key, value] of Object.entries(
    CATEGORIE_PRODUITS_ACTUELS_PAYSAGE
  )) {
    console.log(key);
    value.part_surface_a_mobiliser = Math.round(
      trouverChiffre(
        store.state.resultatSimulation.surfaceNecessairePaysage,
        value.libelle,
        "surface_a_mobiliser",
        "libelle_parcel_paysage_actuel",
        2
      ) * 100
    );
    let donnePourGraphique = {
      value: value.part_surface_a_mobiliser,
      name: value.libelle,
      itemStyle: {
        color: value.couleur ? value.couleur : "red",
      },
    };
    data = [...data, donnePourGraphique];
  }
  let total = data.reduce((acc, el) => acc + el.value, 0);
  data.map((el) => (el.value = (el.value / total) * 100));
  return data;
};

const maxHectares = Math.max(
  store.state.resultatSimulation.surfacesActuelles,
  store.state.resultatSimulation.surfaceAMobiliser
);

const ratioActuelles = Math.sqrt(
  store.state.resultatSimulation.surfacesActuelles / maxHectares
);
const ratioPotentiel = Math.sqrt(
  store.state.resultatSimulation.surfaceAMobiliser / maxHectares
);

const hauteurPotentielle = ratioPotentiel * 450 + "px";
const hauteurActuelle = ratioActuelles * 450 + "px";
const largeurPotentielle = ratioPotentiel * 592 + "px";
const largeurActuelle = ratioActuelles * 592 + "px";
</script>

<style scoped>
.modal-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
}

.resultat-ha {
  padding: 5px !important;
  display: table;
}
</style>
