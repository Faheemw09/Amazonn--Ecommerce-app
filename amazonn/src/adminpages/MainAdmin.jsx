import axios from "axios"
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
    ArrowDownIcon,
    ArrowUpIcon,
  } from "@chakra-ui/icons";

  // import {Link } from "react-router-dom"
  // import { Grid, GridItem ,Box,Button, Text,Image,Divider,Link,InputGroup,Input,InputRightAddon,Icon, SimpleGrid} from '@chakra-ui/react'
  import { Flex, Circle, Badge, chakra, Tooltip } from "@chakra-ui/react";
  import { FiShoppingCart } from "react-icons/fi";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  
import {useDispatch, useSelector} from "react-redux"
import { deleteproduct, getAdmindata } from "../redux/Action";
const data = {
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
 


    // const { isOpen, onOpen, onClose } = useDisclosure()
 
  export const MainAdmin = () => {
//     const {  onOpen }= useDisclosure()
//     const [isOpen, setIsOpen] = useState(false);

//   const onClose = () => setIsOpen(false);

  const onDeleteClick = () => {
    setIsOpen(true);
  };

  const onDeleteConfirmed = () => {
    // Perform delete operation here
    console.log("Deleted!");
    onClose();
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const btnRef = React.useRef();

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handledelete=(id)=>{
    if (window.confirm('Are you sure you want to delete this product?')) {
        dispatch(deleteproduct(id));
      }
  }


 
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
    <>
    <Box style={{width:'850px' ,margin:'auto' 
    ,height:'100px' ,display:'flex',justifyContent:'space-evenly', marginTop:'40px'}}
   
    >

    <Button value ="dsec"  bg={'#FBC02D'}  m={'20px'} >Price (High to Low) <ArrowDownIcon/> </Button>
    <Button value ="asc"  bg={'#FBC02D'}  m={'20px'} mr={'15px'} >Price (Low to High) <ArrowUpIcon/></Button>

    <Button mt={'20px'} fontSize={'20px'} fontWeight={'900'} mr={'15px'} bg={'#FBC02D'} p={'15px'}>Total Products : </Button>

<Link to="/addproduct">
      <Button  ref={btnRef} mt={'20px'} colorScheme='teal' bg={'#FBC02D'} color="black" >
      Add Products 
      </Button>
      </Link>
      
     
      <Button value ="dsec"  bg={'#E53935'} color={"white"}  m={'20px'}  >Logout</Button>
    
{/*     
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        w={'100px'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add Products Here ...</DrawerHeader>

          <DrawerBody >
            <Input m={'10px'} placeholder='title'  onChange={(e)=>setForm({...form,title:e.target.value})}
            value={form.title}/>

            <Input m={'10px'} placeholder='price'  onChange={(e)=>setForm({...form,price:e.target.value})}
            value={form.price}/> 

            <Input m={'10px'} placeholder='description'  onChange={(e)=>setForm({...form,description:e.target.value})}
            value={form.description}/>

            <Input m={'10px'} placeholder='category'  onChange={(e)=>setForm({...form,category:e.target.value})}
            value={form.category}/>

            <Input m={'10px'} placeholder='imageUrl'  onChange={(e)=>setForm({...form,image:e.target.value})}
            value={form.image}/> 

            <Input m={'10px'} placeholder='rating'  onChange={(e)=>setForm({...form,rating:e.target.value})}
            value={form.rating}/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' bg={'#FBC02D'} onClick={handelForm}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
     */}
    </Box>

    <div>

    <Box style={{display:'grid' , gridTemplateColumns:"repeat(4,1fr)" ,gap:'20px' ,width:'1000px' ,margin:'auto'}}>
    {products?.map((ele)=>

      <div key={ele.id} >
         {/* <Flex p={3} w="full"  > */}
        {/* <Link to={`/products/${ele.id}`}> */}
        <Box 
          // bg={useColorModeValue('white', 'gray.800')}
          w="230px"
          h={"350px"}
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
            w={"200px"} h={"180px"} pl={"30px"} pt={"10px"}
            src={ele.imageURL}
            alt={`Picture of ${data.title}`}
            roundedTop="lg"
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="5" fontSize="0.8em" colorScheme="#DDF2DC" mb={"10px"}>
                 {ele.brand}
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="m"
                // color={useColorModeValue('gray.500', 'gray.100')} mb={"15px"} 
                color={('gray.500', 'gray.500')}
                p={'10px'}
                fontWeight="semibold"
                as="h3"
                lineHeight="tight"
                isTruncated>
                {ele.title}
              </Box>

             
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
     <Box alignItems="center"
      h={"25px"} w={"90px"} fontSize={"sm"} borderRadius={"5px"} 
      bgColor={"#D4EFDF"} color={"black"}>
        {ele.rating}
        <StarIcon height={'10px'} color={'#FBC02D'} />
      </Box>
              {/* <Rating rating={data.rating} numReviews={data.numReviews} rate={ProductCart.rat}/> */}
              <Box fontSize="xl" 
              // color={useColorModeValue('black')}fontWeight={"bold"} 
              >
                <Box as="span" color={'black'} fontSize="xxl" ml={'10px'} >
                ₹
                </Box>
                {ele.price}
              </Box>
              {/* <Link to={`/products/${id}`}>more info</Link> */}
              <Button ml={'15px'} bg="#EC7063" fontSize={'13px'} height={'25px'} color={'white'} onClick={()=>handledelete(ele.id)} ><DeleteIcon/></Button>
              <Link to={`/editproduct/${ele.id}`}> 
              <Button ml={'15px'} bg="#EC7063" fontSize={'13px'} height={'25px'} color={'white'} > < EditIcon/></Button> 
              </Link>
            </Flex>
            
          </Box>
          
        </Box>
        {/* </Link> */}
        
      {/* </Flex> */}
       </div>
   
    )}
   </Box>  

    {/* <Pagination page={page} handelPage={handelPage} lastPage={lastPage}/> */}
    </div>
    </>
   )
  }
  export default MainAdmin