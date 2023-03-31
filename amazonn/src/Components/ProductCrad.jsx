import { Box ,Center , HStack, Image, Stack , Text, VStack} from '@chakra-ui/react';
import React from "react";
// import { Link as RouterLink } from "react-router-dom";

function ProductCrad({ title, imageURL, price, stock,brand,color,gender}){
    return (
        <Center>
            {/* <RouterLink to={`/singleproduct/${id}`}> */}
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
                      </VStack>
                    </Stack>
                </Box>            
            {/* </RouterLink> */}
        </Center>
    )
}

export default ProductCrad;
