import { TOAST_MESSAGE } from "@/utils/alerts";
import axios from "axios";
const countries = {
  namespaced: true,
  state: {
    countriess: [],
  },
  getters: {
    allCountries(state) {
      return state.countriess;
    },
  },
  mutations: {
    updateCountries(state, data) {
      return (state.countriess = data);
    },
  },
  actions: {
    async featchCountries({ commit }) {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      commit("updateCountries", res.data);
    },
    async filterCountries({ commit }, data) {
      const res = await axios.get(
        `https://restcountries.com/v3.1/region/${data}`
      );
      TOAST_MESSAGE(`Filter By ${data}` , 'success' , 2000)
      commit("updateCountries", res.data);
    },
  },
};

export default countries;
