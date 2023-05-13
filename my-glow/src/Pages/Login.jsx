// // Saurabh
import React, { useEffect, useState } from "react";
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
import {  useSelector } from "react-redux";

const inputform = {
  fontFamily: "Arial",
  display: "Block",
};

const mystyle = {
  backgroundColor: "yellow",
  marginTop: "200px",
  marginBottom: "200px",
};

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [count,setCount] = useState(true);
  const toast = useToast()
  const navigate = useNavigate();
  const location = useLocation();

  const users = useSelector((state)=>{
    // console.log(state);
    return state.signupReducer.users;
  })

  // console.log(users)
  
  const userDetail = {
    email,password
  }



 



  

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const cur_user = users.find((ele)=> ele.email === email);
   if(cur_user){
    // console.log(cur_user.id)
      if(cur_user.password === password){
            alert("login success")
            setCount(!count);
            navigate("/")
            sessionStorage.setItem("userdetail",JSON.stringify(cur_user));
            sessionStorage.setItem("isAuth",true);
            window.location.reload();
            
      }else{
        alert("wrong password")
      }
   }else{
      alert("please register first");
      navigate("/signup")
   }

    setEmail("");
    setPassword("");
  }
 
  
  return (
    <div>
      <Navbar />

      <h1>Signup page</h1>

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
                  Sign UP
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

export default Login;
