import { GetServerSideProps } from "next";
import {
  BgImage,
  BgImageContainer,
  DetailBoard,
  DetailContainer,
  InfoContainer,
} from "../../components/styled-components/detail";
import { getImagePath } from "../../utils/movieUtils";
import { getMovieDetail } from "../api/movieApi";

export default function Detail({ params, movieDetailData }) {
  console.log(movieDetailData);
  return (
    <DetailContainer>
      <DetailBoard>
        <BgImageContainer>
          <BgImage src={getImagePath(movieDetailData.poster_path, "w300")} alt="" />
        </BgImageContainer>
        <InfoContainer>
          <h3>{movieDetailData.title}</h3>
        </InfoContainer>
      </DetailBoard>
    </DetailContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params: { params } }) => {
  const [title, id] = params;
  console.log(id);
  const movieDetailData = await getMovieDetail(id);
  return {
    props: { params, movieDetailData },
  };
};
