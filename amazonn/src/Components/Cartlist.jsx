import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartdata } from '../redux/cartreducer/action'
import Carddata from './Carddata'
import { useLocation } from 'react-router-dom'

function Cartlist({}) {
  const cartproduct=useSelector((store)=>store.cartReducer.cart)
  const location=useLocation()
  console.log(cartproduct)
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(cartdata())

  },[location.search])


 
  
  return (
    <div>
      {
       cartproduct.map((el)=>{
        return <Carddata  key={el.id} {...el}/>
       })
      }
    </div>
  )
}

export default Cartlist
