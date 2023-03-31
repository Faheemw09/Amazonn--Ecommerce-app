
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCESSONADMIN } from "./ActionTypes"



import axios from "axios"
const url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
export const getAdmindata=()=>(dispatch)=>{

    dispatch({type:GET_DATA_REQUEST})
    axios.get(url)
    .then((res)=>{
    // console.log(res.data)
    dispatch({type:GET_DATA_SUCESSONADMIN,payload:res.data})})
    .catch((err)=>{
        dispatch({type:GET_DATA_FAILURE})
    })
}
export const getproductdata=()=>(dispatch)=>{

    dispatch({type:GET_DATA_REQUEST})
    axios.get(url)
    .then((res)=>{
    // console.log(res.data)
    dispatch({type:GET_DATA_SUCESSONADMIN,payload:res.data})})
    .catch((err)=>{
        dispatch({type:GET_DATA_FAILURE})
    })
}