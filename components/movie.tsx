import { IMovieProps } from "../interfaces/movieInterface";
import Image from "next/future/image";

export default function Movie({ movieInfo }: IMovieProps) {
  return (
    <>
      <li>
        <div className="board">
          <div className="img_container">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
          </div>
          <h3>{movieInfo.title}</h3>
        </div>
      </li>
      <style jsx>{`
        li {
          width: 250px;
          padding: 25px 10px;
          box-shadow: 1px 1px 10px 1px black;
          border-radius: 20px;
        }
        .board {
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }
        h3 {
          font-size: 18px;
          font-weight: bold;
          margin-top: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
}
