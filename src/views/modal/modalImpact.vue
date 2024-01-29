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
      console.log("fermerModal");
      this.$emit("fermerModal");
    },
  },
};
</script>

<style scoped>
.modals {
  position: absolute;
  width: 100vw;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
