import Vue from 'vue';
import wines from '@/assets/json/wines.json';

export default {
  namespaced: true,
  state: () => ({
    wines: wines.wines,
  }),
  getters: {
    getWines: (state) => state.wines,
  },
  mutations: {
    UPDATE_WINES: (state, wines) => (state.wines = wines),
  },
  actions: {
    // Async data fetching for wines here (when not loading from json)
    // eslint-disable-next-line no-unused-vars
    async fetch({ commit }) {
      // try {
      //   const response = await axios.get('API_ENDPOINT');
      //   commit('UPDATE_WINES', response.data.wines);
      // } catch (error) {
      //   console.error('There was a problem fetching wine data: ', error);
      // }
    },
    updateRating({ commit, getters }, { index, rating }) {
      const wines = [...getters.getWines];
      const wine = { ...getters.getWines[index] };
      wine.rating = rating;
      Vue.set(wines, index, wine)
      commit('UPDATE_WINES', wines);
    }
  }
};
