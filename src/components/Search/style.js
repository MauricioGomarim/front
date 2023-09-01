import styled from "styled-components"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.COLORS.BASE};
padding: 20px 0;
grid-area: search;

.text-search {
    margin-right: 100px;
}

svg {
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.BASE};
    margin-left: 20px;
}

.content {
    background-color: white;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    input {
    padding: 15px 10px;
    width: 100%;
    border-radius: 30px;
}
}
`