import React from 'react'


// import Seasonal from './Seasonal'
 
import "./Seasonal.css"
import Slider from 'react-slick';
import Midsection from './Midsection';
import Slider1 from './Slider1';
import Bottom from './Bottom';

// import Footer from './Footer';
import Seasonalpage from './Seasonalpage';

import Navbar1 from './Navbar1';
import Footer from './Footer';
// import Navbar from './Navbar';


function Home() {
  const data=[
    {
      image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51YnwLFQCCL._SX1500_.jpg",
      

    },
    {
      image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61PhyFJspPL._SX3000_.jpg",
     
    },
    {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71mcEBNGtNL._SX3000_.jpg",
       
      },
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71aJVWrz15L._SX3000_.jpg"

      },
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61l4i7aoY2L._SX3000_.jpg"
      },
      {
        image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61tjBFsRL+L._SX3000_.jpg"
      }
   
  ]

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
     <Navbar1/>
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
  <Midsection/>
  <Slider1 />
  <Bottom/>
 
<Footer/>  
  

   

 



 
    </div>
  )
}





export default Home 
