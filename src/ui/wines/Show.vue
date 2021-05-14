<template>
  <v-row>
    <v-col>
      <v-card>
        <v-img :src="wine.image" />
        <v-card-title>
          {{ wine.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ wine.subtitle }}
        </v-card-subtitle>
        <v-row>
          <v-col class="pl-5 py-5">
            <span class="grey--text pl-2">How do you like the wine?</span>
            <v-rating
              :value="wine.rating"
              @input="updateWineRating"
              background-color="accent"
              color="accent"
              small
            ></v-rating>
          </v-col>
        </v-row>
        <v-divider />
        <v-card-text>
          <h3>Description</h3>
          <p class="mt-3">{{ wine.description }}</p>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Price</v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip class="green lighten-4">
                    {{ wine.price }}
                  </v-chip>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("wines", ["getWines"]),
    // This would be either loaded async or a lookup from all inclusive list
    wine() {
      return this.getWines[this.id];
    },
  },
  methods: {
    ...mapActions("wines", ["updateRating"]),
    updateWineRating(rating) {
      this.updateRating({ rating, index: this.id });
    },
  },
};
</script>