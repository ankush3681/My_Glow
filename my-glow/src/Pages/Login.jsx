// Saurabh

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";

  import { useNavigate } from "react-router-dom";
  
  function Login() {
    const navigate = useNavigate();
    return (
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        backgroundColor="#f2f2f2 "
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                colorScheme={"blue"}
                variant={"solid"}
                onClick={() => navigate("/")}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={"C:\Users\Saurabh Shambharkar\OneDrive\Desktop\Unit-5-Project\noisy-mailbox-2939\my-glow\src\logo.svg"}
          />
        </Flex>
      </Stack>
    );
  }
  
  export default Login;