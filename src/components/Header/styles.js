import styled from "styled-components"

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BASE};

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