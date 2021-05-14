import Vue from 'vue'
import Vuex from 'vuex'
import wines from '@/store/wines'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    wines
  },
})