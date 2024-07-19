<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        menuType=""
      />
      <div class="section centrervh" id="section0" style="width: 100%">
        <div class="section-boutons-controles-diapo">
          <button @click="RevenirDiapoPrecedente">Précédent</button>
          <button @click="PasserProchaineDiapo">Suivant</button>
        </div>
        <div class="container-grand">
          <div>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div v-if="index == 0" class="slide-diagnostic">
                <p
                  class="animated fadeInUp fast p-result mb-1 map-content titre-moyen"
                  style="text-align: center"
                >
                  Si on commençait par mieux connaître votre territoire ?
                </p>

                <div class="diagnostic">
                  <div class="text-h1" v-html="geoList"></div>

                  <div class="partie-diagnostic">
                    <div class="sous-partie">
                      <img
                        :src="store.getters.getCarteTerritoireParcel"
                        class="carte"
                      />
                    </div>
                    <div class="sous-partie">
                      <p class="map-content">
                        Le territoire sélectionné compte:
                      </p>
                      <div
                        class="cadre-resultat style-gris resultat-ha animated flipInX delay-05s bg-grey-light nbr-ha"
                      >
                        <div>
                          {{ AfficherEntier(population) }}
                        </div>
                        <div class="hectares">habitants</div>
                      </div>
                      <p class="map-content">Sur une surface de :</p>
                      <div
                        class="cadre-resultat style-gris resultat-ha animated flipInX delay-05s bg-grey-light nbr-ha"
                      >
                        <div>
                          {{ AfficherEntier(surface_km2) }}
                        </div>
                        <div class="hectares">km²</div>
                      </div>
                      <p class="map-content">
                        Soit une densité de
                        {{ AfficherEntier(densite) }} habitants par km²
                      </p>
                      <p
                        class="subtext"
                        v-html="differencePctDensitePhrase"
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div class="slide-diagnostic" v-if="index == 1">
                <p
                  class="animated fadeInUp fast p-result mb-1 map-content titre-moyen"
                  style="text-align: center"
                >
                  Si on commençait par mieux connaître votre territoire ?
                </p>
                <div class="partie-diagnostic" v-if="index == 1">
                  <div
                    class="sous-partie titre-grand text-h2 flex-grow-1 flex-shrink-1"
                  >
                    <p>
                      Ces
                      <b class="gros-chiffre-diagnostic">{{ population }}</b>
                      habitants consomment en moyenne par jour XXX g de viande,
                      XXX g de pain etc. <br />soit une équivalence de
                      <b class="gros-chiffre-diagnostic"
                        >{{ consommation_t }} </b
                      >tonnes de matière première agricole réparties ainsi:
                    </p>
                    <p>
                      En savoir plus sur le régime moyen d'une personne
                      résidente Belge
                    </p>
                  </div>
                  <div
                    class="flex-grow-1 flex-shrink-100 section-graphique-consommation"
                  >
                    <vizConsommation />
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div class="partie-diagnostic-pleine-page" v-if="index == 2">
                <p class="texte-centre titre-grand">
                  Le territoire sélectionné a également une activité agricole:
                </p>
                <div class="partie-diagnostic">
                  <div class="sous-partie">
                    <vizOccupationDuSol />
                  </div>
                  <div class="sous-partie">
                    <div class="map-content">
                      La Surface Agricole Utile du territoire est de:
                    </div>
                    <div class="gros-chiffre-diagnostic">
                      {{ sau_ha }} hectares
                    </div>
                    <div class="map-content">ce qui veut dire que</div>
                    <div class="gros-chiffre-diagnostic texte-bleu">
                      {{ pct_sau }}%
                    </div>
                    <div class="map-content">
                      de la surface du territoire est consacré à l'agriculture
                    </div>
                    <p class="subtext">
                      en dessous de la moyenne nationale de
                      {{ pctSauSuperficieWallonie }}
                    </p>
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div v-if="index == 3">
                <div>
                  <p class="map-content texte-centre titre-moyen">
                    Cette activité agricole est largement spécialisée et
                    principalement tournée vers la Viande Bovine:
                  </p>
                  <div style="width: 100%; margin: auto">
                    <CarteOtex :geojson="geojsonData" v-if="geojsonData" />
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div v-if="index == 4">
                <div>
                  <p class="texte-centre titre-grand">
                    Sur le territoire choisi, l'activité agricole (élevage et
                    culture) est responsable de:
                  </p>
                  <p class="gros-chiffre-diagnostic">
                    {{ nb_emploi_agricole_uta }} emplois
                  </p>
                  <p class="texte-centre titre-grand">
                    répartis sur {{ nb_eploitations_2021 }} exploitations
                    agricoles.
                  </p>
                  <p class="map-content">
                    Soit une baisse de {{ baisse_nbexploitations_1990_2021 }}%
                    en 30 ans. Les agricultures ne représentent maintenant plus
                    que 1.5% du total des emplois du territoire.
                  </p>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div id="potentiel" v-if="index == 5">
                <p class="titre-grand texte-centre">
                  Alors pourrais-je nourrir l'ensemble de ma population avec les
                  surfaces actuelles agricoles ?
                </p>
                <p class="map-content">
                  bien que la population pourrait être nourrie par les terres
                  agricoles du territoire, (le potentiel nourricier est
                  positif), il manque certaines productions essentielles pour
                  cela
                </p>
                <div
                  class="div-continuer mb-small animated fadeInUp delay-5-1s"
                >
                  <router-link to="/2-choix-de-la-population"
                    ><button type="button" class="btn btn-principal mt-5">
                      Simuler la relocalisation
                    </button></router-link
                  >
                </div>
                <div class="div-continuer mb-big animated fadeInUp delay-5-1s">
                  <a href="/impacts-ecologiques-de-la-relocatisation"
                    ><button type="button" class="btn btn-secondaire mt-0">
                      En savoir plus sur le potentiel nourricier
                    </button></a
                  >
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <?php include '../partials/scripts-footer.php'; ?> -->
</template>

