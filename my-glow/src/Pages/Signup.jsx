// // Saurabh
import Navbar from "../Components/Navbar";
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
import { SiLinkedin } from 'react-icons/si';

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
      alert("Signup sucess");
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div  >

      <Navbar/>


      <h1>Signup page</h1>

     <Flex bg={'black'}>
      <Box>
      <form onSubmit={verfiyform}>
        <Box>
     
          <FormControl ml={"30%"} mt={'100px'}>
            <FormLabel color={'white'}>Email address</FormLabel>
            <Input
             color={'#e8f0fe'}
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
            <FormLabel color={'white'}>Email Password</FormLabel>
            <Input
              w={"200%"}
              border={"2px solid gray"}
              color={'#e8f0fe'}
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
        {/* <Button
        ml={"30%"}
       w={'600px'}
        type="submit"
        colorScheme={'messenger'}
        leftIcon={<SiLinkedin />}/> */}
        
      <br/>
          </Box>
      </form>
      
      </Box>
      <Box>
        <Image src={"https://media.sugarcosmetics.com/upload/authSIe2.jpg"} h={'50%'} ml={'45%'}/>
        {/* <Image src={"http://localhost:3000/static/media/logo3my.6318ea5f18dd4fcbda03.jpg"} h={'3%'} ml={'65%'} mb={'10%'}/> */}
      </Box>
     </Flex>
    </div>
  );
};

export default Signup;
