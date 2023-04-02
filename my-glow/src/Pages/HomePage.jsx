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
import VedioCard from '../Components/Cards/VedioCard'


const ved =['https://cdn4.fireworktv.com/medias/2023/2/15/1676467336-znfotvci/watermarked/540/AquaholicHydratingFoundation-Vertical1.mp4','https://cdn4.fireworktv.com/medias/2023/2/22/1677050088-zqxukbth/watermarked/540/SUGARAutoCorrectCreaselessConcealerstory1.mp4','https://cdn4.fireworktv.com/medias/2023/3/20/1679293048-teunbshg/480_800/SUGAR-Goddess-of-flawless-BB-Serum-Thumbnail-Vertical.jpg.62.webp','https://cdn4.fireworktv.com/medias/2023/3/20/1679292549-gfedqpcr/watermarked/540/TipsyLips-ScrubBalmDuo-Vertical.mp4']
const mydata =[
  {
    "id": 31,
    "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-drop-the-base-serum-foundation-10-latte-light-warm-undertone-10959780806739.jpg?v=1619107905",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-drop-the-base-serum-foundation-10-latte-light-warm-undertone-10965228388435.jpg?v=1619107903",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-drop-the-base-serum-foundation-10-latte-light-warm-undertone-10959780937811.jpg?v=1619107907",
    "title": "Drop The Base Serum Foundation",
    "price": "765",
    "brand": "lakme",
    "category": "foundation",
    "rating": "3.7",
    "discount": "15"
  },
  {
    "id": 32,
    "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_84779037-e1a3-4f01-bf38-38e727208de4.jpg?v=1678725233",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/3_358339fb-c09f-4deb-9d60-1cc5a2b70707.jpg?v=1678725238",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/4_4c91e8d7-551e-4e59-81db-5a9f01d1f8c7.jpg?v=1678725240",
    "title": "Goddess Of Flawless BB Serum",
    "price": "699",
    "brand": "lakme",
    "category": "serum",
    "rating": "4.5",
    "discount": "21"
  },
  {
    "id": 33,
    "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_4d1e084b-e775-4009-a8cc-0aa6a0d2f3be.jpg?v=1678725254",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_9bc4c9c3-966c-4385-a209-794cb1ffda16.jpg?v=1678725256",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/4_e850db68-95ee-45c2-9547-1eb3d3cb1003.jpg?v=1678725260",
    "title": "MamaEarth Goddess Of Flawless BB Serum",
    "price": "789",
    "brand": "mamaearth",
    "category": "serum",
    "rating": "4.0",
    "discount": "7"
  },
  {
    "id": 34,
    "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_bb01e08f-60d9-4eff-bf10-dbf2aa97a919.jpg?v=1678972532",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/All-Shades.jpg?v=1678983691",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/07_a3a705d8-09c0-4c32-afd9-4542ba2e45a6.jpg?v=1678972532",
    "title": "Aquaholic Hydrating Foundation",
    "price": "884",
    "brand": "mamaearth",
    "category": "foundation",
    "rating": "2.9",
    "discount": "27"
  },
  {
    "id": 35,
    "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12794189971539.jpg?v=1619114613",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-12796404170835.jpg?v=1646226816",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-07-vanilla-latte-fair-14401666678867.jpg?v=1619114618",
    "title": "Goddess Of Flawless SPF30+ BB Cream",
    "price": "689",
    "brand": "lakme",
    "category": "serum",
    "rating": "4.5",
    "discount": "12"
  },
  {
    "id": 36,
    "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/3_db28afbb-f8ba-430b-9770-07120d38eb5e.jpg?v=1655817968",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_40b8d0b3-b672-41dd-8a98-e32a36421020.jpg?v=1655817968",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_970c1c21-0fc9-4a9b-98dc-43cebdc5f554.jpg?v=1640792528",
    "title": "Ace Of Face Foundation Stick",
    "price": "997",
    "brand": "mamaearth",
    "category": "foundation",
    "rating": "3.5",
    "discount": "10"
  },
  {
    "id": 37,
    "image1": "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11792357-8174592395842303.jpg",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-55-americano-medium-deep-14376522743891.jpg?v=1619114685",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-47-borgia-medium-tan-12794193477715.jpg?v=1619114672",
    "title": "Goddess Of Flawless SPF30",
    "price": "390",
    "brand": "lakme",
    "category": "serum",
    "rating": "3.9",
    "discount": "16"
  },
  {
    "id": 38,
    "image1": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F47.jpg%3Fv%3D1678972974&w=256&q=75",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_4f270025-cf6b-483b-bc1d-843b3d297364.jpg?v=1678972974",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_c88aae19-077d-4755-992e-7ef114e60df8.jpg?v=1678972974",
    "title": "SUGAR Aquaholic Hydrating Foundation - 47 Borgia",
    "price": "558",
    "brand": "mamaearth",
    "category": "foundation",
    "rating": "3.7",
    "discount": "5"
  },
  {
    "id": 39,
    "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-47-borgia-medium-tan-14376522383443.jpg?v=1619114673",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-47-borgia-medium-tan-14401667006547.jpg?v=1619114676",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-goddess-of-flawless-spf30-bb-cream-47-borgia-medium-tan-12794193477715.jpg?v=1619114672",
    "title": " Flawless SPF30+ BB Cream",
    "price": "334",
    "brand": "lakme",
    "category": "serum",
    "rating": "3.4",
    "discount": "11"
  },
  {
    "id": 40,
    "image1": "https://cdn.shopify.com/s/files/1/0906/2558/products/All-Shades_1de8f44f-66d1-4db7-9924-8f554ee66ddc.jpg?v=1678983720",
    "image2": "https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1640178644",
    "image3": "https://cdn.shopify.com/s/files/1/0906/2558/products/2_c88aae19-077d-4755-992e-7ef114e60df8.jpg?v=1678972974",
    "title": "Hydrating Foundation new",
    "price": "650",
    "brand": "mamaearth",
    "category": "foundation",
    "rating": "3",
    "discount": "8"
  },
  ]

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

      <Box display={'flex'} alignItems='center' margin={'auto'} marginLeft='30%'><Line/><Text fontSize='3xl' padding={'10px'} color={'white'} >BESTSELLERS</Text><Line/></Box>
      

          <Box className='prod-css' height={'auto'}  overflowX='scroll'>
{mydata.map((el)=><ProductCard key={el.id} title={el.title} image1={el.image1} price={el.price} discount={el.discount}  rating={el.rating} brand={el.brand}  />)}
          </Box>
      </Box>
      {/* <Box display={'flex'} alignItems='center' margin={'auto'} marginLeft='30%'><Line/><Text fontSize='3xl' padding={'10px'} >SUGAR STREAMING</Text><Line/></Box>
      <Box id='vediocard' className='ved-class'>
        <Box>
         </Box>
         <VedioCard srcs={ved[3]}/>
        <Box>
        <VedioCard srcs={ved[1]}/>
        </Box>
        <Box>
        <VedioCard srcs={ved[0]}/>
        </Box>
        <Box>
        <VedioCard srcs={ved[3]}/>
        </Box>
      </Box> */}
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
      <Box display={'flex'} alignItems='center' margin={'auto'} marginLeft='30%'><Line/><Text fontSize='3xl' padding={'10px'} >GIFTS & KIT</Text><Line/></Box>
      <Box id='newly-launched'>
      <Carousel1/>
      </Box>
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
      <Box id='newly-launched'>
      <Carousel1/>
      </Box>
      
    </div>
  )
}

export default HomePage
