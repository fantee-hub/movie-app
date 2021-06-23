import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";

const combinedReducer = combineReducers({
  movie: movieReducer,
  detail: detailReducer,
});
export default combinedReducer;
