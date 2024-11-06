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
        <div class="modal-content">Ca veut dire quoi ?</div>
      </div>
    </div>
  </Teleport>
</template>

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
</style>
