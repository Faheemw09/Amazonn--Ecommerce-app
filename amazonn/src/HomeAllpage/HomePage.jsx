import React from 'react'
import { Slideshow } from './Slideshow'
import Bodytwo from './Bodytwo'
import { Center,Image } from "@chakra-ui/react";
import Sliderimg from './Sliderimg';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import Bodythree from './Bodythree';
import Bodyfour from './Bodyfour';



const HomePage = () => {
  return (
    <div>
       <Navbar1></Navbar1>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
              
      <Slideshow/>
      <br/>
      <Bodytwo/>
      <br/>
      <Center>
        <Image src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ee5a127f-6e1f-42c7-ac7a-a376a5a2310c.jpg" alt="err" />
      </Center>
      <br/>
      <br/>
      <Sliderimg/>
      <br/>
      <Bodythree/>
      <br/>
      <Bodyfour/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default HomePage;