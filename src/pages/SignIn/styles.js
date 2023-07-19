import styled from "styled-components";
import logo from "../../assets/brand.jpeg"


export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.BASE};
height: 100vh;
display: flex;
`

export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
margin: 0 auto;
gap: 100px;
`


export const Logo = styled.div`
width: 500px;

img{
    width: 100%;
}

`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
text-align: center;
padding: 30px;
background-color: rgba(0, 0, 0, 0.1);
box-shadow: 1px 3px 35px 6px rgba(0,0,0,0.2);
`