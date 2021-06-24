const initial = {
  popularMovies: [],
  movieInTheatre: [],
  highRated: [],
};

const movieReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        popularMovies: action.payload.popular,
        movieInTheatre: action.payload.inTheatre,
        highRated: action.payload.highRated,
      };

    default:
      return { ...state };
  }
};
export default movieReducer;
