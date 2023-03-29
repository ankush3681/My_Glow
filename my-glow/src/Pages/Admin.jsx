import React from "react";
import {
  Center,
  Heading,
  Input,
  VStack,
  Box,
  StackDivider,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  HStack,
  Radio,
  RadioGroup
} from "@chakra-ui/react";

export const Admin = () => {
  return (
    <>
      <Center>
        <Box w="100%" h="70%">
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={"4"}
          >
            <Center>
              <Heading
                as={"h1"}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip={"text"}
                fontSize="6xl"
                fontWeight="extrabold"
                _hover={{
                  bgGradient: "linear(to-r, green.500, yellow.500)",
                }}
              >
                Admin Page
              </Heading>
            </Center>
            <FormControl> 

            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"3.5%"}>Title:</FormLabel>

                <Input placeholder="Enter Product Title" w="30%"></Input>
              </Center>
            </Flex>

            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"1%"}>Image1:</FormLabel>

                <Input placeholder="Enter Product Image url" w="30%"></Input>
              </Center>
            </Flex>


            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"1%"}>Image2:</FormLabel>

                <Input placeholder="Enter Product Image url" w="30%"></Input>
              </Center>
            </Flex>


            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"1%"}>Image3:</FormLabel>

                <Input placeholder="Enter Product Image url" w="30%"></Input>
              </Center>
            </Flex>

            <Flex w="100%">
              <Center w="100%" gap="20px">
              <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"}paddingRight={"3.1%"}>Price:</FormLabel>

                <Input placeholder="Enter Product Price" w="30%"></Input>
              </Center>
            </Flex>


            <Flex w ="100%" >
            <Center w = "100%" gap="20px">
            <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"2.4%"}>Brand:</FormLabel>
           
            <Input placeholder="Enter Product Brand name " w= "30%"></Input>
            </Center>
            </Flex>


            <Flex w ="100%" >
            <Center w = "100%" gap="20px">
            <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"}>Category:</FormLabel>
           
            <Input placeholder="Enter Product Category" w= "30%"></Input>
            </Center>
            </Flex>


            <Flex w ="100%" >
            <Center w = "100%" gap="20px">
            <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"}>Rating:</FormLabel>
           
            <RadioGroup >
    <HStack spacing='24px' >
      <Radio value="0">0</Radio>
      <Radio value='1'>1</Radio>
      <Radio value='2'>2</Radio>
      <Radio value='3'>3</Radio>
      <Radio value='4'>4</Radio>
      <Radio value="5"></Radio>
    </HStack>
  </RadioGroup>
            </Center>
            </Flex>
            <FormHelperText>Select the rating available for the product from the options given</FormHelperText>

            <Flex w ="100%" >
            <Center w = "100%" gap="20px">
            <FormLabel fontSize={"3xl"} as={"b"} fontWeight={"650"} paddingRight={"0.1%"}>Discount:</FormLabel>
           
            <Input placeholder="Enter Product Discount" w= "30%"></Input>
           
            </Center>
            </Flex>
            </FormControl>
          </VStack>
          
        </Box>
      </Center>
    </>
  );
};
