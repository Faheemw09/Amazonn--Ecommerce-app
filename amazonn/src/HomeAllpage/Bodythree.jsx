import React from "react";
import { Box, Text, SimpleGrid, Flex, HStack } from "@chakra-ui/react";
import Bodytwocard from "./Bodytwocard";


const Bodythree = () => {
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
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_4_1x._SY116_CB616420261_.jpg"
                        heading="Up to 40% off | Breakfast special"
                        
                    />

                    <Bodytwocard
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/CC_Rev1x._SY304_CB594433898_.jpg"
                        heading="Baby diapers & wipes at great prices"
                        
                    />

                    <Bodytwocard
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Tanisha/DeskCC-379x304_RaftaRafta._SY304_CB614618819_.jpg"
                        heading="Rafta Rafta | starring Bhuvam Bam"
                        
                    />

                    <Bodytwocard
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_3_1x._SY116_CB616376703_.jpg"
                        heading="Up to 40% off | Breakfast special"
                        
                    />
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default Bodythree;