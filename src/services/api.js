

import axios from "axios";

const API = axios.create({
  baseURL: "https://jobpost-b.vercel.app/api",
});

export default API;