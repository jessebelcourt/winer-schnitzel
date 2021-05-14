import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vuetify from 'vuetify/lib/framework';
import Logo from '@/ui/components/Logo'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
    values: {
      logo: {
        component: Logo,
      }
    }
  },
  theme: {
    themes: {
      light: {
        primary: "#21094e",
        secondary: "#511281",
        accent: "#4ca1a3",
        background: "#a5e1ad"
      },
    },
  },
});
