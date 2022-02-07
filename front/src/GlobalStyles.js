import { createGlobalStyle } from "styled-components";
import { backgroundImage } from "./images";

export const GlobalStyle = createGlobalStyle`
    :root{
        --black: #000;
        --lightBlue: #ade8f4;
        --white: #fff;
        --purple: #432c85;
        --red:#FF0000;
    }
    *,
    *::before,
    *::after{
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
    html{
        font-size: 62.5%;
        font-family: 'Rowdies', cursive;
        box-sizing: border-box;
    }
    body{
        background-image: url(${backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
        .d-none{
            display: none;
        }
    }
    

`;
