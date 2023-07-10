import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BASE};
  padding: 20px;
  grid-area: menu;

  ul {
    margin-top: 10px;
    list-style: none;
  }
  ul li{
    text-align: start;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    
  }

  ul li:before {
    content: "";
    display: flex;
    width: 20px;
    height: 1px;
    background-color: white;
  }
  span {
    cursor: pointer;
  }
  .title-accordion {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    cursor: pointer;
    h1 {
        font-size: 15px;
    }
    span {
      display: flex;
      align-items: center;
    }
    svg {
      font-size: 20px;
    }
  }

  .show.accordionContent {
    height: 100px;
    opacity: 1;
    transition: all 1s ease;
  }

  .accordionContent {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.4s ease;
  }

  .Active {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  
`;
