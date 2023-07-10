import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "brand header"
    "menu content"
    "menu content"
    "AdicionarProd content";
`;

export const Content = styled.div`
  grid-area: content;
  background-color: black;
  color: red;
`;