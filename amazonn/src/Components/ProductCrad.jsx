import { Box ,Center , HStack, Image, Stack , Text, VStack} from '@chakra-ui/react';
import React, { useEffect } from "react";
import {  Link as RouterLink, useNavigate } from "react-router-dom";
import { cartdata } from '../redux/cartreducer/action';
import { useDispatch } from 'react-redux';


function ProductCrad({id, title, imageURL, price, stock,brand,color,gender}){
  const dispatch=useDispatch()
  
  const carthandler=()=>{
    dispatch(cartdata(id))
    alert("product added succesfully")
   
  }
    return (
        <Center>
           
                <Box style={{ border:"0px solid black",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",fontFamily:"Amazon Ember,Arial,sansserif" }}>
                    <Image src={imageURL} h={300} w={250} alt={title}/>
                    <Stack>
                      <VStack>
                      <HStack>
                        {/* <label>Title:</label> */}
                        <Text>{title}</Text>
                      </HStack>
                      <HStack>
                        <label>Brand:</label>
                        <Text>{brand}</Text>
                      </HStack>
                      <HStack>
                        <label>Color:</label>
                        <Text>{color}</Text>
                      </HStack>
                      <HStack>
                        <label>Gender:</label>
                        <Text>{gender}</Text>
                      </HStack>
                      <HStack>
                        <label>₹:</label>
                        <Text>{price}</Text>
                      </HStack>
                      <HStack>
                        <label>Stock:</label>
                        <Text>{stock}</Text>
                      </HStack>
                      <HStack>
                      
                      <button onClick={carthandler} style={{color:"green",backgroundColor:"black",fontSize:"20px"}}>Add to Cart</button>
                      </HStack>
                      </VStack>
                    
                    </Stack>
                </Box>            
           
            
        </Center>
    )
}

export default ProductCrad;
