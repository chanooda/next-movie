import Head from "next/head";
import { IHeadSetProps } from "../interfaces/headSetInterface";

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
