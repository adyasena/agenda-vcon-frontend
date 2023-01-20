import axios from "axios";

export const createFetcher = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASEURL,
  });
};