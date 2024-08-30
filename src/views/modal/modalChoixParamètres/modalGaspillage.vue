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
          Aujourd'hui 18% de la production est perdue ou gaspillée entre le
          stade de la production agricole et celui de la consommation. La
          production agricole est responsable pour un peu moins d’1/4 des
          pertes, tandis que la consommation est responsable de plus d’1/3. Il
          est important lorsque l’on cherche à réduire les pertes et gaspillage
          de réfléchir à des actions concernant l’ensemble des maillons des
          filières agricoles et alimentaires. En effet, les pertes et gaspillage
          d’un maillon peuvent être liés aux contraintes d’un autre maillon.
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
