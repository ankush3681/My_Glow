import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  useToast
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { postLogin } from "../Redux/AuthRedux/action";
import { useDispatch } from "react-redux";
import { adminLogin } from "../Redux/adminAuthRedux/action";

const inputform = {
  fontFamily: "Arial",
  display: "Block",
};

const mystyle = {
  backgroundColor: "yellow",
  marginTop: "200px",
  marginBottom: "200px",
};

const AdminLogin = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast()
  const navigate = useNavigate();
  const location = useLocation();

  const userDetail = {
    email,password
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
     
    dispatch(adminLogin(userDetail))
    .then((res)=>{
    
        console.log(location.state)
     location.state ? navigate(location.state) : navigate("/");
    toast({
      title: 'Login Success.',
      description: "Welcome to My Glow.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })        
    })
    .catch(()=>{
      toast({
        title: 'Wrong Credential.',
        description: "Please Try again to Login.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })        
    })

    setEmail("");
    setPassword("");
  }
  
  return (
    <div>
      <Navbar />

      <h1 color="white">Admin Login</h1>

      <Flex bg={"black"}>
        <Box>
          <form onSubmit={handleLoginSubmit}>
            <Box>
              <FormControl ml={"30%"} mt={"100px"}>
                <FormLabel color={"white"}>Email address</FormLabel>
                <Input
                  color={"#e8f0fe"}
                  w={"200%"}
                  border={"2px solid gray"}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                />
                <br />
                <br />
                <FormLabel color={"white"}>Email Password</FormLabel>
                <Input
                  w={"200%"}
                  border={"2px solid gray"}
                  color={"#e8f0fe"}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  type="password"
                  value={password}
                  name="password"
                  placeholder="Enter your Password"
                />
              </FormControl>
              <br />

              <Button
                ml={"30%"}
                colorScheme="blue"
                type="submit"
                w={"200%"}
                border={"2px solid gray"}
              >
                Submit
              </Button>
              <br />
              <br />
              <p
                style={{
                  color: "white",
                  marginLeft: "30%",
                  paddingBottom: "10px",
                }}
              >
                Dont have Account?{" "}
              </p>
              <Link to="/signup">
                <Button
                  ml={"30%"}
                  colorScheme="blue"
                  type="submit"
                  w={"200%"}
                  border={"2px solid gray"}
                >
                  Sign up
                </Button>
              </Link>

              <br />
            </Box>
          </form>
        </Box>
        <Box>
          <Image
            src={"https://media.sugarcosmetics.com/upload/authSIe2.jpg"}
            h={"50%"}
            ml={"45%"}
          />
          {/* <Image src={"http://localhost:3000/static/media/logo3my.6318ea5f18dd4fcbda03.jpg"} h={'3%'} ml={'65%'} mb={'10%'}/> */}
        </Box>
      </Flex>
  
    </div>
  );
};

export default AdminLogin;
