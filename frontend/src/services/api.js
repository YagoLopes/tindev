import axios from "axios";
const api = axios.create({
  baseURL: "http://192.168.8.128:4000"
});
export default api;
