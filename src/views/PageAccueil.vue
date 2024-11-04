<template>
  <div>
    <MenuSimple></MenuSimple>
    <div class="section flex-column" id="accueil">
      <div class="accueil-texte">
        <div class="titre animated fadeInUp mb-3">
          <h1>
            PARCEL.WAL<br />
            Et si l’alimentation de votre territoire devenait durable et locale
            ?
          </h1>
        </div>
      </div>
      <div class="container-fluid" id="accueil-couv">
        <div class="row align-items-center accueil">
          <div class="col-md-6 col-lg-6 col-12 col-image">
            <div class="animated fadeIn delay-05s">
              <img
                :src="
                  require('@/assets/img/parcours/animation-home5-4params.gif')
                "
                id="img-home"
                alt=""
                width="500"
                class="w-100 animated fadeIn delay-05s"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-12">
            <div class="animated fadeIn" id="section0">
              <div class="container">
                <div class="mb-5 animated fadeInUp d-flex align-items-center">
                  <div>
                    <span
                      class="icon-ico_navigation_territoire icon vert-clair home-locate"
                    >
                    </span>
                  </div>
                  <h1 class="mb-0">Définissez le territoire concerné</h1>
                </div>
                <div
                  id="preselection"
                  class="text-center animated delay-05s fadeIn"
                >
                  <div
                    class="alert alert-success mb-5"
                    v-if="this.$store.state.geoList.length > 0"
                  >
                    <div
                      style="
                        font-size: 20px;
                        color: #594231;
                        margin-bottom: 10px;
                      "
                    >
                      Votre sélection :
                    </div>
                    <div
                      id="log"
                      class="ui-widget-content d-flex justify-content-center flex-wrap"
                    >
                      <span
                        v-for="geo in this.$store.state.geoList"
                        :key="geo.id"
                        class="badge badge-pill badge-light pointer"
                        style="cursor: pointer"
                        >{{ geo.localeName }}
                        <span
                          @click="enleverGeo(geo)"
                          class="icon-ico_fermer icon"
                          style="font-size: 8px; color: white"
                        ></span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="animated fadeIn">
                  <div class="champ-recherche d-flex align-items-center">
                    <span class="icon-ico_element_recherche icon"></span>
                    <form autocomplete="off" class="w-100">
                      <input
                        autocomplete="false"
                        name="hidden"
                        type="text"
                        style="display: none"
                      />
                      <input
                        class="recherche"
                        id="city"
                        placeholder="Où ?"
                        aria-describedby="inputGroup-sizing-sm"
                        v-model="rechercheInput"
                      />
                      <ul
                        class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                        id="list"
                        style="position: absolute; z-index: 1"
                        v-if="rechercheInput.length > 1 && list_geo.length > 0"
                      >
                        <li
                          class="ui-menu-item"
                          v-for="item in list_geo"
                          :key="item.id"
                          @click="ajouter(item)"
                        >
                          {{ item.localeName }}
                        </li>
                      </ul>
                    </form>
                  </div>
                  <p>
                    Saisissez le nom d’une ou plusieurs région(s), province(s),
                    arrondissement(s) commune(s)
                    <strong class="vert-fonce"
                      >au sein de la Région wallonne</strong
                    >
                  </p>
                  <!-- <div class="mt-4 input-info">
                    <label class="container-checkbox">
                      <div class="d-flex align-items-center">
                        <span>Rechercher par EPCI</span>
                        <a
                          href="#"
                          class="info"
                          data-tooltip="Les établissements publics de coopération intercommunale (EPCI) sont des regroupements de communes. Les communautés urbaines, communautés d'agglomération, communautés de communes, syndicats d'agglomération nouvelle, syndicats de communes et les syndicats mixtes sont des EPCI. (Source : INSEE)"
                          data-placement="left"
                          ><span class="icon-ico_element_info"></span
                        ></a>
                      </div>

                      <input type="checkbox" id="CheckboxEPCI" />
                      <span class="checkmark"></span>
                    </label>

                    <label class="container-checkbox">
                      <div class="d-flex align-items-center">
                        <span>Rechercher par PNR</span
                        ><a
                          href="#"
                          class="info"
                          data-tooltip="Les Parcs naturels régionaux sont créés pour protéger et mettre en valeur de grands espaces ruraux habités. Peut être classé “Parc naturel régional” un territoire à dominante rurale dont les paysages, les milieux naturels et le patrimoine culturel sont de grande qualité, mais dont l’équilibre est fragile. (Source : Parcs Naturels Régionaux de Région wallonne)"
                          data-placement="left"
                          ><span class="icon-ico_element_info"></span
                        ></a>
                      </div>
                      <input type="checkbox" id="CheckboxPNR" />
                      <span class="checkmark"></span>
                    </label>
                  </div> -->
                  <div class="mt-5"></div>
                  <div class="div-continuer">
                    <router-link to="/choix-du-parcours" id="suite">
                      <button type="button" class="btn btn-principal mt-5">
                        Continuer
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bandeau-play" id="parcours-choix" style="position: relative">
      <div class="w-100" style="position: relative">
        <div
          class="cadre-resultat resultat-ha"
          style="
            position: absolute;
            top: -25px;
            z-index: 2;
            left: calc(50% - 25px);
            border-radius: 30px;
            font-weight: bold;
            width: 51px;
          "
        >
          ou
        </div>
      </div>
      <div class="choix-alim parcours-home" style="z-index: 1">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 col-lg-6 d-flex">
              <img
                :src="require('@/assets/img/parcours/parcours2-home.svg')"
                alt=""
                class="mx-auto"
              />
            </div>
            <div class="col-12 col-md-6 col-lg-6">
              <div class="align-items-center">
                <div class="">
                  <div class="titre-parcours">
                    Définissez une surface agricole et découvrez combien de
                    personnes vous pouvez nourrir avec
                  </div>
                  <div>
                    Ce nombre de personne varie suivant vos critères (bio,
                    régimes alimentaires, type de cultures…).
                  </div>
                </div>
                <div class="">
                  <router-link
                    to="/1-relocaliser-une-surface-disponible"
                    id="suite"
                  >
                    <button type="button" class="btn btn-principal mt-3">
                      Commencer
                    </button></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-0 section-home container-fluid section-vert">
      <div class="text-h1 mb-3 text-white">PARCEL</div>
      <div class="container emphase text-center mb-5">
        Pour une Alimentation Résiliente Citoyenne Et Locale
      </div>
      <div class="row container ml-auto mr-auto ml-auto mr-auto">
        <div class="d-flex flex-wrap">
          <div class="two-cols">
            <p>
              PARCEL est un outil web simple, ludique et gratuit, permettant
              d’évaluer pour une commune ou un territoire donné les
              <strong
                >surfaces agricoles nécessaires pour se nourrir localement,
                ainsi que les emplois agricoles et les impacts écologiques
                associés</strong
              >
              à d’éventuels changements de mode de production agricole et/ou de
              régimes alimentaires (émissions de gaz à effet de serre, pollution
              des ressources en eau, effets sur la biodiversité…)
            </p>
            <p>
              Développé initialement en France par Terre de Liens, la Fédération
              Nationale de l’Agriculture Biologique (FNAB) et le BASIC, Parcel a
              été adapté à la Wallonie par Sytra et Le Basic. PARCEL.Wal invite
              <strong
                >les citoyens, les administrations et les représentants
                politiques à se saisir des enjeux actuels de
                l’alimentation</strong
              >
              en leur proposant de « jouer » sur 4 des principaux leviers de
              durabilité de l’alimentation :
            </p>
            <ul>
              <li>La reterritorialisation des filières alimentaires</li>
              <li>Les modes de production agricole</li>
              <li>La composition des régimes alimentaires</li>
              <li>
                Les pertes et gaspillages le long des chaînes agricoles et
                alimentaires
              </li>
            </ul>
            Les acteurs locaux pourront ainsi développer plusieurs scénarios à
            leur(s) échelle(s) afin de nourrir les nécessaires débats sur les
            questions de la transition alimentaire et de l’usage des terres
            agricoles dans les territoires.
          </div>
        </div>
      </div>
    </div>
    <div class="section-home container-fluid">
      <div class="text-h1">La démarche générale de calcul</div>
      <div class="container">
        <div class="">
          <p>
            PARCEL estime des ordres de grandeur mais ne prétend pas calculer
            des valeurs réelles. Il a pour objectif de fournir des estimations
            ayant un niveau de précision suffisant pour permettre des
            comparaisons, susciter des questionnements et animer des débats sur
            le thème de l’alimentation durable dans les territoires. Il est
            complémentaire de travaux d’analyse plus poussés qui visent à
            construire des scénarios prospectifs plus détaillés.
          </p>

          <p>
            Les calculs de surfaces et d’emplois reposent sur les bases de
            données publiques qui fournissent des statistiques à différentes
            échelles (nationale, régionale, départementale...), et non sur des
            extrapolations à partir de références techniques (de fermes
            agricoles, de produits consommés...).
          </p>
          <p>
            L’estimation des impacts écologiques se base sur les méta-études et
            les bases de données les plus récentes publiées au niveau wallon et
            international. Elles permettent d’évaluer les principales
            conséquences sur l’environnement liées à la conversion en bio de la
            production agricole et à la baisse de consommation de produits
            animaux.
          </p>
          <div class="text-center mt-5">
            <img
              alt="methodologie"
              class="ml-auto mr-auto mt-5"
              :src="require('@/assets/img/parcours/schema-methodo2022.svg')"
              width="80%"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section-home container-fluid">
      <div class="text-h1">Les co-porteurs</div>
      <div
        class="logos d-flex align-items-center justify-content-center flex-wrap"
      >
        <div class="item">
          <a href="https://sytra.be/" target="_blank"
            ><img
              alt="logo-partenaire"
              :src="
                require('@/assets/img/logos/partenaires/Logo-Sytra-horizontal.png')
              "
              width="400px"
              height="auto"
              class="pt-3"
          /></a>
        </div>
        <div class="item">
          <a href="https://lebasic.com/" target="_blank"
            ><img
              alt="logo-partenaire"
              :src="require('@/assets/img/logos/partenaires/basic.svg')"
              width="260px"
              height="auto"
              class="pt-3"
          /></a>
        </div>
        <div class="item">
          <a href="https://www.wallonie.be/fr" target="_blank"
            ><img
              alt="logo-partenaire"
              :src="require('@/assets/img/logos/partenaires/soutien_v_fr.png')"
              width="260px"
              height="auto"
              class="pt-3"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MenuSimple from "@/components/Menu/MenuSimple.vue";

