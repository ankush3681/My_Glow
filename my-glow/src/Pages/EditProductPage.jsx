import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchProduct } from "../Redux/productReducer/action";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const initialState = {
  id: "",
  brand: "",
  category: "",
  discount: "",
  image1: "",
  image2: "",
  image3: "",
  price: "",
  rating: "",
  title: "",
};

const EditProductPage = () => {
  const dispatch = useDispatch();

  const store = useSelector((store) => store.productReducer.singleproduct);

  console.log(store);
  const [state, setState] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    dispatch(patchProduct(store.id, state)).then(() => {
      navigate(`/delete`);
    });
  };

  return (
    <Center>
        <Box w={"100%"}
        paddingBottom={"5%"}
         bgGradient="linear(to-r, green.200, yellow.500)"> 
         <Center>
          <Heading
            as={"h1"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
            mt={"7%"}
          >
            Edit Product Page
          </Heading>
        </Center>
        <Center> 
            
    
      <Box
        mt={"0.5%"}
        w={"50%"}
        gap={"20px"}
        boxShadow = {"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}
    
        bg={"white"}
        padding={"1rem"}
      >
        
        <Flex gap={"1%"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
            mb={"2px"}
          >
            Title :
          </Heading>
          <Input
            type="text"
            defaultValue={store.title}
            onChange={(e) => handleChange(e)}
            name="title"
            w={"80%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>
        <Flex gap={"1%"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
            mb={"2px"}
          >
            Id :
          </Heading>
          <Input
            type="number"
            value={store.id}
            onChange={(e) => handleChange(e)}
            name="id"
            w={"80%"}
            border={"1px solid  #FF0080"}
            ml={"4.9%"}
          ></Input>
        </Flex>

        <Flex gap={"20px"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Price :
          </Heading>
          <Input
            type="text"
            defaultValue={store.price}
            onChange={(e) => handleChange(e)}
            name="price"
            w={"78%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>
        <Flex gap={"1%"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Brand :
          </Heading>
          <Input
            type="text"
            defaultValue={store.brand}
            onChange={(e) => handleChange(e)}
            name="brand"
            w={"77.2%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>
        <Flex gap={"20px"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Image1 :
          </Heading>
          <Input
            type="text"
            defaultValue={store.image1}
            onChange={(e) => handleChange(e)}
            name="image1"
            w={"73.5%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>
        <Flex gap={"20px"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Image2 :
          </Heading>
          <Input
            type="text"
            defaultValue={store.image2}
            onChange={(e) => handleChange(e)}
            name="image2"
            w={"73.5%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>

        <Flex gap={"20px"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Image3 :
          </Heading>
          <Input
            type="text"
            defaultValue={store.image3}
            onChange={(e) => handleChange(e)}
            name="image3"
            w={"73.5%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>
        <Flex gap={"20px"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
            
          >
            Ratings :
          </Heading>
          <Input
            type="number"
            defaultValue={store.rating}
            onChange={(e) => handleChange(e)}
            name="rating"
            w={"73%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>
        <Flex gap={"20px"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Discount :
          </Heading>
          <Input
            type="number"
            defaultValue={store.discount}
            onChange={(e) => handleChange(e)}
            name="discount"
            w={"70.4%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>
        <Flex gap={"20px"} alignItems={"center"} mt={"0.5%"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Category :
          </Heading>
          <Input
            type="text"
            defaultValue={store.category}
            onChange={(e) => handleChange(e)}
            name="category"
            w={"70.2%"}
            border={"1px solid  #FF0080"}
          ></Input>
        </Flex>

        

        

       

        

        

        <Center mt={"0.5%"}>
          <Button
            onClick={handleClick}
            p={4}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, teal.500, green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
          >
            Edit Product
          </Button>
        </Center>
      </Box>
      </Center>
      </Box>
    </Center>
  );
};

export default EditProductPage;
