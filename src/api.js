const base_url = "https://api.themoviedb.org/3/";

const getMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getDate = () => {
  const date = new Date().getDate();
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};
const getYear = () => {
  const year = new Date().getUTCFullYear();
  return year;
};

const month = getMonth();
const nextMonth =
  Number(month) + 1 < 10 ? `0${Number(month) + 1}` : Number(month) + 1;
const date = getDate();
const year = getYear();
const fullDate = `${year}-${month}-${date}`;
const nextMonthDate = `${year}-${nextMonth}-${date}`;

export const movieInTheatreUrl = () =>
  `${base_url}discover/movie?primary_release_date.gte=${fullDate}&primary_release_date.lte=${nextMonthDate}&api_key=${process.env.REACT_APP_MOVIE}`;
export const popularMoviesUrl = () =>
  `${base_url}discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE}`;
export const highestRatedUrl = () =>
  `${base_url}discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${process.env.REACT_APP_MOVIE}&page=2`;
export const imageUrl = (size) => `https://image.tmdb.org/t/p/${size}`;
export const movieDetailUrl = (movieId) =>
  `${base_url}movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE}`;
export const searchUrl = (searchInput) =>
  `${base_url}search/movie?api_key=${process.env.REACT_APP_MOVIE}&query=${searchInput}`;
