<template>
  <v-app class="">
    <v-app-bar app color="background">
      <v-icon size="70">$logo</v-icon>
      <h2
        class="font-weight-light site-title ml-3"
        @click="$router.push({ name: 'wines:list' })"
      >
        Winer Schnitzel
      </h2>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions("wines", ["fetch"]),
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=MuseoModerno&display=swap");

.site-title {
  cursor: pointer;
  font-family: "MuseoModerno";
  font-size: 40px;
}
</style>
