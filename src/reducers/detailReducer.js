const init = {
  movieDetails: {},
};

const detailReducer = (state = init, action) => {
  switch (action.type) {
    case "FETCH_DETAIL":
      return {
        ...state,
        movieDetails: action.payload.details,
      };
    default:
      return {
        ...state,
      };
  }
};
export default detailReducer;
