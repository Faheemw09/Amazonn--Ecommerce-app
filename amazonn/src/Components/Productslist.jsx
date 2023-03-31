import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {  getproductdata } from '../redux/Action';
import { Stack,HStack, Box, Heading, Container, Button,ButtonGroup, Spacer, Grid, GridItem, Select, Image, Flex, Center, Text, Square,} from '@chakra-ui/react';
import ProductCrad from './ProductCrad';
import { Sidebar } from './Sidebar';
function Productslist() {
    const product=useSelector((store)=>store.AdminReducer.products)
    
    
    const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(getproductdata())

    },[])
    console.log(product)
  return (
    <div>
      <Center style={{marginTop:"200px",border:"0px solid blue"}}>
        <Image w='100%' h='300px' src="https://tricks.nayag.com/wp-content/uploads/2022/01/Amazon-Deal-of-the-Day-Today.jpg" alt="err" />
      </Center>
    {/* ************************************* */}
    <div style={{border:"0px solid black",marginTop:'6px'}}>

    
    <Container maxW='100%'>
      <Flex >
        <Sidebar/>
  {/* **************************************************** */}
        <Center w='80%' >
          <Grid templateColumns="repeat(4,1fr)" gap={10}>
            {product?.length &&
              product.map((el) => (
                <GridItem key={el.id}>
                  <ProductCrad
                    key={el.id} {...el} 
                  />
                </GridItem>
              ))}
          </Grid>
        </Center>
      </Flex>
    </Container>
    <br/>
  </div>

  </div>
  )
}

export default Productslist
