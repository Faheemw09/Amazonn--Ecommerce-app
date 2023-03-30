import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCESSONADMIN } from "./ActionTypes"

import axios from "axios"
export const getAdmindata=(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    axios.get(`http://localhost:8080/products`)
    .then((res)=>{
    console.log(res.data)
    dispatch({type:GET_DATA_SUCESSONADMIN,payload:res.data})})
    .catch((err)=>{
        dispatch({type:GET_DATA_FAILURE})
    })
}