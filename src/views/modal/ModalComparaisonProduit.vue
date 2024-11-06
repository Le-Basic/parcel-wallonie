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
    <div class="grille-comparaison">
      <h4 class="text-center actuel titre">
        Surface agricole actuelle du territoire
      </h4>

      <h4 class="text-center prospectif titre">Surface agricole à mobiliser</h4>
      <div class="cadre-resultat resultat-ha animated flipInX delay-05s actuel">
        <div class="d-inline-flex align-items-center">
          <div
            class="animated flipInY delay-1s nbr-ha odometer odometer-auto-theme"
            id="surface_act8"
          >
            <div class="odometer-inside">
              {{
                formatterChiffres(
                  Math.round(store.state.resultatSimulation.surfacesActuelles)
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
        class="cadre-resultat resultat-ha animated flipInX delay-05s bg-vert-clair prospectif"
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
        :style="{ width: largeurActuelle, height: hauteurActuelle }"
        style="margin: auto"
        class="actuel treemap"
      >
        <RepartitionSurface
          :serieDonnees="repartitionSurfaceActuelles()"
          width="200px"
        />
      </div>
      <div
        :style="{ width: largeurPotentielle, height: hauteurPotentielle }"
        style="margin: auto"
        class="prospectif treemap"
      >
        <RepartitionSurface
          :serieDonnees="repartitionSurfacePotentielNourricier()"
          hideLabels
        />
      </div>
      <div class="transverse information-box">
        Attention: Ni les jachères ni les cultures industrielles comme le lin ne
        sont pas prises en compte dans le scénario de relocalisation de PARCEL
        qui ne modélise uniquement les cultures nourricières.
      </div>
      <TableauProduit class="actuel" :tableauProduits="tableauProduitsActuel" />
      <TableauProduit
        class="prospectif"
        :tableauProduits="tableauProduitsProspectif"
      />
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import RepartitionSurface from "@/components/visualisation/RepartitionSurface.vue";
import { CATEGORIE_PRODUITS_SURFACES_ACTUELLES } from "@/config/categorieProduitsActuel";
import {
  CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE,
  CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER,
} from "@/config/categorieProduitsPotentielNourricier";
import { trouverChiffre } from "@/plugins/utils";
import { formatterChiffres } from "@/plugins/surfaceProduits";
import { useStore } from "vuex";
import TableauProduit from "@/components/visualisation/TableauProduit.vue";

const store = useStore();
const emit = defineEmits(["fermerModal"]);
const fermerModal = () => {
  emit("fermerModal");
};

const repartitionSurfaceActuelles = () => {
  let data = [];
  for (const [, value] of Object.entries(
    CATEGORIE_PRODUITS_SURFACES_ACTUELLES
  )) {
    value.part_surfaces_actuelles = Math.round(
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        value.code,
        "part_surfaces_actuelles",
        "code_parcel",
        3
      )
    );
    let donnePourGraphique = {
      value: value.part_surfaces_actuelles,
      name: value.libelle,
      itemStyle: {
        color: value.couleur,
      },
    };
    data = [...data, donnePourGraphique];
  }
  return data;
};

const repartitionSurfacePotentielNourricier = () => {
  let data = [];
  for (const [, value] of Object.entries(
    CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER_DETAILLE
  )) {
    value.partAMobiliser = trouverChiffre(
      store.state.resultatSimulation.surfacesEmploisAMobiliser,
      value.libelle,
      "part_surface_a_mobiliser",
      "libelle_parcel_niveau_2",
      3
    );
    value.partAMobiliser = parseFloat(value.partAMobiliser).toFixed(0);
    let donnePourGraphique = {
      value: value.partAMobiliser,
      name: value.libelle,
      itemStyle: {
        color: value.couleur,
      },
    };
    data = [...data, donnePourGraphique];
  }
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

const tableauProduitsProspectif = [
  {
    libelle: "Légumes",
    classeCouleur: "legumes",
    couleur: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.couleur,
    icon: "icon-ico_CATEGORIES_legumes ico-medium legumes",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesEmploisAMobiliser,
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.LEGUMES.libelle,
        chiffre,
        "libelle_parcel_niveau_1"
      ),
    valeurSurfaces: "surface_a_mobiliser",
    partSurfaces: "part_surface_a_mobiliser",
    nomModale: "detailsLegumes",
  },
  {
    libelle: "Fruits",
    classeCouleur: "fruits",
    couleur: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.couleur,
    icon: "icon-ico_CATEGORIES_fruits ico-medium fruits",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesEmploisAMobiliser,
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.FRUITS.libelle,
        chiffre,
        "libelle_parcel_niveau_1"
      ),
    valeurSurfaces: "surface_a_mobiliser",
    partSurfaces: "part_surface_a_mobiliser",
    nomModale: "detailsFruits",
  },
  {
    libelle: "Elevage",
    classeCouleur: "viande",
    couleur: CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.couleur,
    icon: "icon-ico_CATEGORIES_fruits ico-medium viande",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesEmploisAMobiliser,
        CATEGORIE_PRODUITS_POTENTIEL_NOURRICIER.ELEVAGE.libelle,
        chiffre,
        "libelle_parcel_niveau_1"
      ),
    valeurSurfaces: "surface_a_mobiliser",
    partSurfaces: "part_surface_a_mobiliser",
    nomModale: "detailsViande",
  },
];

