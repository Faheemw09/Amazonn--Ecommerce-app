import React from 'react'
import "./Slider1.css"
import Slider from 'react-slick';
import Seasonalpage from './Seasonalpage';
// import Midsection from './Midsection';



function Slider1() {
  const data=[
    {
      image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/410iWt8d79L._AC_SY200_.jpg",
      

    },
    {
      image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41o3CoW58tL._AC_SY200_.jpg",
     
    },
    {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31G1NouVxaL._AC_SY200_.jpg",
       
      },
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31nXVvSk7GL._AC_SY200_.jpg"

      },
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31nXVvSk7GL._AC_SY200_.jpg"
      },
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31cQxf0GUeL._AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51eJq2jkOxL._AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91R5ZVI5s8L._AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31aamXCkilL._AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61QQtY6qtHL._AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31KRYCWp9NL._AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51glIKSbssL._AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31YW3+kpZQL._AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51kdwtY1KvL._SX300_SY300_QL70_FMwebp__AC_SY200_.jpg"
      }
      ,
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51eJq2jkOxL._AC_SY200_.jpg"
      }
   
   
   
   
   
  ]

 
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive:[
      {
        
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className='slider'>
     
    <Slider {...settings}>
   
   {
    data.map((e,index)=>(
     <Seasonalpage key={index}

     image={e.image} 
    
    
     
     />
    ))
   } 
   </Slider>
  {/* mid section   ..............* */}
 
  
    </div>
  )
}





export default Slider1 
