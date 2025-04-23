<template>
  <detailsTemplate
    modalTitre="Le climat et l’air : les émissions de gaz à effet de serre"
    icone="icon-impact-co2"
    iconeClasse="cereales"
    classeCouleurFond="fond-cereales"
  >
    <template #pointsmethode>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <span class="icon-ico_filtres_bio icon cereales icon-medium"></span>
          <strong>Les effets d’un passage au bio</strong>
        </div>
        <ul>
          <li>
            Au total, l’impact est faible du fait de la diminution des
            rendements en bio (on mobilise un plus grand nombre d’hectares et on
            additionne les effets de chacun d’eux), pouvant même mener dans
            certains cas à une légère augmentation des émissions de GES.
          </li>
          <li>
            Cependant par hectare, l’augmentation bio mène à la diminution des
            émissions de gaz à effet de serre, principalement grâce à la
            non-utilisation d’engrais minéraux en agriculture biologique (en
            particulier les engrais azotés de synthèse, dont la fabrication est
            très énergivore) et à la mise en œuvre de systèmes d’élevage plus
            extensifs en moyenne ;
          </li>
        </ul>

        <div class="d-flex align-items-center">
          <span
            class="icon-ico_navigation_alimentation icon cereales icon-medium"
          ></span>
          <strong>Les effets d’une réduction des produits animaux</strong>
        </div>
        <ul>
          <li>
            L’élevage mobilise le plus d’hectare (plus de 80% de l’empreinte
            spatiale de notre alimentation actuelle), une réduction des produits
            animaux fait rapidement diminuer le nombre d’hectares et donc les
            impacts qui leurs sont liés (émissions de méthane, de protoxyde
            d’azote…) : au total, les émissions diminuent fortement avec la
            réduction des produits animaux ;
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="icon-gaspillage icon cereales icon-medium"></span>
          <strong>Les effets d’une réduction des pertes et gaspillage</strong>
        </div>
        <ul>
          <li>
            La réduction des pertes et gaspillages permet de réduire les
            quantités nécessaires à produire et réduit donc d’autant les
            émissions de gaz à effet de serre.
          </li>
        </ul>
      </div>
    </template>
    <template #reperes>
      <BlocRepere
        icone="icon-ico_poids"
        classeCouleurFond="fond-cereales"
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
  icone: "icon-ico_navigation_alimentation",
  titre: "Alimentation",
  chiffre: "24%",
  sousTitre: "de l'empreinte carbone des ménages belges",
};
const deuxiemeChiffre = {
  icone: "icon-affiner-reloc",
  titre: "Production Agricole",
  chiffre: "2/3",
  sousTitre: "de l'empreinte carbone de l'alimentatoin en Belgique",
};
const troisiemeChiffre = {
  icone: "icon-ico_CATEGORIES_viande",
  titre: "Produits animaux",
  chiffre: "80%",
  sousTitre: "de l'empreinte carbone de l'alimentation des ménages belges",
};
</script>

<style scoped>
.icon-medium {
  font-size: 35px !important;
  margin-right: 8px;
}
</style>
