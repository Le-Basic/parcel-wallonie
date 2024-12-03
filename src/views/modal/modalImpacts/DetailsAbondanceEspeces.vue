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
          <span class="icon-ico_filtres_bio icon legumes ico-medium"></span>
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
            class="icon-ico_navigation_alimentation icon legumes ico-medium"
          ></span>
          <strong>Les effets d’une réduction des produits animaux</strong>
        </div>
        <ul>
          <li>
            Les surfaces liées aux productions d’élevage comportent des
            prairies, habitats agricoles favorables au développement de divers
            espèces. La réduction des produits animaux augmente la destruction
            des espèces, en diminuant ces espaces.
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <span class="icon-gaspillage icon legumes ico-medium"></span>
          <strong> Les effets d’une réduction des pertes et gaspillage</strong>
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
.ico-medium {
  font-size: 35px !important;
  margin-right: 8px;
}
</style>
