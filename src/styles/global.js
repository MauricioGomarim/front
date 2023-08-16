import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button,a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.7);
    }

    body,input,button, textarea, select{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    input, select{
        border: none;
        outline: none;
    }

    .hidden {
        display: none !important;
    }

    .w-30 {
     width: 30%;
 }
    .w-50 {
        width: 47%;
    }

    .w-100 {
        width: 100%;
    }

`
