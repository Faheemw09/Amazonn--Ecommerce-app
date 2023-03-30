
import React from 'react'
import { GET_DATA_FAILURE, GET_DATA_SUCESSONADMIN } from './ActionTypes'


const initilastate={
    isLoading:false,
    isError:false,
    products:[]
}


export const AdminReducer = (state=initilastate,{type,payload}) => {
    switch (type){
  case GET_DATA_FAILURE:
    return {...state,isLoading:true}
    case GET_DATA_SUCESSONADMIN:
        return {...state,isLoading:false,products:payload}

case GET_DATA_FAILURE:
    return {...state,isLoading:false,isError:true}
        default:
            return state

    }
  
}

export default AdminReducer