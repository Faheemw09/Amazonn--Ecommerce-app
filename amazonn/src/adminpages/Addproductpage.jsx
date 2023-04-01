import React from 'react';
import { useDispatch } from 'react-redux';
import { Addproduct } from '../redux/Action';
import AdminNav from './AdminNav';

const initialstate={
  imageURL:"",
  title:'',
  brand:"",
  price:"",
  color:"",
  category:"",
  stock:"",
  rating:""
}

const Addproductpage = () => {
  const [products,setProducts]=React.useState(initialstate);
  const [successMsg, setSuccessMsg] = React.useState(null);
  const dispatch=useDispatch();

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setProducts((prev)=>{
      return {...prev,[name]:value};
    });
  };

  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(Addproduct(products));
    setSuccessMsg('Product added successfully! Add another product or go to main page.');
    setProducts(initialstate);
  };

  return (
  <>
  <AdminNav/>
    <div className='maindiv'>
      <div className='fomrnadmin'>
        <h2 className='allH2form'>Add Product</h2>
        {successMsg && (
          <div className="success-msg">
            {successMsg}
          </div>
        )}
        <form className='form-1' onSubmit={handlesubmit}>
          <input
            className='allinputform'
            type="text"
            placeholder='image'
            name='imageURL'
            value={products.imageURL}
            onChange={handleChange}
          />

          <input
            className='allinputform'
            type="text"
            placeholder='Title'
            value={products.title}
            onChange={handleChange}
            name="title"
          />

          <input
            className='allinputform'
            type="text"
            placeholder='Price'
            value={products.price}
            name="price"
            onChange={handleChange}
          />

          <input
            className='allinputform'
            type="text"
            placeholder='Brand'
            value={products.brand}
            onChange={handleChange}
            name="brand"
          />

          <input
            className='allinputform'
            type="text"
            placeholder='color'
            value={products.color}
            onChange={handleChange}
            name="color"
          />

          <select
            className='allinputform'
            name="category"
            id=""
            onChange={handleChange}
            value={products.category}
          >
            <option value="">Select Category</option>
            <option value="male">Men</option>
            <option value="female">Woman</option>
            <option value="kids">Kids</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
          </select>

          <input
            className='allinputform'
            type="text"
            placeholder='stock'
            value={products.stock}
            onChange={handleChange}
            name="stock"
          />

          <input
            className='allinputform'
            type="text"
            placeholder='rating'
            value={products.rating}
            onChange={handleChange}
            name="rating"
          />

          <button className='btnadmin' type='submit'>Submit</button>
        </form>
      </div>
    </div>
    </>
  )
};

export default Addproductpage;
