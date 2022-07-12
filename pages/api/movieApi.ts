export const getPopularMovies = async () => {
  const response = await fetch(`/api/movies`);
  const data = await response.json();
  return data.results;
};
