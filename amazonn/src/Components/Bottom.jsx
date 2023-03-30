import { Center, Image, Box, Grid, Text, VStack ,Button} from '@chakra-ui/react'
import React from 'react'

const Bottom = () => {
  return (
    <div>
      <Center>
        <Image src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ee5a127f-6e1f-42c7-ac7a-a376a5a2310c.jpg" alt="err" />
      </Center>
      {/* below */}
      
      <Grid templateColumns='repeat(4, 1fr)'  gap={20}  mt='50px' >
        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
          <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Up to 40% off | Breakfast special</Text>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}  >
            <Box >
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_1_1x._SY116_CB616420261_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Tea & coffee</Text>
              </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_revised_1x._SY116_CB616418452_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>oats & muesli</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_3_1x._SY116_CB616420261_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>honey & spreads</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/GW_BTF/Desktop-QC_4_1x._SY116_CB616420261_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Pasta & noodles</Text>
            </Box>
          </Grid>
          <a href="/">See all offer</a>
        </Box>
        {/* ********* */}
        <Box  style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}> 
          <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Baby diapers & wipes at great prices</Text>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/CC_Rev1x._SY304_CB594433898_.jpg" alt="" />
          <a href="/">Explore all baby essentials</a>
        </Box>
        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}> 
          <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Rafta Rafta | starring Bhuvam Bam</Text>
          <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Tanisha/DeskCC-379x304_RaftaRafta._SY304_CB614618819_.jpg" alt="" />
          <a href="/">Watch for free | miniTv</a>
        </Box>
        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
          <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Up to 40% off | Breakfast special</Text>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_2_1x._SY116_CB616376703_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Tea & coffee</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_1_1x._SY116_CB616376703_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>oats & muesli</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_4_1x._SY116_CB616376703_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>honey & spreads</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/Desktop-QC-2_3_1x._SY116_CB616376703_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Pasta & noodles</Text>
            </Box>
          </Grid>
          <a href="/">See all offer</a>
        </Box>
        </Grid>

        {/* below */}
         <Grid templateColumns='repeat(4, 1fr)'  gap={20} mt='50px'  >
        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}} >
          <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Up to 40% off | Daily essentials</Text>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}  >
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_04_1x._SY116_CB616377481_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Health & household</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_01_1x._SY116_CB616377481_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Grocery essentials</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_03_1x._SY116_CB616377481_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>baby products</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/GW/QC/QC1_PC_Tile_02_1x._SY116_CB616377481_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Pet supplies</Text>
            </Box>
          </Grid>
          <a href="/">See all offer</a>
        </Box>
<Box style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
          <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Essentials for Expecting Mothers</Text>
          <Grid templateColumns='repeat(2, 1fr)' gap={6}  >
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Pregnancy_Supplements._SY116_CB667651395_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Pregnancy supplements</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_Sleep__Loungewear._SY116_CB667651395_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Maternity Sleep & Loungewear</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_pillows._SY116_CB667651395_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Maternity pillows</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_Skin_care._SY116_CB667651395_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Maternity Skin care</Text>
            </Box>
          </Grid>
          <a href="/">See more</a>
        </Box>
        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
          <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Up to 40% off | Breakfast special</Text>
          <Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_1x._SY116_CB662999955_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Gift for men</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_1x._SY116_CB662999955_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Gift for women</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_1x._SY116_CB662999955_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Gift for boys</Text>
            </Box>
            <Box>
              <Image w='110px' h='100px' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_1x._SY116_CB662999955_.jpg" alt="" />
              <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='12px'>Gift for girls</Text>
            </Box>
          </Grid>
          <a href="/">See more</a>
        </Box>
        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}> 
          <Text fontFamily="Amazon Ember,Arial,sansserif" fontSize='21px' fontWeight={700}>Bestsellers in Women's Indian Clothing</Text>
          <Image src="https://m.media-amazon.com/images/I/71T-yPIj-sL._AC_SY175_.jpg" alt="" />
          <p>MEERA FAB Women's Cotton Printed Blue Anarkali Kurta with Palazzo & Dupatta Set</p>
          <p>Rs.659</p>
        </Box>
        </Grid>
 <Center borderTop="1px solid grey"  mt='50px' borderBottom="1px solid grey" mb='20px'>
          <VStack mb='3px'>
          <p fontFamily="Amazon Ember,Arial,sansserif" fontSize='13px'>See personalized recommendations</p>
          <Button w='300px' h='30px' backgroundColor='#fed56e' borderRadius='5px' border='1px solid #fed56e'>Sign in</Button>
          <p fontFamily="Amazon Ember,Arial,sansserif" fontSize='10px'>New customer? Start here.</p>
          </VStack>
        </Center>
    </div>
  )
}

export default Bottom