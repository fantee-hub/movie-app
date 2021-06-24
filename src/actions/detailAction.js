import { movieDetailUrl } from "../api";
import axios from "axios";

export const loadDetail = (movieId) => async (dispatch) => {
  dispatch({
    type: "LOAD_MOVIES",
  });
  const movieDetail = await axios.get(movieDetailUrl(movieId));

  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      details: movieDetail.data,
    },
  });
};
