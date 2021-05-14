import Vue from "vue"
import VueRouter from "vue-router"

import wines from '@/routes/wines'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    // TODO: Could use actual landing page here instead of redirect
    {
      path: "/",
      redirect: { name: 'wines:list' },
    },
    wines,
  ],
});

export { router };
