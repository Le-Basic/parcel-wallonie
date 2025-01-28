<template>
  <div class="modal-content modal-repart-cat-detail">
    <div class="modal-header d-flex align-items-center">
      <div></div>
      <div class="d-flex flex-column">
        <div class="titre-categorie">Le potentiel nourricier en 3 minutes</div>
        <div class="hectares"></div>
      </div>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        @click="fermerModal"
      >
        <span class="icon-ico_fermer icon"></span>
      </button>
    </div>
    <div class="chat">
      <p class="emoji bubble me">🤔</p>
      <p class="bubble me">
        C’est quoi encore ce concept de potentiel nourricier ?
      </p>
      <p class="bubble-name me">Quentin - 15:32</p>
      <p class="bubble you">
        C’est la capacité d’un territoire de nourrir ses habitants avec les
        terres agricoles dont il dispose.
      </p>
      <p class="bubble you">
        On parle aussi de capacité d’auto-approvisionnement d’un territoire !
      </p>
      <p class="bubble-name you">Caroline - 15:48</p>
      <div class="bubble-titre-container">
        <p class="bubble-titre">Pour aller plus loin</p>
      </div>

      <p class="bubble me emoji">😦</p>
      <p class="bubble me">
        D’accord mais c’est un chiffre, encore un ! Comment on l’interprète ?
      </p>
      <p class="bubble-name me">Quentin - 15:55</p>
      <p class="bubble you">
        Si les terres agricoles du territoire permettent de nourrir ses
        habitants, le potentiel nourricier est supérieur à 100%.
      </p>

      <p class="bubble you">
        <img
          src="/img/potentiel_nourricier/PotentielNourricierPositif.jpg"
          width="100%"
          background-color="white"
          style
        />
      </p>

      <p class="bubble you">
        A l’inverse, si la surface agricole du territoire n’est pas assez
        importante pour nourrir ses habitants, le potentiel nourricier est
        inférieur à 100%<br />
        exemple, si le potentiel nourricier est de 30%, cela veut dire que la
        surface agricole du territoire permettrait de subvenir aux besoins de
        près de 1/3 de la population de ce territoire
      </p>
      <p class="bubble you">
        <img
          src="/img/potentiel_nourricier/PotentielNourricierNegatif.jpg"
          width="100%"
          background-color="white"
          style
        />
      </p>
      <p class="bubble-name you">Caroline - 15:58</p>
      <div class="bubble-titre-container">
        <p class="bubble-titre">La précision par produit...</p>
      </div>
      <p class="bubble me emoji">🤔</p>
      <p class="bubble me">
        Je comprends.<br />>En revanche j’ai fait le test et dans mon territoire
        et j’obtiens un potentiel nourricier supérieur à 100%, donc les surfaces
        agricoles sont censées pouvoir subvenir aux besoins alimentaires de la
        population locale<br />
        Mais ce n’est pas possible car je connais bien mon coin et je sais qu’on
        ne cultive presque pas de fruits!
      </p>
      <p class="bubble-name me">Quentin - 16:07</p>

      <p class="bubble you">
        C’est pour cette raison que Parcel donne 2 résultats du potentiel
        nourricier : un global, et un détaillé par grandes familles de
        produits<br />Le potentiel nourricier global ne regarde pas
        l’utilisation actuelle des surfaces agricoles. Il prend la surface
        totale et la compare à la surface nécessaire pour subvenir aux besoins
        de la population.
      </p>
      <p class="bubble you">
        <img
          src="/img/potentiel_nourricier/PotentielNourricierGlobal.jpg"
          width="100%"
          background-color="white"
          style
        />
      </p>
      <p class="bubble you">
        Le résultat par « produits » permet justement de décliner le potentiel
        nourricier par grandes familles de produits.<br />Si il y a peu de
        fruits sur le territoire, le potentiel nourricier des fruits sera en
        dessous de 100%.
      </p>
      <p class="bubble you">
        <img
          src="/img/potentiel_nourricier/PotentielNourricierParProduit.jpg"
          width="100%"
          background-color="white"
          style
        />
      </p>
      <p class="bubble you">
        La comparaison des résultats de ces deux visions (globale et par
        produits) est particulièrement intéressante. En effet, sur l’exemple
        précédent, le territoire a un potentiel fort sur la relocalisation de
        son alimentation. Cependant, au vu des résultats par produits, le
        territoire devra diversifier ses productions s’il souhaite améliorer
        l’adéquation entre l’offre et la demande alimentaire locale.
      </p>
      <p class="bubble you">
        Bien entendu, selon les territoires, cette diversification n’est pas
        toujours envisageable ou souhaitable. Par exemple, en zone de montagne,
        il est difficile d’imaginer le remplacement de zones de prairies par des
        zones de cultures
      </p>
      <p class="bubble-name you">Caroline - 16:12</p>

      <div class="bubble-titre-container">
        <p class="bubble-titre">Cela reste théorique</p>
      </div>
      <p class="bubble me emoji">🤯</p>

      <p class="bubble me">
        D’accord. Après, même sur les produits où le potentiel nourricier est à
        plus de 100%, je vois bien que les habitants d’ici ne se nourrissent
        qu’en toute petite partie de produits locaux !
      </p>
      <p class="bubble-name me">Quentin - 16:22</p>
      <p class="bubble you">
        Ça reste une mesure théorique (c’est un « potentiel ») : ça ne dit rien
        sur l’alimentation produite localement et réellement consommée par les
        habitants du territoire actuellement.<br />Mais ça permet de poser des
        ordres de grandeur sur ce qui pourrait être envisageable ou non en
        termes de relocalisation alimentaire. Et de pouvoir constater les effets
        d’un changement de régime alimentaire, de réduction du gaspillage, de
        passage au bio...
      </p>
      <p class="bubble-name you">Caroline - 16:33</p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
