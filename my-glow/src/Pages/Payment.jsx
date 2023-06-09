import React, { useState } from 'react'
import {
  Box, Button, Divider, Radio,
  RadioGroup,
  Stack, Flex, FormControl, FormLabel, Image, Input, Text, useToast, Select
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';





const initialState = {
  cardno: "",
  ExpiringDate: "",
  cvv: ""
}
function Payment() {
  const toast = useToast()

  const [data, setData] = useState(initialState)
  const [carddetails, setCarddetails] = useState("")
  const [OTP, setOTP] = useState("")
  const [enteredotp, setEnteredOtp] = useState("")
  const [paymentOption, setPaymentOption] = useState('debit-card');

  let { cartItems } = useSelector((store) => (store.cartReducer));
  console.log('Payment:', cartItems)

  const handlePaymentOptionChange = (value) => {
    setPaymentOption(value);
  };

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData(prevState => ({ ...prevState, [name]: value }))

  }
  console.log(data)

const handleCOD=()=>{
    toast({
        description: "Order Placed Sucessfully",
        status: "success",
        position:"top",
        duration: 1000,
        isClosable: true,
      });
cartItems=[];
window.location.reload();

}

  const handlePaymentSubmit = (event) => {
  
    event.preventDefault();
    if (
      data.cardno === "" ||
      data.ExpiringDate === "" ||
      data.cvv === ""

    ) {
      toast({
        description: "fill all fields",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } else if (
      data.cardno.length !== 16

    ) {
      toast({
        description: "Please Enter a Valid Card Number",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } else if (
      data.cvv.length !== 3

    ) {
      toast({
        description: "Please Enter a Valid CVV",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      setCarddetails(data)
      var otp = Math.floor(100000 + Math.random() * 900000);
      otp = String(otp);
      otp = otp.substring(0, 4);
      setOTP(otp)

      toast({
        description: `Your OTP is ${otp}`,
        status: "success",
        isClosable: true,
        position: "top",
      });



    }

  };
  const handlePay = (e) => {
    e.preventDefault();
    if (enteredotp === OTP) {
      toast({
        description: `Payment Successful & Your Order has been Placed`,
        status: "success",
        isClosable: true,
        duration: 1000,
        position: "top",
      });

 
    } else {
      toast({
        description: "Enter correct OTP",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
  }



  return (
    <Box>



      <Box
        width={{ base: "90%", sm: "90%", md: "90%", lg: "80%" }}
        margin="auto" >

        <Box
          pt={"20px"}
          pb="20px">
          <Text
            color={"gray.600"}
            fontSize={"24px"}>
            Payment & Place Order
          </Text>
        </Box>
        <Flex gap={20}
          flexDirection={{ base: "column-reverse", sm: "column-reverse", md: "row", lg: "row" }}
          justifyContent="center"
          marginBottom={"30px"}>
          <Box
            border="1px solid #bab8b4"
            padding={"20px"}
            marginTop={"5%"}
            width={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}>
            <Text
              color={"#FF00BF"}
              fontSize={"22px"}
              mb={"10px"}
            
              marginBottom={"5%"}
              marginLeft={'40%'}>
              Payment method
            </Text>

            <Flex
              flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
              justifyContent={"space-around"} gap={"20px"}  >
              <RadioGroup
                // border="1px solid black"
                width={{ base: "100%", sm: "100%", md: "100%", lg: "40%" }}
                onChange={handlePaymentOptionChange}
                value={paymentOption}>

                <Stack spacing={2}>
                  <Radio
                    colorScheme='yellow'
                    value="debit-card">
                    Debit Card
                    <br />
                    <Text fontSize={"9px"}>
                      (Use your Debit card)
                    </Text>
                  </Radio>
                  <Radio
                    colorScheme='yellow'
                    value="upi">
                    UPI Payment
                    <br />
                    <Text fontSize={"9px"}>
                      (Pay with UPI app)
                    </Text>
                  </Radio>
                  <Radio
                    colorScheme='yellow'
                    value="netbanking">
                    Net Banking
                    <br />
                    <Text fontSize={"9px"}>
                      (Pay by your prefered bank)
                    </Text>
                  </Radio>
                  <Radio
                    colorScheme='pink'
                    value="cash">
                    Cash on Delivery
                    <br />
                    <Text fontSize={"9px"}>
                      (Pay as a Cash)
                    </Text>
                  </Radio>
                </Stack>

              </RadioGroup>

              {paymentOption === 'debit-card' && (
                <Box
                 
                  width={{ base: "100%", sm: "100%", md: "100%", lg: "60%" }}
                  textAlign={"center"} >
                  <Box >
                      <FormLabel for="ccn">Card number</FormLabel>
                      <Input type='tel' _focus={{ border: "1px solid #cea464" }} placeholder="Enter card number" value={data.cardno}
                        onChange={handleChange}
                        name="cardno"
                        pattern="[0-9\s]{13,19}"
                       minLength={16}
                        maxLength={16}
                        inputmode='numeric' />

  
                    <FormControl>
                      <FormLabel>Expiration date</FormLabel>
                      <Input type='date' _focus={{ border: "1px solid #cea464" }} placeholder="MM/YY" value={data.ExpiringDate} onChange={handleChange}

                        name="ExpiringDate" />

                    </FormControl>
                    <FormControl>
                      <FormLabel>CVV</FormLabel>
                      <Input type="password" _focus={{ border: "1px solid #cea464" }} placeholder="Enter CVV" value={data.cvv} onChange={handleChange}

                        name="cvv"  maxLength={3}/>

                    </FormControl>
                    <Button bgColor="#df9018"
                      _hover={{ bgColor: "#f89f17" }}
                      color="white"
                      fontSize={{ base: "10px", sm: "15px", md: "18px", lg: "20px" }}
                      margin=" 10px auto"
                      onClick={handlePaymentSubmit}>
                      Get Otp
                    </Button>

                    {carddetails !== "" ?
                      <FormControl>
                        <Input type='number' placeholder='Enter your Otp' value={enteredotp} onChange={(e) => setEnteredOtp(e.target.value)} required/>
                        <Button bgColor="#df9018"
                          _hover={{ bgColor: "#f89f17" }}
                          color="white"
                          fontSize={{ base: "10px", sm: "15px", md: "18px", lg: "20px" }}
                          margin=" 10px auto" onClick={handlePay}> Pay </Button>
                      </FormControl>
                      : ""
                    }

                  </Box>

                </Box>
              )}
              {paymentOption === 'upi' && (
                <Box
                 
                  width={{ base: "100%", sm: "100%", md: "100%", lg: "60%" }}
                  textAlign={"center"}
                  margin={"auto 0"} >
                  <Box>
                    <FormControl>
                      <FormLabel>Your UPI ID</FormLabel>
                      <Input _focus={{ border: "1px solid #cea464" }} placeholder="Enter your UPI ID" type='email' pattern='^[\w.-]+@[\w.-]+$'/>
                    </FormControl>
                    <Button bgColor="#df9018"
                      _hover={{ bgColor: "#f89f17" }}
                      color="white"
                      fontSize={{ base: "10px", sm: "15px", md: "18px", lg: "20px" }}
                      margin=" 10px auto"
                      onClick={handlePaymentSubmit}>
                      Pay Now
                    </Button>
                  </Box>

                </Box>
              )}
              {paymentOption === 'netbanking' && (
                <Box
                  // border="1px solid black"
                  width={{ base: "100%", sm: "100%", md: "100%", lg: "60%" }}
                  textAlign={"center"}
                  margin={"auto 0"} >
                  <Box>
                    <Select placeholder='Select your Bank'>
                      <option value='SBI NB'> SBI NB</option>
                      <option value='Punjab Bank'>Punjab Bank</option>
                      <option value='HDFC Bank'>HDFC Bank</option>
                      <option value='Kotak Bank'>Kotak Bank</option>
                      <option value='Punjab Bank'>Punjab Bank</option>
                      <option value='Axis Bank'>Axis Bank</option>
                      <option value='Bank of India'>Bank of India</option>
                      <option value='Other Bank'>Other Bank</option>

                    </Select>
                    <Button bgColor="#df9018"
                      _hover={{ bgColor: "#f89f17" }}
                      color="white"
                      fontSize={{ base: "10px", sm: "15px", md: "18px", lg: "20px" }}
                      margin=" 10px auto"
                      onClick={handlePaymentSubmit}>
                      Pay Now
                    </Button>
                  </Box>

                </Box>
              )}
              {paymentOption === 'cash' && (
                <Box
                  //  border="1px solid black"
                  width={{ base: "100%", sm: "100%", md: "100%", lg: "60%" }}
                  textAlign={"center"}
                  margin={"auto 0"} >
                  <Box>
                    <Text
                      fontSize={"12px"}
                      color="#939290"
                      mt={"20px"}>
                      Pay at the time of delivery by cash or scan QR and pay through UPI.
                    </Text>
                    <Image
                      margin={"auto"}
                      src="https://i1.lmsin.net/website_images/in/checkout/cod-theme-icon.svg" />


                    <Button bgColor="#df9018"
                      _hover={{ bgColor: "#f89f17" }}
                      color="white"
                      fontSize={{ base: "10px", sm: "15px", md: "18px", lg: "20px" }}
                      margin=" 10px auto"
                      onClick={handleCOD}>
                        <Link to='/'>Place Order</Link>
                      
                    </Button>
                  </Box>

                </Box>
              )}

            </Flex>
            <Box fontSize={"12px"} color="#939290">
              <Box mb="10px">
                <Image src="https://i1.lmsin.net/website_images/in/checkout/comodo-secure-icon.svg" />
              </Box>
              <Text mb="10px">
                Your credit card details are securely encrypted and passed directly to our PCI DSS compliant Payment Gateway for processing. We only store your credit card's last 4 digits and the expiration date. Your traffic to this page is secured using either a 256-bit or 128-bit SSL certificate depending on your browser version.
              </Text>
              <Text mb="10px">© 2021 RNA Intellectual Property Limited.</Text>
              <Text mb="10px">Privacy Policy-Terms of Use- Terms & Condition </Text>
            </Box>


          </Box>



        </Flex>










        <Box width={{ base: "90%", sm: "90%", md: "90%", lg: "85%" }} margin="auto" >

          <Divider />
        
        </Box>
      </Box >
    </Box>
  )
}


export default Payment;