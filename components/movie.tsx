import Link from "next/link";
import { IMovieProps } from "../interfaces/movieInterface";
import { MovieContainer, MovieTitle } from "./styled-components/movieStyled";

export default function Movie({ movieInfo }: IMovieProps) {
  return (
    <>
      <Link href={`/detail/${movieInfo.title}/${movieInfo.id}`}>
        <a>
          <MovieContainer>
            <div className="img_container">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`}
                alt={movieInfo.title}
              />
            </div>
            <MovieTitle>{movieInfo.title}</MovieTitle>
          </MovieContainer>
        </a>
      </Link>
    </>
  );
}
