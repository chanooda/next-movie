import tw from "tailwind-styled-components";

export const DetailContainer = tw.div`
    px-4
    w-full
    h-[calc(100vh_-_64px)]
    flex
    justify-center
    items-start
    lg:items-center
`;
export const DetailBoard = tw.div`
   max-w-[1280px]
   flex
   flex-col
   items-center
   p-5
   gap-4
   bg-slate-300
   shadow-2xl
   lg:flex-row
   lg:items-start
`;
export const BgImageContainer = tw.div`
   w-[300px]
`;

export const InfoContainer = tw.div`
    max-w-[800px]
    flex
    flex-col
`;
export const Badge = tw.span`
   p-2
   bg-slate-400
   text-white
   rounded-lg
`;
