export interface IPopularMovies {
  backdrop_path: string;
  id: number;
  original_title: string;
  poster_path: string;
  title: string;
}

export interface IMovieListProps {
  movies: IPopularMovies[];
}

export interface IHomeProps {
  results: IPopularMovies[];
}
