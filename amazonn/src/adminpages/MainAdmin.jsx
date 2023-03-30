import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
  import React, { useState, useEffect, useContext } from "react";
  import { Link } from "react-router-dom";
  import {
    Box,
    Text,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
    Divider,
    HStack,
    Input,
    InputGroup,
    InputRightAddon,
    Dropdown,
    Icon,
  } from "@chakra-ui/react";
  import {
    MoonIcon,
    SunIcon,
    SearchIcon,
    ChevronDownIcon,
    DeleteIcon,
    EditIcon,
    StarIcon,
  } from "@chakra-ui/icons";
  import axios from "axios";
  // import {Link } from "react-router-dom"
  // import { Grid, GridItem ,Box,Button, Text,Image,Divider,Link,InputGroup,Input,InputRightAddon,Icon, SimpleGrid} from '@chakra-ui/react'
  import { Flex, Circle, Badge, chakra, Tooltip } from "@chakra-ui/react";
  import { FiShoppingCart } from "react-icons/fi";
  
import {useDispatch, useSelector} from "react-redux"
import { getAdmindata } from "../redux/Action";
const data = {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
 
  export const MainAdmin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    const [form,setForm]=useState("")
    const products=useSelector((store)=>{
        console.log(store.AdminReducer.products)
        return store.AdminReducer.products
    })
   const dispatch=useDispatch()
    useEffect(()=>{
      dispatch (getAdmindata)
    },[])
    const handelForm=()=>{

    }
   return(
    <div    style={{
        // border: "1px solid green",
        width: "1000px",
        margin: "auto",
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
      }}>
        <div   > 
           <Button   border= "1px solid gold" color={"black"} ref={btnRef}    backgroundColor="#fcec52" size="sm" colorScheme="teal" onClick={onOpen}>
            Add Product
          </Button>
          <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          w={"200px"}
          h={"1000px"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Add a Product</DrawerHeader>

            <DrawerBody>
              <Input
                m={"10px"}
                placeholder="title"
                onChange={(e) => setForm({ ...form, rname: e.target.value })}
                value={form.rname}
              />

              <Input
                m={"10px"}
                placeholder="price"
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                value={form.price}
              />

              <Input
                m={"10px"}
                placeholder="description"
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                value={form.address}
              />

              {/* <Input m={'10px'} placeholder='category'  onChange={(e)=>setForm({...form,category:e.target.value})}
              value={form.category}/> */}

              <Input
                m={"10px"}
                placeholder="imageUrl"
                onChange={(e) => setForm({ ...form, imgdata: e.target.value })}
                value={form.imgdata}
              />

              <Input
                m={"10px"}
                placeholder="rating"
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
                value={form.rating}
              />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handelForm}>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        </div>
      <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            // border: "1px solid red",
            gap: "20px",
            width: "1000px",
            margin: "auto",
            marginTop:"100px",
          }}
        >
          {products?.map((ele) => (
            <div key={ele.id}>
              {/* <Flex p={3} w="full"  > */}
              {/* <Link to={`/products/${ele.id}`}> */}
              <Box
                // bg={useColorModeValue('white', 'gray.800')}
                w="230px"
                h={"600px"}
                border="0.5px solid #E7EEFF"
                rounded="3PX"
                p={"10px"}
                //   shadow="sm"
              >
                {data.isNew && (
                  <Circle
                    size="10px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="red.200"
                  />
                )}

                <Image
                  w={"200px"}
                  h={"430px"}
                  pl={"30px"}
                  pt={"10px"}
                  src={ele.imageURL}
                //   alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                />

                <Box p="6">
                  <Box d="flex" alignItems="baseline">
                    {data.isNew && (
                      <Badge
                        rounded="full"
                        px="5"
                        fontSize="0.8em"
                        colorScheme="#DDF2DC"
                        mb={"10px"}
                      >
                        {ele.brand}
                      </Badge>
                    )}
                  </Box>
                  <Flex
                    mt="1"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box
                      fontSize="m"
                      // color={useColorModeValue('gray.500', 'gray.100')} mb={"15px"}
                      fontWeight="semibold"
                      as="h3"
                      lineHeight="tight"
                      isTruncated
                    >
                      {ele.title}
                    </Box>

                    {/* <Link to="/cart">
                      <Button
                        label="Add to cart"
                        bg="white"
                        placement={"top"}
                        color={"gray.800"}
                        fontSize={"1.2em"}
                      >
                        <chakra.a href={"#"} display={"flex"}>
                          <Icon
                            as={FiShoppingCart}
                            h={7}
                            w={7}
                            alignSelf={"center"}
                          />
                        </chakra.a>
                      </Button>
                    </Link> */}
                  </Flex>

                  <Flex justifyContent="space-between" alignContent="center">
                    <Box
                      alignItems="center"
                      border={"1px solid green"}
                      h={"30px"}
                      w={"60px"}
                      fontSize={"xl"}
                      borderRadius={"10px"}
                      bgColor={"#23BB75"}
                      color={"white"}
                    >
                      {ele.rating}<StarIcon color={"yellow"} size="0.5px"/>
                    </Box>
                    {/* <Rating rating={data.rating} numReviews={data.numReviews} rate={ProductCart.rat}/> */}
                    <Box
                      fontSize="xl"
                      // color={useColorModeValue('black')}fontWeight={"bold"}
                    >
                      <Box as="span" color={"black"} fontSize="xxl" ml={"20px"}>
                        ₹
                      </Box>
                      {ele.price}
                    </Box>
                    {/* <Link to={`/products/${id}`}>more info</Link> */}
                    {/* <Button ml={"10px"}
                    //  onClick={() => handelDelete(ele.id)}
                     >
                        
                      Delete
                    </Button> */}
                    <DeleteIcon color={"red"}/>
                    <EditIcon color={"red"}/>
                  </Flex>
                </Box>
              </Box>
              {/* </Link> */}

              {/* </Flex> */}
            </div>
          ))}
        </div>
    </div>

   )
  }
  export default MainAdmin