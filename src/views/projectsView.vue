<template>
  <div class="projects mx-4 mt-4">
    <h1 class="subheading grey--text text-uppercase">projects</h1>
    <v-container class="mt-5">
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="(project, index) in myProjects" :key="index">
          <v-expansion-panel-header class="text-uppercase d-flex">
            <div>{{ project.title }}</div>
            <div class="text-end mx-7 text-capitalize caption grey--text">
              {{ project.due }}
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="py-4 text-capitalize">
              {{ project.content }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      snackbar: true,
    };
  },
  computed: {
    myProjects() {
      return this.$store.getters.myProjects;
    },
  },
};
</script>