import React from "react";
import { Box, Text, SimpleGrid, Flex, HStack } from "@chakra-ui/react";
import Bodytwocard from "./Bodytwocard";


const Bodytwo = () => {
    return (
        <Box
            fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
            mt={"70px"}
            mx={20}
        >
            <Flex marginY={"15px"} gap={5}>
                <Text fontSize={"24px"} fontWeight={"600"} lineHeight={"32px"}>
                    Smart Deals
                </Text>
            </Flex>

            <Box>
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                >
                    <Bodytwocard
                        src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg"
                        heading="Up to 70% off | Clearance store"
                        
                    />

                    <Bodytwocard
                        src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
                        heading="Sign in for your best experience"
                        
                    />

                    <Bodytwocard
                        src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                        heading="Shop & Pay | Earn rewards daily"
                        
                    />

                    <Bodytwocard
                        src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
                        heading="Bluetooth Calling Smartwatch starts at ₹1,999"
                        
                    />
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default Bodytwo;