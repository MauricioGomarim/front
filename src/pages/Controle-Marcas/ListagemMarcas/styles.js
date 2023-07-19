import styled from "styled-components";

export const Container = styled.div`
  table {
    width: 50%;
    padding-left: 20px;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    overflow: overlay;
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
    padding: 10px;
    font-size: 18px;

    button {
      font-size: 17px;
    }
  }

  tbody tr img {
    max-height: 80px;
  }
`;
