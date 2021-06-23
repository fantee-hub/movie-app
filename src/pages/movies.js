import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { imageUrl } from "../api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Movies = ({ name, image, releaseDate, rating, id }) => {
  const checkRatings = (ratings) => {
    if (ratings >= 8) {
      return "green";
    } else if (ratings >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  const dispatch = useDispatch();

  const getDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <Link to={`/game/${id}`}>
      <Movie onClick={getDetailHandler}>
        <img src={`${imageUrl()}${image}`} alt={name} />
        <h2>{name}</h2>
        <h3>
          Ratings:{" "}
          <span style={{ color: `${checkRatings(rating)}` }}>{rating}</span>
        </h3>
        <p>Released : {releaseDate}</p>
      </Movie>
    </Link>
  );
};

const Movie = styled(motion.div)`
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  background: linear-gradient(
    to right bottom,
    rgba(54, 40, 94, 0.7),
    rgba(255, 255, 255, 0.3)
  );

  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  border-radius: 1rem;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  h2 {
    padding: 0.6rem;
  }
  h3 {
    padding: 0.3rem;
    span {
      background: #18122b;
      padding: 0.3rem;
      border-radius: 0.5rem;
    }
  }
  p {
    padding: 0.3rem;
  }
`;
export default Movies;
