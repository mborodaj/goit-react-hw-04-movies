import axios from 'axios';

async function fetchData() {
  let apiKey = '15ca756df476082b053254128d393ba0';
  let media_type = 'movie';
  let time_window = 'week';
  let url = `/trending/${media_type}/${time_window}?api_key=${apiKey}`;

  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  const response = await axios.get(url);
  // console.log(response);

  const results = await response.data.results;
  console.log(results);

  return results;
}

export default fetchData;
