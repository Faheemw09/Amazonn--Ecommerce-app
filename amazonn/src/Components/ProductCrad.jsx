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
                    <Image src={imageURL} h={250} w={250} alt={title} mt={"5px"}/>
                    <Stack>
                      <VStack>
                      <HStack>
                        {/* <label>Title:</label> */}
                        <Text>{title}</Text>
                      </HStack>
                      <HStack>
                       
                        <Text>{brand}</Text>
                        <Text>{color}</Text>
<Text>{gender}</Text>
                        <label>₹:</label>
                        <Text>{price}</Text>
                      </HStack>
                      <HStack>
                        
                        {/* <Text>{color}</Text> */}
                      </HStack>
                      <HStack>
                        
                        
                      </HStack>
                      <HStack>
                       
                      </HStack>
                      <HStack>
                        <label>Stock:</label>
                        <Text>{stock}</Text>
                        <button onClick={carthandler} style={{color:"#F25757",backgroundColor:"#D0D1FF",fontSize:"15px",border:"0px"}}>Add to Cart</button>
                      </HStack>
                      <HStack>
                      
                  
                      </HStack>
                      </VStack>
                    
                    </Stack>
                </Box>            
           
            
        </Center>
    )
}

export default ProductCrad;
