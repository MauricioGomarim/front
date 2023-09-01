import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  grid-area: content;

  .hidden {
    display: none;
  }
  .content-1 {
    width: 50%;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .finalize {
      display: flex;
      justify-content: space-between;
      align-items: end;

      h1 {
        color: black;
        font-size: 30px;
        max-width: 100px;
        text-align: center;
      }

      .footer-checkout {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;

        button {
          font-size: 18px;
        }
      }
    }
  }
  .content-2 {
    width: 50%;
    height: 82vh;
    overflow: hidden;
    background-color: #e5f0fb;

    .busca {
      display: flex;
      width: 100%;

      .content {
        width: 90% !important;
      }

      .barra-cod {
        width: 30%;
      }

      .barra-name {
        width: 70%;
        position: relative;

        .result-search {
          display: flex;
          align-items: start;
          flex-direction: column;
          color: black;
          background: white;
          padding: 20px;
          gap: 20px;
          position: absolute;
          top: 90%;
          width: 95%;
          max-height: 400px;
          overflow-y: auto;

          h1 {
            font-size: 20px;
          }

          a {
            display: flex;
            align-items: center;
            gap: 30px;
            width: 100%;
            border-bottom: 1px solid black;
          }

          img {
            width: 60px;
            height: 60px;
            object-fit: contain;
          }
        }
      }
    }
    .table-prod {
      height: 65vh;
      overflow-y: auto;
    }

    .nenhum-produto {
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

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

    tbody h1 {
      font-size: 25px;
    }

    tbody tr {
      max-height: 100px;
    }

    tbody tr:nth-child(odd) {
      background-color: ${({ theme }) => theme.COLORS.BASE_100};
    }

    tbody td {
      padding-left: 10px;
    }

    tbody td.icon-excluir {
      display: flex;
      justify-content: center;
      margin-top: 35%;
      padding: 0;
      svg {
        color: #ce0104;
        font-size: 25px;
      }

      button {
        background: none;
        border: none;
      }
    }

    tbody td .foto {
      display: flex;
      justify-content: center;
    }

    tbody td a {
      color: ${({ theme }) => theme.COLORS.BASE};
      background-color: ${({ theme }) => theme.COLORS.BASE_100};
      padding: 10px 30px;
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
  }
`;

export const ContentForm = styled.div`
  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
  p {
    font-size: 23px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  .footer-modal {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  }

  .row3 {
    display: flex;
    gap: 5%;
    color: black;
    font-weight: bold;
  }

  .row1 {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    color: black;
    font-weight: bold;
    > div {
      margin-bottom: 20px;
    }

    .selectField {
      border-radius: 10px;
      width: 47%;

      h1 {
        font-weight: 700;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      }
    }

    .selectField select {
      background-color: ${({ theme }) => theme.COLORS.GRAY};
      padding: 10px 15px;
      border-radius: 10px;
      width: 100%;
      height: 50px;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 80px auto 64px;
  grid-template-areas:
    "brand header"
    "menu content"
    "menu content"
    "AdicionarProd desenvolvidoPor";
`;
