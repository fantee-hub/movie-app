import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <form>
        <input type="search" placeholder="search movies here..." />
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