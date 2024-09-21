import { useContext } from "react";
import { createContext } from "vm";
// this is the way of define the interfaces
export interface ContextInterface{
    addMessage:()=>void,
    message:string,
    isLoading:boolean,
    hundleInputChenge:()=>void
}
// this is the way of creating the state in react using react context api
export const ChatContext = createContext({  
    addMessage:()=>{},
    message:"",
    isLoading:false,
    hundleInputChange:()=>{},
});