const tableauProduitsActuel = [
  {
    libelle: "Légumes",
    classeCouleur: "legumes",
    couleur: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.LEGUMES.couleur,
    icon: "icon-ico_CATEGORIES_legumes ico-medium legumes",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.LEGUMES.code,
        chiffre,
        "code_parcel"
      ),
    valeurSurfaces: "sau_ha",
    partSurfaces: "part_surfaces_actuelles",
    nomModale: "detailsLegumes",
  },
  {
    libelle: "Fruits",
    classeCouleur: "fruits",
    couleur: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.FRUITS.couleur,
    icon: "icon-ico_CATEGORIES_fruits ico-medium fruits",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.FRUITS.code,
        chiffre,
        "code_parcel"
      ),
    valeurSurfaces: "sau_ha",
    partSurfaces: "part_surfaces_actuelles",
    nomModale: "detailsLegumes",
  },
  {
    libelle: "Elevage",
    classeCouleur: "viande",
    couleur: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.ELEVAGE.couleur,
    icon: "icon-ico_CATEGORIES_viande ico-medium viande",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.ELEVAGE.code,
        chiffre,
        "code_parcel"
      ),
    valeurSurfaces: "sau_ha",
    partSurfaces: "part_surfaces_actuelles",
    nomModale: "detailsLegumes",
  },
  {
    libelle: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.CEREALES.libelle,
    classeCouleur: "cereales",
    couleur: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.CEREALES.couleur,
    icon: "icon-ico_CATEGORIES_legumes ico-medium cereales",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.CEREALES.code,
        chiffre,
        "code_parcel"
      ),
    valeurSurfaces: "sau_ha",
    partSurfaces: "part_surfaces_actuelles",
    nomModale: "detailsLegumes",
  },
  {
    libelle: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.JACHERES.libelle,
    classeCouleur: "legumes",
    couleur: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.JACHERES.couleur,
    icon: "icon-ico_CATEGORIES_legumes ico-medium legumes",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.JACHERES.code,
        chiffre,
        "code_parcel"
      ),
    valeurSurfaces: "sau_ha",
    partSurfaces: "part_surfaces_actuelles",
    nomModale: "detailsLegumes",
  },
  {
    libelle: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.INDUSTRIE.libelle,
    classeCouleur: "autreindus",
    couleur: CATEGORIE_PRODUITS_SURFACES_ACTUELLES.INDUSTRIE.couleur,
    icon: "icon-ico_CATEGORIES_legumes ico-medium autreindus",
    fonctionTrouverChiffre: (chiffre) =>
      trouverChiffre(
        store.state.resultatSimulation.surfacesActuellesParcelNiveau1,
        CATEGORIE_PRODUITS_SURFACES_ACTUELLES.INDUSTRIE.code,
        chiffre,
        "code_parcel"
      ),
    valeurSurfaces: "sau_ha",
    partSurfaces: "part_surfaces_actuelles",
    nomModale: "detailsLegumes",
  },
];
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

.grille-comparaison {
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
  grid-gap: 16px;
}
.transverse {
  grid-column: span 2;
}

.actuel {
  grid-column-start: 1;
}

.prospectif {
  grid-column-start: 2;
}

.titre {
  grid-row-start: 1;
}

.cadre-resultat {
  grid-row-start: 2;
}
.treemap {
  grid-row-start: 3;
}

.information-box {
  font-size: 20px;
  color: var(--vert);
  font-weight: 400;
  border: 1px solid var(--vert);
  font-family: "Work Sans", sans-serif;
  padding: 16px;
  margin: 16px;
}

.modal-content {
  padding: 0px 16px;
}
</style>
