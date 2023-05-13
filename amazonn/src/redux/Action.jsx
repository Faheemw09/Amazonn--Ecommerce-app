
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCESSONADMIN, GET_UPDATE_SUCESS, POST_ADDPRODUCT_SUCCESS, PRODUCT_DELETED_SUCCESS } from "./ActionTypes"





import axios from "axios"






const url=`https://precious-bat-rugby-shirt.cyclic.app/products`

export const getAdmindata=()=>(dispatch)=>{



const url=`https://precious-bat-rugby-shirt.cyclic.app/products`
// export const getAdmindata=()=>(dispatch)=>{



    dispatch({type:GET_DATA_REQUEST})
    axios.get(url)
    .then((res)=>{
    // console.log(res.data)
    dispatch({type:GET_DATA_SUCESSONADMIN,payload:res.data})})
    .catch((err)=>{
        dispatch({type:GET_DATA_FAILURE})
    })
}


export const getproductdata=(paramObj)=>(dispatch)=>{


    dispatch({type:GET_DATA_REQUEST})
    axios.get(url,paramObj)

    .then((res)=>{
 console.log(res.data)
    dispatch({type:GET_DATA_SUCESSONADMIN,payload:res.data})})
    .catch(()=>{
        dispatch({type:GET_DATA_FAILURE})
    })
}

export const  Addproduct=(data)=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    axios
    .post(`https://precious-bat-rugby-shirt.cyclic.app/products`,data)
    .then((res)=>{
      
       dispatch({type:POST_ADDPRODUCT_SUCCESS})
    }).catch((err)=>{
       dispatch({type:GET_DATA_FAILURE})
    })
}

export const editproduct=(dataobj,id)=>(dispatch)=>{
    dispatch({type:GET_DATA_REQUEST})
    axios.patch(`https://precious-bat-rugby-shirt.cyclic.app/products/${id}`,dataobj)
    .then(()=>{
        dispatch({type:GET_UPDATE_SUCESS})
    })
    .catch((err)=>{
        dispatch({type:GET_DATA_FAILURE})
    })
}

export const deleteproduct=(id)=>(dispatch)=>{
    axios.delete(`https://precious-bat-rugby-shirt.cyclic.app/products/${id}`)
    .then((res)=>{
        dispatch({ type: PRODUCT_DELETED_SUCCESS, payload: id });
    })
}