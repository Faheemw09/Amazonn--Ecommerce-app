import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
  width:'100%',
  border:'1px solid white',
}
const slideImages = [
  {url: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_24/3471173/210507-amazon-climate-pledge-bd-2x1.jpg',
 
},
  {url: 'https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/MayART/Herotators/2._CB591212142_.png',
   
  },
  {url: 'https://cdn.shopify.com/s/files/1/1150/2764/articles/Blog-Banner-for-graphics_89.jpg?v=1675412147&width=2880',
},
  {url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/pricepointstore/clothing/199/under-199-desktop-header.jpg',
    
  },
];

export const Slideshow = () => {
    return (
      <DIV className="slide-container">
        
        <Slide height="10px"  >
         {slideImages.map((el, index)=> (
            <div className='hhhh' key={index} >
              <div  style={{ ...divStyle, 'backgroundImage': `url(${el.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </DIV>
    )
}

const DIV = styled.div`
    border:0px solid black;
    width:100%;
   height:auto;
    margin-top:30px;
    margin:auto;

  @media (max-width: 710px){
     width:100%;
}
`;