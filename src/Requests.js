const key = "cf7fdf5ef80b91ddd09c800b5c26f3ce";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `
    https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
/*
[
  {
    id: 0,
    category: "Popular",
    requestURL: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  },
  {
    id: 1,
    category: "Top Rated",
    requestURL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  },
  {
    id: 2,
    category: "Trending",
    requestURL: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  },
  {
    id: 3,
    category: "Horror",
    requestURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  },
  {
    id: 4,
    category: "Upcoming",
    requestURL: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  },
];
*/
