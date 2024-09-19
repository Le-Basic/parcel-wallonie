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
            Par hectare, la diminution des émissions de gaz à effet de serre est
            principalement liée à la non-utilisation d’engrais minéraux en
            agriculture biologique (en particulier les engrais azotés de
            synthèse, dont la fabrication est très énergivore) et à la mise en
            œuvre de systèmes d’élevage plus extensifs en moyenne ;
          </li>
          <li>
            Par personne, l’impact est faible du fait de la diminution des
            rendements en bio (on mobilise un plus grand nombre d’hectares et on
            additionne les effets de chacun d’eux).
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
            Par hectare, les émissions ne diminuent pas forcément avec la
            réduction des produits animaux : l’élevage n’est pas toujours plus
            émetteur en gaz à effet de serre lorsqu’on la ramène à l’unité de
            surface, comparé aux cultures végétales que l’on ajoute pour assurer
            l’apport protéique (fruits à coque, légumineuses…) ;
          </li>
          <li>
            Cependant, c’est l’élevage qui mobilise le plus d’hectare (plus de
            80% de l’empreinte spatiale de notre alimentation actuelle), une
            réduction des produits animaux fait rapidement diminuer le nombre
            d’hectares (explication dans les détails de l’indicateur « Empreinte
            au sol ») et donc les impacts qui leurs sont liés (émissions de
            méthane, de protoxyde d’azote…) : par personne, les émissions
            diminuent fortement avec la réduction des produits animaux ;
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="icon-gaspillage icon cereales icon-medium"></span>
          <strong>Les effets d’une réduction des pertes et gaspillage</strong>
        </div>
        <ul>
          <li>
            On ne mesure pas les effets d’une réduction des pertes et gaspillage
            par hectare.
          </li>
          <li>
            Par personne, la réduction des pertes et gaspillages permet de
            réduire les quantités nécessaires à produire et réduit donc d’autant
            les émissions de gaz à effet de serre.
          </li>
        </ul>
      </div>
      <ul>
        <li>
          L’indicateur de surface de PARCEL correspond à la surface à mobiliser
          au sein d’un territoire sur une année pour produire les matières
          premières agricoles nécessaires à l’alimentation relocalisée d’une
          population donnée.
        </li>
        <li>
          Pour calculer ces surfaces, en se basant sur les données de
          consommation, PARCEL utilise un coefficient, appelé « rendement
          corrigé de l’utilisation du territoire ». Les rendements agronomiques
          ne peuvent pas être directement utilisés pour réaliser ces calculs car
          ils sont rattachés à des produits particuliers (tomates par exemple)
          et pourraient ainsi mener à des doubles comptages. En effet, les
          surfaces mobilisées pour une production donnée (par exemple les
          tomates de saison) peuvent être utilisées pendant le reste de l’année
          pour d’autres productions (pois, salades…).
        </li>
        <li>
          Pour éviter ce biais, PARCEL calcule le nombre total d’hectares
          nécessaires en termes d’utilisation du territoire, ces hectares
          pouvant être le support de différentes productions d’une même
          catégorie (légumes, fruits, céréales…) selon les saisons (par exemple
          tomates, pois…).
        </li>
        <li>
          Pour ce faire, les rendements agronomiques sont pondérés de manière à
          s’assurer que la somme des surfaces calculées pour chacun des 61
          produits correspond exactement à la part du territoire mobilisée
          pendant une année pour leur production. Ces rendements pondérés
          correspondent aux « rendements corrigés de l’utilisation du territoire
          ».
        </li>
        <li>
          Ces rendements sont calculés sur des moyennes de 3 ans (les trois
          dernières années disponibles pour l’ensemble des données utilisées,
          soit la période 2014-2016 pour la version 2019 de PARCEL). Des mises à
          jour auront lieu fréquemment pour mettre à jour ces moyennes sur la
          base des dernières données disponibles
        </li>
        <li>
          On divise la donnée de consommation (différente selon le régime
          choisi) par le rendement corrigé de l’utilisation du territoire, pour
          obtenir la surface agricole à mobiliser par produit.
        </li>
        <li>
          Pour l’agriculture biologique, un différentiel de rendement a été
          calculé, principalement à partir de l’étude ROTAB (ITAB, 2011) et de
          fiches techniques régionales.
        </li>
        <li>
          Pour plus d’éléments sur la méthode de calcul, se référer à la
          <a href="/methodologie-de-calcul-de-la-relocalisation-alimentaire"
            >page annexe méthodologique</a
          >, accessible par le menu principal.
        </li>
      </ul>
    </template>
    <template #reperes>
      <BlocRepere
        icone="icon-ico_poids"
        classeCouleurFond="fond-cereales"
        iconeClasse="cereales"
        proportionSurface="10"
        proportionAssiette="20"
        :premierChiffre="premierChiffre"
        :deuxiemeChiffre="premierChiffre"
        :troisiemeChiffre="premierChiffre"
      />
    </template>
  </detailsTemplate>
</template>

<script setup>
import detailsTemplate from "./DetailsImpactsTemplate.vue";
import BlocRepere from "./composant/BlocRepere.vue";

const premierChiffre = {
  icone: "icon-ico_poids",
  titre: "Hello youuu",
  chiffre: 10,
  sousTitre: "de la surface agricole en Région wallonne",
};
</script>

<style scoped>
.icon-medium {
  font-size: 35px !important;
  margin-right: 8px;
}
</style>
