<template>
  <div
    class="modal fade modalTooltip"
    id="tooltipDetail"
    tabindex="-1"
    role="dialog"
    aria-labelledby="tooltipDetail"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
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
        <div class="modal-body" id="textTooltip">
          Cette donnée est calculée uniquement sur les produits de PARCEL, à
          partir des surfaces agricoles (bio et non bio) de la région et intègre
          les différences de rendements entre agriculture biologique et
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
  name: "modalBioCurseur",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  display: block !important;
  top: 0;
  left: 0;
  opacity: 1 !important;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  z-index: 9999;
  width: 100%;
}
</style>
