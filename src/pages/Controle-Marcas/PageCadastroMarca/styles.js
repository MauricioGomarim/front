import styled from "styled-components"

export const ContentForm = styled.div`
padding: 30px;
display: flex;
flex-wrap: wrap;
flex-direction: column;
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
    width: 80%;
    height: 100%;
    
    .row2 {
        width: 100%;
        margin-bottom: 20px;
        margin-right: 2%;
        display: flex;
        align-items: end;
        div {
            width: 50%;

            input {
                width: 100%;
            }
        }
  
    }

    @media (max-width: 980px) {
        width: 100%
    }

`

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
`;