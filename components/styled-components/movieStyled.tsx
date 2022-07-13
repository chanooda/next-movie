import tw from "tailwind-styled-components";

export const MovieContainer = tw.li`
    w-full
    h-full
    p-6
    mx-auto
    shadow-2xl
    bg-slate-50
    flex
    flex-col
    justify-start
    items-center
    rounded-2xl
    cursor-pointer
    hover:scale-110
    transition-transform
`;

export const MovieTitle = tw.h3`
    mt-2
    text-center
    font-medium
`;
