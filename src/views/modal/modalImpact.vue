<template>
  <div
    class="modals"
    id="modal-impact-climat1"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-repart-cat-detail">
        <component :is="modalId" @closeModal="fermerModal" />
      </div>
    </div>
  </div>
</template>

<script>
import ImpactGes from "./modalImpacts/impactGes.vue";
import impactBiodiv from "./modalImpacts/impactBiodiv.vue";
import impactClimat from "./modalImpacts/impactClimat.vue";
import impactEau from "./modalImpacts/impactEau.vue";
export default {
  components: { ImpactGes, impactBiodiv, impactClimat, impactEau },
  props: {
    modalId: {
      type: String,
      required: true,
    },
  },
  methods: {
    fermerModal() {
      this.$emit("fermerModal");
    },
  },
};
</script>

<style scoped>
.modals {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
}
</style>
