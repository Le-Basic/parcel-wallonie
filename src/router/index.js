import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChoixDuTerritoire from "../views/ChoixDuTerritoire.vue";
import ChoixDePopulation from "../views/ChoixDePopulation.vue";
import ChoixParametres from "../views/ChoixParametres.vue";
import ResultatsImpacts from "../views/ResultatsImpacts.vue";
import ResultatsRelocalisation from "../views/ResultatsRelocalisation.vue";
import ResultatsSurfaces from "../views/ResultatsSurfaces.vue";
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
    path: "/impacts-ecologiques-de-la-relocatisation",
    name: "impacts ecolos",
    component: ResultatsImpacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
