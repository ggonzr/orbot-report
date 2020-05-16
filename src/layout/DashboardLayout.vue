<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Orbot"
      title="Orbot"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Aplicación',
            icon: 'ni ni-tv-2 text-primary',
            path: '/application'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Diseño',
            icon: 'fas fa-drafting-compass text-blue',
            path: '/design'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Accesibilidad',
            icon: 'fas fa-universal-access text-default',
            path: '/accesibility'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Analitica',
            icon: 'fas fa-chart-line text-green',
            path: '/analytics'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Ejecución',
            icon: 'fas fa-bug text-primary',
            path: '/debugging'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Fragmentación',
            icon: 'fab fa-buffer text-blue',
            path: '/fragmentation'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Conectividad Eventual',
            icon: 'fas fa-ban text-red',
            path: '/eventual-connectivity'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Permisos',
            icon: 'fas fa-check text-success',
            path: '/permissions'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Integración',
            icon: 'fas fa-sign-in-alt text-blue',
            path: '/integration'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Performance',
            icon: 'fas fa-tachometer-alt text-orange',
            path: '/performance'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Codigo y Micro-optimizaciones',
            icon: 'fas fa-code text-default',
            path: '/code'
          }"
        />
        <sidebar-item
          :link="{
            name: 'Repositorio',
            icon: 'fas fa-code-branch text-primary',
            path: '/repo'
          }"
        />
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    FadeTransition
  },
  data() {
    return {
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style lang="scss">
</style>
