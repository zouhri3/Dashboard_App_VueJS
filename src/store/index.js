import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    All_projects: [
      {
        title: "design a new website",
        person: "youssef zouhri",
        due: "1st jan 2000",
        content:
          "The key to your success on Fiverr is the brand you build for yourself through your Fiverr reputation. We gathered some tips and resources to help you become a leading seller on Fiverr.",
        status: "completed",
      },
      {
        title: "new application",
        person: "brahime zouhri",
        due: "1st jan 2021",
        content:
          "you are connected but behind a firewall, check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox",

        status: "ongoing",
      },
      {
        title: "devlopment a new FTP",
        person: "atamne zouhri",
        due: "1st jan 2002",
        content:
          "you are connected but behind a firewall, check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox",

        status: "ongoing",
      },
      {
        title: "code a new vue app",
        person: "mouhamed zouhri",
        due: "1st jan 2010",
        content:
          "you are connected but behind a firewall, check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox check that Firefox has permission to access the Web you are connected but behind a firewall, check that Firefox",

        status: "completed",
      },
    ],
  },
  getters: {
    myProjects(state) {
      return state.All_projects.filter((me) => {
        return me.person == "youssef zouhri";
      });
    },
  },
  mutations: {
    addNewProject(state, NewProject) {
      state.All_projects.push(NewProject);
    },
  },
});
