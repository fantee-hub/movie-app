import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
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

  return (
    <NavBar>
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
  padding: 1.5rem;
  display: flex;
  justify-content: flex-end;
  input {
    padding: 1rem 2rem;
    border: 1px solid #1b1b1b;
    border-radius: 2rem;
    background: transparent;
    text-transform: capitalize;
    font-family: "Open Sans", sans-serif;
    font-size: 1.2rem;
    color: white;
    &:focus {
      outline: none;
    }
  }
`;
export default Nav;
