import React, { useState } from "react";

import {useDispatch} from "react-redux"
import {
  Center,
  Heading,
  Input,
  VStack,
  Box,
  StackDivider,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  HStack,
  Radio,
  RadioGroup,
  Button
} from "@chakra-ui/react";
import { postProduct } from "../Redux/productReducer/action";

const initialState = {
  image1:"",
  image2:"",
  image3:"",
  price:"",
  brand:"",
  category:"",
  rating:"",
  discount:"",
  title:""

}

 const Admin = () => {
 
  const [state,setState] = useState(initialState)
  const dispatch = useDispatch()


  const handleChange = (e)=>{
    setState({...state, [e.target.name]:e.target.value})
  }
  
  console.log(state)
 
  const handleSubmit = (e)=>{
    e.preventDefault()
     dispatch(postProduct(state))
    setState(initialState)
  }

  return (
    <>
      <Center>
        <Box w="100%" h="70%">
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"4"}
          >
            <Center>
              <Heading
                as={"h1"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip={"text"}
                fontSize="6xl"
                fontWeight="extrabold"
                _hover={{
                  bgGradient: "linear(to-r, green.500, yellow.500)",
                }}
              >
                Admin Page
              </Heading>
            </Center>
            <FormControl> 

            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"3.5%"}>Title:</FormLabel>

                <Input placeholder="Enter Product Title" w="30%" name="title" value={state.title} onChange={handleChange}></Input>
              </Center>
            </Flex>

            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"1%"}>Image1:</FormLabel>

                <Input placeholder="Enter Product Image url" w="30%" name ="image1" value={state.image1} onChange={(e)=>handleChange(e)}></Input>
              </Center>
            </Flex>


            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"1%"}>Image2:</FormLabel>

                <Input placeholder="Enter Product Image url" w="30%" name="image2" value={state.image2} onChange={(e)=>handleChange(e)}></Input>
              </Center>
            </Flex>


            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"1%"}>Image3:</FormLabel>

                <Input placeholder="Enter Product Image url" w="30%" name="image3" value={state.image3} onChange={(e)=>handleChange(e)}></Input>
              </Center>
            </Flex>

            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"}paddingRight={"3.1%"}>Price:</FormLabel>

                <Input placeholder="Enter Product Price" w="30%" name="price" value={state.price} onChange={(e)=>handleChange(e)}></Input>
              </Center>
            </Flex>


            <Flex w ="100%" >
            <Center w = "100%" gap="20px">
            <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"2.4%"}>Brand:</FormLabel>
           
            <Input placeholder="Enter Product Brand name " w= "30%" name="brand" value={state.brand} onChange={(e)=>handleChange(e)}></Input>
            </Center>
            </Flex>


            <Flex w ="100%" >
            <Center w = "100%" gap="20px">
            <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"}>Category:</FormLabel>
           
            <Input placeholder="Enter Product Category" w= "30%" name="category" value={state.category} onChange={(e)=>handleChange(e)}></Input>
            </Center>
            </Flex>


            <Flex w ="100%" >
            <Center w = "100%" gap="20px">
            <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"}>Rating:</FormLabel>
           
            <RadioGroup >
    <HStack spacing='24px' >
      <Radio value="0" name="rating" checked={state.rating===0} onChange={(e)=>handleChange(e)}>0</Radio>
      <Radio value='1' name="rating" checked={state.rating===1} onChange={(e)=>handleChange(e)}>1</Radio>
      <Radio value='2' name="rating" checked={state.rating===2} onChange={(e)=>handleChange(e)}>2</Radio>
      <Radio value='3' name="rating" checked={state.rating===3} onChange={(e)=>handleChange(e)}>3</Radio>
      <Radio value='4' name="rating" checked={state.rating===4} onChange={(e)=>handleChange(e)}>4</Radio>
      <Radio value="5" name="rating" checked={state.rating===5} onChange={(e)=>handleChange(e)}>5</Radio>
    </HStack>
  </RadioGroup>
            </Center>
            </Flex>
            <FormHelperText>Select the rating available for the product from the options given</FormHelperText>

            <Flex w ="100%" >
            <Center w = "100%" gap="20px">
            <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"0.1%"}>Discount:</FormLabel>
           
            <Input placeholder="Enter Product Discount" w= "30%" name="discount" value={state.discount} onChange={(e)=>handleChange(e)}></Input>
           
            </Center>
            </Flex>
            <Center> 
                         <Button type = "submit" onClick={handleSubmit}> Add Product </Button>
                         </Center>
            </FormControl>
          </VStack>
          
        </Box>
      </Center>
    </>
  );
};

export default Admin;