<script setup>
import { defineProps, defineEmits, getCurrentInstance, computed } from "vue";
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

const emits = defineEmits(["fermerModal"]);

const fermerModal = () => {
  emits("fermerModal");
};

const instance = getCurrentInstance();
const slots = instance?.slots; // Access slots from the instance

const hasReperesSlot = computed(
  () => !!slots.reperes && slots.reperes().length > 0,
);
</script>

<template>
  <div class="modal-content modal-repart-cat-detail">
    <div class="modal-header d-flex align-items-center">
      <div>
        <span :class="[icone, 'icon-medium', iconeClasse]"></span>
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
          <span class="icon-ico_calcul2 white icon-titre icon-medium"></span>
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
      <div class="card-header sansFond" id="Reperes" v-if="hasReperesSlot">
        <div>
          <span class="icon-repere icon-medium white icon-titre"></span>
        </div>
        <div>Repères</div>
      </div>
      <div
        id="collapseReperes"
        class="collapse show"
        data-parent="#accordion"
        aria-labelledby="Reperes"
      >
        <div class="card-body">
          <slot name="reperes"> </slot>
        </div>
      </div>
    </div>
    <!-- <div class="card">
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
    </div> -->
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

.icon-medium {
  margin-right: 20px;
}
</style>
