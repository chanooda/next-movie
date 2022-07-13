import tw from "tailwind-styled-components";

export const DetailContainer = tw.div`
    w-full
    h-[100vh]
    flex
    justify-center
    items-center
`;
export const DetailBoard = tw.div`
    p-10
    w-[1200px]
    h-[514px]
    flex
    gap-6
    shadow-2xl
    bg-slate-300
`;
export const BgImageContainer = tw.div`
     w-[300px]
`;

export const BgImage = tw.img`
    w-full
`;

export const InfoContainer = tw.div`
    w-[836px]
    h-full
    flex
    flex-col
    items-start
`;
export const Badge = tw.span`
    py-2
    px-4
    text-white
    text-center
  bg-slate-500
    rounded-md

`;
