<template>
  <detailsTemplate
    modalTitre="Eau : Consommation d’eau"
    icone="icon-impact-eau-conso"
    iconeClasse="eau"
    classeCouleurFond="fond-eau"
  >
    <template #pointsmethode>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <span class="icon-ico_filtres_bio icon eau icon-medium"></span>
          <strong>Les effets d’un passage au bio</strong>
        </div>
        <ul>
          <li>
            PARCEL-Wallonie ne calcule pas les effets d’un passage au bio sur la
            consommation en eau, par manque de données consolidées.
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span
            class="icon-ico_navigation_alimentation icon eau icon-medium"
          ></span>
          <strong>Les effets d’une réduction des produits animaux</strong>
        </div>
        <ul>
          <li>
            L’augmentation de la consommation en eau par hectare résulte du fait
            qu’on remplace des productions d’élevage (peu consommatrices en eau
            lorsqu’on les ramène à l’unité de surface) par des productions
            végétale (dont certaines sont plus consommatrices en eau par unité
            de surface) ;
          </li>
          <li>
            Par personne, la consommation en eau diminue avec la réduction des
            produits animaux, puisqu’on réduit significativement le nombre
            d’hectares nécessaires.
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="icon-gaspillage icon eau icon-medium"></span>
          <strong>Les effets d’une réduction des pertes et gaspillage</strong>
        </div>
        <ul>
          <li>
            Par personne, la consommation en eau diminue avec la réduction des
            produits animaux, puisqu’on réduit le nombre d’hectares nécessaires.
          </li>
        </ul>
        <!--mb-3 mt-5 -->
      </div>
    </template>
  </detailsTemplate>
</template>

<script setup>
import detailsTemplate from "./DetailsImpactsTemplate.vue";
</script>

<style scoped>
.icon-medium {
  font-size: 35px !important;
  margin-right: 8px;
}
</style>
