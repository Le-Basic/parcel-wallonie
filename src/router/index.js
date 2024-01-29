import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChoixDuTerritoire from "../views/ChoixDuTerritoire.vue";
import ChoixDePopulation from "../views/ChoixDePopulation.vue";
import ChoixParametres from "../views/ChoixParametres.vue";
import ResultatsImpacts from "../views/ResultatsImpacts.vue";
import ResultatsRelocalisation from "../views/ResultatsRelocalisation.vue";
import ResultatsSurfaces from "../views/ResultatsSurfaces.vue";
import ResultatsEmplois from "../views/ResultatsEmplois.vue";
import ResultatsAgir from "../views/ResultatsAgir.vue";
import PageMethodologie from "../views/PageMethodologie.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/1-choix-du-territoire",
    name: "territoire",
    component: ChoixDuTerritoire,
  },
  {
    path: "/2-choix-de-la-population",
    name: "choix-de-population",
    component: ChoixDePopulation,
  },
  {
    path: "/3-type-dalimentation",
    name: "choix-des-parametres",
    component: ChoixParametres,
  },
  {
    path: "/agir-pour-une-relocalisation-durable",
    name: "agir",
    component: ResultatsAgir,
  },
  {
    path: "/resultats-de-votre-relocalisation",
    name: "resultats-relocalisation",
    component: ResultatsRelocalisation,
  },
  {
    path: "/repartition-des-produits-relocalises",
    name: "repartition-produits-relocalises",
    component: ResultatsSurfaces,
  },
  {
    path: "/emplois-crees-par-la-relocalisation",
    name: "emplois-crees-par-la-relocalisation",
    component: ResultatsEmplois,
  },
  {
    path: "/impacts-ecologiques-de-la-relocatisation",
    name: "impacts ecolos",
    component: ResultatsImpacts,
  },
  {
    path: "/methodologie-de-calcul-de-la-relocalisation-alimentaire",
    name: "Methodologie",
    component: PageMethodologie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
