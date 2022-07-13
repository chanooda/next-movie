export const getPopularMovies = async () => {
  const response = await fetch(`https://chanoo-next-movie.herokuapp.com/api/movies`);
  const data = await response.json();
  return data.results;
};

export const getMovieDetail = async (id: string) => {
  const response = await fetch(`https://chanoo-next-movie.herokuapp.com/api/Detail/${id}`);
  const data = await response.json();
  return data;
};
