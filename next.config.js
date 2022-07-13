/** @type {import('next').NextConfig} */

const API_KEY = "f6fbe9a13820afc7b29d03b000ebe095";
const API_URL = "https://api.themoviedb.org/3/movie";

const nextConfig = {
  swcMinify: false,
  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org"],
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${API_URL}/popular?api_key=${API_KEY}&page=1`,
      },
      {
        source: "/api/Detail/:id",
        destination: `${API_URL}/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
