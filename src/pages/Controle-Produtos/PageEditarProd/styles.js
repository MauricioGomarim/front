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
    "AdicionarProd desenvolvidoPor";

  .row4 {
    display: flex;
    justify-content: end;
    width: 100%;
    margin-right: 2%;
    margin-top: 30px;
    gap: 20px;
  }

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

// export const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
//   height: 100%;

//   .row1 {
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     height: fit-content;
//     margin-bottom: 20px;

//     .selectField {
//       border-radius: 10px;
//       width: 30%;
//       margin-right: 2%;

//       h1 {
//         font-weight: 700;
//         font-size: 20px;
//         color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
//       }
//     }

//     .selectField select {
//       background-color: ${({ theme }) => theme.COLORS.GRAY};
//       padding: 10px 15px;
//       border-radius: 10px;
//       width: 100%;
//       height: 50px;
//       font-size: 14px;
//       font-weight: 400;
//       color: ${({ theme }) => theme.COLORS.GRAY_300};
//     }
//   }

//   .row2 {
//     width: 100%;
//     margin-bottom: 20px;
//     margin-right: 2%;
//     div {
//       width: 100%;

//       input {
//         width: 100%;
//       }
//     }
//   }

//   .row3 {
//     width: 100%;
//     display: flex;

//     justify-content: space-between;
//     margin-bottom: 20px;

//     div {
//       margin-right: 2%;
//     }
//   }

//   @media (max-width: 980px) {
//     width: 100%;
//   }
// `;

// export const Foto = styled.div`
//   width: 30%;

//   img {
//     width: 100%;
//         margin: 0 auto;
//         max-height: 250px;
//         object-fit: contain;
//   }

//   label {
//     font-weight: 700;
//     font-size: 20px;
//     color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//   }

//   input {
//     display: none;
//   }

//   select {
//   }

//   @media (max-width: 980px) {
//     width: 100%;
//   }
// `;

// export const Content = styled.div`
//   grid-area: content;
//   background-color: white;
//   padding: 30px;


//   .container-form {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     margin-top: 50px;

//     .form-button {
//         width: 68%;
//         height: 100%;
//     }
//   }
// `;



export const Content = styled.div`
  padding: 30px;
  grid-area: content;
`

export const ContentForm = styled.div`
padding: 30px;
display: flex;
margin-top: 30px;
justify-content: space-between;
flex-wrap: wrap;
height: fit-content;

.row4 {
        display: flex;
        justify-content: end;
        width: 100%;
        margin-right: 2%;
        margin-top: 30px;
    }


@media (max-width: 980px){
    flex-direction: column;
}
`

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 68%;
    height: 100%;

    .row1 {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        height: fit-content;
        margin-bottom: 20px;

        .selectField{
        border-radius: 10px;
        width: 30%;
        margin-right: 2%;
        
        h1 {
            font-weight: 700;
        font-size: 20px;
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
    
    .row2 {
        width: 100%;
        margin-bottom: 20px;
        margin-right: 2%;
        div {
            width: 100%;

            input {
                width: 100%;
            }
        }
  
    }

    .row3 {
        width: 100%;
        display: flex;

        justify-content: space-between;
        margin-bottom: 20px;

        div {
            margin-right: 2%;
        }


        .selectField{
        border-radius: 10px;
        width: 30%;
        margin-right: 2%;
        
        h1 {
            font-weight: 700;
        font-size: 20px;
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

    @media (max-width: 980px) {
        width: 100%
    }

`

export const Foto = styled.div`
    width: 30%;

    img {
        width: 100%;
        margin: 0 auto;
        max-height: 250px;
        object-fit: contain;
    }

    label {
        font-weight: 700;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    input {
        display: none;
    }

    select {
    }

    @media (max-width: 980px) {
        width: 100%
    }
    
`