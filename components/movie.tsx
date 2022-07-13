import Image from "next/image";
import Link from "next/link";
import { IMovieProps } from "../interfaces/movieInterface";
import { getImagePath } from "../utils/movieUtils";
import { MovieContainer, MovieTitle } from "./styled-components/movieStyled";

export default function Movie({ movieInfo }: IMovieProps) {
  return (
    <>
      <Link href={`/detail/${movieInfo.title}/${movieInfo.id}`}>
        <a>
          <MovieContainer>
            <div className="img_container">
              <Image
                width={200}
                height={300}
                src={getImagePath(movieInfo.poster_path, "w200")}
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
