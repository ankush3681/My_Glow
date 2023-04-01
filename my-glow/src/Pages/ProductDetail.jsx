import { Flex,Box,Image,Center, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
   const {id}=useParams();
   const [data,setData] = useState("");
    const product = useSelector((state)=> state.productReducer.products)

    // console.log(product);
    // console.log(id);
    useEffect(()=>{
      const val = product.find((el)=>el.id === +id)
      setData(val);
    },[])
    console.log(data);
    
    return (
      <Box mt="5%">
    <Flex w={"85%"} m="auto" my="2%" h="600px" border={"1px solid red"} p="1rem">
      <Box w="15%" border={"1px solid black"}>
        <Center>
          <Image src="1"/>
          <Image src="2"/>
          <Image src="3"/>
        </Center>
      </Box>
      <Box w="30%" border={"1px solid blue"}>

      </Box>
      <Box w="60%" border={"1px solid green"}></Box>
    </Flex>
    <Flex w="100%" bg="white" h="5rem" pos="fixed" bottom="0">
      <Box w="49%" border="1px solid red"></Box>
      <Box w="49%" border="1px solid green"></Box>
    </Flex>
    </Box>
  )
}
