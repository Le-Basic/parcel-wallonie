<template>
  <Teleport to="body">
    <div
      class="modals"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
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
          <div class="modal-body">
            <slot>Test</slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
const emits = defineEmits(["close"]);

const close = () => {
  emits("close");
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-dialog {
  position: relative;
  margin: auto;
  min-width: 450px;
}

.modal-body {
  padding: 20px !important;
  background-color: #fff;
}
</style>
