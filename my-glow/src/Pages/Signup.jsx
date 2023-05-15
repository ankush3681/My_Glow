import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Button,
  Flex,
  useToast,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postsignup } from "../Redux/SignupRedux/action";

const initialData = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
}

const Signup = () => {
  
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const userDetail = {
    firstName,lastName,email,password
  }

  const users = useSelector((state)=>{
    return state.signupReducer.users;
  })

  // console.log(users)

  const Submitform =  (e) => {
    e.preventDefault();
    console.log(userDetail)
    dispatch(postsignup(userDetail))
    .then((res)=>{
      toast({
        position: "top",
        title: "Signup Successfull.",
        description: "User registered,You can login now",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/login");
    })
  };
  return (
    <div>
      <Navbar />

      <h1>Signup page</h1>

      <Flex bg={"black"}>
        <Box>
          <form onSubmit={Submitform}>
            <Box>
              <FormControl ml={"30%"} mt={"100px"}>
                <FormLabel color={"white"}>Enter First Name</FormLabel>
                <Input
                  color={"#e8f0fe"}
                  w={"200%"}
                  border={"2px solid gray"}
                  onChange={(e) =>
                    setFirstName(e.target.value )
                  }
                  required
                  type="text"
                  name="firstname"
                  placeholder="Enter First Name"
                />
                <br />
                <br />
                <FormLabel color={"white"}>Enter Last Name</FormLabel>
                <Input
                  color={"#e8f0fe"}
                  w={"200%"}
                  border={"2px solid gray"}
                  onChange={(e) =>
                    setLastName(e.target.value )
                  }
                  required
                  type="text"
                  name="email"
                  placeholder="Enter Last Name"
                />
                <br />
                <br />
                <FormLabel color={"white"}>Email address</FormLabel>
                <Input
                  color={"#e8f0fe"}
                  w={"200%"}
                  border={"2px solid gray"}
                  onChange={(e) =>
                    setEmail(e.target.value )
                  }
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <br />
                <br />
                <FormLabel color={"white"}>Email Password</FormLabel>
                <Input
                  w={"200%"}
                  border={"2px solid gray"}
                  color={"#e8f0fe"}
                  onChange={(e) =>
                    setPassword(e.target.value )
                  }
                  required
                  type="password"
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
              
              <p
                style={{
                  
                  color: "white",
                  marginLeft: "25%",
                  
                  paddingBottom: "10px",
                  paddingTop:'10px'
                }}
              >
                Alread have Account?{" "}
              </p>
              <Link to="/login">
                <Button
                  ml={"30%"}
                  colorScheme="blue"
                  type="submit"
                  w={"200%"}
                  border={"2px solid gray"}
                >
                Login
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
        </Box>
      </Flex>
    </div>
  );
};

export default Signup;
