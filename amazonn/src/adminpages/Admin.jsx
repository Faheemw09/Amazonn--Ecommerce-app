import React from 'react'

const Admin = () => {

  return (
    <div className='maindiv'>
    <div className='fomrnadmin'>
        <h2 className='allH2form'>Add Product</h2>
        <form className='form-1' 
        >
         <input className='allinputform' type="text" placeholder='image'
            />

         <input className='allinputform' type="text" placeholder='Title'
         />

         <input className='allinputform' type="text" placeholder='Price'
      
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

export default Admin;