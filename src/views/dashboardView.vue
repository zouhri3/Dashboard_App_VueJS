<template>
  <div class="dash mx-4 mt-4" id="dashboard">
    <h1 class="subheading grey--text text-uppercase">dashboard</h1>
    <v-container class="mt-5">
      <!-- sort card with buttons -->
      <v-layout class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              depressed
              small
              class="grey--text text-capitalize"
              :class="{
                active: active,
              }"
              @click="optionSorting('title')"
            >
              <v-icon small> folder </v-icon>
              <span>by project name </span>
            </v-btn>
          </template>
          <span>sorting by project name !</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              depressed
              small
              class="grey--text text-capitalize"
              :class="{ active: !active }"
              @click="optionSorting('person')"
            >
              <v-icon small> person </v-icon>
              <span>by person </span>
            </v-btn>
          </template>
          <span>sort by name person</span>
        </v-tooltip>
      </v-layout>
      <!-- all projects info  -->
      <v-card flat v-for="(project, index) in projects" :key="index">
        <v-row
          no-gutters
          :class="` pa-3  rounded-sm project text-capitalize ${project.status}`"
        >
          <v-col cols="12" md="6" class="text-center text-md-start">
            <div class="grey--text caption">project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="2"
            class="%{project.status} text-center text-md-start"
          >
            <div class="grey--text caption">person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2" class="text-center text-md-start">
            <div class="grey--text caption">due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2" class="text-center">
            <div class="grey--text caption">status</div>
            <v-chip :class="`chip caption white--text ${project.status}`">
              {{ project.status }}</v-chip
            >
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>





<script>
export default {
  name: "dashboard",
  data() {
    return {
      active: true,
      // all projects info
    };
  },
  methods: {
    optionSorting(option) {
      this.projects.sort((a, b) => (a[option] < b[option] ? -1 : 1));
      option == "title" ? (this.active = true) : (this.active = false);
    },
  },

  computed: {
    projects() {
      return this.$store.state.All_projects;
    },
  },

  beforeMount() {
    // get optionSorting and set option default
    this.optionSorting("title");
  },
};
</script>





<style lang="scss" scoped>
#dashboard {
  .project {
    border-left: 3px solid;
    &.completed {
      border-color: #3cd1c2;
    }
    &.ongoing {
      border-color: orange;
    }
    &.overdue {
      border-color: tomato;
    }
  }
  .chip {
    &.completed {
      background-color: #3cd1c2;
    }
    &.ongoing {
      background-color: orange;
    }
    &.overdue {
      background-color: tomato;
    }
  }
  .active {
    background-color: #eeeeee;
  }
}
</style>