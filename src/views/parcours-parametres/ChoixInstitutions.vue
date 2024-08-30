<template>
  <div class="asy-wrapper">
    <div class="content">
      <!-- <?php include '../partials/nav2.php'; ?> -->
      <div class="section centrervh" id="section0">
        <div class="container">
          <h1>Choisissez la population concernée</h1>
          <!-- <?php include '../partials/resum-result.php'; ?> -->
          <div
            class="select-etablissement"
            v-for="institution in INSTITUTIONS"
            v-bind:key="institution.id"
          >
            <label
              class="container-checkbox"
              data-toggle="modal"
              onclick="majitem('maternelle',$('#nbmaternelle').val());"
              >{{ institution.libelle_pluriel }}
              <input
                type="checkbox"
                name="maternelle"
                id="maternelle"
                value="Maternelle"
              />
              <span class="checkmark"></span>
            </label>
            <div id="nbrcouvertsmaternelle">
              <span class="nbr-couverts">50</span
              ><span class="couverts">couverts</span>
            </div>
          </div>

          <div class="div-continuer">
            <a href="/3-type-dalimentation"
              ><button
                type="button"
                onclick="initEgalim()"
                class="btn btn-principal mt-5"
                href="/3-type-dalimentation"
              >
                Continuer
              </button></a
            >
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div
        class="modal fade modal-simple-petit"
        id="modal-population-etablissementmaternelle"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content modal-repart-cat-detail">
            <div class="modal-header d-flex align-items-center">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span class="icon-ico_fermer icon"></span>
              </button>
            </div>
            <div class="modal-body text-center">
              <div class="titre-categorie">Maternelle</div>
              <div class="">Nombre de couverts à la cantine par jour</div>
              <div class="text-center mt-4">
                <div
                  class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
                >
                  <div class="handle-counter" id="handleCountermaternelle">
                    <span class="btn-moins counter-minus">-</span>
                    <input
                      type="text"
                      class="nombre"
                      name="nbmaternelle"
                      id="nbmaternelle"
                      value="150"
                    />
                    <span class="btn-plus counter-plus">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal body-->
        </div>
        <!-- modal-content -->
      </div>
      <!-- modal-dialog -->
    </div>
    <!-- modal -->
    <!-- Modal -->
    <div
      class="modal fade modal-simple-petit"
      id="modal-population-etablissementprimaire"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content modal-repart-cat-detail">
          <div class="modal-header d-flex align-items-center">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="icon-ico_fermer icon"></span>
            </button>
          </div>
          <div class="modal-body text-center">
            <div class="titre-categorie">Ecole primaire</div>
            <div class="">Nombre de couverts à la cantine par jour</div>
            <div class="text-center mt-4">
              <div
                class="nombres-ajout nbr-ajout-big d-flex flex-row justify-content-center"
              >
                <div class="handle-counter" id="handleCounterprimaire">
                  <span class="btn-moins counter-minus">-</span>
                  <input
                    type="text"
                    class="nombre"
                    name="nbprimaire"
                    id="nbprimaire"
                    value="150"
                  />
                  <span class="btn-plus counter-plus">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal body-->
      </div>
      <!-- modal-content -->
    </div>
    <!-- modal-dialog -->
  </div>
  <!-- modal -->
</template>

<script setup>
import { INSTITUTIONS } from "@/config/Institutions";
</script>
