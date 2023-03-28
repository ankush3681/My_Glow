import React from 'react'
import { FaFacebook , } from 'react-icons/fa';
import { AiFillInstagram ,AiFillTwitterCircle } from "react-icons/ai"
import { Link } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Login from "../Pages/Login"
import { HStack, VStack ,Text, Divider, Box, Grid ,Button ,IconButton} from '@chakra-ui/react';


const Footer = () => {
  return (
    <Box width={"100%"} className='footer'backgroundColor={["#0A2647" ,"#256D85" ,"#256D85"]}  color={"#DFF6FF"}>

       <Divider/>
       <h1>LET'S STAY IN TOUCH</h1>
       <h5>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</h5>
  <Box>
    <HStack  justifyContent={"center"} margin={"auto"} marginTop={"5"} marginBottom={"1"} >
        <input style={{"padding" : "8px",width:"40%" , borderRadius :"10px 0px 0px 10px" ,color:"black"}} type="text" placeholder='Your Email' /> 
        <button style={{"padding" : "8px",color:"white" ,backgroundColor:"black",marginLeft:"-8px" , borderRadius :"0px 10px 10px 0px"}} >Subscirbe</button>
       
    </HStack>
    <p >Successefully subscribed</p>
  </Box>
              
       <Divider marginTop={"15px"} />
        
        <HStack justifyContent={"center"} margin={"10px"}>
          <img width="43px" src="https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png" alt="facebook" />
          <img width="60px"  src="https://assets.stickpng.com/images/5ecec6ef73e4440004f09e75.png" alt="instagram" />
          <img width="50px" src="https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png" alt="" />
          <img width="45px" src="https://www.freeiconspng.com/thumbs/pinterest-logo-icon/white-pinterest-logo-on-black-16.png" alt="" />
        </HStack>
      
      <Divider/>

        <div className='footer-link' style={{display:"flex" , justifyContent:"space-evenly" ,margin:"10px"}} >
        <Link to="/" >Stores</Link>
        <Link to="/" >Terms&Conditions</Link>
        <Link to="/" >Returns</Link>
        <Link to="/" >FAQs</Link>
        <Link to="/" >About</Link>
        </div> 

        <Divider/>

        <div>
            <HStack margin={"10px"} justifyContent="space-evenly"  textAlign={'left'}>
               <VStack>
                <Text >GET IN TOUCH <br />Call Us At <br />1800-209-9933</Text>
                </VStack>
                <VStack>
                    <Text>Support <br /> hello@sugarcosmetics.com</Text>
                </VStack>
                <VStack>
                    <Text>Careers <br />We're hiring!</Text>
                </VStack>
                <VStack>
                    <Text>Press & Media <br />@sugarcosmetics.com
                </Text>
                </VStack>
                <VStack>
                    <Text>Influencer Collab <br />Join Us</Text>
                </VStack>
            </HStack>

       <Divider/>

                <Grid templateColumns='repeat(2   , 1fr)'  margin={"15px"}>
                    <VStack>
                        <Text >GET THE NEW SUGAR APP TODAY!</Text>
                        <Text>Tap into a better shopping experience.</Text>
                    </VStack>
                    <HStack>
                        <img width="200px" src="https://in.sugarcosmetics.com/playstore.png" alt="" />
                        <img width="200px" src="https://in.sugarcosmetics.com/apple-store.png" alt="" />
                    </HStack>
                </Grid>    
        <Divider/>

        <Text >Copyright © 2023 My Glow Cosmetics. All rights reserved.</Text>

        <Divider/>
        </div>
    </Box>
  )
}

export default Footer