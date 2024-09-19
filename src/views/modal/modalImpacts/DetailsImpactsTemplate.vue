<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modalId: {
    type: String,
  },
  modalTitre: {
    type: String,
    default: "Légumes",
  },
  iconeClasse: {
    type: String,
    default: "legumes",
  },
  icone: {
    type: String,
    default: "icon-ico_CATEGORIES_legumes",
  },
  classeCouleurFond: {
    type: String,
    default: "fond-legumes",
  },
  proportionSurface: {
    type: String,
    default: "0,8%",
  },
  proportionAssiette: {
    type: String,
    default: "11%",
  },
  proportionImportation: {
    type: String,
    default: "33%",
  },
});
</script>

<template>
  <div class="modal-content modal-repart-cat-detail">
    <div class="modal-header d-flex align-items-center">
      <div>
        <span :class="[icone, 'ico-medium', iconeClasse]"></span>
      </div>
      <div class="d-flex flex-column">
        <div class="titre-categorie">{{ props.modalTitre }}</div>
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

    <div class="card">
      <div class="card-header sansFond" id="methode">
        <div>
          <span class="icon-ico_calcul2 icon white icon-titre"></span>
        </div>
        <div>Quelques points de méthode</div>
      </div>
      <div id="collapseMethod" class="collapse show">
        <div class="card-body">
          <slot name="pointsmethode"> </slot>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header sansFond" id="Reperes">
        <div><span class="icon-repere icon white icon-titre"></span></div>
        <div>Repères</div>
      </div>
      <div
        id="collapseReperes"
        class="collapse show"
        data-parent="#accordion"
        aria-labelledby="Reperes"
      >
        <div class="card-body">
          <slot name="reperes">
            <div
              class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail"
              :class="props.classeCouleurFond"
            >
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span :class="['icon-ico_poids', 'icon', iconeClasse]"></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span :class="['info-entete', iconeClasse]"
                      >Production</span
                    ><span :class="['info-verbe', iconeClasse]">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha">{{ props.proportionSurface }}</span
                    ><span class="hectares"
                      >de la surface agricole en Région wallonne</span
                    ></span
                  >
                </div>
              </span>
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span :class="['icon-ico_champ', 'icon', iconeClasse]"></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span :class="['info-entete', iconeClasse]"
                      >Consommation</span
                    ><span :class="['info-verbe', iconeClasse]">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha"> {{ props.proportionAssiette }} </span
                    ><span class="hectares"
                      >de l’assiette d’un Français moyen (en volume)</span
                    ></span
                  >
                </div>
              </span>
              <span
                class="col-4 d-flex flex-sm-column flex-row justify-content-center"
                ><span :class="[icone, 'icon', iconeClasse]"></span>
                <div class="info-infos">
                  <span class="d-flex flex-column info-intro"
                    ><span :class="['info-entete', iconeClasse]"
                      >Importation</span
                    ><span :class="['info-verbe', iconeClasse]">=</span></span
                  ><span class="d-flex flex-column info-detail"
                    ><span class="nbr-ha"> {{ proportionImportation }} </span
                    ><span class="hectares">
                      des légumes consommés en Région wallonne sont
                      importés</span
                    ></span
                  >
                </div>
              </span>
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header sansFond" id="sources">
        <div><span class="icon-source icon white icon-titre"></span></div>
        <div>Limites des calculs</div>
      </div>
      <div
        id="collapseSource"
        class="collapse show"
        data-parent="#accordion"
        aria-labelledby="sources"
      >
        <div class="card-body">
          <slot name="limitedescalculs"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailsLegumes",
  methods: {
    fermerModal() {
      this.$emit("fermerModal");
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Work Sans", sans-serif;
}

.icon-titre {
  font-size: 25px;
  height: 25px;
}

.card-header {
  display: flex;
  gap: 16px;
  background-color: transparent !important;
}

.sansFond {
  background-color: transparent !important;
  border: none;
  color: black !important;
  font-weight: bold;
}

.card {
  border: none;
}

.ico-medium {
  margin-right: 20px;
}
</style>
