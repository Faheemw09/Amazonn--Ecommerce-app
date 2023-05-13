
import React from 'react'
import { GET_DATA_FAILURE, GET_DATA_SUCESSONADMIN, GET_UPDATE_SUCESS, POST_ADDPRODUCT_SUCCESS, PRODUCT_DELETED_SUCCESS } from './ActionTypes'
import { filter } from '@chakra-ui/react'


const initilastate={
    isLoading:false,
    isError:false,
    products:[],
    filters:{
text:"",
    }
}


export const AdminReducer = (state=initilastate,{type,payload}) => {
    switch (type){
  case GET_DATA_FAILURE:
    return {...state,isLoading:true}
    case GET_DATA_SUCESSONADMIN:
        return {...state,isLoading:false,products:payload}

case GET_DATA_FAILURE:
    return {...state,isLoading:false,isError:true}
    case POST_ADDPRODUCT_SUCCESS:
        return {...state,isLoading:false}
        case GET_UPDATE_SUCESS:
            return {...state,isLoading:false}
            case PRODUCT_DELETED_SUCCESS:
      const updatedProducts = state.products.filter(
        (product) => product.id !== payload
      );
      return { ...state, products: updatedProducts }
        default:
            return state

    }
  
}

export default AdminReducer