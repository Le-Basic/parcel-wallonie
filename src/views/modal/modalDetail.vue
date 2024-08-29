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
        <component :is="modalId" @fermerModal="fermerModal" />
      </div>
    </div>
  </div>
</template>

<script>
import detailsCereales from "./modalDetails/detailsCereales.vue";
import detailsFruits from "./modalDetails/detailsFruits.vue";
import detailsViande from "./modalDetails/detailsViande.vue";
import detailsLegumes from "./modalDetails/detailsTemplate.vue";
export default {
  components: { detailsCereales, detailsFruits, detailsViande, detailsLegumes },
  props: {
    modalId: {
      type: String,
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
