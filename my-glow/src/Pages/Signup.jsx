// // Saurabh
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Button,
  Flex,
  Center,
  Image,
} from "@chakra-ui/react";
import { SiLinkedin } from "react-icons/si";

const Signup = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const verfiyform = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://api-ak.vercel.app/users`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      alert("Signup successful");
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div>
      <Navbar />

      <h1>Signup page</h1>

      <Flex bg={"black"}>
        <Box>
          <form onSubmit={verfiyform}>
            <Box>
              <FormControl ml={"30%"} mt={"100px"}>
                <FormLabel color={"white"}>Email address</FormLabel>
                <Input
                  color={"#e8f0fe"}
                  w={"200%"}
                  border={"2px solid gray"}
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, email: e.target.value })
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
                    setLoginUser({ ...loginUser, password: e.target.value })
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
