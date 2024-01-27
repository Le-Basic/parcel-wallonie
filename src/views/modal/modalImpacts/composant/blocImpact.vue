<template>
  <div class="card">
    <!--domaine de validite-->
    <div
      id="heading4"
      :class="{ 'card-header': true, 'btn-link-ouvert': ouvert }"
    >
      <h5 class="mb-0">
        <button
          :class="{ btn: true, 'btn-link': true, 'btn-link-ouvert': ouvert }"
          data-toggle="collapse"
          data-target="#collapsePerimetre"
          aria-expanded="false"
          aria-controls="collapsePerimetre"
          @click="toggle"
        >
          <div>
            <slot name="icon">
              <span class="icon-perimetre icon white" />
            </slot>
          </div>
          <div>
            <slot name="nomBouton">
              Domaine de validité
            </slot>
          </div>
        </button>
      </h5>
    </div>
    <!--card-header-->
    <div
      v-if="ouvert"
      id="collapsePerimetre"
      aria-labelledby="heading4"
      data-parent="#accordeon-fiche"
    >
      <slot name="contenu">
        <div class="card-body">
          <ul>
            <li>
              Lorsqu’il est défini par hectare, la mesure d’impact dans PARCEL
              correspond à la différence d’impact entre :
              <ul>
                <li>
                  1 hectare moyen permettant de répondre aux besoins
                  alimentaires associés à un régime actuel et à une agriculture
                  actuelle ;
                </li>
                <li>
                  1 hectare moyen qui permettrait de répondre aux besoins
                  alimentaires associés à des choix de production agricole et de
                  consommation différents (% de bio et changement de régime
                  alimentaire).
                </li>
              </ul>
              Attention : il n’est pas possible de mesurer la différence
              d’impact engendrée par les hectares supplémentaires qu’il faudrait
              potentiellement mobiliser. Autrement dit, si l’alimentation
              scénarisée via PARCEL requiert 20% de plus de surfaces agricoles,
              les différentiels d’impacts de ces nouvelles surfaces ne sont pas
              calculés car il n’est pas possible de savoir où seraient situés
              ces hectares ni de connaitre leur utilisation actuelle (forêts,
              villes etc.).
            </li>

            <li>
              L’indicateur « émissions de gaz à effet de serre » ne prend pas en
              compte le changement d’usage des sols. Dans certains cas, cela
              pourrait participer à des émissions supplémentaires (de CO2
              notamment).
            </li>
            <li>
              L’utilisation des inventaires d’Analyse Cycle de Vie de la base de
              données FoodGES de l’ADEME implique notamment :
              <ul>
                <li>
                  Que le périmètre retenu est celui «&nbsp;depuis la production
                  des intrants agricoles jusqu’à la sortie magasin&nbsp;»
                </li>
                <li>
                  Que les phénomènes de stockage / déstockage de carbone des
                  surfaces mobilisées ne sont pas pris en compte
                </li>
              </ul>
            </li>
          </ul>
          <!--ul-->
        </div>
      </slot>
      <!--card-body-->
    </div>
    <!--collapse-->
  </div>
</template>

<script>
export default {
  name: "BlocAccordeon",
  data() {
    return {
      ouvert: false,
    };
  },
  methods: {
    toggle() {
      this.ouvert = !this.ouvert;
    },
  },
};
</script>

<style scoped>
.btn-link-ouvert {
  background-color: #874e00 !important;
  color: #fff !important;
}
</style>
