import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <h1>
        <span> THE FIRST </span>ONLINE STREAMING MOVIE SEARCH ENGINE
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet
        doloremque eius laudantium aut! Rem praesentium numquam neque esse
        accusamus. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid
        laboriosam eius, voluptas repellendus illum! Ducimus asperiores sint
        tempore veritatis minima nesciunt deleniti, expedita ad distinctio omnis
        fugit dolorum est.
      </p>
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  color: #c0c0c0;
  p {
    font-size: 1.3rem;
    line-height: 2;
    max-width: 44rem;
  }
  h1 {
    font-size: 3rem;
    line-height: 2;
    span {
      color: #00e700;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 0.8rem;
      padding-top: 2rem;
    }
    h1 {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export default Header;
