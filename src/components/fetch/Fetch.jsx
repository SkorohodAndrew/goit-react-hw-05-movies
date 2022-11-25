import axios from 'axios';

const KEY = 'a4aac541aac4db0c05fbafce97ce7a94';
const BASE_URL = 'https://api.themoviedb.org/3';
const media_type = 'movie';
const time_window = 'day';

export async function fetchMoviesTrending() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/${media_type}/${time_window}?api_key=${KEY}`
    );
    const arrayMovies = await response.data.results;
    return arrayMovies;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMoviesInput(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie/?query=${query}&api_key=${KEY}`
    );
    const arrayMovies = await response.data.results;
    return arrayMovies;
  } catch (error) {
    console.log(error);
  }
}
