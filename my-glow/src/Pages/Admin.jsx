import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
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
  Button,
} from "@chakra-ui/react";
import { postProduct } from "../Redux/productReducer/action";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const initialState = {
  image1: "",
  image2: "",
  image3: "",
  price: "",
  brand: "",
  category: "",
  rating: "",
  discount: "",
  title: "",
};

const Admin = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct(state));
    setState(initialState);
  };

  const handleEdit = ()=>{
    navigate("/delete")
  }

  return (
    <>
     
      <Center>
        <Box
          w="100%"
          h="70%"
          mt={"5%"}
          bgGradient="linear(to-r, green.200, yellow.500)"
          paddingBottom={"5%"}
         
        >
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"4"}
          
          >
            <Center    >
              <Heading
                as={"h1"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip={"text"}
                fontSize="6xl"
                fontWeight="extrabold"
                mt={"2%"}
                _hover={{
                  bgGradient: "linear(to-r, green.500, yellow.500)",
                }}
              >
                Admin Page
              </Heading>
            </Center>
            <FormControl  borderRadius={"10px"} boxShadow = {"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} w={"50%"} padding={"1rem"} bg={"white"}>
              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    paddingRight={"3.5%"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Title:
                  </FormLabel>

                  <Input
                    placeholder="Enter Product Title"
                 
                    name="title"
                    value={state.title}
                    onChange={handleChange}
                  ></Input>
                </Center>
              </Flex>

              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    paddingRight={"1%"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Image1:
                  </FormLabel>

                  <Input
                    placeholder="Enter Product Image url"
                 
                    name="image1"
                    value={state.image1}
                    onChange={(e) => handleChange(e)}
                  ></Input>
                </Center>
              </Flex>

              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    paddingRight={"1%"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Image2:
                  </FormLabel>

                  <Input
                    placeholder="Enter Product Image url"
                    
                    name="image2"
                    value={state.image2}
                    onChange={(e) => handleChange(e)}
                  ></Input>
                </Center>
              </Flex>

              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    paddingRight={"1%"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Image3:
                  </FormLabel>

                  <Input
                    placeholder="Enter Product Image url"
                 
                    name="image3"
                    value={state.image3}
                    onChange={(e) => handleChange(e)}
                  ></Input>
                </Center>
              </Flex>

              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    paddingRight={"3.1%"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Price:
                  </FormLabel>

                  <Input
                    placeholder="Enter Product Price"
                   
                    name="price"
                    value={state.price}
                    onChange={(e) => handleChange(e)}
                  ></Input>
                </Center>
              </Flex>

              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    paddingRight={"2.4%"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Brand:
                  </FormLabel>

                  <Input
                    placeholder="Enter Product Brand name "
                
                    name="brand"
                    value={state.brand}
                    onChange={(e) => handleChange(e)}
                  ></Input>
                </Center>
              </Flex>

              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Category:
                  </FormLabel>

                  <Input
                    placeholder="Enter Product Category"
                  
                    name="category"
                    value={state.category}
                    onChange={(e) => handleChange(e)}
                  ></Input>
                </Center>
              </Flex>

              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    paddingRight={"2%"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Rating:
                  </FormLabel>

                  <Input
                    value={state.rating}
                    onChange={(e) => handleChange(e)}
                    placeholder="enter the product rating"
                    name={"rating"}
                  
                  ></Input>
                </Center>
              </Flex>

              <Flex w="100%">
                <Center w="100%" gap="20px">
                  <FormLabel
                    fontSize={"3xl"}
                    as={"b"}
                    fontWeight={"650"}
                    paddingRight={"0.1%"}
                    bgClip={"text"}
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                  >
                    Discount:
                  </FormLabel>

                  <Input
                    placeholder="Enter Product Discount"
                
                    name="discount"
                    value={state.discount}
                    onChange={(e) => handleChange(e)}
                  ></Input>
                </Center>
              </Flex>
              <Center ml={"1%"} mt={"2%"} >
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  ml={"6%"}
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                >
                  {" "}
                  Add Product{" "}
                </Button>
                <Button
                  type="submit"
                  onClick={handleEdit}
                  ml={"6%"}
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                
                >
                  {" "}
                  Edit/Delete Product{" "}
                </Button>
              </Center>
            </FormControl>
          </VStack>
        </Box>
      </Center>
    
    </>
  );
};

export default Admin;
