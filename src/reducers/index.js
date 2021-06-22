import {combineReducers} from 'redux';
import movieReducer from './movieReducer';

const combinedReducer = combineReducers({
    movie : movieReducer
})
export default combinedReducer;