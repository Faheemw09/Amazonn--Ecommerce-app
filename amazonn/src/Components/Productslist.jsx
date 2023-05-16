import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {  getproductdata } from '../redux/Action';
import { Stack,HStack, Box, Heading, Container, Button,ButtonGroup, Spacer, Grid, GridItem, Select, Image, Flex, Center, Text, Square,} from '@chakra-ui/react';
import ProductCrad from './ProductCrad';
import { Sidebar } from './Sidebar';
import { useLocation, useSearchParams } from 'react-router-dom';

import Navbar1 from './Navbar1';


function Productslist() {
  const dispatch=useDispatch()
  const Location = useLocation()
    const product = useSelector((store)=>store.AdminReducer.products)
    const [searchParams] = useSearchParams();
    console.log(searchParams.getAll("brand"))

    let obj={
      params:{
        brand : searchParams.getAll("brand"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order"),
      }
    }
    
    
   
    useEffect(()=>{

        dispatch(getproductdata)

        dispatch(getproductdata(obj))


    },[Location.search])
    // console.log(product)
  return (
    <div>
      <Navbar1/>
        {/* ************************************* */}
    <div style={{border:"0px solid black",marginTop:'13%'}}>

    
    <Container maxW='100%'>
      <Flex >
        <Sidebar/>
  {/* **************************************************** */}
        {/* <Center w='80%' > */}
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
        {/* </Center> */}
      </Flex>
    </Container>
    <br/>
  </div>

  </div>
  )
}

export default Productslist
