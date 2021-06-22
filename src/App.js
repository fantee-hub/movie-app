import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {loadMovies} from './actions/movieAction';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadMovies())
  },[])
  
  return (
    <div className="App">
      <h1>Movies</h1>
    </div>
  );
}

export default App;