let emit = defineEmits(["fermerModal"]);

const fermerModal = () => {
  console.log("fermerModal");
  emit("fermerModal");
};
</script>

<style scoped>
.chat {
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-direction: column;
  width: 98%;
  overflow-x: hidden;
  padding: 10px;
}
.bubble {
  font-size: 16px;
  position: relative;
  display: inline-block;
  clear: both;
  margin-bottom: 8px;
  padding: 13px 14px;
  vertical-align: top;
  border-radius: 8px;
  max-width: 40%;
  text-align: left;
}

.bubble:before {
  position: absolute;
  top: 19px;
  display: block;
  width: 8px;
  height: 6px;
  content: "\00a0";
  transform: rotate(29deg) skew(-35deg);
}
.bubble.you {
  float: left;
  color: var(--white);
  background-color: var(--vert);
  align-self: flex-start;
  animation-name: slideFromLeft;
}

.bubble.you:before {
  left: -3px;
  background-color: var(--vert);
}
.bubble.me {
  text-align: right;
  float: right;
  color: var(--dark);
  background-color: #eceff1;
  align-self: flex-end;
  animation-name: slideFromRight;
}
.bubble.me:before {
  right: -3px;
  background-color: #eceff1;
}

.bubble.emoji {
  font-size: 36px;
}

.bubble-name {
  font-size: 12px;
  color: #9e9e9e;
  margin-bottom: 10px;
}

.bubble-name.me {
  text-align: right;
}
.bubble-name.you {
  text-align: left;
}

.bubble-titre-container {
  font-size: 12px;
  color: #9e9e9e;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
}

.bubble-titre-container:before,
.bubble-titre-container:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid #9e9e9e;
  margin: auto;
}

.bubble-titre {
  background-color: #fff;
  padding: 0 10px;
  z-index: 1;
  margin-bottom: 0;
}

.modal-header {
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
}
</style>
