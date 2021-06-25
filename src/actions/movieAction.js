import axios from "axios";
import { popularMoviesUrl, movieInTheatreUrl, searchUrl } from "../api";

export const loadMovies = () => async (dispatch) => {
  const popularMovies = await axios.get(popularMoviesUrl());
  const moviesinTheatre = await axios.get(movieInTheatreUrl());
  // const highestRated = await axios.get(highestRatedUrl());

  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      popular: popularMovies.data.results,
      inTheatre: moviesinTheatre.data.results,
      // highRated: highestRated.data.results,
    },
  });
};
export const searchMovies = (searchInput) => async (dispatch) => {
  const searchedMovie = await axios.get(searchUrl(searchInput));

  dispatch({
    type: "SEARCH_MOVIES",
    payload: {
      searched: searchedMovie.data.results,
    },
  });
};
