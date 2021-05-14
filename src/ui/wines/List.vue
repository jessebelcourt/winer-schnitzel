<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-icon size="18" color="secondary">fa-wine-glass</v-icon>
          <span class="mx-2"> {{ getWines.length }} </span>
          <span> Wines </span>
        </v-card-title>
        <v-card-text>
          <v-row class="my-3">
            <v-spacer />
            <v-btn icon :color="grid ? 'primary' : 'grey'" @click="grid = true">
              <v-icon>fa-th</v-icon>
            </v-btn>
            <v-btn
              icon
              :color="!grid ? 'primary' : 'grey'"
              @click="grid = false"
            >
              <v-icon>fa-list-ul</v-icon>
            </v-btn>
          </v-row>
          <v-list v-if="!grid">
            <template v-for="(wine, i) in getWines">
              <v-list-item :key="`wine-${i}`" @click="goToWine(i)">
                <v-list-item-avatar>
                  <v-img :src="wine.image" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ wine.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ wine.subtitle }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <div class="mt-2">
                      <span class="secondary--text" v-if="wine.rating"
                        >You rate this wine:
                      </span>
                      <v-rating
                        v-if="wine.rating"
                        :value="wine.rating"
                        background-color="accent"
                        color="accent"
                        x-small
                      ></v-rating>
                    </div>
                    <v-chip class="green lighten-4 mt-2">
                      {{ wine.price }}
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon color="accent">
                    <v-icon>fa-eye</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider v-if="i < getWines.length - 1" :key="i" />
            </template>
          </v-list>
          <v-row v-else>
            <v-col
              cols="12"
              lg="4"
              v-for="(wine, i) in getWines"
              :key="`wine-cards-${i}`"
            >
              <v-card outlined @click="goToWine(i)">
                <v-img :src="wine.image"></v-img>
                <v-card-title>{{ wine.title }}</v-card-title>
                <v-card-subtitle>{{ wine.subtitle }}</v-card-subtitle>
                <v-card-text>
                  <p>
                    {{ wine.description }}
                  </p>
                  <div class="my-2">
                    <span class="secondary--text" v-if="wine.rating"
                      >You rate this wine:
                    </span>
                    <v-rating
                      v-if="wine.rating"
                      :value="wine.rating"
                      background-color="accent"
                      color="accent"
                      x-small
                    ></v-rating>
                  </div>
                  <v-chip class="green lighten-4">
                    {{ wine.price }}
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    grid: false,
  }),
  computed: {
    ...mapGetters("wines", ["getWines"]),
  },
  methods: {
    goToWine(id) {
      this.$router.push({
        name: "wines:show",
        params: { id: `${id}` },
      });
    },
  },
};
</script>