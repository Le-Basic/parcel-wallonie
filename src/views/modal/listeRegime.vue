<template>
  <div id="listDiets" class="d-none">
    <div class="diet d-flex align-items-center" @click="choixRegime('actuel')">
      <div class="iconDiet">
        <img alt="" :src="regimeActuel" width="77" class="pr-3" />
      </div>
      <span>Régime actuel</span>
    </div>
    <div class="diet d-flex align-items-center" @click="choixRegime('quart')">
      <div class="iconDiet">
        <img alt="" :src="regimeQuart" width="77" class="pr-3" />
      </div>
      <span>Diminution d'1/4 des produits animaux</span>
    </div>
    <div class="diet d-flex align-items-center" @click="choixRegime('moitie')">
      <div class="iconDiet">
        <img alt="" :src="regimeMoitie" width="77" class="pr-3" />
      </div>
      <div>
        <div><b>Diminution de moitié des produits animaux</b></div>
        <div class="details">
          Ce régime est proche de celui du scénario Afterres 2050, de Solagro
        </div>
      </div>
    </div>
    <div
      class="diet d-flex align-items-center"
      @click="choixRegime('vegetarien')"
    >
      <div class="iconDiet">
        <img alt="" :src="regimeVegetarien" width="77" class="pr-3" />
      </div>
      <span>VÉGÉTARIEN</span>
    </div>
    <!--div class="diet d-flex align-items-center" @click="choixRegime('vegetalien')">
         <div class="iconDiet"><img alt="" src="../assets/img/parcours/regime-vegetalien.svg" width="77" class="pr-3" /></div><span>VÉGÉTALIEN</span>
     </div-->
  </div>
</template>

<script>
import regimeVegetarien from "@/assets/img/parcours/regime-vegetarien.svg";
import regimeMoitie from "@/assets/img/parcours/regime-moitie.svg";
import regimeQuart from "@/assets/img/parcours/regime-quart.svg";
import regimeActuel from "@/assets/img/parcours/regime-actuel.svg";
import { regimeListe } from "@/config/regimeListe";

export default {
  name: "ListeRegime",
  data() {
    return {
      regimeVegetarien,
      regimeMoitie,
      regimeQuart,
      regimeActuel,
    };
  },
  methods: {
    choixRegime(regime) {
      console.log(regime);
      this.$store.commit(
        "regimeAlimentaire",
        regimeListe.find((r) => r.nomCourt === regime)
      );
      console.log(this.$store.state.regime_alimentaire);
      this.$emit("changementRegime", regime);
      document.getElementById("listDiets").classList.remove("d-block");
    },
  },
};
</script>