<script setup>
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";
import { AfficherEntier, FormatterPourcentage } from "@/plugins/utils";
import vizConsommation from "./viz/vizConsommation.vue";
import CarteOtex from "@/views/viz/CarteOtex.vue";
import vizOccupationDuSol from "@/views/viz/vizOccupationDuSol.vue";
import geojsonData from "/public/data.json";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import throttle from "lodash/throttle";

const store = useStore();
function messageBievenue(listeTerritoire) {
  if (listeTerritoire && listeTerritoire.length === 1) {
    return (
      "<h4 style='text-align: center'>Bienvenue dans le territoire de:</h4> " +
      listeTerritoire[0].localeName
    );
  }
}

function getPhraseDensiteComparaison(densite, densiteWallonie) {
  const differencePctDensite = AfficherEntier(
    ((densite - densiteWallonie) / densiteWallonie) * 100
  );
  console.log(differencePctDensite);
  if (differencePctDensite > 0)
    return `au dessus de la moyenne wallonne de ${differencePctDensite}%`;
  if (differencePctDensite === 0) return `équivalente à la moyenne wallonne`;
  if (differencePctDensite < 0)
    return `en dessous de la moyenne wallonne  de ${differencePctDensite}%`;
}
const geoList = ref(messageBievenue(store.state.geoList));
const population = ref(
  AfficherEntier(store.state.indicateurPortraits.population)
);

const sau_ha = ref(AfficherEntier(store.state.indicateurPortraits.sau_ha));
const pct_sau = ref(
  AfficherEntier(
    (store.state.indicateurPortraits.sau_ha /
      store.state.indicateurPortraits.surface_ha) *
      100
  )
);
const surface_km2 = ref(store.state.indicateurPortraits.surface_ha / 100);
const densite = ref(
  (store.state.indicateurPortraits.population * 100) /
    store.state.indicateurPortraits.surface_ha
);
const densiteWallonie = 217.8; // https://www.iweps.be/indicateur-statistique/densite-de-population/#:~:text=Au%201er%20janvier%202023%2C%20la,217%2C8%20habitants%20au%20km%C2%B2.
const pctSauSuperficieWallonie = FormatterPourcentage(0.54); // https://etat-agriculture.wallonie.be/contents/indicatorsheets/EAW-1.html
const differencePctDensitePhrase = getPhraseDensiteComparaison(
  densite.value,
  densiteWallonie
);

const consommation = ref(store.state.resultatSimulation.consommation_kg);
const consommation_t = AfficherEntier(consommation.value / 1000);

const nb_emploi_agricole_uta = ref(
  AfficherEntier(store.state.indicateurPortraits.emploi_agricole_uta)
);

const nb_eploitations_2021 = ref(
  AfficherEntier(store.state.indicateurPortraits.nb_exploitations_2021)
);

