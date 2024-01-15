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
        data-menuanchor="p1-territoire"
      >
        <div class="nav-line">
          <router-link class="nav-link" to="/1-choix-du-territoire"
            ><span class="icon-ico_navigation_territoire ico-menu"></span
            ><span class="entree-menu">Territoire</span></router-link
          >
        </div>
      </li>
      <li class="nav-arrow"></li>
      <li
        :class="{ 'nav-item': true, active: active == 2 }"
        data-menuanchor="p1-population"
      >
        <router-link class="nav-link" to="/2-choix-de-la-population"
          ><span class="icon-ico_navigation_population ico-menu"></span
          ><span class="entree-menu">Population</span></router-link
        >
      </li>
      <li class="nav-arrow"></li>
      <li
        :class="{ 'nav-item': true, active: active == 3 }"
        data-menuanchor="p1-alimentation"
      >
        <router-link class="nav-link" to="/3-type-dalimentation"
          ><span class="icon-ico_navigation_alimentation ico-menu"></span
          ><span class="entree-menu">Alimentation</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuRecherche",
  props: {
    active: {
      type: Number,
      default: 1,
    },
  },
};
</script>
