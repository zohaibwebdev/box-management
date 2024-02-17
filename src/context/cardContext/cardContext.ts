import { createContext } from "react";

interface CardContextTypes {
    inputText: string;
    deleteCard: ()=>void;
    editCard: ()=>void;
    cardNumber: number;
    prevCard: (value:number)=>void
    nextCard: (value:number)=>void
}

const cardContext = createContext<CardContextTypes>({
    inputText: "",
    deleteCard: ()=>{},
    editCard: ()=>{},
    cardNumber:0,
    prevCard:()=>{},
    nextCard:()=>{}

})