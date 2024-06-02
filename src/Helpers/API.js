import axios from "axios";
const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export default API;