export default {
  name: "HomeView",
  components: {
    MenuSimple,
  },
  data() {
    return {
      pointGeoAPI: window.apiURL + "/parcel/GeoData/",
      rechercheInput: "",
      list_geo: [],
    };
  },
  beforeMount: function () {
    window.localStorage.clear();
    this.$store.commit("RESET_STORE");
    this.$store.dispatch("simulation/actionResetStore");
  },
  methods: {
    ajouter(item) {
      this.rechercheInput = "";
      this.list_geo = [];
      this.$store.commit("addGeo", item);
      let codesTerritoiresListe = this.$store.getters.getcodesTerritoireParcel;
      this.$store.commit("getIndicateursPortraits", codesTerritoiresListe);
      this.$store.dispatch("actionModifierGeo");
      this.$store.dispatch("simulation/actionModifierGeo", [item]);
    },
    enleverGeo(geo) {
      let codesTerritoireParcel = this.$store.getters.getcodesTerritoireParcel;
      this.$store.commit("removeGeo", geo);
      this.$store.commit("getIndicateursPortraits", codesTerritoireParcel);
      let codesTerritoiresListe = this.$store.getters.getcodesTerritoireParcel;
      this.$store.commit("getIndicateursPortraits", codesTerritoiresListe);
      this.$store.dispatch("actionModifierGeo");
    },
  },
  watch: {
    rechercheInput: function (valeur) {
      if (valeur.length > 1) {
        axios
          .get(this.pointGeoAPI + valeur + "?pays=belgique")
          .then((response) => {
            this.list_geo = response.data;
            console.log(this.list_geo);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.section-categorie-alimentaire {
  display: flex;
  justify-content: center;
}
</style>
