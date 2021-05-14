<template>
  <v-container class="py-15">
    <v-row>
      <v-col>
        <v-breadcrumbs :items="breadcrumbs" class="pl-0" />
      </v-col>
    </v-row>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const breadcrumbs = [
        {
          to: { name: "wines:list" },
          text: "All Wines",
          exact: true,
        },
      ];
      if (this.$route.name === "wines:show") {
        breadcrumbs.push({
          to: { name: "wines:show" },
          text: "View",
        });
      }
      return breadcrumbs;
    },
  },
};
</script>