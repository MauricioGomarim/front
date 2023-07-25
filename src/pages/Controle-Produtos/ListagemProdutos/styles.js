import styled from "styled-components";

export const Content = styled.div`
  overflow-y: auto;

  table {
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    overflow: hidden;
    white-space: nowrap;
    
  }

  table th {
    text-align: start;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLUE_300};
    padding-left: 10px;
  }

  table thead {
    border: 1px solid red;
    background-color: ${({ theme }) => theme.COLORS.BASE};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  tbody tr {
    max-height: 100px;
  }

  tbody tr:nth-child(odd){
    background-color: ${({ theme }) => theme.COLORS.BASE_100};
  }

  tbody td {
    padding-left: 10px;
  }

  tbody td .foto {
    display: flex;
    justify-content: center;
  }

  tbody td a {
    color:${({ theme }) => theme.COLORS.BASE};
    background-color: ${({ theme }) => theme.COLORS.BASE_100};
    padding:10px 30px;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  tbody td a:hover {
    background-color: ${({ theme }) => theme.COLORS.BASE};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  tbody tr img {
    max-height: 80px;
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 80px auto 64px;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "AdicionarProd desenvolvidoPor";
    `

