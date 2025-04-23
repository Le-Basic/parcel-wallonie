<template>
  <detailsTemplate
    modalTitre="Biodiversité : Déclin des espèces"
    icone="icon-impact-especes"
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
            La diminution de la destruction des espèces est liée à certaines
            pratiques mises en œuvre par les fermes bio: rotations plus longues
            et plus diversifiées, davantage de prairies, absence de pesticides
            chimiques…
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
            Les effets d’une réduction des produits animaux ne sont pas
            directement calculés, par manque de données consolidées. Mais les
            surfaces liées aux productions d’élevage comportent des prairies,
            habitats agricoles favorables au développement de divers espèces. La
            réduction des produits animaux diminuent en réalité ces espaces.
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="icon-gaspillage icon legumes icon-medium"></span>
          <strong>Les effets d’une réduction des pertes et gaspillage</strong>
        </div>
        <ul>
          <li>
            PARCEL-Wallonie ne mesure pas les effets d’une réduction des pertes
            et gaspillage sur la biodiversité.
          </li>
        </ul>
      </div>
    </template>
    <template #reperes>
      <BlocRepere
        icone="icon-ico_poids"
        classeCouleurFond="fond-legumes"
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
  icone: "icon-impact-especes",
  titre: "Espaces menacées",
  chiffre: "1 million",
  sousTitre: "de la surface agricole en Région wallonne",
};
const deuxiemeChiffre = {
  icone: "icon-impact-biodiversite",
  titre: "Diversité en Belgique",
  chiffre: "3%",
  sousTitre: "de la surface agricole en Région wallonne",
};
const troisiemeChiffre = {
  icone: "icon-affiner-reloc",
  titre: "1eres causes",
  chiffre: "",
  sousTitre: "de la perte de biodiversité",
};
</script>

<style scoped>
.icon-medium {
  font-size: 35px !important;
  margin-right: 8px;
}
</style>
