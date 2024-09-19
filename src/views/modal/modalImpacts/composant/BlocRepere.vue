<template>
  <div
    class="cadre-resultat methodo-detail d-flex flex-sm-row flex-column justify-content-around infographie-detail"
    :class="props.classeCouleurFond"
  >
    <span class="col-4 d-flex flex-sm-column flex-row justify-content-center"
      ><span :class="[props.premierChiffre.icone, 'icon', iconeClasse]"></span>
      <div class="info-infos">
        <span class="d-flex flex-column info-intro"
          ><span :class="['info-entete', iconeClasse]">{{
            props.premierChiffre.titre
          }}</span
          ><span :class="['info-verbe', iconeClasse]">=</span></span
        ><span class="d-flex flex-column info-detail"
          ><span class="nbr-ha">{{ props.premierChiffre.chiffre }}</span
          ><span class="hectares">{{
            props.premierChiffre.sousTitre
          }}</span></span
        >
      </div>
    </span>
    <span class="col-4 d-flex flex-sm-column flex-row justify-content-center"
      ><span :class="[props.deuxiemeChiffre.icone, 'icon', iconeClasse]"></span>
      <div class="info-infos">
        <span class="d-flex flex-column info-intro"
          ><span :class="['info-entete', iconeClasse]">{{
            props.deuxiemeChiffre.titre
          }}</span
          ><span :class="['info-verbe', iconeClasse]">=</span></span
        ><span class="d-flex flex-column info-detail"
          ><span class="nbr-ha">{{ props.deuxiemeChiffre.chiffre }}</span
          ><span class="hectares">{{
            props.deuxiemeChiffre.sousTitre
          }}</span></span
        >
      </div>
    </span>
    <span class="col-4 d-flex flex-sm-column flex-row justify-content-center"
      ><span
        :class="[props.troisiemeChiffre.icone, 'icon', iconeClasse]"
      ></span>
      <div class="info-infos">
        <span class="d-flex flex-column info-intro"
          ><span :class="['info-entete', iconeClasse]">{{
            props.troisiemeChiffre.titre
          }}</span
          ><span :class="['info-verbe', iconeClasse]">=</span></span
        ><span class="d-flex flex-column info-detail"
          ><span class="nbr-ha">{{ props.troisiemeChiffre.chiffre }}</span
          ><span class="hectares">{{
            props.troisiemeChiffre.sousTitre
          }}</span></span
        >
      </div>
    </span>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  icone: String,
  iconeClasse: String,
  classeCouleurFond: String,
  premierChiffre: {
    icone: String,
    titre: String,
    chiffre: Number,
    sousTitre: String,
  },
  deuxiemeChiffre: {
    icone: String,
    titre: String,
    chiffre: Number,
    sousTitre: String,
  },
  troisiemeChiffre: {
    icone: String,
    titre: String,
    chiffre: Number,
    sousTitre: String,
  },
});
</script>
