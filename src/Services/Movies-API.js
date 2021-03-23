import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '15ca756df476082b053254128d393ba0';

async function fetchData() {
  let media_type = 'movie';
  let time_window = 'week';
  let url = `/trending/${media_type}/${time_window}?api_key=${apiKey}`;
  const response = await axios.get(url);
  const results = await response.data.results;

  return results;
}

async function getDetails(movieID) {
  let url = `/movie/${movieID}?api_key=${apiKey}`;
  const response = await axios.get(url);
  const result = await response.data;

  return result;
}

async function getCast(movieID) {
  let url = `/movie/${movieID}/credits?api_key=${apiKey}`;
  const response = await axios.get(url);
  const result = await response.data;

  return result;
}

async function getReviews(movieID) {
  let url = `/movie/${movieID}/reviews?api_key=${apiKey}`;
  const response = await axios.get(url);
  const result = await response.data.results;

  return result;
}

async function getMovies(query) {
  let url = `/search/movie?query=${query}&api_key=${apiKey}`;
  const response = await axios.get(url);
  const result = await response.data.results;

  console.log(result);

  return result;
}

export default { fetchData, getDetails, getCast, getReviews, getMovies };
