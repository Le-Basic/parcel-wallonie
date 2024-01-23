<template>
  Hellooooo
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
        <component :is="modalId" />
      </div>
    </div>
  </div>
</template>

<script>
import ImpactGes from "./modalImpacts/impactGes.vue";
import impactBiodiv from "./modalImpacts/impactBiodiv.vue";
export default {
  components: { ImpactGes, impactBiodiv },
  props: {
    modalId: {
      type: String,
      required: true,
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
