import axios from "axios";
import { useNavigate } from 'react-router-dom'
let globalRouter;
const API = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
API.initialize = (navigateFunction) => {
  globalRouter = navigateFunction;
};
API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 404) {
      globalRouter("/*");
      //window.location.replace("/*")
      return Promise.reject(error);
    }
  }
);
export default API;
