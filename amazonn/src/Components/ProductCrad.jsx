import {
  Box, Card, CardBody, Heading, Center, HStack,
  Image, Stack, Text, ButtonGroup, CardFooter, Divider,
  Button,
  VStack
} from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import { Link, Link as RouterLink, useNavigate } from "react-router-dom";
import { cartdata } from '../redux/cartreducer/action';
import { useDispatch } from 'react-redux';


function ProductCrad({ id, title, imageURL, price, stock, brand, color, gender }) {
  const [query, setQuery] = useState("titanic");
  const dispatch = useDispatch()

  const carthandler = () => {

    dispatch(cartdata(id))

    alert("Product Added To Cart Successfully")

  }


  return (
    <Center>

      <Card 
        className='shado'
        maxW='sm' border={"0px solid red"} padding={"15px"}>
        <CardBody >
          <RouterLink to='/singleproduct/:id'>
          <Image
            src={imageURL}
            alt={title}
            borderRadius='lg'
            h={250} w={250}
          />
          buy
          </RouterLink>
          <Stack mt='6' spacing='3'>
            <Heading w={"100%"} fontSize={"10px"}>{title}</Heading>

            <Text>
              Brand: {brand}
            </Text>
            <Text> Color: {color} </Text>


            <HStack gap={"14px"} >
            <Text marginLeft={"10%"} fontSize={"18px"} color='blue.600' >Price: {price}</Text>
            <Text fontSize={"18px"} color='blue.600' >Stock: {stock}</Text>
            </HStack>

            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2' margin={"auto"}>
            <Button onClick={carthandler}
              variant='ghost'
              colorScheme='blue'
              borderRadius={"10px"}
              padding={"4px 6px"}
              fontSize={"18px"}
              color={"white"}
              backgroundColor={"#0000CD"}
              border={"0px solid red"}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>

        {/* <CardFooter>
          <ButtonGroup spacing='2' margin={"auto"}>
            <Button onClick={carthandler}
              variant='ghost'
              colorScheme='blue'
              borderRadius={"10px"}
              padding={"4px 6px"}
              fontSize={"18px"}
              color={"white"}
              backgroundColor={"#0000CD"}
              border={"0px solid red"}
            >
             Buy
            </Button>
          </ButtonGroup>
        </CardFooter> */}
      </Card>

    </Center>
  )
}

export default ProductCrad;
