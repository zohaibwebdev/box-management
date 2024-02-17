import React, { Dispatch, FC, SetStateAction } from "react";
import CardComponent from "../cardComponent/CardComponent";
import { CardItem } from "@/app/page";

export type CardsSetStateParams =
  | ((prevCards: Array<CardItem>) => Array<CardItem>)
  | Array<CardItem>;
interface ICardContainer {
  cards: Array<CardItem>;
  cardNumber: number;
  setCards: (value: CardsSetStateParams) => void;
}

const CardContainer: FC<ICardContainer> = ({ cards, cardNumber, setCards }) => {
  return (
    <div className="w-[320px] p-4 border-2 border-black-100 rounded-2xl flex flex-col gap-4">
      {cards
        .filter((card) => card.cardNumber === cardNumber)
        .map((card) => (
          <CardComponent
            key={card.value}
            setCards={setCards}
            id={card.id}
            value={card.value}
            cardNumber={card.cardNumber}
          />
        ))}
    </div>
  );
};

export default CardContainer;
