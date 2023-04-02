import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Spinner,
    Link,
  } from "@chakra-ui/react";
  import { useState, useEffect,  } from "react";
  import axios from "axios";
  import { useParams } from "react-router-dom";
 
//   import { Cartcontext } from "../context/Context";
  import {Link as Reactlink, NavLink} from "react-router-dom"
  import { useToast } from '@chakra-ui/react'
import Navbar from "./Navbar";
import Footer from "./Footer";
  
  export const Singleproductpage = () => {
  
    // const [cart,setCart]=useState([])
    const [loading, setLoading] = useState(false);
    // console.log(cart)
    const [isInCart, setIsInCart] = useState(false);
  
 
    // const handelClick=()=>{
    //   setCart([...cart,{id,price,title}])
  
    // }
    // const Globalstate = useContext(Cartcontext);
    // const dispatch = Globalstate.dispatch
    const toast=useToast()
    
    const handleAddToCart = () => {
    //   dispatch({ type: "ADD", payload: data });
      setIsInCart(true);
      toast({
        title: '',
        description: "Item added to cart sucessfully!.",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
    };
    
    const [data,setData]=useState({})
    const {id}=useParams()
    useEffect(()=>{
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
  .then((res)=>{
    setData(res.data)
  setLoading(false)
  }).catch((err)=>{
    console.log(err)
    setLoading(false)
  })
    },[])
 
    return (
      <div>
        <Box>
          <Navbar/>
          {/* <h1>Singel Product Page</h1> */}
          <br/>
          <br/>
          <br/>
         
        
            <div  style={{marginTop:"250px" ,display:"flex",width:"400px",height:"400px",margin:"auto",border:"1px solid grey" ,justifyContent:"space-between"}}>
          
      <div>
       <img   src={data.imageURL} width="200px"/>
       </div>
       <div>
        <p  > {data.brand}</p>
        <p >{data.title}</p>
      <p >{data.color}</p>
        <h3 > {data.gender}</h3>
        </div>
      
          </div>
               
                
        <Box mt={"39px"}>
                 {isInCart ? (
                  <Reactlink to="/cart">
                  <Button
  
                    rounded={"none"}
                    w={"full"}
                    mt={5}
                    size={"lg"}
                    py={"7"}
                  
                    textTransform={"uppercase"}
                    backgroundColor="#fcec52"
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                   
                  >
                    Go to Cart
                  </Button>
                  </Reactlink>
                 ):( 
  
                  <Button
  
                  rounded={"none"}
                  w={"full"}
                  mt={5}
                  size={"lg"}
                  py={"7"}
                
                  textTransform={"uppercase"}
                  backgroundColor="#fcec52"
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  onClick={handleAddToCart}
                >
                 Add To Cart
                </Button>
  
                 )}
                 </Box>
                 
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"center"}
                    pt={"20px"}
                  >
                    <Text>Get Delivered With In 30min</Text>
                  </Stack>
                
           
        
        </Box>
        <Footer/>
      </div>
    );
  };
  
  export default Singleproductpage ;