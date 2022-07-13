import tw from "tailwind-styled-components";

export const MovieListContainer = tw.ul`
    mt-20
    grid
    grid-cols-[repeat(auto-fill,minmax(200px,_1fr))]
    gap-6
`;
