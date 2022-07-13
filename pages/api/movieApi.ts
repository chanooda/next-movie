export const getPopularMovies = async () => {
  const response = await fetch(`http://localhost:3000/api/movies`);
  const data = await response.json();
  return data.results;
};

export const getMovieDetail = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/Detail/${id}`);
  const data = await response.json();
  return data;
};
