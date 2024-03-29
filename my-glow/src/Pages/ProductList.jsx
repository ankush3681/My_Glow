import { Box, Heading, Image, Text, Tag, Grid, Button,Flex, Spacer,useToast,Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useSearchParams,useLocation } from "react-router-dom";
import { get_products } from "../Redux/productReducer/action";
import { BsStarHalf,BsCart4 } from "react-icons/bs";
import { addToCart } from "../Redux/cartReducer/action";

const Products = () => {
    const [searchParam] = useSearchParams();
    const location = useLocation();
    const [page,setPage] = useState(1);
    const dispatch = useDispatch();
  const {isLoading,products } = useSelector((state) => {
    console.log(state.productReducer.isLoading);
    return state.productReducer;
  });
  const toast = useToast();


  const handleCart = (item) =>{



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

  const postObj = {
    params : {
      category:searchParam.getAll("category"),
      brand:searchParam.getAll("brand"),
      price:searchParam.getAll("price"),
      discount_gte:searchParam.getAll("discount_gte"),
      _sort:searchParam.get("order") && "price",
      _order:searchParam.get("order"),
    }
  }

  let count=false;

  useEffect(() => {
    dispatch(get_products(postObj));
  }, [location.search]);
  if(isLoading){
    return <Spinner
    thickness="4px"
    mt={"10rem"}
    ml={"30rem"}
    textAlign={"center"}
    justifyContent={"center"}
    speed="0.65s"
    emptyColor="gray.200"
    color="pink.500"
    size="xl"
  />

  }
  return (
    <Box w="70%" ml="4rem">
    <Box  >
      <Center color="red" mb={"5%"}>
        <Heading>Glow with my glow</Heading>
      </Center>
      <Grid templateColumns={{
        xl:"repeat(3,1fr)",
        md:"repeat(2,1fr)",
        base:"repeat(1,1fr)",
      }} gap={10}>
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
                <Text  noOfLines={1}>{item.title}</Text>
                <Text>{item.brand}</Text>
                <Tag
                  d={"inline"}
                  bg="white"
                  color="grey"
                  textDecoration="line-through"
                  fontSize={".8rem"}
                >
                  Rs.{Math.round( +item.price + +item.price*(+item.discount/100))}
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
                      <BsCart4/>
                       

                        
                        </Button>
                    <Spacer/>
                    <Button p={"1rem 2rem"}  bg="pink.100"> <Link to={`/product/${item.id}`}>Details</Link></Button>
                </Flex>
              </Box>
            );
          })}
      </Grid>
      <Center m={"2rem 1rem"}>
        <Button  bg="pink.100">Previous</Button>
        <Button  mr={"1rem"} ml={"1rem"}>{page}</Button>
        <Button  bg="pink.100">Next</Button>
      </Center>
    </Box>
    </Box>
  );
};

export default Products;
