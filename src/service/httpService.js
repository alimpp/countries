import axios from "axios";
const baseUrl = "https://restcountries.com/";
const allCountries = "v2/all";

export const GET = () => {
  axios.get(`${baseUrl}${allCountries}`);
};
