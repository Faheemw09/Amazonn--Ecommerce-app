import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartdata } from '../redux/cartreducer/action'
import Carddata from './Carddata'
import { Link, Navigate, useLocation } from 'react-router-dom'
import Navbar1 from './Navbar1'


function Cartlist({}) {
  const cartproduct=useSelector((store)=>store.cartReducer.cart)
  const location=useLocation()
  //console.log(cartproduct)
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(cartdata())

  },[location.search])
  const returnToProductPage = () => {
    <Navigate to="/product" />

  };
  // console.log('cartproduct:', cartproduct)
  // console.log('cartproduct.length:', cartproduct.length)
 
  
  return (
    <>
    <Navbar1/> 
    
    <div >
      {/* <Navbar1/> */}

      { cartproduct.length==0  ? (
          <div style={{margin:"350px"}}>
            <h2>Your cart is empty.</h2>
            <Link to="/product" ><button >Shop Now</button></Link>
        
          </div>
      ):(

       cartproduct.map((el)=>{
        return <Carddata  key={el.id} {...el}/>
       })
      )}
    </div>
    </>
  )
}

export default Cartlist
