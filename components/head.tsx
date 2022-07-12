import Head from "next/head";
import { IHeadSetProps } from "../interfaces/HeadSetInterface";

const HeadSet = ({ title }: IHeadSetProps) => {
  return (
    <>
      <Head>
        <title>`${title} | NextMovie`</title>
      </Head>
    </>
  );
};

export default HeadSet;
