import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BASE};
    justify-content: space-between;
    padding-left:20px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    grid-area: header;

    img {
        border-radius: 50%;
        width: 80px;
        height: 80px;
    }

`

export const InfosUser = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const IconLogout = styled.div`
    padding-right: 50px;
    cursor: pointer;

    svg {
        font-size: 50px;
    }
`