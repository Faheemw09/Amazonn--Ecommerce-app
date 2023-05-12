import React, { useState } from 'react'
import Logo from "../Logo/Amazonnn.png";
import { useDispatch } from 'react-redux';
import { deleteproduct } from '../redux/Action';
const Carddata = ({imageURL,title,price,id}) => {
  const[count,setCount]=useState(1)
  const dispatch=useDispatch()
  const deletehandler=()=>{
    
    
    deleteproduct(id)
  }
  const paymenthandler=()=>{
    window.location.assign("/payment")
  }
    return (
        <div  style={{width:"50%"}} className='Mainproductbox'>
            {/* product image and price  */}
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

            {/* product  card summary */}
            <div className='paymentproductbox'>
                <img className='paymebtimageamazon' src={Logo}
                        alt=''
                    />
                {/* <h1>AmaZonn</h1> */}
                <p className='pcardproduct'>Card Summary</p>
                 
                   <h3>Your total Bill is {Math.floor((price*count)+(price*count)*5/100+(price*count)*2/100)}</h3>
               
                <p className='pbox'>Merchandise Subtotal: {price*count} </p>
                <br/>
                <p className='pbox'>Shipping: {Math.floor((price*count)*5/100)}</p>
                <br/>
                <p className='pbox'>Estimated Tax :  {Math.floor((price*count)*2/100)}</p>
                <br/>
              <p className='ptotal'>Total Amount: {Math.floor((price*count)+(price*count)*5/100+(price*count)*2/100)}</p>
                <button onClick={paymenthandler} className='checkoutbtn'>CheckOut</button>
            </div>
        </div>
    )
}

export default Carddata