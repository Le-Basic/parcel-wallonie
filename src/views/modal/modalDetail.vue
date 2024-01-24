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
      <div class="modal-content" v-if="modalId">
        <component :is="modalId" />
      </div>
    </div>
  </div>
</template>

<script>
import detailsCereales from "./modalDetails/detailsCereales.vue";
import detailsFruits from "./modalDetails/detailsFruits.vue";
import detailsViande from "./modalDetails/detailsViande.vue";
export default {
  components: { detailsCereales, detailsFruits, detailsViande },
  props: {
    modalId: {
      type: String,
    },
  },
};
</script>

<style scoped>
.modals {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
