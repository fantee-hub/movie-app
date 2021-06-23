import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMovies } from "../actions/movieAction";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import Movies from "../pages/movies";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, movieInTheatre } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  return (
    <MovieList>
      <h1>Popular Movies</h1>
      <MovieCards>
        {popularMovies.map((movie) => (
          <Movies
            name={movie.title}
            key={movie.id}
            id={movie.id}
            image={movie.backdrop_path}
            releaseDate={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </MovieCards>
    </MovieList>
  );
};

const MovieList = styled(motion.div)`
  max-width: 90%;
  margin: 0 auto;
  padding: 5rem 0;
  h1 {
    padding: 3rem 0rem;
    font-size: 3rem;
    color: #cfcfcf;
  }
`;
const MovieCards = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 3rem;
`;
export default Home;
