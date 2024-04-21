import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e90e5cc72f12501ca886fe4fb737b4cc';
const TRENDING = '/trending/all/day';

axios.defaults.baseURL = BASE_URL;

const getTrendingMovies = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });
  try {
    const res = await axios.get(`${TRENDING}?${searchParams}`);
    // console.log('res:', res);
    return res.data.results;
  } catch (error) {}
};

export { getTrendingMovies };
