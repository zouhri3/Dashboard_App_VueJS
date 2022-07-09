
<template>
  <div class="dash mx-4 mt-4 team">
    <h1 class="subheading grey--text text-uppercase">team</h1>
    <v-container class="mt-5">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(person, index) in team"
          :key="index"
        >
          <v-card class="text-center">
            <v-img
              class="grey"
              :alt="`image ${person.name}`"
              :src="require(`@/assets/team/${person.img}.jpg`)"
              height="210"
            ></v-img>

            <v-card-text>
              <v-card-subtitle class="text-uppercase">{{
                person.name
              }}</v-card-subtitle>
              <div class="grey--text text-capitalize">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn small depressed class="grey--text ma-auto white">
                <v-icon left small> message</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      team: [
        {
          role: "new application",
          name: "brahime zouhri",
          img: "TEAM-2",
        },
        {
          role: "design a new website",
          name: "youssef zouhri",
          img: "TEAM-1",
        },
        {
          role: "devlopment a new FTP",
          name: "atamne zouhri",
          img: "TEAM-3",
        },
        {
          role: "code a new vue app",
          name: "mouhamed zouhri",
          img: "TEAM-4",
        },
      ],
    };
  },
};
</script>