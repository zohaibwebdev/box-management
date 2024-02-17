"use client";
import { uuid } from "@/utils";
import React, { useRef, useState } from "react";
import CardContainer from "../app/components/cardContainer/CardContainer";

export interface CardItem {
  cardNumber: number;
  value: string;
  id: string;
}

const MainComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [cards, setCards] = useState<Array<CardItem>>([
    {
      value: "a1",
      cardNumber: 0,
      id: "dasasdfasdf55555",
    },
    {
      value: "a2",
      cardNumber: 3,
      id: "dasasdfasdf55555554585asdfdsafa",
    },
  ]);

  const handleAdd = () => {
    if (!inputRef.current) {
      return;
    }
    const inputValue = inputRef.current.value;
    // inputRef.current == event.target
    inputRef.current.value = "";

    setCards((prev) => {
      return [
        ...prev,
        {
          value: inputValue,
          cardNumber: 0,
          id: uuid(),
        },
      ];
    });
  };

  return (
    <>
      <div className="mt-10 flex justify-center items-center gap-5">
        <input
          type="text"
          ref={inputRef}
          className="border-2 border-red-700 outline-none text-xl p-2"
        />
        <button
          className="px-5 py-2 rounded-xl bg-red-700 text-white text-xl"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="mt-12 flex flex-nowrap gap-1 px-2">
        <CardContainer
          key={"card-container-0"}
          cards={cards}
          setCards={setCards}
          cardNumber={0}
        />
        <CardContainer
          key={"card-container-1"}
          cards={cards}
          setCards={setCards}
          cardNumber={1}
        />
        <CardContainer
          key={"card-container-2"}
          cards={cards}
          setCards={setCards}
          cardNumber={2}
        />
        <CardContainer
          key={"card-container-3"}
          cards={cards}
          setCards={setCards}
          cardNumber={3}
        />
      </div>
    </>
  );
};

export default MainComponent;
