import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMovies } from "../actions/movieAction";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router";
import Movies from "../pages/movies";
import MovieDetail from "../pages/MovieDetail";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, movieInTheatre } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  return (
    <AnimateSharedLayout type="crossfade">
      <MovieList>
        <AnimatePresence>
          {pathId && <MovieDetail pathId={pathId} />}
        </AnimatePresence>
        <h1>Popular Movies</h1>
        <MovieCards>
          {popularMovies.map((movie) => (
            <Movies
              name={movie.title}
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
            />
          ))}
        </MovieCards>
      </MovieList>
    </AnimateSharedLayout>
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
