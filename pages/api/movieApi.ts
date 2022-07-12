export const getPopularMovies = async () => {
  const response = await fetch(`http://localhost:3000/api/movies`);
  const data = await response.json();
  console.log(data.results);
  return data.results;
};
