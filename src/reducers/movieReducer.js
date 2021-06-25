const initial = {
  popularMovies: [],
  movieInTheatre: [],
  // highRated: [],
  searched: [],
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

    case "SEARCH_MOVIES":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searched: [],
      };

    default:
      return { ...state };
  }
};
export default movieReducer;
