<template>
  <div>
    <MenuSimple></MenuSimple>
    <div class="section flex-column" id="accueil">
      <div class="accueil-texte">
        <div class="titre animated fadeInUp mb-3">
          <h1>
            PARCEL-Wallonie<br />
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
                :src="require('@/assets/img/logos/Sytra_SchémaPARCEL.png')"
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
                <BarreRecherche></BarreRecherche>
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
              PARCEL-Wallonieest un outil web simple, ludique et gratuit,
              permettant d’évaluer pour une commune ou un territoire donné les
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
              été adapté à la Wallonie par Sytra et Le Basic. PARCEL-Wallonie
              invite
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
            PARCEL-Wallonieestime des ordres de grandeur mais ne prétend pas
            calculer des valeurs réelles. Il a pour objectif de fournir des
            estimations ayant un niveau de précision suffisant pour permettre
            des comparaisons, susciter des questionnements et animer des débats
            sur le thème de l’alimentation durable dans les territoires. Il est
            complémentaire de travaux d’analyse plus poussés qui visent à
            construire des scénarios prospectifs plus détaillés.
          </p>

          <p>
            Les calculs de surfaces et d’emplois reposent sur les bases de
            données publiques qui fournissent des statistiques à différentes
            échelles (nationale, régionale...), et non sur des extrapolations à
            partir de références techniques (de fermes agricoles, de produits
            consommés...).
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
import MenuSimple from "@/components/Menu/MenuSimple.vue";
import BarreRecherche from "@/components/BarreRecherche.vue";

export default {
  name: "HomeView",
  components: {
    MenuSimple,
    BarreRecherche,
  },
  data() {
    return {
      pointGeoAPI: window.apiURL + "parcel/GeoData/",
      rechercheInput: "",
      list_geo: [],
    };
  },
  beforeMount: function () {
    window.localStorage.clear();
    this.$store.commit("RESET_STORE");
    this.$store.dispatch("simulation/actionResetStore");
  },
};
</script>

<style scoped>
.section-categorie-alimentaire {
  display: flex;
  justify-content: center;
}
</style>
