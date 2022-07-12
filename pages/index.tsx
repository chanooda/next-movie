import { useEffect, useState } from "react";
import HeadSet from "../components/head";
import Header from "../components/header";
import { getPopularMovies } from "./api/movieApi";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const movieData = await getPopularMovies();
      setData(movieData);
      console.log(movieData);
    })();
  }, []);

  return (
    <>
      <HeadSet title="Home" />
      <Header title="Next Movie" />
    </>
  );
};

export default Home;
