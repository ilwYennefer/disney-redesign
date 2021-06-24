const API_KEY = process.env.API_KEY;

export default {
  fetchPopular: {
    title: "What's Popular",
    url: {
      tv: {
        title: "On TV",
        url: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
      movies: {
        title: "In Theaters",
        url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
    },
  },
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
};
