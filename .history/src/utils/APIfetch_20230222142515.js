import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export const APIfetch = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, { headers });
  return response.data;
};
