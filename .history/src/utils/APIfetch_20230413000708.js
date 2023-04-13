import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    maxResults: 50,
    part: "snippet",
    order: "date",
    q: "ReactJS",
  },
  headers: {
    // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': '439d9380abmsh135669ed4bb8912p181a72jsne5128d747292',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const APIfetch = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// import axios from "axios";

// const options = {
// method: 'GET',
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
