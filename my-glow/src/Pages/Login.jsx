// // Saurabh
import React from "react";
import { Link } from 'react-router-dom';

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
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const verifyLogin = async (e) => {
    e.preventDefault();
    try {
      let usersData = await fetch(`https://api-ak.vercel.app/users`);
      let data = await usersData.json();
      for (let i = 0; i <= data.length - 1; i++) {
        if (
          loginUser.email === data[i].email &&
          loginUser.password === data[i].password
        ) {
          alert(`Welcome Back to My Glow`);
          window.location = '/';
          return;
        }
      }
      alert("Wrong Credential");
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
          <form onSubmit={verifyLogin}>
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

      <Footer />
    </div>
  );
};

export default Login;
