const initial = {
  popularMovies: [],
  movieInTheatre: [],
};

const movieReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        popularMovies: action.payload.popular,
        movieInTheatre: action.payload.inTheatre,
      };

    default:
      return { ...state };
  }
};
export default movieReducer;
