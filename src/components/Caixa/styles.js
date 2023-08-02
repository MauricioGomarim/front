import styled from "styled-components";

export const Container = styled.div`
  grid-area: AdicionarProd;
  border-top: 2px solid white;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  a {
    color: ${({ theme }) => theme.COLORS.BASE};
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
