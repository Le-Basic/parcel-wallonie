<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        menuType=""
      />
      <div class="section centrervh" id="section0" style="width: 100%">
        <div class="section-boutons-controles-diapo">
          <button @click="RevenirDiapoPrecedente" class="bouton-retour">
            Précédent
          </button>
          <button @click="PasserProchaineDiapo" class="bouton-suivant">
            Suivant
          </button>
        </div>
        <div class="container-grand">
          <div>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div v-if="index == 0" class="slide-diagnostic">
                <p
                  class="animated fadeInUp fast p-result mb-1 titre-slide texte-moyen work-sans-300"
                  style="text-align: center"
                >
                  Si on commençait par mieux connaître votre territoire ?
                </p>

                <div class="diagnostic">
                  <div class="texte-moyen texte-centre" v-html="geoList"></div>

                  <div class="partie-diagnostic">
                    <div class="sous-partie-gauche">
                      <img
                        :src="store.getters.getCarteTerritoireParcel"
                        class="carte"
                      />
                    </div>
                    <div class="sous-partie-droite bloc-paragraphe">
                      <div class="sous-partie">
                        <div>
                          <img
                            src="/img/logo/PARCEL_population.svg"
                            height="100"
                          />
                        </div>
                        <div>
                          <p class="texte-petit texte-bleu">
                            Le territoire sélectionné compte:
                          </p>
                          <p class="chiffre-moyen work-sans-700 texte-bleu">
                            {{ AfficherEntier(population) }}
                          </p>
                          <p class="texte-petit texte-bleu">habitants</p>
                        </div>
                      </div>
                      <div class="sous-partie">
                        <div
                          style="
                            width: 100px;
                            height: 100px;
                            background-color: var(--vert);
                          "
                        ></div>
                        <div>
                          <p class="texte-petit texte-bleu">
                            Sur une surface de :
                          </p>
                          <div class="chiffre-moyen work-sans-700 texte-bleu">
                            {{ AfficherEntier(surface_km2) }}
                          </div>
                          <div class="texte-petit texte-bleu">km²</div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p class="texte-petit texte-vert">
                            Soit une densité de
                            {{ AfficherEntier(densite) }} habitants par km²
                          </p>
                          <p
                            class="texte-petit"
                            v-html="differencePctDensitePhrase"
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div class="slide-diagnostic" v-if="index == 1">
                <p
                  class="animated fadeInUp fast p-result mb-1 titre-slide texte-moyen work-sans-300"
                  style="text-align: center"
                >
                  Alors on consomme quoi sur votre territoire ?
                </p>
                <div class="partie-diagnostic" v-if="index == 1">
                  <div
                    class="sous-partie-gauche bloc-paragraphe texte-align-droite"
                  >
                    <div>
                      <p class="texte-petit texte-bleu">Ces</p>
                      <p class="chiffre-moyen texte-bleu">
                        {{ population }} habitants
                      </p>
                      <p class="texte-petit texte-bleu">
                        habitants consomment en moyenne par jour 48 g de viande,
                        92 g de pain etc.
                      </p>
                      <p />
                    </div>
                    <div class="texte-align-droite">
                      <p class="texte-petit texte-bleu">
                        soit une équivalence de
                      </p>
                      <p class="chiffre-moyen texte-bleu">
                        {{ consommation_t }}
                        tonnes
                      </p>
                      <p class="texte-petit texte-bleu">
                        de matière première agricole réparties ainsi:
                      </p>
                    </div>
                    <a
                      class="texte-vert"
                      href="google.com"
                      style="width: 250px"
                    >
                      En savoir plus sur le régime moyen d'une personne
                      résidente Belge
                    </a>
                  </div>
                  <div
                    class="sous-partie-droite texte-align-droite bloc-paragraphe"
                  >
                    <p class="texte-petit texte-bleu">
                      Consommation en matière première de la population :
                    </p>
                    <vizConsommation />
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div class="slide-diagnostic" v-if="index == 2">
                <p
                  class="animated fadeInUp fast p-result mb-1 titre-slide texte-moyen work-sans-300 texte-centre"
                >
                  Pour quels impacts ?
                </p>
                <div class="partie-diagnostic">
                  <div
                    class="sous-partie-gauche texte-align-droite bloc-paragraphe"
                  >
                    <div class="sous-partie">
                      <img
                        src="/img/logo/PARCEL_menu-assiette.svg"
                        height="100"
                      />
                      <img
                        src="/img/logo/PARCEL_picto-camion.svg"
                        height="100"
                      />
                      <img
                        src="/img/logo/PARCEL_picto-maison.svg"
                        height="100"
                      />
                    </div>
                    <p
                      class="texte-petit texte-bleu work-sans-200"
                      style="width: 400px"
                    >
                      L'alimentation a un impact sur le changement climatique.
                      Elle est dans l'un
                      <b>des 3 postes les plus émetteurs de CO2</b>
                      avec le transport et le logement
                    </p>
                  </div>
                  <div class="sous-partie-droite texte-align-gauche">
                    <p class="texte-petit work-sans-300 texte-vert">
                      ici en l'occurence :
                    </p>
                    <p class="chiffre-moyen">2,1<br />cTCO² eq/personne/an</p>
                    <p
                      class="texte-tres-petit texte-bleu work-sans-300"
                      style="width: 400px; margin-top: 32px"
                    >
                      Émissions de gaz à effet de serre (en tonnes équivalent
                      CO2) par personne et par an, associées à l'empreinte
                      carbone du poste alimentation en 2017
                    </p>
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div
                class="partie-diagnostic-pleine-page slide-diagnostic"
                v-if="index == 3"
              >
                <p
                  class="animated fadeInUp fast p-result mb-1 titre-slide texte-moyen work-sans-300"
                  style="text-align: center"
                >
                  Le territoire sélectionné a également une activité agricole :
                </p>
                <div class="partie-diagnostic">
                  <div class="sous-partie-gauche bloc-paragraphe">
                    <p
                      class="full-width texte-centre texte-petit work-sans-300"
                    >
                      Occupation du sol du territoire
                    </p>
                    <vizOccupationDuSol />
                  </div>
                  <div class="sous-partie-droite bloc-paragraphe">
                    <div>
                      <p class="texte-petit texte-vert">
                        La Surface Agricole Utile du territoire est de:
                      </p>
                      <p class="chiffre-moyen">{{ sau_ha }} hectares</p>
                    </div>
                    <div>
                      <p class="texte-petit texte-vert">ce qui veut dire que</p>
                      <p class="chiffre-moyen">{{ pct_sau }}%</p>
                      <p class="texte-petit texte-bleu">
                        de la surface du territoire est consacré à l'agriculture
                      </p>
                    </div>
                    <p class="texte-petit texte-bleu work-sans-300">
                      en dessous de la moyenne nationale de
                      {{ pctSauSuperficieWallonie }}
                    </p>
                  </div>
                </div>
              </div>
            </transition>

            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div
                class="partie-diagnostic-pleine-page slide-diagnostic"
                v-if="index == 4"
              >
                <p
                  class="animated fadeInUp fast p-result mb-1 titre-slide texte-moyen work-sans-300"
                  style="text-align: center"
                >
                  Cette activité agricole est largement spécialisée et
                  principalement tournée vers la Viande Bovine:
                </p>
                <div>
                  <div style="width: 100%; margin: auto">
                    <CarteOtex :geojson="geojsonData" v-if="geojsonData" />
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div
                v-if="index == 5"
                class="partie-diagnostic-pleine-page slide-diagnostic"
              >
                <p
                  class="animated fadeInUp fast p-result mb-1 titre-slide texte-moyen work-sans-300 texte-centre"
                >
                  Sur le territoire choisi, l'activité agricole (élevage et
                  culture) est responsable de:
                </p>
                <div class="partie-diagnostic">
                  <div class="sous-partie-gauche">
                    <div class="flex-row">
                      <pieEmploi />
                      <img
                        src="/img/logo/PARCEL_params-paysan.svg"
                        height="100"
                      />
                    </div>
                  </div>
                  <div class="sous-partie-droite bloc-paragraphe">
                    <div>
                      <p class="chiffre-moyen texte-bleu">
                        {{ nb_emploi_agricole_uta }} emplois
                      </p>
                      <p class="texte-centre texte-petit texte-vert">
                        répartis sur {{ nb_eploitations_2021 }} exploitations
                        agricoles.
                      </p>
                    </div>
                    <p class="texte-tres-petit texte-bleu">
                      <b
                        >Soit une baisse de
                        {{ baisse_nbexploitations_1990_2021 }}% en 30 ans</b
                      >. Les agricultures ne représentent maintenant plus que
                      1.5% du total des emplois du territoire.
                    </p>
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div
                v-if="index == 6"
                class="partie-diagnostic-pleine-page slide-diagnostic"
              >
                <p
                  class="animated fadeInUp fast p-result mb-1 titre-slide texte-moyen work-sans-300 texte-centre"
                >
                  Cette activité n’est pas sans conséquence pour notre
                  environnement, les autres espèces, notre eau, nos sols, nos
                  forêts…
                </p>
                <div class="partie-diagnostic-pleine-page">
                  <div class="grille-impacts">
                    <div class="case-impact texte-bleu">
                      <img
                        src="/img/logo/PARCEL_picto-CO2.svg"
                        style="max-width: 100px; max-height: 100px"
                      />
                      <p class="texte-petit texte-bleu">
                        37 millions de tonnes de CO2 émise par an par notre
                        production agricole
                      </p>
                    </div>
                    <div class="case-impact texte-bleu">
                      <img
                        src="/img/logo/PARCEL_picto-soja.svg"
                        style="max-width: 100px; max-height: 100px"
                      />
                      <p class="texte-petit">
                        600 000 ha de soja cultivés très loin pour nourrir le
                        bétail belge accélérant des phénomènes de déforestation
                      </p>
                    </div>
                    <div class="case-impact texte-bleu">
                      <img
                        src="/img/logo/PARCEL_picto-ferme.svg"
                        style="max-width: 100px; max-height: 100px"
                      />
                      <p class="texte-petit">
                        20% des agriculteurs belges vivent sous le taux de
                        pauvreté en 2024.
                      </p>
                    </div>
                    <div class="case-impact texte-bleu">
                      <img
                        src="/img/logo/PARCEL_picto-eau-sale.svg"
                        style="max-width: 100px; max-height: 100px"
                      />
                      <p class="texte-petit">
                        8% des eaux souterraines ont des taux trop élevés de
                        nitrates
                      </p>
                    </div>
                    <div class="case-impact texte-bleu">
                      <img
                        src="/img/logo/PARCEL_picto-oiseau.svg"
                        style="max-width: 100px; max-height: 100px"
                      />
                      <p class="texte-petit">
                        45% des oiseaux des champs ont disparu en 30 ans en
                        Europe
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <transition :name="slideTransition" @after-enter="transitionEnd">
              <div id="potentiel" v-if="index == 7">
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
                  <a href="/impacts-ecologiques-de-la-relocalisation"
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
import BarreNavigation from "@/components/navigation/BarreNavigation.vue";
import { AfficherEntier, FormatterPourcentage } from "@/plugins/utils";
import vizConsommation from "../components/visualisation/vizConsommation.vue";
import pieEmploi from "../components/visualisation/pieEmploi.vue";
import CarteOtex from "@/components/visualisation/CarteOtex.vue";
import vizOccupationDuSol from "@/components/visualisation/vizOccupationDuSol.vue";
import geojsonData from "/public/data.json";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import throttle from "lodash/throttle";

