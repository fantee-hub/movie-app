const init = {
  movieDetails: { genres: [], production_companies: [] },
  isLoaded: true,
};

const detailReducer = (state = init, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        movieDetails: action.payload.details,
        isLoaded: false,
      };
    case "LOAD_MOVIES":
      return {
        ...state,
        isLoaded: true,
      };
    default:
      return {
        ...state,
      };
  }
};
export default detailReducer;
