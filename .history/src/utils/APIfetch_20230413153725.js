import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const APIfetch = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


// /* This code is using the Axios library to make an HTTP GET request to the YouTube API. It sets some
options for the request, including the URL, query parameters, and headers (including an API key).
It then sends the request using `axios.request()` and logs the response data to the console if
the request is successful, or logs any errors if the request fails. However, this code is
currently commented out and not being used in the rest of the file. */
import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/search',
//   params: {part: 'snippet', order: 'date', q: 'ReactJS'},
//   headers: {
//     'X-RapidAPI-Key': '439d9380abmsh135669ed4bb8912p181a72jsne5128d747292',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });