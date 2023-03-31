import React from 'react'
import { Box, Heading, Image, Text, Tag, Grid, Button,Flex, Spacer,useToast } from "@chakra-ui/react";
import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BsStarHalf,BsCart4,BsCart2 } from "react-icons/bs";

const ProductCard = ({image1,title,brand,price,discount,rating,id}) => {
    const [cartIcon,setCartIcon] = useState(false);
  return (

    <Box       
                // boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
                textAlign="center"
                p={"1rem .5rem"}
                borderRadius="8px"
                lineHeight={"25px"}
                background={'#FFEAEA'}
                margin='10px'
            
                // zIndex ='100'
              >

                <Image src={image1} height="15rem" m="auto" />
                <Text padding={'10px'}>{title}</Text>
                <Text padding={'10px'}>{brand}</Text>
                <Tag d={"inline"} bg="white">
                  Rs.{price}
                </Tag>
                <Tag d={"inline"} bg="white" color="pink.300">
                  {discount}%Off
                </Tag>

               

                <Flex w="90%" m="auto" padding={'10px'}>
                    <Button fontSize="1.5rem"  bg="pink.100">
                        {
                            cartIcon ? <BsCart4/> : <BsCart2/>
                        }
                        
                        </Button>
                    <Spacer/>
                    <Button p={"1rem 2rem"}  bg="pink.100"> <Link to={`/product/${id}`}>Details</Link></Button>
                </Flex>
              </Box>
  )
}

export default ProductCard