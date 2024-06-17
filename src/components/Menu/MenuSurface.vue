<template>
  <div class="">
    <ul
      class="navbar-nav align-items-center text-center w-100 justify-content-center"
    >
      <li>
        <img
          alt="Leviers"
          class="type-menu"
          :src="require('@/assets/img/elements/leviers.svg')"
          width="101"
          height="33"
        />
      </li>
      <li
        :class="{ 'nav-item': true, active: active == 1 }"
        data-menuanchor="p1-population"
      >
        <router-link class="nav-link" to="/1-relocaliser-une-surface-disponible"
          ><span class="icon-ico_navigation_surface ico-menu"></span
          ><span class="entree-menu">Surface</span></router-link
        >
      </li>
      <li class="nav-arrow"><FlecheBoutonVert /></li>

      <li
        :class="{ 'nav-item': true, active: active == 2 }"
        data-menuanchor="p1-territoire"
      >
        <div class="nav-line">
          <router-link class="nav-link" to="/2-choix-du-territoire"
            ><span class="icon-ico_navigation_territoire ico-menu"></span
            ><span class="entree-menu">Territoire</span></router-link
          >
        </div>
      </li>
      <li class="nav-arrow"><FlecheBoutonVert /></li>
      <li
        :class="{ 'nav-item': true, active: active == 3 }"
        data-menuanchor="p1-alimentation"
      >
        <router-link class="nav-link" to="/2-choix-du-type-dalimentation"
          ><span class="icon-ico_navigation_alimentation ico-menu"></span
          ><span class="entree-menu">Alimentation</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import FlecheBoutonVert from "@/components/bas-niveau/FlecheBoutonVert.vue";
export default {
  name: "MenuSurface",
  components: {
    FlecheBoutonVert,
  },
  props: {
    active: {
      type: Number,
      default: 1,
    },
  },
};
</script>
