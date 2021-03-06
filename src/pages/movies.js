import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { imageUrl } from "../api";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Movies = ({ name, image, image_two, releaseDate, rating, id }) => {
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
    document.body.style.overflow = "hidden";
  };

  const convertToString = id.toString();

  return (
    <Link to={`/game/${id}`}>
      <Movie onClick={getDetailHandler} layoutId={convertToString}>
        <motion.img
          layoutId={`image ${convertToString}`}
          src={`${imageUrl("w500")}${!image ? image_two : image}`}
          alt={name}
        />
        <motion.h2 layoutId={`title ${convertToString}`}>{name}</motion.h2>
        <motion.h3 layoutId={`rating ${convertToString}`}>
          Ratings:{" "}
          <span style={{ color: `${checkRatings(rating)}` }}>{rating}</span>
        </motion.h3>
        <h4>Release Date : {releaseDate}</h4>
      </Movie>
    </Link>
  );
};

const Movie = styled(motion.div)`
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(40px) saturate(100%) contrast(25%) brightness(130%);
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
      background: #0c0c0c;
      padding: 0.3rem;
      border-radius: 0.5rem;
    }
  }

  h4 {
    padding: 0.5rem;
  }
  @media screen and (max-width: 500px) {
    img {
      height: 50vh;
      width: 100%;
      object-fit: cover;
    }
    h2 {
      padding: 0.2rem;
    }
    h3 {
      padding: 0.2rem;
    }
    h4 {
      padding: 0.2rem;
    }
  }
`;
export default Movies;
