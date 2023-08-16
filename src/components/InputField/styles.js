import styled from "styled-components"


export const Container = styled.div`

    width: 100%;
    margin-right: 2%;

    h1{
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    input {
        background-color: ${({ theme }) => theme.COLORS.GRAY};
        padding: 10px 15px;
        border-radius: 10px;
        width: 100%;
        height: 50px;
    }
`