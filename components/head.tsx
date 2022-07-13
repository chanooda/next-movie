import Head from "next/head";
import { IHeadSetProps } from "../interfaces/HeadSetInterface";

const HeadSet = ({ title }: IHeadSetProps) => {
  const headTitle = `${title} | NextMovie`;
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
    </>
  );
};

export default HeadSet;
