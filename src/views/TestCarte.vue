<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        menuType=""
      />

      <div
        class="section centrervh selec-alim"
        id="section0"
        style="width: 100%"
      >
        <h1>Choisissez un des 3 parcours recommandés</h1>
        <div class="scenario-vs-custom">
          <div class="cartes-parcours">
            <router-link to="/diagnostic">
              <div class="card-choix egalim" id="bio">
                <img
                  :src="require('@/assets/img/illustrations/image.svg')"
                  alt="diagnostic"
                  height="40px"
                  style="margin: auto auto"
                />
                <div class="scenario-texte">
                  <div class="text-h4"><b>Scénario actuel</b></div>
                  <div class="">
                    Consultez un diagnotic simple sur les thématiques agricoles
                    et alimentaires de votre territoire. Tout cela en moins de
                    10 chiffres.
                  </div>
                </div>
                <div class="div-continuer delay-5-1s">
                  <button type="button" class="btn btn-secondaire mt-0">
                    A
                  </button>
                </div>
              </div>
            </router-link>
            <router-link to="/diagnostic">
              <div class="card-choix egalim" id="bio">
                <img
                  :src="require('@/assets/img/illustrations/image.svg')"
                  alt="diagnostic"
                  height="40px"
                  style="margin: auto auto"
                />
                <div class="scenario-texte">
                  <div class="text-h4">
                    <b>Promotion agriculture biologique</b>
                  </div>
                  <div class="">
                    Consultez un diagnotic simple sur les thématiques agricoles
                    et alimentaires de votre territoire. Tout cela en moins de
                    10 chiffres.
                  </div>
                </div>
                <div class="div-continuer delay-5-1s">
                  <button type="button" class="btn btn-secondaire mt-0">
                    B
                  </button>
                </div>
              </div>
            </router-link>
            <router-link to="/diagnostic">
              <div class="card-choix egalim" id="bio">
                <img
                  :src="require('@/assets/img/illustrations/image.svg')"
                  alt="diagnostic"
                  height="40px"
                  style="margin: auto auto"
                />
                <div class="scenario-texte">
                  <div class="text-h4">
                    <b>Changement de régime alimentaire</b>
                  </div>
                  <div class="">
                    Diminuez la consommation de viande de 50% et passez 20% de
                    l'alimentation du territoire en bio.
                  </div>
                </div>
                <div class="div-continuer delay-5-1s">
                  <button type="button" class="btn btn-secondaire mt-0">
                    C
                  </button>
                </div>
              </div>
            </router-link>
          </div>
          <div style="width: 64px">
            <p
              class="cadre-resultat resultat-ha"
              style="
                position: relative;
                left: calc(-50%);
                top: 50%;
                z-index: 2;
                border-radius: 30px;
                font-weight: bold;
                width: 51px;
              "
            >
              ou
            </p>
          </div>
          <div class="cadre cadre-simulation">
            <img
              :src="require('@/assets/img/illustrations/dashboard.svg')"
              alt="diagnostic"
              height="200px"
            />
            <div class="text-h4 text-center">
              <b
                >Rentrer vous-même vos paramètres pour une simulation sur
                mesure</b
              >
            </div>
            <div><p>Lorem ipsum sin dolor</p></div>
            <div class="div-continuer delay-5-1s">
              <button type="button" class="btn btn-secondaire mt-0">
                Démarrer la simulation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <?php include '../partials/scripts-footer.php'; ?> -->
</template>

<script setup>
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";
</script>

<style scoped>
.cartes-parcours {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 64px;
  justify-content: stretch;
  border-right: 1px solid var(--bleu);
  width: 70%;
  align-items: stretch;
}

.cadre {
  background: #ffffff;
  box-shadow: 0 4px 12px 0 rgba(193, 193, 193, 0.5);
  border-radius: 5px;
  padding: 24px;
}

.cadre-simulation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-choix {
  background: #ffffff;
  box-shadow: 0 4px 12px 0 rgba(193, 193, 193, 0.5);
  padding: 24px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 12px;
  color: black;
}

.card-choix:hover {
  background-color: var(--gris);
  cursor: pointer;
}

.card-choix:hover .btn-secondaire {
  background: url("/public/img/fleches/fleche-bouton.svg") no-repeat right 15px
    center;
  background-color: var(--vert);
  -webkit-transform: translateX(5px);

  color: white;
}

.scenario-texte {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

h1 {
  max-width: 1000px !important;
  margin: auto;
  margin-bottom: 32px;
}

.text-h4 {
  font-size: 24px;
  font-weight: 700;
  color: var(--bleu);
  width: 100%;
}

.btn {
  font-size: 20px !important  ;
}

.scenario-vs-custom {
  display: flex;
  flex-direction: row;
}

.div-continuer {
  margin: auto !important;
}
</style>
