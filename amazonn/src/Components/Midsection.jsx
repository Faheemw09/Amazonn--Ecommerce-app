import React from 'react'
import Slider1 from './Slider1'
// import {  NavLink } from "react-router-dom";
import {  Text} from '@chakra-ui/react'

 

function Midsection() {
  return (
    <div>
    <div className='om' style={{marginTop:"50px",width:"100%",display:"grid",gap:"20px",gridTemplateColumns:"repeat(4,1fr)"}}>
      <div>
        <div className='om1' style={{height:"490px"}}>
        <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Bluetooth Calling Smartwatch starts at ₹1,999</Text>
        <a href=""><img width="100px" src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg" alt="" /></a>
        <a href="">see more</a>
        </div>

      </div>
      
      <div   className='om1' style={{height:"490px"}}>
      <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Shop & Pay | Earn rewards daily</Text>
        <a href=""><img width="20%" src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" alt="" /></a>
        <a href="">Shop more</a>

      </div>
      <div  className='om1' style={{height:"490px"}}>
        <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Up to 70% off | Clearance store</Text>
     <a href=""> <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg" alt="" /> </a>
     <a href="">visit the store</a>

      </div>
      <div  className='om1' style={{height:"490px"}}>
       <div>
        <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Sign in for your best experience</Text>
       <a href=""> <button style={{ backgroundColor:"yellow",border:"2px solid yellow",marginTop:"30px",width:"200px",height:"40px"}}>Sign in securely</button> </a>
       </div>
       <div>  <a href="">  <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="" /> </a>  </div> 
      </div>
    </div>
    {/* mid next part */}
    <div style={{marginTop:"40px"}}>
      
   
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:"20px",width:"100%",marginTop:"200px",}}>
     
        <div>
          <a href=""><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81uFLciHKcL._AC_SY200_.jpg" alt="" /></a>
        </div>
        <div>
          <a href=""><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51RXzjrUmkL._AC_SY200_.jpg" alt="" /></a>

        </div>
        <div>
        <a href=""><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61x1rWx+J4L._AC_SY200_.jpg" alt="" /></a>
        </div>
        <div>
          <a href=""><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91C6slV1XGL._AC_SY200_.jpg" alt="" /></a>


        </div>
        <div>
          <a href=""><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61tJQVLMNCL._AC_SY200_.jpg" alt="" /></a>
        </div>
        <div>
          <a href=""><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81kLfkRGC2L._AC_SY200_.jpg" alt="" /></a>
        </div>
        <div>
          <a href=""><img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/519RgXY+lRL._AC_SY200_.jpg" alt="" /></a>

        </div>
       
      </div>

    </div>
    <div>
    

    </div>
    

    </div>
   
  )
}

export default Midsection
