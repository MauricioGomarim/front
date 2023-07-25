import styled from "styled-components"

export const Container = styled.div`
grid-area: desenvolvidoPor;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
background-color: #F4EDE8;

h1 {
    
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
}
`