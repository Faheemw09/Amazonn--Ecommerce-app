import { Card } from "@chakra-ui/react"
import { CART_SUCCES } from "./Actiontype"

const initialstate={
    cart:[]
}
export const reducer=(state=initialstate,{type,payload})=>{
switch(type){
    case CART_SUCCES:
        return {...state,cart:[...state.cart,payload]}
        default:{
            return state 
        }
       

}
}