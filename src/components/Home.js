import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMovies } from "../actions/movieAction";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router";
import Movies from "../pages/movies";
import MovieDetail from "../pages/MovieDetail";
import Header from "../pages/Header";
import Nav from "../pages/Nav";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, movieInTheatre, searched } = useSelector(
    (state) => state.movie
  );
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  return (
    <AnimateSharedLayout type="crossfade">
      <Nav />
      <Header />
      <MovieList>
        <AnimatePresence>
          {pathId && <MovieDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h1>Searched Movies</h1>
            <MovieCards>
              {searched.map((movie) => (
                <Movies
                  name={movie.title}
                  key={movie.id}
                  id={movie.id}
                  image={movie.poster_path}
                  image_two={movie.backdrop_path}
                  releaseDate={movie.release_date}
                  rating={movie.vote_average}
                />
              ))}
            </MovieCards>
          </div>
        ) : (
          ""
        )}
        <h1>Popular Movies</h1>
        <MovieCards>
          {popularMovies.map((movie) => (
            <Movies
              name={movie.title}
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              image_two={movie.backdrop_path}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
            />
          ))}
        </MovieCards>
        <h1>Movies in Theatres</h1>
        <MovieCards>
          {movieInTheatre.map((movie) => (
            <Movies
              name={movie.title}
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              image_two={movie.backdrop_path}
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
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
  h1 {
    padding: 3rem 0rem;
    font-size: 3rem;
    color: #cfcfcf;
  }
  @media screen and (max-width: 500px) {
    padding: 1.5rem 0;
    h1 {
      font-size: 1.5rem;
      padding: 1rem 0;
    }
  }
`;
const MovieCards = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 3rem;
  margin: 2rem 0rem;
  @media screen and (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;
export default Home;
