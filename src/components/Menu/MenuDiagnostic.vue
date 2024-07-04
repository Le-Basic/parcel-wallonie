<template>
  <div class="">
    <ul
      class="navbar-nav align-items-center text-center w-100 justify-content-center"
    >
      <li>
        <img
          alt="Resultats"
          class="type-menu"
          :src="require('@/assets/img/elements/resultats.svg')"
          width="101"
          height="33"
        />
      </li>
      <li
        :class="['nav-item', { active: active == 0 }]"
        data-menuanchor="3rdPage"
      >
        <router-link class="nav-link" to="/resultats-de-votre-relocalisation"
          ><span class="icon-ico_navigation_resultats ico-menu"></span
          ><span class="entree-menu">Diagnostic</span></router-link
        >
      </li>
      <li class="nav-arrow"><FlecheBoutonVert /></li>

      <li
        :class="['nav-item', { active: active == 1 }]"
        data-menuanchor="3rdPage"
      >
        <router-link class="nav-link" to="/resultats-de-votre-relocalisation"
          ><span class="icon-ico_navigation_resultats ico-menu"></span
          ><span class="entree-menu">Effets</span></router-link
        >
      </li>
      <li class="nav-arrow"><FlecheBoutonVert /></li>
      <li
        :class="['nav-item', { active: active == 2 }]"
        id="menu_surface"
        data-menuanchor="3rdPage"
      >
        <router-link class="nav-link" to="/repartition-des-produits-relocalises"
          ><span class="icon-ico_navigation_repartition ico-menu"></span
          ><span class="entree-menu">Surfaces</span></router-link
        >
      </li>
      <li class="nav-arrow"><FlecheBoutonVert /></li>
      <li
        :class="['nav-item', { active: active == 3 }]"
        data-menuanchor="secondPage"
      >
        <router-link class="nav-link" to="/emplois-crees-par-la-relocalisation"
          ><span class="icon-ico_navigation_emploi ico-menu"></span
          ><span class="entree-menu">Emplois</span></router-link
        >
      </li>
      <li class="nav-arrow"><FlecheBoutonVert /></li>
      <li
        :class="['nav-item', { active: active == 4 }]"
        data-menuanchor="3rdPage"
      >
        <router-link
          class="nav-link"
          to="/impacts-ecologiques-de-la-relocatisation"
          ><span class="icon-ico_navigation_impacts ico-menu"></span
          ><span class="entree-menu">Impacts</span></router-link
        >
      </li>
      <li class="nav-arrow"><FlecheBoutonVert /></li>
      <li
        :class="['nav-item', { active: active == 5 }]"
        data-menuanchor="3rdPage"
      >
        <router-link class="nav-link" to="/agir-pour-une-relocalisation-durable"
          ><span class="icon-ico_navigation_agir ico-menu"></span
          ><span class="entree-menu">Agir</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import FlecheBoutonVert from "@/components/bas-niveau/FlecheBoutonVert.vue";
export default {
  name: "MenuResultats",
  components: {
    FlecheBoutonVert,
  },
  props: {
    active: Number,
  },
};
</script>
