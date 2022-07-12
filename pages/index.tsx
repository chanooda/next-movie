import HeadSet from "../components/head";
import Header from "../components/header";
import MovieList from "../components/movieList";
import { IHomeProps } from "../interfaces/movieInterface";
import { getPopularMovies } from "./api/movieApi";

const Home = ({ results: movies }: IHomeProps) => {
  return (
    <>
      <HeadSet title="Home" />
      <Header title="Next Movie" />
      {movies ? <MovieList movies={movies} /> : <h4>loading...</h4>}
    </>
  );
};

export async function getServerSideProps() {
  return { props: { results: await getPopularMovies() } };
}

export default Home;
