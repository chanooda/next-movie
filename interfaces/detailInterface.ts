export interface IDetailProps {
  params: [title: string, id: number];
  movieDetailData: IMovieDetailData;
}

export interface IMovieDetailGenres {
  id: number;
  name: string;
}

export interface IMovieDetailData {
  genres: IMovieDetailGenres[];
  homepage: string;
  id: number;
  imdb_id: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline: string;
  title: string;
}

export interface IDetailSsrQuery {
  query: IDetailSsrParams;
}

export interface IDetailSsrParams {
  params: string[];
}
