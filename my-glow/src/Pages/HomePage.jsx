import React from 'react'
import './HomePage.css'
import Carousel from '../Components/Carousel/Carousel'
import Carousel1 from "../Components/Carousel/Carousel1"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Line from '../Components/Symbol/Line'
import Heading from '../Components/Symbol/Heading'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { get_products } from '../Redux/productReducer/action'
import ProductCard from '../Components/Cards/ProductCard'

const HomePage = () => {
   const dispatch = useDispatch()
  const { products } = useSelector((state) => {
    return state.productReducer;
  });
  
  useEffect(() => {
    dispatch(get_products);
  }, []); 

  console.log(products)

  return (
    <div>
      <Box className='carousel1-home'>
      <Carousel/>
      </Box>
      <Box backgroundImage={"https://wallpaperaccess.com/full/1326583.jpg"}>
          <Box className='prod-css' border='1px solid red' height={'auto'} display={'grid'} gridTemplateColumns={''} overflowX='scroll'>
{products.map((el)=><ProductCard key={el.id} title={el.title} image1={el.image1} price={el.price} discount={el.discount}  rating={el.rating} brand={el.brand}  />)}
          </Box>
      </Box>
      {/* <Heading head={'Ankit'} /> */}
      <Box display={'flex'} alignItems='center' margin={'auto'} marginLeft='25%'><Line/><Text fontSize='3xl' padding={'10px'} >TIPSY LIPS SCRUB + BALM DUO</Text><Line/></Box>
       <Box  
      height={'300px'}
      width={'80%'}
      margin={"auto"}
      marginTop={'10px'}
      marginBottom={'100px'}
      borderRadius={"10px"}

       >
      <img style={{borderRadius :'10px' ,height:'380px',width:"100%",objectFit:'cover'}} src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/0533d215-072d-46a6-a126-656aa10580fb.jpg&w=1920&q=75" alt="TIPSY LIPS SCRUB + BALM DUO" />
      </Box>
      <Text fontSize='3xl' padding={'10px'}  align='center' ></Text>
      <Box display={'flex'} alignItems='center' margin={'auto'} marginLeft='30%'><Line/><Text fontSize='3xl' padding={'10px'} >REFER YOUR FRIENDS</Text><Line/></Box>
      
      <Box 
      height={'280px'}
      width={'90%'}
      margin={"auto"}
      marginTop={'10px'}
      marginBottom={'10px'}
      borderRadius={"10px"}
       >
      <img style={{borderRadius :'10px'}}  src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8638d096-d168-404e-9b83-56967625b5e6.jpg&w=1920&q=75" alt="REFER YOUR FRIENDS" />
      </Box>
      {/* <Text fontSize='3xl' padding={'10px'}  align='center' >NEWLY LAUNCHED</Text> */}
      <Box display={'flex'} alignItems='center' margin={'auto'} marginLeft='30%'><Line/><Text fontSize='3xl' padding={'10px'} >NEWLY LAUNCHED</Text><Line/></Box>
      
      <Carousel1/>
    </div>
  )
}

export default HomePage
