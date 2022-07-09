<template>
  <v-app>
    <!-- nav bars components -->
    <app-nav-bar  />

    <!-- router-view-->
    <v-main class="grey lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppNavBar from "@/components/app-nav-bar";
export default {
  name: "App",

  data: () => ({}),
  components: {
    AppNavBar,
  },
};
</script>
