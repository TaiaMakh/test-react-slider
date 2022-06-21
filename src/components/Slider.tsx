import React, { useEffect } from "react";
import styled from "styled-components";
import { ItalicTitle } from "../styles/text";
import homeData from "./../mocks/home.json";
import Card from "./Card";

interface SlidesInterface {
  cards: [];
}
interface DataCardsInterface {
  card: {};
}

const Slider = () => {
    
  useEffect(() => {
    homeData.slides.map((data: any) => {
      return data.cards.map((card: DataCardsInterface) => {
        return <Card card={card} />;
      });
    });
  }, []);

  return (
    <MainDiv>
      <ItalicTitle>Multi-country tours</ItalicTitle>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export default Slider;
