import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {  getproductdata } from '../redux/Action'
import ProductCrad from './ProductCrad'
function Productslist() {
    const product=useSelector((store)=>store.AdminReducer.products)
    
    
    const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(getproductdata())

    },[])
    console.log(product)
  return (
    <div style={{marginTop:"150px",border:"5px solid blue",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",width:"100%"}}>
      {
        product.map((el)=>{
            return <ProductCrad key={el.id} {...el}   /> 

        })
      }
    </div>
  )
}

export default Productslist
