import styled, { css } from "styled-components";

import { darken } from "polished";

const ClassTypeColor = (type: string | undefined) => {
  switch (type) {
    case "Tank":
      return "#d1f2a5";
    case "Mage":
      return "#ad8ad1";
    case "Assassin":
      return "#e85a5a";
    case "Support":
      return "#4dafe8";
    case "Fighter":
      return "#e3b654";
    case "Marksman":
      return "#dfe36f";
    default:
      return "#ccc";
  }
};

export const Container = styled.div``;

export const Title = styled.h1`
  font-size: 48px;
  color: #e43f5a;
  max-width: 450px;
  line-height: 50px;

  margin-top: 80px;
  
`;

export const Form = styled.form`
  margin-top: 40px;
  width: 500px;

  display: flex;

  input {
    flex: 1;
    border: 1px solid #f4f4f9;
    padding: 10px;

    ::placeholder {
      color: #000;
    }
    
  }

  button {
    padding: 10px 20px;
    border: 0;
    background: #e43f5a;

    font-weight: bold;

    &:hover {
      background: ${darken(0.2, "#e43f5a")};
      transition: 400ms;
    }
  }
`;

export const Cards = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;

  @media(max-width: 920px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media(max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content:center;
    align-items: center;
  }
`;


export const Card = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 300px;

  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.75);
  border-radius: 8px;

  background: #d3d3d3;  

  cursor: pointer;

  transition: transform 0.3s;

  &:hover {
    transform: translateY(-15px);
  }

  @media(max-width: 750px) {

  justify-content: center;
  }
  
`;

export const ChampionBanner = styled.img`
  z-index: 1;

  border-radius: 8px 8px 0 0;

  top: -10px;
  max-width: 300px;
  opacity: 0.8;

`;

export const Avatar = styled.img`
  position: absolute;
  z-index: 3;

  top: 25%;

  height: 100px;
  width: 100px;

  border-radius: 50%;
  box-shadow: 5px 5px 22px 2px rgba(0, 0, 0, 0.75);
`;

export const ChampionTitle = styled.h3`
  margin: 50px 0 10px 0;
  text-align: center;
`;

export const Tag = styled.span.attrs((props) => ({
  color: props.color,
}))`
  padding: 2px 10px;
  font-size: 16px;
  font-weight: bold;

  border-radius: 8px;

  ${(props) =>
  css`
    background: ${ClassTypeColor(props.color)};
    border: 1px solid ${darken(0.3, ClassTypeColor(props.color))};
  `}

  margin: 10px;
`;

export const Description = styled.p`
  padding: 20px;
  font-size: 14px;
`;