const store = useStore();
function messageBievenue(listeTerritoire) {
  if (listeTerritoire && listeTerritoire.length === 1) {
    return (
      "<p class='texte-vert'>Bienvenue dans le territoire de :</p><p class='texte-bleu'>" +
      listeTerritoire[0].localeName +
      "</p>"
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
        centroid: [
          feature.properties.centroid[0],
          feature.properties.centroid[1],
        ],
        value:
          otex_dominant_par_commune.find(
            (otex) =>
              otex.code_belgique_municipalite ===
              feature.properties.code_belgique_municipalite
          )?.otex_dominant ?? "Non disponible",
        libelle_commune: feature.properties.libelle_commune,
      },
      geometry: feature.geometry,
    };
  })
);
geojsonData.features = featuresAvecOtex.value;

const dernierDeltaY = ref(5);
const slideTransition = ref("slide-fade");
const index = ref(0);
const maxIndex = 7;
function GererUnEvenementWheel(event) {
  // Any code to be executed when the user scrolls with the wheel
  console.log("Calling handleWheel");
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
* {
  font-family: "Work Sans", sans-serif;
}
p {
  margin-bottom: 0;
}

a {
  text-decoration: underline;
}

a:hover {
  color: var(--bleu);
  text-decoration: underline;
}
.asy-wrapper {
  height: 100vh;
  overflow: hidden;
}
.section {
  margin-top: 0px;
  margin-bottom: 0px;
}
.section-boutons-controles-diapo {
  position: absolute;
  bottom: 2%;
  right: 3%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: row;
  gap: 16px;
  transition: 0s;
}

.section-boutons-controles-diapo button {
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  line-height: 16px;
  transition: 0s;
}

.bouton-retour {
  display: inline-block;
  padding: 10px 20px;
  background-color: #c8dbdb; /* Adjust this to match the color */
  color: #ffffff; /* Text color */
  border-left: 1px solid #c8dbdb;
}

.bouton-retour:before {
  content: url("/public/img/bouton/triangle-precedent.svg");
  position: absolute;
  top: 0;
  left: -19px;
  border-right: 1px solid #c8dbdb;
  height: 36px;
  width: 19px;
  fill: #c8dbdb;
}

.bouton-retour:hover {
  background-color: #b0c7c7; /* Darken the color on hover */
}

.bouton-retour:hover:before {
  content: url("/public/img/bouton/triangle-precedent-hover.svg");
  border-right: 1px solid #b0c7c7;
}
.bouton-suivant {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--vert); /* Adjust this to match the color */
  color: #ffffff; /* Text color */
  border-right: 1px solid var(--vert);
}

