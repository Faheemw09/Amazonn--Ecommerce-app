import { Image, Text, Button, Heading, CardBody,Stack, Card,Box, Center,UnorderedList,ListItem, Spacer, Flex } from '@chakra-ui/react';
import { useState, useEffect, } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//   import { Cartcontext } from "../context/Context";
import { Link as Reactlink, NavLink } from "react-router-dom"
import { useToast } from '@chakra-ui/react'
import Navbar from "./Navbar1";
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
  const toast = useToast()

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

  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://precious-bat-rugby-shirt.cyclic.app/products/${id}`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <Box marginTop={250}>
      <Center>
      <Box w='70%' borderWidth='1px' borderRadius='lg' overflow='hidden' marginBottom={30} >
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          border='1px solid black'
        >
          <Flex gap='20px'>
          <Image
            style={{ h:"100%",w: '50%', border:'0px solid black'}}
            src={data.imageURL}
            alt={data.title}
          />
            <Spacer/>
          <Stack>
            <CardBody>
              <Text  textAlign={"left"} fontFamily='commuter sans, Verdana' fontSize='28px' fontWeight='600' size='md'>{data.title}</Text>
              <Text size='sm' textAlign={"left"}>Brand-{data.brand}</Text>
              <Text size='sm' textAlign={"left"}>Color-{data.color}</Text>
              <Text py='2' textAlign={"left"}>Gender-{data.gender}</Text>
              {/* </CardBody> */}
              

              <br/>
              {/* </CardFooter> */}
              <Heading as='h4' size='md' textAlign={"left"}>PRODUCT DETAILS</Heading>
            <Text textAlign={"left"}>6 MONTH QUALITY GUARANTEE</Text>
            <Text fontSize='sm' fontStyle={"italic"} textAlign={"left"}>Product code: SHL0209BLK</Text>
            <Text fontSize='sm' textAlign={"left"}>Our Oxford shoes have all of the features of the much-loved traditional design, while keeping your comfort in mind. Crafted in England, the style is made from quality calf leather with a Goodyear welted construction for a breathable and long-lasting finish. Inside, we've added flexible leather insoles to put a spring in your step and EVA foam filler to mould to your feet. There's also a half-leather insock, which provides extra support with each step.</Text>
            </CardBody>
            <UnorderedList>
              <ListItem marginLeft={20} textAlign={"left"}>100% leather</ListItem>
              <ListItem marginLeft={20} textAlign={"left"}>100% leather lining with a half leather in sock</ListItem>
              <ListItem marginLeft={20} textAlign={"left"}>Lasted and finished in England</ListItem>
              <ListItem marginLeft={20} textAlign={"left"}>Goodyear welted construction</ListItem>
              <ListItem marginLeft={20} textAlign={"left"}>Leather soles with scalloped embossing to add comfort and flexibility</ListItem>
              <ListItem marginLeft={20} textAlign={"left"}>EVA foam filler moulds to your foot</ListItem>
              <ListItem marginLeft={20} textAlign={"left"}>Specialist shoe care products</ListItem>
            </UnorderedList>
          
          </Stack>
          </Flex>
        </Card>
      </Box>
    </Center>

        
{/* 
        <div style={{ marginTop: "5000px", display: "flex", width: "400px", height: "400px", margin: "auto", border: "1px solid grey", justifyContent: "space-between" }}>

          <div>
            <img src={data.imageURLURL} width="80%" />
          </div>
          <div>
            <p  > {data.brand}</p>
            <p >{data.title}</p>
            <p >{data.color}</p>
            <h3 > {data.gender}</h3>
          </div>

        </div> */}


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
          ) : (

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
      <Footer />
    </div>
  );
};

export default Singleproductpage;