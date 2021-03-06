import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchMovies } from "../actions/movieAction";

const Nav = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const getInputData = (e) => {
    setInput(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    setInput("");
    dispatch(searchMovies(input));
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };

  return (
    <NavBar>
      <Logo onClick={clearSearch}>
        <h1>
          <span>FM</span>ovies.net
        </h1>
      </Logo>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="search movies here..."
          onChange={getInputData}
          value={input}
        />
      </form>
    </NavBar>
  );
};
const NavBar = styled.nav`
  background: #2b2b2b;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    padding: 1rem 1rem;
    border: 1px solid #1b1b1b;
    border-radius: 2rem;
    background: transparent;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    color: white;

    &:focus {
      outline: none;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0.8rem;

    input {
      font-size: 0.8rem;
      padding: 0.6rem 0.8rem;
    }
  }
`;

const Logo = styled.div`
  cursor: pointer;
  h1 {
    font-family: "Montserrat", cursive;
    font-size: 1.5rem;
    padding-right: 0.4rem;
    color: #b3b3b3;
    span {
      color: #00e700;
    }
  }
  @media screen and (max-width: 900px) and (min-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1rem;
    }
  }
`;
export default Nav;
