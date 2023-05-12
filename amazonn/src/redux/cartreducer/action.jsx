import axios from "axios"
import { CART_SUCCES } from "./Actiontype"

export const cartdata=(id)=>(dispatch)=>{
    const url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
axios.get(url).then((res)=>{
    console.log(res.data)
   return dispatch({type:CART_SUCCES,payload:res.data})
})
}