import axios from "axios";

export const apiRequest = (params) => {
  const { s, y = "", page = "", type = "" } = params;

  return axios.create({
    baseURL: `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${s}&y=${y}&page=${page}&type=${type}`,
  });
};
