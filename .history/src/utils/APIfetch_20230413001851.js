export const APIfetch = async (url, retries = 3) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (error) {
    if (retries <= 0 || error.response.status !== 429) {
      throw error;
    }

    // Wait for the specified duration before retrying
    const retryAfter = error.response.headers["retry-after"] || 1;
    await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));

    // Retry with one less retry attempt
    return APIfetch(url, retries - 1);
  }
};


// import axios from "axios";

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