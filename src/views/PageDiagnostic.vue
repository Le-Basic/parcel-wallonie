<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="2"
      />

      <div class="section centrervh" id="section0" style="width: 100%">
        <div class="container-grand">
          <div>
            <div>
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
                    <p class="map-content">Le territoire sélectionné compte:</p>
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
                    <p class="subtext" v-html="differencePctDensitePhrase"></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="partie-diagnostic-pleine-page container-principal">
              <p class="titre-grand texte-centre">
                Ces {{ population }} habitants consomment en moyenne par jour
                XXX g de viande, XXX g de pain etc. <br />soit une équivalence
                de 7 tonnes de matière première agricole réparties ainsi:
              </p>

              <div style="margin: auto">
                <img width="350" src="/img/placeholder-consommation.png" />
              </div>
              <p>
                En savoir plus sur le régime moyen d'une personne résidente
                Belge
              </p>
              <p class="map-content titre-moyen">
                Pour produire cette quantité de nourriture (viande, légumes et
                céréales), il lui faudrait disposer de 1000 hectares de terres
                agricoles
              </p>
            </div>
            <div class="partie-diagnostic-pleine-page">
              <p class="texte-centre titre-grand">
                Le territoire sélectionné a également une activité agricole:
              </p>
              <div class="partie-diagnostic">
                <div class="sous-partie">
                  <img src="/img/arr12000.svg" class="carte" />
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
                    en dessous de la moyenne nationale de xx %
                  </p>
                </div>
              </div>
              <div class="ligne-chiffres">
                <div
                  class="mb-0 cadre-resultat animated cadre-btn fadeIn delay-05s presentation-resultats"
                  onclick="location.href='/repartition-des-produits-relocalises';"
                  style="cursor: pointer"
                >
                  <div class="col">
                    <div class="result-type">
                      <span class="icon-ico_navigation_surface icon"></span
                      ><span class="titre-result">
                        <h2>Exploitations agricoles:</h2>
                      </span>
                    </div>
                    <div class="result-chiffres text-center">
                      <div
                        class="nbr-ha animated flipInX delay-1s odometer"
                        id="surface6"
                      >
                        100
                      </div>
                      <div class="hectares">fermes</div>
                      <div
                        class="animated flipInX delay-1s odometer element-evolution"
                      >
                        Soit une diminution de 5% par rapport à 2010
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="h-100 mb-0 cadre-resultat animated cadre-btn fadeIn delay-05s"
                  onclick="location.href='/repartition-des-produits-relocalises';"
                  style="cursor: pointer"
                >
                  <div class="col">
                    <div class="result-type">
                      <span class="icon-ico_navigation_surface icon"></span
                      ><span class="titre-result">
                        <h2>Emplois</h2>
                      </span>
                    </div>
                    <div class="result-chiffres text-center">
                      <div class="nbr-ha animated flipInX delay-1s odometer">
                        200
                      </div>
                      <div class="hectares">ETP</div>
                      <div
                        class="animated flipInX delay-1s odometer element-evolution"
                      >
                        Soit une diminution de 5% par rapport à 2010
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="h-100 mb-0 cadre-resultat animated cadre-btn fadeIn delay-05s"
                  onclick="location.href='/repartition-des-produits-relocalises';"
                  style="cursor: pointer"
                >
                  <div class="col">
                    <div class="result-type">
                      <span class="icon-ico_navigation_surface icon"></span
                      ><span class="titre-result">
                        <h2>Surfaces Agricole du territoire</h2>
                      </span>
                    </div>
                    <div class="result-chiffres text-center">
                      <div class="nbr-ha animated flipInX delay-1s odometer">
                        45%
                      </div>
                      <div class="hectares">dans la surface totale</div>

                      <div
                        class="animated flipInX delay-1s odometer element-evolution"
                      >
                        Soit une diminution de 5% par rapport à 2010
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p class="map-content texte-centre titre-moyen">
                  Cette activité agricole est largement spécialisée et
                  principalement tournée vers la Viande Bovine:
                </p>
                <img src="/img/ote.png" class="carte" />
                <p class="texte-centre titre-grand">
                  Sur le territoire choisi, l'activité agricole (élevage et
                  culture) est responsable de:
                </p>
                <p class="gros-chiffre-diagnostic">250 emplois</p>
                <p class="texte-centre titre-grand">
                  répartis sur 170 exploitations agricoles.
                </p>
                <p class="map-content">
                  Cela représente aujourd'hui seulement X% de la population du
                  territoire, un chiffre en net recul depuis de longues
                  années...
                </p>
              </div>
            </div>
            <div id="potentiel">
              <p class="titre-grand texte-centre">
                Alors pourrais-je nourrir l'ensemble de ma population avec les
                surfaces actuelles agricoles ?
              </p>
              <p class="map-content">
                bien que la population pourrait être nourrie par les terres
                agricoles du territoire, (le potentiel nourricier est positif),
                il manque certaines productions essentielles pour cela
              </p>
              <div class="div-continuer mb-small animated fadeInUp delay-5-1s">
                <a href="/impacts-ecologiques-de-la-relocatisation"
                  ><button type="button" class="btn btn-principal mt-5">
                    Simuler la relocalisation
                  </button></a
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <?php include '../partials/scripts-footer.php'; ?> -->
</template>

<script setup>
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";
import { AfficherEntier } from "@/plugins/utils";

import { ref } from "vue";
import { useStore } from "vuex";

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
const densite = population.value / surface_km2.value;
const densiteWallonie = 217.8; // https://www.iweps.be/indicateur-statistique/densite-de-population/#:~:text=Au%201er%20janvier%202023%2C%20la,217%2C8%20habitants%20au%20km%C2%B2.
const differencePctDensitePhrase = getPhraseDensiteComparaison(
  densite,
  densiteWallonie
);
</script>

<style scoped>
.is-active {
  display: block !important;
  visibility: visible !important;
}

.card-active {
  background-color: #91c423;
  color: white;
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

.diagnostic {
  display: flex;
  flex-direction: column;
}

.partie-diagnostic {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-grow: 1;
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
  justify-content: center;
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
  width: 100%;
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
</style>
