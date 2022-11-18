import { createStore } from "vuex";
import theme from "./modules/theme";
import countries from "./modules/countries";
export default createStore({
  modules: {
    theme: theme,
    countries: countries,
  },
});
