<template>
  <detailsTemplate
    modalTitre="Les sols : Dégradation de la qualité des sols"
    icone="icon-impact-solqualit"
    iconeClasse="viande"
    classeCouleurFond="fond-viande"
  >
    <template #pointsmethode>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <span class="icon-ico_filtres_bio icon viande icon-medium"></span>
          <strong>Les effets d’un passage au bio</strong>
        </div>
        <ul>
          <li>
            La diminution de la pauvreté des sols est liée à la gestion de la
            fertilité en agriculture biologique, via l’apport de matières
            organiques (composte, fumier …), qui serait l’une des principales
            raisons de l’enrichissement en matière organique des sols (<em
              >Seufert and Ramankutty, 2017</em
            >).
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span
            class="icon-ico_navigation_alimentation icon viande icon-medium"
          ></span>
          <strong>Les effets d’une réduction des produits animaux</strong>
        </div>
        <ul>
          <li>
            Les prairies ont des stocks de carbone organiques plus importants
            que les autres cultures végétales (INRA, 2019). Ainsi, la réduction
            des produits animaux va de paire avec une augmentation de la
            pauvreté des sols par hectare (car elle diminue la part occupée par
            des prairies).
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="icon-gaspillage icon viande icon-medium"></span>
          <strong>Les effets d’une réduction des produits animaux</strong>
        </div>
        <ul>
          <li>
            On ne mesure pas les effets d’une réduction des pertes et gaspillage
            par hectare.
          </li>
        </ul>
        <!--mb-3 mt-5 -->
      </div>
    </template>
    <template #reperes>
      <BlocRepere
        icone="icon-ico_poids"
        classeCouleurFond="fond-viande"
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
  titre: "Coût",
  chiffre: "10%",
  sousTitre: "du Produit mondial brut annuel",
};
const troisiemeChiffre = {
  icone: "icon-impact-sol",
  titre: "Dégradation des sols",
  chiffre: "10%",
  sousTitre:
    "un des principaux facteurs qui participent au changement climatique",
};
const deuxiemeChiffre = {
  icone: "icon-impact-climat",
  titre: "Matière organique des sols",
  chiffre: "%",
  sousTitre:
    "est fondamentale pour réduire l'érosion des sos, améliorer leur fertilité, favoriser la biodiversité",
};
</script>

<style scoped>
.ico-medium {
  font-size: 35px !important;
  margin-right: 8px;
}
</style>
