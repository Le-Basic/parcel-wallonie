<template>
  <detailsTemplate
    modalTitre="Biodiversité : Déforestation importée lié à l'importation de tourteaux de soja"
    icone="icon-impact-deforest"
    iconeClasse="legumes"
    classeCouleurFond="fond-legumes"
  >
    <template #pointsmethode>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <span class="icon-ico_filtres_bio icon legumes icon-medium"></span>
          <strong>Les effets d’un passage au bio</strong>
        </div>
        <ul>
          <li>
            • PARCEL-Wallonie ne calcule pas les effets d’un passage au bio sur
            la déforestation importée, faute de données consolidées disponibles.
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span
            class="icon-ico_navigation_alimentation icon legumes icon-medium"
          ></span>
          <strong>Les effets d’une réduction des produits animaux</strong>
        </div>
        <ul>
          <li>
            Le potentiel de déforestation importée, est principalement lié à
            l’importation de soja du Brésil et d’Argentine pour l’alimentation
            animale. La réduction des produits animaux diminue donc directement
            ce risque.
          </li>
          <li>
            PARCEL-Wallonie ne rend pas compte des spécificités de certaines
            fermes d’élevage, plus herbagères et plus autonomes par exemple, et
            dont le fonctionnement va de paire avec une réduction forte, voir
            une annulation, du risque de déforestation importée.
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="icon-gaspillage icon legumes icon-medium"></span>
          <strong>Les effets d’une réduction des pertes et gaspillage</strong>
        </div>
        <ul>
          <li>
            La réduction des pertes et gaspillages permet de réduire les
            quantités nécessaires à produire et réduit donc d’autant les
            quantités d’aliments importés et donc les surfaces déforestées.
          </li>
        </ul>

        <!--mb-3 mt-5 -->
      </div>
    </template>
    <template #reperes>
      <BlocRepere
        icone="icon-ico_poids"
        classeCouleurFond="fond-legumes"
        iconeClasse="cereales"
        proportionSurface="10"
        proportionAssiette="20"
        :premierChiffre="premierChiffre"
        :deuxiemeChiffre="deuxiemeChiffre"
        :troisiemeChiffre="troisiemeChiffre"
      />
    </template>
  </detailsTemplate>
</template>

<script setup>
import detailsTemplate from "./DetailsImpactsTemplate.vue";
import BlocRepere from "./composant/BlocRepere.vue";

const premierChiffre = {
  icone: "icon-ico_poids",
  titre: "Forets",
  chiffre: "80%",
  sousTitre: "de la biodiversité terrestre sont abritées dans les forêts",
};
const deuxiemeChiffre = {
  icone: "icon-impact-deforest",
  titre: "Empreinte en déforestation importée",
  chiffre: "4.2 M Ha",
  sousTitre: "soit la superficie totale de la Belgique.",
};
const troisiemeChiffre = {
  icone: "icon-ico_poids",
  titre: "Importation de soja",
  chiffre: "35%",
  sousTitre: "de l'empreinte de la Belgique en déforestation importée",
};
</script>

<style scoped>
.ico-medium {
  font-size: 35px !important;
  margin-right: 8px;
}
</style>
