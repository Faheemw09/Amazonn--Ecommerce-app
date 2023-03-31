import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { Flex, Text, Spacer, Heading, Image, Input, IconButton, Center, MenuButton, MenuList, MenuItem, Menu, Button,Icon } from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon,HamburgerIcon } from '@chakra-ui/icons';
import Logo from "../Logo/Amazonnn.png";

 const Navbar = () => {
  return (
    <div style={{position:"fixed",top:"0px",zIndex:"4",width:"100%",paddingRight:"200px"}}>
    <DIV className="navbar">
      <Flex className="nav" style={{h:'200px'}}>
        <Spacer />
        <Heading color="white" >
          <RouterLink style={{ border:"0px solid red",textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }} to={"/"}><Image w='150px' h='100px' src={Logo} alt="logo" /></RouterLink>
        </Heading>
        <Spacer />
        <RouterLink to="/" style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>
          <Text pt='40px'>Hello<br />
            <Image w={20} h={20} src="https://www.citypng.com/public/uploads/small/11640206702gwyntgag5ikumzv8fytamqyv08imfehftxehrblnsprslnjogpcsdunagbrekcqn9embe3tcziupboj71qeqtvtijxccdsfihnec.png" alt="location" />
            Select your address</Text>
        </RouterLink>
        <Spacer />
        <Center >
          <Flex h='60px'>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                All
              </MenuButton>
              <RouterLink to="/mainadmin">
              
              </RouterLink>
              <MenuList>
                <MenuItem><RouterLink style={{ textDecoration: 'none', color:"black",fontFamily:"Amazon Ember,Arial,sansserif" }} to="/">Alexa Skills</RouterLink></MenuItem>
                <MenuItem><RouterLink style={{ textDecoration: 'none', color:"black",fontFamily:"Amazon Ember,Arial,sansserif" }} to="/">Amazonn Devices</RouterLink></MenuItem>
                <MenuItem><RouterLink style={{ textDecoration: 'none', color:"black",fontFamily:"Amazon Ember,Arial,sansserif" }} to="/">Amazonn Fashion</RouterLink></MenuItem>
                <MenuItem><RouterLink style={{ textDecoration: 'none', color:"black",fontFamily:"Amazon Ember,Arial,sansserif" }} to="/">Amazonn Fresh</RouterLink></MenuItem>
                <MenuItem><RouterLink style={{ textDecoration: 'none', color:"black",fontFamily:"Amazon Ember,Arial,sansserif" }} to="/">Baby</RouterLink></MenuItem>
                <MenuItem><RouterLink style={{ textDecoration: 'none', color:"black",fontFamily:"Amazon Ember,Arial,sansserif" }} to="/">Beauty</RouterLink></MenuItem>
              </MenuList>
              <Input placeholder='Search Amazonn.in' w='600px'  h='55px'/>
              <IconButton
                // size='sm'
                w='40px'
                h='60px'
                color='black'
                backgroundColor={"#febd69 "}
                aria-label='Search database'
                icon={<SearchIcon />}
              />
            </Menu>
          </Flex>
        </Center>
        <Spacer />
        <Text><RouterLink to={"/country"} style={{ textDecoration: 'none', color:"white" ,fontFamily:"Amazon Ember,Arial,sansserif"}}><Text pt='40px'>EN</Text></RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/login"}  style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>
        <Image w={60} h={60} pt='35px' src="https://thumbs.dreamstime.com/b/user-icon-isolated-black-background-simple-vector-logo-161936729.jpg" alt="login" /></RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/order"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}><Text pt='30px'>Returns<br/> & Order</Text></RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/cart"} style={{ textDecoration: 'none', color:"white" ,fontFamily:"Amazon Ember,Arial,sansserif"}}><Image w={60} h={60} pt='35px' src="https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-2.jpg" alt="cart" /></RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/admin"} style={{ textDecoration: 'none', color:"white" ,fontFamily:"Amazon Ember,Arial,sansserif"}}><Text pt='40px'>Admin</Text></RouterLink></Text>
        
      </Flex>
      <Flex className="nav1">
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}><Icon as={HamburgerIcon} />All</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Amazon miniTV</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Best Sellers</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Mobiles</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Today's Deals</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Customer Service</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Electronics</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Prime</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>New Releases</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Amazon Pay</RouterLink></Text>
        <Spacer />
        <Text><RouterLink to={"/product"} style={{ textDecoration: 'none', color:"white",fontFamily:"Amazon Ember,Arial,sansserif" }}>Home & Kitchen</RouterLink></Text>
        <Spacer />
        <Spacer />
        <RouterLink to={"/"}><img src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/SWM_400x39_HUNTER_V2B._CB594119856_.jpg" alt="hunter" /></RouterLink>
        <Spacer />
      </Flex>
    </DIV>
    </div>
  )
}
export default  Navbar

const DIV = styled.div`
  border:0px solid black;
  .nav {
    border:0px solid red;
    background-color:black;
    }
  .nav1{
    background-color: #131921;
  }
`;