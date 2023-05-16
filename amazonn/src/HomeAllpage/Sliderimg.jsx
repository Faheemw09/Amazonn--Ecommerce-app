import ReactCardSlider from 'react-card-slider-component';
import React from 'react'
import { Center } from '@chakra-ui/react';

const Sliderimg = () => {
    const slides = [
        { image: "https://m.media-amazon.com/images/I/41dgHDQs4RL._AC_SY200_.jpg",title:"Up to 31% off | Deal of the Day",description:"Gaming Laptops starting INR 49990/-", },
        { image: "https://m.media-amazon.com/images/I/61zroMjd9FL._AC_SY200_.jpg",title:"Up to 38% off | Deal of the Day",description:"Laptops starting @ INR 39999/-", },
        { image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31G1NouVxaL._AC_SY200_.jpg",title:"Up to 67% off | Deal of the Day",description:"Bestselling TWS from Boult Audio", },
        { image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31nXVvSk7GL._AC_SY200_.jpg",title:"Up to 56% off | Deal of the Day",description:"Lunch Offers from Earbuds", },
        { image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31nXVvSk7GL._AC_SY200_.jpg",title:"Up to 56% off | Deal of the Day",description:"Lunch Offers from Earbuds", },
        { image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31cQxf0GUeL._AC_SY200_.jpg",title:"Up to 31% off | Deal of the Day",description:"Lunch Offers", },
        { image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51eJq2jkOxL._AC_SY200_.jpg",title:"Up to 36% off | Deal of the Day",description:"Bestselling", },
        { image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91R5ZVI5s8L._AC_SY200_.jpg",title:"Up to 53% off | Deal of the Day",description:"Bestselling", },
        { image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31aamXCkilL._AC_SY200_.jpg",title:"Up to 35% off | Deal of the Day",description:"starting @ INR 39999/-", } ,
    ]
    return (
        <div w='100%' >
            <Center>
                <ReactCardSlider slides={slides} />
            </Center>
        </div>
    )
}

export default Sliderimg