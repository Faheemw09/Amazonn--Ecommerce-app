import React, { useState } from 'react'
import Logo from "../Logo/Amazonnn.png";
import { useDispatch,useSelector } from 'react-redux';
import { deleteproduct } from '../redux/Action';
import { Navigate, useNavigate } from 'react-router-dom';
const Carddata = ({imageURL,title,price,id}) => {
 
  const[count,setCount]=useState(1)
  const dispatch=useDispatch()
  const deletehandler=()=>{
    
    
    deleteproduct(id)
  }
   
  const paymenthandler=()=>{
     window.location.assign("/payment")
   }
   const cartproduct=useSelector((store)=>store.cartReducer.cart)
  const returnToProductPage = () => {
    <Navigate to="/product" />

  };
    return (
        <div  style={{width:"50%"}} className='Mainproductbox'>
            {/* product image and price  */}
            {cartproduct.length === 0 ? (
          <div>
            <h2>Your cart is empty.</h2>
            <button onClick={returnToProductPage}>Shop Now</button>
          </div>
        ) : (
            <div className='productdetailbox'>
                {/* <div className='productimagebox'> */}
                    <img  className='imageamazon' src={imageURL}
                        alt=''
                    />
                {/* </div> */}
                <div className='productpricebox'>
                    <h1 className='honeproduct'>{title}</h1>
                    <p>Price:{price}</p>
                    <div className='producttnbox'>
                        <button disabled={count==1}  onClick={()=>{
                          setCount((prev)=>prev-1)
                        }} className='prductbtn'>-</button>
                        
                        <p className='ansqty'>Qty:{count}</p>
                       
                        <button  onClick={()=>{
                          setCount((prev)=>prev+1)
                        }} className='prductbtn'>+</button>
                    </div>
                </div>

                <div className='productdeletebox'>
                    <p>{title}</p>
                    <p>Subtotal:{count*price}</p>
                    <div className='deletproducbox'>
                        <button onClick={deletehandler} className='deletebtn'>Delete</button>
                    </div>

                </div>

            </div>
)}
            {/* product  card summary */}
            <div className='paymentproductbox'>
                <img className='paymebtimageamazon' src={Logo}
                        alt=''
                    />
                {/* <h1>AmaZonn</h1> */}
                <p className='pcardproduct'>Card Summary</p>


         
         
          <div>
            <h3>Your total bill is {Math.floor(price * count + (price * count) * 5 / 100 + (price * count) * 2 / 100)}</h3>

            <p className='pbox'>Merchandise Subtotal: {price * count} </p>
          
            <p className='pbox'>Shipping: {Math.floor((price * count) * 5 / 100)}</p>
           
            <p className='pbox'>Estimated Tax: {Math.floor((price * count) * 2 / 100)}</p>
           
            <p className='ptotal'>Total Amount: {Math.floor(price * count + (price * count) * 5 / 100 + (price * count) * 2 / 100)}</p>
            <button onClick={paymenthandler} className='checkoutbtn'>
              CheckOut
            </button>
          </div>
       
      </div>
   
    </div>
    

    
  )
                      
    
};

export default Carddata