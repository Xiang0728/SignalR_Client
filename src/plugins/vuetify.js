import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from 'vuetify/es5/util/colors';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        MenuTitle:colors.blue,
        primary: colors.blue,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.indigo.lighten5,
        info: colors.grey.darken1
      },
      dark: {
        primary: colors.purple,
        background: colors.indigo.base,
        info: colors.grey.darken1
      }
    }
  }
});
