import React from "react";
import { Box, Text, SimpleGrid, Flex, HStack } from "@chakra-ui/react";
import Bodytwocard from "./Bodytwocard";


const Bodyfour = () => {
    return (
        <Box
            fontFamily={"Open Sans, sans-serif, Arial, Helvetica"}
            mt={"70px"}
            mx={20}
        >
            {/* <Flex marginY={"15px"} gap={5}>
                <Text fontSize={"24px"} fontWeight={"600"} lineHeight={"32px"}>
                </Text>
            </Flex> */}

            <Box>
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                >
                    <Bodytwocard
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
                        heading="Create with strip lights"
                        
                    />

                    <Bodytwocard
                        src="https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/mp_20230210_newarrivals_desktopsinglecategory_desktop_379x304._SY304_CB613668625_.jpg"
                        heading="Spring new arrivals"
                        
                    />

                    <Bodytwocard
                        src="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/Holiday2022/Graphics/XCM_CUTTLE_1475305_2610205_379x304_1X_en_US._SY304_CB608600856_.jpg"
                        heading="Deals in Tools and Home Improvement"
                        
                    />

                    <Bodytwocard
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg"
                        heading="Shop Pet supplies"
                        
                    />
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default Bodyfour;