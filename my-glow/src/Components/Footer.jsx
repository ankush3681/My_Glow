import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HStack, VStack ,Text, Divider, Box, Grid } from '@chakra-ui/react';
import { BsFacebook ,BsInstagram ,BsTwitter,BsPinterest ,BsYoutube ,BsEnvelopeFill} from "react-icons/bs";


const Footer = () => {
const [sub , setSub] = useState(false)
  const handleSubscribe = ()=> {
      setSub((prev)=>!prev)
      
  }

  return (
    <Box paddingTop={'20px'} width={["100%" ,"100%"]} className='footer' background={"linear-gradient(172deg, rgba(2,0,36,1) 0%, rgba(197,84,192,1) 0%, rgba(255,46,173,1) 33%, rgba(0,212,255,1) 100%)"}>

      
       <Box style={{textAlign :"center"}}>
       <Text fontSize={'xl'} lineHeight={'30px'}>LET'S STAY IN TOUCH</Text>
       <h5 style={{color:'white'}}>Get the latest beauty tips straight to your inbox. Can’t wait to connect!</h5>
       </Box>
  <Box>
    <HStack  justifyContent={"center"} margin={"auto"} marginTop={"4"} marginBottom={"4"} >
        <input style={{"padding" : "8px",width:"40%" , borderRadius :"10px 0px 0px 10px" ,color:"black"}} type="email" placeholder='Your Email' /> 
        <button style={{"padding" : "8px",color:"white" ,backgroundColor:"black",marginLeft:"-8px" , borderRadius :"0px 10px 10px 0px"}} onClick={handleSubscribe} >Subscirbe</button>
       
    </HStack>
    <Box style={{textAlign:'center'}}>
    <p >{sub? 'Congratulations , You Successfully Subscribed Our Newsletter !!' : 'Enter Email To subscribe Our Newsletter'}</p>
    </Box>
    
  </Box>
              
       <Divider marginTop={"15px"} />
        
        <HStack justifyContent={"center"} margin={"25px"} >
          <Link to='https://www.facebook.com/trySUGAR/'><BsFacebook size={'30px'} /></Link>
          <Link to='https://www.facebook.com/trySUGAR/'><BsInstagram size={'30px'}  /></Link>
          <Link to='https://www.facebook.com/trySUGAR/'><BsTwitter size={'30px'}  /></Link>
          <Link to='https://www.facebook.com/trySUGAR/'><BsPinterest size={'30px'}  /></Link>
          <Link to='https://www.facebook.com/trySUGAR/'><BsYoutube size={'30px'}  /></Link>
          <Link to='https://www.facebook.com/trySUGAR/'><BsEnvelopeFill size={'30px'}  /></Link>
         </HStack>
      
      <Divider/>

        <div className='footer-link' style={{display:"flex" , justifyContent:"space-evenly" ,margin:"10px"}} >
        <Link to="/" ><Text fontWeight={'bold'} fontSize={'xl'} >Stores</Text></Link>
        <Link to="/" ><Text fontWeight={'bold'} fontSize={'xl'} >Terms&Conditions</Text></Link>
        <Link to="/" ><Text fontWeight={'bold'} fontSize={'xl'} >Returns</Text></Link>
        <Link to="/" ><Text fontWeight={'bold'} fontSize={'xl'} >FAQs</Text></Link>
        <Link to="/" ><Text fontWeight={'bold'} fontSize={'xl'} >About</Text></Link>
        </div> 

        <Divider/>

        <div>
            <HStack margin={"15px"} justifyContent="space-evenly"  textAlign={'left'}>
               <VStack>
                <Text fontWeight={'bold'} fontSize={'sm'}  >GET IN TOUCH <br />Call Us At <br />1800-209-9933</Text>
                </VStack>
                <VStack>
                    <Text  fontWeight={'bold'} fontSize={'sm'}  >Support <br /> hello@sugarcosmetics.com</Text>
                </VStack>
                <VStack>
                    <Text  fontWeight={'bold'} fontSize={'sm'}  >Careers <br />We're hiring!</Text>
                </VStack>
                <VStack>
                    <Text  fontWeight={'bold'} fontSize={'sm'}  >Press & Media <br />@sugarcosmetics.com
                </Text>
                </VStack>
                <VStack>
                    <Text  fontWeight={'bold'} fontSize={'sm'}  >Influencer Collab <br />Join Us</Text>
                </VStack>
            </HStack>

       <Divider/>

                <Grid templateColumns='repeat(2   , 1fr)'  margin={"15px"}>
                    <VStack>
                        <Text  fontWeight={'bold'} fontSize={'xl'} >GET THE NEW SUGAR APP TODAY!</Text>
                        <Text>Tap into a better shopping experience.</Text>
                    </VStack>
                    <HStack>
                        <img width={["200px" , "100px"]} src="https://in.sugarcosmetics.com/playstore.png" alt="" />
                        <img width={["200px" , "100px"]} src="https://in.sugarcosmetics.com/apple-store.png" alt="" />
                    </HStack>
                </Grid>    
        <Divider/>

        <Text align={'center'} style={{color:'white'}}>Copyright © 2023 My Glow Cosmetics. All rights reserved.</Text>

        <Divider/>
        </div>
    </Box>
  )
}

export default Footer