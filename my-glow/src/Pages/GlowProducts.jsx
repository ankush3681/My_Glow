import { Box,Flex,Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import Products from './ProductList'
import Sidebar from '../Components/Sidebar'

const Myglow = () => {
  return (
    <Box>
      <Image w="90%" m="auto" my="1rem" src="https://d32baadbbpueqt.cloudfront.net/Collection/6fca01a2-8f3f-465b-a29b-7933fe0d4ccc.jpg"/>
    <Flex p="2rem">
      <Sidebar/>
      <Products/>
    </Flex>
    </Box>
  )
}

export default Myglow;
