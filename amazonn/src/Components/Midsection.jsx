import React from 'react'
// import {  NavLink } from "react-router-dom";

 

function Midsection() {
  return (
    <div>
    <div className='om' style={{width:"100%",display:"grid",gap:"20px",gridTemplateColumns:"repeat(4,1fr)",paddingBottom:"500px"}}>
      <div>
        <div className='om1' style={{border:"1px solid white",height:"490px"}}>
        <h2>Bluetooth Calling Smartwatch starts at ₹1,999</h2>
        <a href=""><img width="100px" src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg" alt="" /></a>
        <a href="">see more</a>
        </div>

      </div>
      
      <div   className='om1' style={{border:"1px solid white",height:"490px"}}>
      <h2>Shop & Pay | Earn rewards daily</h2>
        <a href=""><img width="20%" src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" alt="" /></a>
        <a href="">Shop more</a>

      </div>
      <div  className='om1' style={{border:"1px solid white",height:"490px"}}>
        <h2>Up to 70% off | Clearance store</h2>
     <a href=""> <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg" alt="" /> </a>
     <a href="">visit the store</a>

      </div>
      <div  className='om1' style={{border:"1px solid white",height:"490px"}}>
       <div>
        <h2>Sign in for your best experience</h2>
       <a href=""> <button style={{backgroundColor:"yellow",border:"2px solid yellow",marginBottom:"20px",width:"200px",height:"40px"}}>Sign in securely</button> </a>
       </div>
       <div>  <a href="">  <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="" /> </a>  </div> 
      </div>
    </div>
    {/* mid next part */}
    <div>

    </div>
    </div>
   
  )
}

export default Midsection
