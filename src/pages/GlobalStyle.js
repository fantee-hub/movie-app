import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    body{
        background-color: #18122b;
        font-family: 'Open Sans', sans-serif;
    }
    h2{
        color: #131313;
    }a{
        text-decoration: none;
        color: #131313;
    }
    

`;

export default GlobalStyle;
