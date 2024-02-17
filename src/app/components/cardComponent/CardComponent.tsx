import React, { FC } from "react";
import { CardItem } from "@/app/page";
import { CardsSetStateParams } from "../cardContainer/CardContainer";

interface ICardComponent extends CardItem {
  setCards: (c: CardsSetStateParams) => void;
}

const CardComponent: FC<ICardComponent> = ({
  value,
  cardNumber,
  id,
  setCards,
}) => {
  // prev = [{text:adfasdf, cardnumber:0}, {}]
  const handleDelete = () => {
    console.log("first");
    setCards((prev) => {
      const filterCards = prev.filter((pre) => {
        return id !== pre.id;
      });
      return [...filterCards];
    });
  };

  const handleNext = () => {
    //geting index of filter array

    if (cardNumber < 3) {
      setCards((prevState) => {
        const updatedCardIndex = prevState.findIndex((prev) => prev.id === id);

        if (updatedCardIndex !== -1) {
          console.log(updatedCardIndex, "before");
          prevState[updatedCardIndex].cardNumber =
            prevState[updatedCardIndex].cardNumber + 1;
          console.log(updatedCardIndex, "after");
        }
        return [...prevState];
      });
    }
  };

  const handlePrev = () => {
    if (cardNumber > 0) {
      setCards((prevState) => {
        const tempState = [...prevState];
        const filterCard = tempState.find((prev) => prev.id === id);

        if (filterCard) {
          console.log(filterCard.cardNumber, "before");
          filterCard.cardNumber = filterCard.cardNumber - 1;
          console.log(filterCard.cardNumber, "after");
        }
        return tempState;
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center border-2 border-[#444] py-4">
      <h3>{value}</h3>
      <div className="flex justify-center items-center gap-1 mt-2">
        <button
          className="flex items-center justify-center border-2 border-green-500 py-1 px-2"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button className="flex items-center justify-center border-2 border-green-500 py-1 px-2">
          Edit
        </button>
        <button
          className="flex items-center justify-center border-2 border-green-500 py-1 px-2"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className="flex items-center justify-center border-2 border-green-500 py-1 px-2"
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