.bouton-suivant:after {
  content: url("/public/img/bouton/triangle-suivant.svg");
  position: absolute;
  top: 0;
  right: -18px;
  border-left: 1px solid var(--vert);
  height: 36px;
  width: 19px;
  fill: #c8dbdb;
  color: var(--vert);
}

.bouton-suivant:hover {
  background-color: var(--bleu); /* Darken the color on hover */
}

.bouton-suivant:hover:after {
  content: url("/public/img/bouton/triangle-suivant-hover.svg");
  border-left: 1px solid var(--bleu);
}

.slide-diagnostic {
  height: calc(100vh - 150px);
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-evenly;
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
  flex-grow: 4;
}

.partie-diagnostic {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 3;
  flex-shrink: 100;
  align-items: center;
  gap: 64px;
}

.partie-diagnostic {
  flex-grow: 3;
  flex-shrink: 100;
  align-items: center;
  gap: 64px;
}

.sous-partie {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  flex-grow: 1;
  align-items: center;
  position: relative;
  height: 100%;
}

.sous-partie-gauche {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: flex-end;
}

.sous-partie-droite {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
}

.grille-impacts {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.case-impact {
  display: grid;
  grid-template-rows: 100px 1fr;
  width: 150px;
  gap: 16px;
}

.case-impact img {
  margin: auto 0;
}

.bloc-paragraphe {
  gap: 32px;
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
}

.map-content {
  text-align: left;
  color: #594231;
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

.titre-slide {
  padding: 32px 0;
  flex-grow: 0;
  color: #594231;
  line-height: 1.2;
  max-width: 900px;
  margin: auto;
}

.texte-moyen {
  font-size: 28px;
}

.chiffre-moyen {
  font-size: 36px;
  margin-top: 9px;
  font-weight: bold;
  line-height: 1;
}

.texte-petit {
  font-size: 20px;
}

.texte-centre {
  text-align: center;
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
