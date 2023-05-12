import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Payment() {
  const navigate=useNavigate()
  const handlesubmit=()=>{
    alert("Payment successFull!")
navigate("/")
  }
  return (
    <DIV>
       <form onSubmit={handlesubmit}>
    Name of Person:<input type="text" id="name" placeholder="Name" />
    Card Number:<input type="number" id="cardNo" placeholder="Card Number" />
    CVV Number:<input type="number" id="cardCvv" placeholder="CVV Number"/>
    <input type="submit" value="Confirm" />
  </form>
    </DIV>
  )
}

export default Payment
const DIV=styled.div`
form {
    width: 400px;
    padding: 20px;
    background-color: whitesmoke;
    margin: auto;
    margin-top: 50px;
    border-radius: 5px;
    border: 2px solid rgb(28, 6, 48);
    
  
  }
  
  
  input {
    margin-bottom: 10px;
    width: 100%;
    padding: 10px 0px;
  }
  input[type="submit"]:hover {
    background-color: orangered;
    color: white;
    font-size: 20px;
    cursor: pointer;
   }
`