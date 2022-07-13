import { IMovieListProps } from "../interfaces/movieInterface";
import Movie from "./movie";
import { MovieListContainer } from "./styled-components/movieListStyled";

const MovieList = ({ movies }: IMovieListProps) => {
  return (
    <>
      <MovieListContainer>
        {movies?.map((movie) => (
          <Movie key={movie.id} movieInfo={movie} />
        ))}
      </MovieListContainer>
    </>
  );
};
export default MovieList;
