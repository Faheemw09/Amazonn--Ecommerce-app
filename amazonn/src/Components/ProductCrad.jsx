import React from 'react'

function ProductCrad({imageURL,title,price,brand,color,gender,stock}) {
  return (
    <div  style={{border:"1px solid black"}}>
      <img style={{width:"90%"}}src={imageURL} alt="" />
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h4>{price}</h4>
      <h5>{brand}</h5>
      <p>{color}</p>
      <h3>{gender}</h3>
      <p>{stock}</p>

    </div>
  )
}

export default ProductCrad
