<template>
  <div
    id="tooltipDetail"
    class="modal fade modalTooltip"
    tabindex="-1"
    role="dialog"
    aria-labelledby="tooltipDetail"
  >
    <div
      class="modal-dialog modal-dialog-centered"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
          id="textTooltip"
          class="modal-body"
        >
          Cette donnée est calculée uniquement sur les produits de PARCEL, à
          partir des surfaces agricoles (bio et non bio) du département et
          intègre les différences de rendements entre agriculture biologique et
          agriculture conventionnelle. Il ne s'agit ni du pourcentage de la
          surface agricole (SAU) en bio sur le territoire ni de la consommation
          actuelle de produits bio sur le territoire
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBioCurseur",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  display: block !important;
  opacity: 1 !important;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
}
</style>
