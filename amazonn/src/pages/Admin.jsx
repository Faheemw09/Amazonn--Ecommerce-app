import React from 'react'
// import styled from "styled-components";

// import { useDispatch } from 'react-redux';
// import { addProduct } from '../redux/productReducer/action';

// const initailState={
//     image:"",
//     title:"",
//     price:"",
//     brand:"",
//     discount:"",
//     gender:"",
// }

const Admin = () => {

//     const [product, setProduct] = useState(initailState);
// const dispatch= useDispatch();

// const handleChange =(e)=>{
//    const {name,value}= e.target;

// setProduct(prev =>{
//     return {...prev, [name]:value};
// });
// }

// const handleSubmit =(e)=>{
//     e.preventDefault();
//     // console.log(product)
//     dispatch(addProduct(product));
//     setProduct(initailState);
// }

  return (
    <div className='maindiv'>
    <div className='fomrnadmin'>
        <h2 className='allH2form'>Add Product</h2>
        <form className='form-1' 
        // onSubmit={handleSubmit}
        >
         <input className='allinputform' type="text" placeholder='image'
        //   value={product.image}
        //   onChange={(e)=>{handleChange(e)}}
        //   name="image"
            />

         <input className='allinputform' type="text" placeholder='Title'
        //  value={product.title}
        //  onChange={(e)=>{handleChange(e)}}
        //  name="title"
         />

         <input className='allinputform' type="text" placeholder='Price'
        //  value={product.price}
        //  onChange={(e)=>{handleChange(e)}}
        //  name="price"
         />

         <input className='allinputform' type="text" placeholder='Brand'
        //  value={product.brand}
        //  onChange={(e)=>{handleChange(e)}}
        //  name="brand"
         />

         <input className='allinputform' type="text" placeholder='Discount'
        //  value={product.discount}
        //  onChange={(e)=>{handleChange(e)}}
        //  name="discount"
         />

         <select className='allinputform' name="gender" id=""
        //    onChange={(e)=>{handleChange(e)}}
         >
         <option value="">Select Category</option>
         <option value="male">Men</option>
         <option value="female">Woman</option>
         {/* <option value="kids">Kids</option> */}
         <option value="mobile">Mobile</option>
         <option value="laptop">Laptop</option>
         </select>

        <button className='btnadmin' type='submit'>Submit</button>
        </form>
    </div>
    </div>
 
  )
}

// const DIV = styled.div `
// width:400px;
// border:1px solid gray;
// padding: 20px;
// background-color:black;
// margin: auto;
// box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

// input{
//     width:80%;
//     height:40px;
//     font-size:large;
// }
// h2{
//     font-size:30px; 
//     color:red;
//    font:bold;
//    text-underline-offset: red;
// }
// button{
//     width:20%;
//     height:35px;
//     background-color:blue;
//     color:white;
//     font-size:large;
//     padding: 5px 3px 5px 5px
// }


// .form-1{
//     display:flex;
//     flex-direction:column;
//     gap:15px;
//     align-items: center;
// }

// select{
//     width:50%;
//     height:30px;
//     font-size: large;
//     text-align: center;
// }
// `;
export default Admin;