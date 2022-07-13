import tw from "tailwind-styled-components";

export const MovieListContainer = tw.ul`
    grid
    grid-cols-[repeat(auto-fill,minmax(200px,_1fr))]
    gap-6
`;
