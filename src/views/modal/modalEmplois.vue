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
import emploiLegumes from "./modalEmplois/emploiLegumes.vue";
import emploiFruits from "./modalEmplois/emploiFruits.vue";
import emploiElevage from "./modalEmplois/emploiElevage.vue";
import emploiCereales from "./modalEmplois/emploiCereales.vue";
export default {
  components: {
    emploiElevage,
    emploiFruits,
    emploiLegumes,
    emploiCereales,
  },
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
