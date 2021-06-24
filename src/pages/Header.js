import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Head>
      <h1>THE FIRST ONLINE STREAMING MOVIE SEARCH ENGINE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet
        doloremque eius laudantium aut! Rem praesentium numquam neque esse
        accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Alias aliquid laboriosam eius, voluptas repellendus illum! Ducimus
        asperiores sint tempore veritatis minima nesciunt deleniti, expedita ad
        distinctio omnis fugit dolorum est.
      </p>
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
  color: #c0c0c0;
  p {
    max-width: 50rem;
  }
`;

export default Header;
