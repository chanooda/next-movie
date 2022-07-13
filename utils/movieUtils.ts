export const getImagePath = (
  poster_path: string,
  wSize: "w100" | "w200" | "w300" | "w400" | "w500" | "original" = "original"
) => {
  return `https://image.tmdb.org/t/p/${wSize}/${poster_path}`;
};
