import { Box, Heading, Image, Text, Tag, Grid, Button,Flex, Spacer,useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_products } from "../Redux/productReducer/action";
import { BsStarHalf,BsCart4,BsCart2 } from "react-icons/bs";
import { addToCart } from "../Redux/cartReducer/action";

const Products = () => {
    const [cartIcon,setCartIcon] = useState(false);
    const [page,setPage] = useState(1);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => {
    // console.log(state.productReducer.products);
    return state.productReducer;
  });
  const toast = useToast();

  const handleCart = (item) =>{
       setCartIcon(prev => !prev)

       toast({
        position:'top',
        title: 'Item Added.',
        description: "You can check your item in cart section.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })


      dispatch(addToCart({...item,quantity:1}))
     
  }

  let count=false;

  useEffect(() => {
    dispatch(get_products);
  }, []);
  return (
    <Box w="70%" ml="4rem">
    <Box  >
      <Heading color="red" mb={"5%"}>
        Glow with my glow
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={10}>
        {products.length !== 0 &&
          products.map((item) => {
            return (
              <Box
                key={item.id}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                textAlign="center"
                p={"1rem .5rem"}
                borderRadius="8px"
                lineHeight={"25px"}
              >
                <Image src={item.image1} height="15rem" m="auto" />
                <Text>{item.title}</Text>
                <Text>{item.brand}</Text>
                <Tag
                  d={"inline"}
                  bg="white"
                  color="grey"
                  textDecoration="line-through"
                  fontSize={".8rem"}
                >
                  Rs.200
                </Tag>
                <Tag d={"inline"} bg="white">
                  Rs.{item.price}
                </Tag>
                <Tag d={"inline"} bg="white" color="pink.300">
                  {item.discount}%Off
                </Tag>

                <Text>
                  {item.rating}{" "}
                  <Tag bg="white">
                    <BsStarHalf color="red" />
                  </Tag>
                </Text>

                <Flex w="90%" m="auto">
                    <Button fontSize="1.5rem"  bg="pink.100" onClick={()=>handleCart(item)}>
                        {
                            cartIcon ? <BsCart4/> : <BsCart2/>
                        }
                        
                        </Button>
                    <Spacer/>
                    <Button p={"1rem 2rem"}  bg="pink.100"> <Link to={`/product/${item.id}`}>Details</Link></Button>
                </Flex>
              </Box>
            );
          })}
      </Grid>
      <Box m={"2rem 1rem"}>
        <Button  bg="pink.100">Previous</Button>
        <Button  mr={"1rem"} ml={"1rem"}>{page}</Button>
        <Button  bg="pink.100">Next</Button>
      </Box>
    </Box>
    </Box>
  );
};

export default Products;
