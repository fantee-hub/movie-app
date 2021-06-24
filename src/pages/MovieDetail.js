import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { imageUrl } from "../api";
import { useHistory } from "react-router";

const MovieDetail = ({ pathId }) => {
  const { movieDetails, isLoaded } = useSelector((state) => state.detail);
  const history = useHistory();
  const checkRatings = (ratings) => {
    if (ratings >= 8) {
      return "green";
    } else if (ratings >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  const exitHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
      {!isLoaded && (
        <CardShadow className="shadow" onClick={exitHandler}>
          <Card layoutId={pathId}>
            <motion.h1 layoutId={`title ${pathId}`}>
              {movieDetails.original_title}
            </motion.h1>
            <motion.img
              layoutId={`image ${pathId}`}
              src={`${imageUrl("w780")}${movieDetails.backdrop_path}`}
              alt=""
            />
            <MovieInfo>
              <div className="genre">
                <div className="rating">
                  <h2>
                    Rating:{" "}
                    <span
                      style={{
                        color: `${checkRatings(movieDetails.vote_average)}`,
                      }}
                    >
                      {movieDetails.vote_average}
                    </span>{" "}
                  </h2>
                </div>
                {movieDetails.genres.map((genre) => (
                  <h2 key={genre.id}>{genre.name}</h2>
                ))}
              </div>
              <p>{movieDetails.overview}</p>
              <a href={movieDetails.homepage}> visit homepage</a>
            </MovieInfo>
          </Card>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #251463;
  }
`;
const Card = styled(motion.div)`
  padding: 4rem;
  border-radius: 3rem;
  width: 60%;
  margin: 0 auto;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
  h1 {
    color: #000000;
  }
`;
const MovieInfo = styled(motion.div)`
  .genre {
    padding: 1rem 0rem;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 1.5rem;
    padding: 2rem 0rem;

    line-height: 2;
  }
`;

export default MovieDetail;
