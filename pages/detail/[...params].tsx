import { GetServerSideProps } from "next";
import HeadSet from "../../components/head";
import Header from "../../components/header";
import {
  Badge,
  BgImage,
  BgImageContainer,
  DetailBoard,
  DetailContainer,
  InfoContainer,
} from "../../components/styled-components/detail";
import { IDetailProps } from "../../interfaces/detailInterface";
import { getImagePath } from "../../utils/movieUtils";
import { getMovieDetail } from "../api/movieApi";

export default function Detail({ movieDetailData }: IDetailProps) {
  return (
    <>
      <HeadSet title={movieDetailData.title} />
      <Header />
      <DetailContainer>
        <DetailBoard>
          <BgImageContainer>
            <BgImage src={getImagePath(movieDetailData.poster_path, "w300")} alt="" />
          </BgImageContainer>
          <InfoContainer>
            <h3 className="text-2xl">{movieDetailData.title}</h3>
            <p className="mt-4 text-base">{`"${movieDetailData.tagline}"`}</p>
            <p className="mt-4 text-lg">{movieDetailData.overview}</p>
            <p className="mt-6 flex gap-2">
              {movieDetailData.genres.map((genre, i) => (
                <Badge key={genre.id}>{genre.name}</Badge>
              ))}
            </p>
          </InfoContainer>
        </DetailBoard>
      </DetailContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query: { params } }) => {
  const id = params ? params[1] : "";
  const movieDetailData = await getMovieDetail(id);
  return {
    props: { movieDetailData },
  };
};
