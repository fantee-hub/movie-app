import axios from 'axios';
import {popularMoviesUrl , movieInTheatreUrl} from '../api';

export const loadMovies = () => async (dispatch) =>{
    const popularMovies = await axios.get(popularMoviesUrl());
    const moviesinTheatre = await axios.get(movieInTheatreUrl());

    dispatch({
        type : 'FETCH_MOVIES',
        payload:{
            popular : popularMovies.data.results,
            inTheatre : moviesinTheatre.data.results
        }
    })

}


