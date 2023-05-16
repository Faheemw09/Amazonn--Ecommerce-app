import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { Flex, Text, Spacer, Heading, Image, Input, IconButton, Center, MenuButton, MenuList, MenuItem, Menu, Button, Icon } from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import Logo from "../Logo/Amazonnn.png";
import { useState } from "react";
import Login from "./Login";



const Navbar1 = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  return (

    <div style={{ position: "fixed", top: "0px", zIndex: "4", width: "100%", paddingRight: "200px" }}>
            <DIV className="navbar">
          <Flex className="nav" style={{ h: '200px' }}>
            <Spacer />
            <Heading color="white" >
              <RouterLink style={{ border: "0px solid red", textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }} to={"/"}><Image w='150px' h='100px' src={Logo} alt="logo" /></RouterLink>
            </Heading>
            <Spacer />
            <RouterLink to="/" style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>
              <Text pt='40px'>Hello
                <Image w={20} h={20} ml={"10px"} src="https://www.citypng.com/public/uploads/small/11640206702gwyntgag5ikumzv8fytamqyv08imfehftxehrblnsprslnjogpcsdunagbrekcqn9embe3tcziupboj71qeqtvtijxccdsfihnec.png" alt="location" />
                <br/>
                Select your address</Text>
            </RouterLink>
            <Spacer />
            <Center >
              <Flex h='60px'>
                <Menu>
                  <MenuButton as={Button} h='50px'
                   borderRadius={"10px"} 
                    rightIcon={<ChevronDownIcon />}>
                    All
                  </MenuButton>

                  <MenuList>
                    <MenuItem><RouterLink style={{ textDecoration: 'none', color: "black", fontFamily: "Amazon Ember,Arial,sansserif" }} to="/">Alexa Skills</RouterLink></MenuItem>
                    <MenuItem><RouterLink style={{ textDecoration: 'none', color: "black", fontFamily: "Amazon Ember,Arial,sansserif" }} to="/">Amazonn Devices</RouterLink></MenuItem>
                    <MenuItem><RouterLink style={{ textDecoration: 'none', color: "black", fontFamily: "Amazon Ember,Arial,sansserif" }} to="/">Amazonn Fashion</RouterLink></MenuItem>
                    <MenuItem><RouterLink style={{ textDecoration: 'none', color: "black", fontFamily: "Amazon Ember,Arial,sansserif" }} to="/">Amazonn Fresh</RouterLink></MenuItem>
                    <MenuItem><RouterLink style={{ textDecoration: 'none', color: "black", fontFamily: "Amazon Ember,Arial,sansserif" }} to="/">Baby</RouterLink></MenuItem>
                    <MenuItem><RouterLink style={{ textDecoration: 'none', color: "black", fontFamily: "Amazon Ember,Arial,sansserif" }} to="/">Beauty</RouterLink></MenuItem>
                  </MenuList>
                  <Input   placeholder='Search Amazon.in'
      w='600px'
      h='40px'
      borderRadius='10px'
      value={query}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
     ></Input> 
                  
                  
                  <IconButton
                  h='50px'
                   borderRadius={"10px"} 
                    w='40px'
                   
                    color='black'
                    backgroundColor={"#febd69 "}
                    aria-label='Search database'
                    icon={<SearchIcon />}
                  />
                </Menu>
              </Flex>
            </Center>
            <Spacer />
            <Text style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }} ><Text pt='32px'>EN</Text></Text>
            <Spacer />
                   <Login></Login>
            <Spacer />
            <Text style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}><Text pt='30px'>Returns<br /> & Order</Text></Text>
            <Spacer />
            <Text><RouterLink to={"/cart"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}><Image w={60} h={60} pt='35px' src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-2.jpg" alt="cart" /></RouterLink></Text>
            <Spacer />


            <Text><RouterLink to={"/mainadmin"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}><Text pt='40px'>Admin</Text></RouterLink></Text>


          </Flex>
          <Flex className="nav1">
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}><Icon as={HamburgerIcon} />All</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Amazon miniTV</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Best Sellers</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Mobiles</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Today's Deals</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Customer Service</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Electronics</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Prime</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>New Releases</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Amazon Pay</RouterLink></Text>
            <Spacer />
            <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color: "white", fontFamily: "Amazon Ember,Arial,sansserif" }}>Home & Kitchen</RouterLink></Text>
            <Spacer />
            <Spacer />
            <RouterLink to={"/"}><img src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/SWM_400x39_HUNTER_V2B._CB594119856_.jpg" alt="hunter" /></RouterLink>
            <Spacer />
          </Flex>
        </DIV>
      </div>

  )
}

export default Navbar1;

const DIV = styled.div`
  border:0px solid red;
  .nav {
    border:0px solid red;
    background-color:black;
    }
  .nav1{
    background-color: #131921;
  }

  .htwostyle{
    color:white;
    font-size:11px;
  }
  .search{
    border:2px solid red;
    height:50px;
    width:50%;
  }
 `;




