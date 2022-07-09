<template>
  <v-dialog width="500" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn depressed color="yellow red--text ma-3" v-bind="attrs" v-on="on">
        add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        add new project
      </v-card-title>

      <v-card-text>
        <v-form ref="validation">
          <v-text-field
            prepend-icon="folder"
            autofocus
            v-model="title"
            counter="25"
            label="Title Project"
            :rules="ruleTitle"
          ></v-text-field>
          <v-textarea
            :rules="ruleInformation"
            prepend-icon="edit"
            v-model="content"
            label="About Your Project (information !)"
          ></v-textarea>
          <v-row>
            <v-col cols="7">
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                max-width="290"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    :value="computedDateFormattedDatefns"
                    clearable
                    label="Formatted with Moment.js"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    @click:clear="date = null"
                    :rules="ruleDate"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @change="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="5">
              <v-select
                v-model="status"
                :items="['completed', 'ongoing', 'overdue']"
                label="status"
                :rules="[(v) => !!v || 'status is Required']"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-btn
            :loading="loading"
            depressed
            class="text-capitalize red white--text mt-4"
            @click="submit()"
          >
            <v-icon left small>add</v-icon> add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { format, parseISO } from "date-fns";

export default {
  name: "appPopupInNavNavigation",
  data() {
    return {
      dialog: false,
      title: "",
      ruleTitle: [
        (v) => !!v || "Name is Required",
        (v) => (!!v && v.length < 25) || "You Should be Create Short Title",
      ],

      content: "",
      ruleInformation: [
        (v) => !!v || "Name is Required",
        (v) =>
          v.length > 60 ||
          "Create More Information About Your Project Min Letters is 60",
      ],

      menu1: false,
      date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
      ruleDate: [(v) => !!v || "Date is Required"],

      status: null,

      loading: false,
    };
  },
  computed: {
    computedDateFormattedDatefns() {
      return this.date ? format(parseISO(this.date), "do MMMM  yyyy") : "";
    },
  },
  methods: {
    submit() {
      if (this.$refs.validation.validate()) {
        this.loading = true;
        this.$store.commit("addNewProject", {
          title: this.title,
          content: this.content,
          due: this.computedDateFormattedDatefns,
          person: "youssef zouhri",
          status: this.status,
        });
        setTimeout(() => {
          this.loading = false;
          this.dialog = false;
          this.title = "";
          this.content = "";
          this.due = null;
          this.person = "";
          this.status = "";
        }, 1000);
      }
    },
  },
};
</script>

