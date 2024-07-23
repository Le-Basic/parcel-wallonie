<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        menuType=""
      />

      <div class="section centrervh" id="section0" style="width: 100%">
        <div class="container-grand">
          <h1>Par où voulez-vous commencer ?</h1>
        </div>
        <div class="container-grand cartes-parcours">
          <router-link to="/diagnostic">
            <div class="card-alim egalim" id="bio">
              <img
                :src="require('@/assets/img/illustrations/image.svg')"
                alt="diagnostic"
                height="150px"
                style="margin: 0 auto"
              />
              <div class="text-h4"><b>Explorez un diagnostic simple</b></div>
              <div class="">
                Consultez un diagnotic simple sur les thématiques agricoles et
                alimentaires de votre territoire. Tout cela en moins de 10
                chiffres.
              </div>
              <div class="div-continuer delay-5-1s">
                <button type="button" class="btn btn-secondaire mt-0">
                  Consulter le diagnostic
                </button>
              </div>
            </div>
          </router-link>
          <router-link to="/2-choix-de-la-population">
            <div class="card-alim egalim" id="bio">
              <img
                :src="require('@/assets/img/illustrations/dashboard.svg')"
                alt="diagnostic"
                height="200px"
                style="margin: 0 auto"
              />
              <div class="text-h4">
                <b>Simulez les effets de la relocalisation</b>
              </div>
              <div class="">
                Évaluer les surfaces agricoles nécessaires, les emplois créés et
                les impacts écologiques associés aux changements de mode de
                production.
              </div>
              <div class="div-continuer delay-5-1s">
                <a href="/impacts-ecologiques-de-la-relocatisation"
                  ><button type="button" class="btn btn-secondaire mt-0">
                    Passer à la simulation
                  </button></a
                >
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- <?php include '../partials/scripts-footer.php'; ?> -->
</template>

<script setup>
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
</script>

<style scoped>
.cartes-parcours {
  max-height: 50%;
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-top: 32px;
  padding: 0 32px;
  justify-content: stretch;
  align-items: stretch !important;
}

.card-alim {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  height: 555px;
  color: black;
}

.card-alim:hover {
  background-color: var(--gris);
  border: 2px solid var(--gris);
  cursor: pointer;
}

.card-alim:hover .btn-secondaire {
  background: url("/public/img/fleches/fleche-bouton.svg") no-repeat right 15px
    center;
  background-color: var(--vert);
  -webkit-transform: translateX(5px);

  color: white;
}

.text-h4 {
  font-size: 24px;
  font-weight: 700;
  color: var(--bleu);
  text-align: center;
  width: 100%;
}

.btn {
  font-size: 20px !important  ;
}
</style>
