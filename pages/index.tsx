import { useEffect, useState } from "react";
import HeadSet from "../components/head";
import Header from "../components/header";
import MovieList from "../components/movieList";
import { IPopularMovies } from "../interfaces/movieInterface";
import { getPopularMovies } from "./api/movieApi";

const Home = () => {
  const [data, setData] = useState<IPopularMovies[]>();
  useEffect(() => {
    (async () => {
      const movieData = await getPopularMovies();
      setData(movieData);
    })();
  }, []);

  return (
    <>
      <HeadSet title="Home" />
      <Header title="Next Movie" />
      {data ? <MovieList movies={data} /> : <h4>loading...</h4>}
    </>
  );
};

export default Home;
