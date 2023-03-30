import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import Carousel1 from "../Components/Carousel/Carousel1"
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Text } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel/>
       <Text>TIPSY LIPS SCRUB + BALM DUO</Text>
      <img src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/0533d215-072d-46a6-a126-656aa10580fb.jpg&w=1920&q=75" alt="TIPSY LIPS SCRUB + BALM DUO" />
      <Text>REFER YOUR FRIENDS</Text>
      <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8638d096-d168-404e-9b83-56967625b5e6.jpg&w=1920&q=75" alt="REFER YOUR FRIENDS" />
      <Carousel1/>
      <Footer/>
    </div>
  )
}

export default HomePage