const baisse_nbexploitations_1990_2021 = ref(
  AfficherEntier(
    ((store.state.indicateurPortraits.nb_exploitations_1990 -
      store.state.indicateurPortraits.nb_exploitations_2021) *
      100) /
      store.state.indicateurPortraits.nb_exploitations_1990
  )
);

console.log(store.state.indicateurPortraits.otex_dominant_par_commune);
const otex_dominant_par_commune =
  store.state.indicateurPortraits.otex_dominant_par_commune;
const featuresAvecOtex = ref(
  geojsonData.features.map((feature) => {
    return {
      type: "Feature",
      properties: {
        code_belgique_municipalite:
          feature.properties.code_belgique_municipalite,
        value:
          otex_dominant_par_commune.find(
            (otex) =>
              otex.code_belgique_municipalite ===
              feature.properties.code_belgique_municipalite
          )?.otex_dominant ?? "Non disponible",
      },
      geometry: feature.geometry,
    };
  })
);
geojsonData.features = featuresAvecOtex.value;

const dernierDeltaY = ref(0);
const slideTransition = ref("slide-fade");
const index = ref(0);
const maxIndex = 5;
function GererUnEvenementWheel(event) {
  // Any code to be executed when the user scrolls with the wheel
  console.log("Calling handleWheel");
  console.log(event);
  if (dernierDeltaY.value < Math.abs(event.deltaY)) {
    if (event.deltaY > 0) {
      index.value = index.value === maxIndex ? maxIndex : index.value + 1;
      slideTransition.value = "slide-fade";
    } else {
      index.value = index.value === 0 ? 0 : index.value - 1;
      slideTransition.value = "slide-fade-down";
    }
  }
  dernierDeltaY.value = Math.abs(event.deltaY);
  console.log("delta", event.deltaY);
}

function PasserProchaineDiapo() {
  index.value = index.value === maxIndex ? maxIndex : index.value + 1;
  slideTransition.value = "slide-fade";
}

function RevenirDiapoPrecedente() {
  index.value = index.value === 0 ? 0 : index.value - 1;
  slideTransition.value = "slide-fade-down";
}

const handleDebouncedWheel = throttle(GererUnEvenementWheel, 800); // Adjust throttle delay as needed

onMounted(() => {
  window.addEventListener("wheel", handleDebouncedWheel);
});
</script>

<style scoped>
.section {
  margin-top: 0px;
  margin-bottom: 0px;
}
.section-boutons-controles-diapo {
  position: absolute;
  bottom: 2%;
  right: 2%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.section-boutons-controles-diapo button {
  background-color: #91c423;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
}

.slide-diagnostic {
  height: calc(100vh - 135px);
}

.text-h2 {
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: left;
}

.non-active {
  display: none !important;
  visibility: hidden !important;
  overflow: hidden;
}
.show {
  margin-right: 0px !important;
  display: block !important;
  padding: 0px !important;
  opacity: 1 !important;
}

.section-graphique-consommation {
  display: flex;
  flex-direction: column;
  max-height: 80%;
}

.diagnostic {
  display: flex;
  flex-direction: column;
}

.partie-diagnostic {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 1;
  flex-shrink: 100;
  align-items: center;
  gap: 16px;
}

.sous-partie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  max-width: 50%;
  align-items: flex-start;
}

.partie-diagnostic-pleine-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
}

.ligne-chiffres {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: stretch !important;
}

.cadre-resultat {
  width: 350px;
  margin: 0px 0px 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
}

.carte {
  height: 100%;
  max-width: 600px;
  height: auto;
  margin: auto;
}

.map-content {
  text-align: left;
  color: #015a5a;
  font-size: 23px;
  line-height: 1.2;
}

.style-gris {
  background-color: var(--gris);
  color: var(--bleu);
}

.element-evolution {
  font-style: italic;
  padding-top: 1rem;
  font-size: 16px;
}

.titre-moyen {
  padding: 32px 0;
}

.gros-chiffre-diagnostic {
  font-size: 48px;
  font-weight: bold;
  line-height: 1.2;
  color: var(--vert);
}

/* transition */
.slide-fade-enter-active {
  transition: all 0.9s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s ease-out;
}

.slide-fade-enter-from {
  transform: translateY(100vh);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-100vh);
  opacity: 0;
}
.slide-fade-down-enter-active {
  transition: all 0.9s ease-out;
}

.slide-fade-down-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-down-enter-from {
  transform: translateY(-100vh);
  opacity: 0;
}
.slide-fade-down-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
</style>
