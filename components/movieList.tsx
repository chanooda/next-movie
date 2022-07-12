import { IMovieListProps } from "../interfaces/movieInterface";

const MovieList = ({ movies }: IMovieListProps) => {
  console.log(movies);
  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};
export default MovieList;
