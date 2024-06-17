<template>
  <div class="asy-wrapper">
    <div class="content">
      <BarreNavigation
        @montrerModalAffinage="montrerModalAffiner"
        :active="2"
      />
      <div class="section centrervh" id="section0" style="width: 100%">
        <div class="container-grand">
          <p
            class="animated fadeInUp fast p-result mb-1 map-content titre-moyen"
            style="text-align: center"
          >
            Si on commençait par mieux connaître votre territoire ?
          </p>

          <div class="diagnostic">
            <h4 style="text-align: center">Bienvenu dans le territoire de:</h4>
            <p class="text-h1">Arrondissement de Montréal</p>
            <div class="partie-diagnostic">
              <div class="sous-partie">
                <img src="/img/arr12000.svg" class="carte" />
              </div>
              <div class="sous-partie">
                <p class="map-content">Le territoire sélectionné compte:</p>
                <p
                  class="cadre-resultat style-gris resultat-ha animated flipInX delay-05s bg-grey-light nbr-ha"
                >
                  120 000 habitants
                </p>
                <p class="map-content">Sur une surface de :</p>
                <p
                  class="cadre-resultat style-gris resultat-ha animated flipInX delay-05s bg-grey-light nbr-ha"
                >
                  123 000 km²
                </p>
                <p class="map-content">
                  Soit une densité de 100 habitants / km2
                </p>
                <p class="subtext">
                  en dessous de la moyenne nationale de xx %
                </p>
              </div>
            </div>
            <div class="partie-diagnostic-pleine-page container-principal">
              <p class="titre-grand texte-centre">
                Ces 100 000 habitants consomment en moyenne par jour XXX g de
                viande, XXX g soit une équivalence de 7% de tonnes de matière
                première agricole
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
                Le territoire sélectionné a également une activité agricole et
                compte:
              </p>
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
                  principalement tournée vers la Viande Bovine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <?php include '../partials/scripts-footer.php'; ?> -->
</template>

<script>
import BarreNavigation from "@/components/Nav/BarreNavigation.vue";

export default {
  components: {
    BarreNavigation,
  },
};
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
</style>
