import { Stack, Heading, Input, Button, HStack, Text, Center, Image, Box, Flex, Spacer } from "@chakra-ui/react";

const  Footer=()=> {
    return (
        <>
            <HStack display='flex' border="1px solid black" justifyContent={"center"} backgroundColor="#666666"  height="49px">
                <Text  color='white' fontFamily="Amazon Ember,Arial,sansserif">Back to top</Text>
            </HStack>

            <Box borderBottom="1px solid grey" backgroundColor="#232f3e ">
                 <Center>
                 <Box border="0px solid blue" style={{
                display: "grid",
                fontFamily:"Amazon Ember,Arial,sansserif", 
                color:"white",
                gridTemplateColumns: "repeat(4,1fr)", 
                gap: (4), 
                width: "70%", 
                marginTop:"50px",
                marginBottom:"50px",
                // justifyContent:"center",
            }}>
                 <Stack align={'flex-start'}>
                    <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">Get to Know Us</Heading>
                    <Text fontSize="14px" lineHeight="16.8px">About us</Text>
                    <Text fontSize="14px" lineHeight="16.8px" >Careers</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Press Releases</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Amazon Science</Text>
                </Stack>

                <Stack align={'flex-start'}>
                    <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">Connect with Us</Heading>
                    <Text fontSize="14px" lineHeight="16.8px">Facebook</Text>
                    <Text fontSize="14px" lineHeight="16.8px" >Twitter</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Instagram</Text>
                </Stack>

                <Stack align={'flex-start'}>
                    <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">Make Money with Us</Heading>
                    <Text fontSize="14px" lineHeight="16.8px">Sell on Amazon</Text>
                    <Text fontSize="14px" lineHeight="16.8px" >Sell under AMAZON Accelerator</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Protect and Build Your Brand</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Amazon Global Selling</Text>
                    <Text fontSize="14px" lineHeight="16.8px" >Become an Affiliate</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Fulfilment by Amazon</Text>
                    <Text fontSize="14px" lineHeight="16.8px" >Advertise Your Products</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Amazon Pay on Merchants</Text>
                </Stack>

                <Stack align={'flex-start'}>
                    <Heading fontSize="16px" fontWeight={700} lineHeight="16.8px">Let Us Help You</Heading>
                    <Text fontSize="14px" lineHeight="16.8px">COVID-19 and Amazon</Text>
                    <Text fontSize="14px" lineHeight="16.8px" >Your Account</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Returns Centre</Text>
                    <Text fontSize="14px" lineHeight="16.8px">100% Purchase Protection</Text>
                    <Text fontSize="14px" lineHeight="16.8px" >Amazon App Download</Text>
                    <Text fontSize="14px" lineHeight="16.8px">Help</Text>
                </Stack>
                 </Box>
                 </Center>
            </Box>

            <Box borderBottom="1px solid grey" backgroundColor="#232f3e ">
                <Center>
                <Flex gap="20px">
                    <Image w="150px" h="60px" marginTop="30px" gap="20px" src="https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png" alt="amazon-logo"/>
                    <Button w="150px" h="60px" marginTop="30px" border="1px solid white" backgroundColor="#232f3e ">English</Button>
                </Flex>
                </Center>
                <Center>
                <Flex gap="10px" color="white">
                    <p>Australia</p>
                    <p>Brazil</p>
                    <p>Canada</p>
                    <p>China</p>
                    <p>France</p>
                    <p>Germany</p>
                    <p>Italy</p>
                    <p>Japan</p>
                    <p>Mexico</p>
                    <p>Netherland</p>
                    <p>Poland</p>
                    <p>Singapore</p>
                    <p>Spain</p>
                    <p>Turkey</p>
                    <p>UAE</p>
                    <p>United Kingdom</p>
                    <p>United State</p>
                </Flex>
                </Center>
            </Box>
           
        </>
    )
}

export default Footer;