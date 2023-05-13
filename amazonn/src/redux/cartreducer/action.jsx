import axios from "axios"
import { CART_SUCCES } from "./Actiontype"

export const cartdata=(id)=>(dispatch)=>{
    const url=`https://precious-bat-rugby-shirt.cyclic.app/products/${id}`
axios.get(url).then((res)=>{
    console.log(res.data)
   return dispatch({type:CART_SUCCES,payload:res.data})
})
}