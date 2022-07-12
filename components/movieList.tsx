import { IMovieListProps } from "../interfaces/movieInterface";
import Movie from "./movie";

const MovieList = ({ movies }: IMovieListProps) => {
  console.log(movies);
  return (
    <>
      <ul>
        {movies?.map((movie) => (
          <Movie key={movie.id} movieInfo={movie} />
        ))}
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
        }
      `}</style>
    </>
  );
};
export default MovieList;
