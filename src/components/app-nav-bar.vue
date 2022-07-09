<template>
  <nav>
    <!-- nav bars  -->

    <v-main class="grey lighten-4">
      <v-toolbar flat class="grey lighten-4">
        <v-app-bar-nav-icon
          class="grey lighten-4"
          @click="NavigationDrawerOption = !NavigationDrawerOption"
        >
        </v-app-bar-nav-icon>

        <v-Toolbar-title class="text-uppercase grey--text">
          <span>web</span>
          <span class="font-weight-bold">site</span>
        </v-Toolbar-title>

        <v-spacer></v-spacer>
        <v-menu
          bottom
          offset-y
          allow-overflow
          nudge-bottom="10"
          nudge-left="10"
          class="hidden-xs-only"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="grey lighten-4 grey--text hidden-xs-only"
              depressed
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>expand_more</v-icon>
              <span>menu</span>
            </v-btn>
          </template>
          <v-list class="pa-0 hidden-xs-only" depressed>
            <v-list-item
              v-for="(page, index) in links_page"
              :key="index"
              router
              :to="page.router"
            >
              <v-list-item-title class="text-capitalize">{{
                page.content
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn class="text-uppercase grey--text" depressed>
          <span> sign out </span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
    </v-main>
    <!-- navigation drawer  -->
    <v-navigation-drawer app v-model="NavigationDrawerOption" class="red">
      <v-layout column align-center class="my-5">
        <v-flex>
          <v-avatar size="150">
            <v-img src="@/assets/team/skills-01.jpg"></v-img>
          </v-avatar>
          <p
            class="text-uppercase white--text subtitle-1 font-weight-black ma-2"
          >
            youssef zouhri
          </p>
        </v-flex>
        <v-flex>
          <!-- compononents app-popup-in-nav-navigation -->
          <app-popup-in-nav-navigation />
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list class="pa-0">
        <v-list-item
          class="white--text"
          v-for="(link, index) in links_page"
          :key="index"
          router
          :to="link.router"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="text-capitalize">{{
            link.content
          }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import appPopupInNavNavigation from "@/components/app-popup-in-nav-navigation.vue";
export default {
  name: "AppNavBar",
  data() {
    return {
      NavigationDrawerOption: false,
      // all links at navigation drawer
      links_page: [
        {
          icon: "dashboard",
          content: "dashboard",
          router: "/",
        },
        {
          icon: "folder",
          content: "my projects",
          router: "/projects",
        },
        {
          icon: "person",
          content: "team",
          router: "/team",
        },
      ],
    };
  },
  components: {
    appPopupInNavNavigation,
  },
};
</script>
