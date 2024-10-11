<template>
  <detailsTemplate
    :proportionImportation="CHIFFRES_DIAGNOSTICS.LEGUMES.importation"
    :proportionAssiette="CHIFFRES_DIAGNOSTICS.LEGUMES.consommation"
    :proportionSurface="CHIFFRES_DIAGNOSTICS.LEGUMES.production"
  >
    <template #sourcesdedonnees>
      <ul>
        <li>
          <div class="h1-liste">Production et surface</div>
          <ul>
            <li>
              ­<span class="source-titre"
                ><a
                  href="https://statbel.fgov.be/fr/themes/agriculture-peche/exploitations-agricoles-et-horticoles#figures"
                  >Chiffres Agricoles</a
                > </span
              ><span class="source-auteur"> – Statbel</span
              ><span class="source-année"></span>
              <div>
                <a
                  class=""
                  href="https://statbel.fgov.be/fr/themes/agriculture-peche/exploitations-agricoles-et-horticoles#figures"
                  >Voir la page de statistiques</a
                >
              </div>
            </li>
            <li>
              ­<span class="source-titre"
                >Crop production in EU standard humidity</span
              ><span class="source-auteur"> – Eurostat</span>
              <div>
                <a
                  class=""
                  href="https://ec.europa.eu/eurostat/web/agriculture/database"
                  >Voir l'enquête</a
                >
              </div>
            </li>
            <li>
              ­<span class="source-titre">Etudes filières</span
              ><span class="source-auteur"> – Sytra</span>
              <div>
                <a
                  class=""
                  href="https://ec.europa.eu/eurostat/web/agriculture/database"
                  >Voir l'enquête</a
                >
              </div>
            </li>
            <li>
              ­<span class="source-titre"
                >Rapport sur l'Industrie Laitière Belge en 2024</span
              ><span class="source-auteur"> – Collège des producteurs</span>
              <div>
                <a
                  class=""
                  href="https://collegedesproducteurs.be/filiere/bovins-laitiers/2024/industrie-laitiere-belge-en-2024-enjeux-et-perspectives-economiques-selon-le-memorandum-de-la-cbl/#:~:text=La%20CBL%20(Conf%C3%A9d%C3%A9ration%20Belge%20de,de%20l'industrie%20alimentaire%20belge."
                  >Lire l'étude</a
                >
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="h1-liste">Consommation</div>
          <ul>
            <li>
              ­<span class="source-titre">Recensement de la population</span
              ><span class="source-auteur"> – Statbel </span
              ><span class="source-année"></span>
              <div>
                <a
                  class=""
                  href="https://statbel.fgov.be/fr/propos-de-statbel/que-faisons-nous/recensement-census"
                  >Voir le site de Statbel</a
                >
              </div>
            </li>
            <li>
              <span class="source-titre"
                >Enquête de consommation alimentaire</span
              ><span class="source-auteur">
                - Institut Scientifique de Santé Publique</span
              >
              <div>
                <a
                  class=""
                  href="https://www.sciensano.be/fr/biblio/enquete-de-consommation-alimentaire-2014-2015-partie-4-consommation-alimentaire"
                  >Voir l'enquête</a
                >
              </div>
            </li>
            <li>
              <span class="source-titre"
                >Bilan d'Approvisionnement Céréales</span
              ><span class="source-auteur"> - Collège des Producteurs</span>
              <div>
                <a
                  class=""
                  href="https://goodfood.brussels/sites/default/files/inline-files/Filière%20céréales.pdf"
                  >Voir la présentation</a
                >
              </div>
            </li>
            <li>
              <span class="source-titre"
                >­Étude individuelle nationale des consommations alimentaires 3
                (INCA 3)</span
              ><span class="source-auteur"> - ANSES</span
              ><span class="source-année"> - 2017</span>
              <div>
                <a
                  class=""
                  href="https://www.anses.fr/fr/system/files/NUT2014SA0234Ra.pdf"
                  >Voir l'étude</a
                >
              </div>
            </li>
            <li>
              <span class="source-titre">Bilan d'Approvisionnement Viande</span
              ><span class="source-auteur"> - Statbel</span
              ><span class="source-année"> - 2023</span>
              <div>
                <a
                  class=""
                  href="https://statbel.fgov.be/fr/themes/agriculture-peche/bilans-dapprovisionnement"
                  >Voir l'étude</a
                >
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="h1-liste">Agriculture Biologique</div>
          <ul>
            <li>
              ­<span class="source-titre">­­Fiches techniques régionales</span>
            </li>
            <li>­<span class="source-titre">­Entretiens d’experts</span></li>
          </ul>
        </li>
      </ul>
    </template>
  </detailsTemplate>
</template>

<script setup>
import detailsTemplate from "@/views/modal/modalDetails/detailsTemplate.vue";
</script>
