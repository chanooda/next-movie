const API_KEY = "f6fbe9a13820afc7b29d03b000ebe095";
const API_URL = "https://api.themoviedb.org/3/movie";

export const getPopularMovies = async () => {
  const response = await fetch(`${API_URL}/popular?api_key=${API_KEY}&page=1`);
  const data = await response.json();
  return data;
};
