// // Saurabh
import React from "react";

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

const inputform = {
  fontFamily: "Arial",
  display: "Block"
}

const mystyle = {
  backgroundColor: "yellow"
}

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
          alert(`Welcome Back ${data[i].name}`);
          return;
        }
      }
      alert("Login Error");
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div style={mystyle}>
      <h1>Login page</h1>
      <form onSubmit={verifyLogin} style={inputform}>
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, email: e.target.value })
          }
          required
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
          required
          type="password"
          name="password"
          placeholder="Enter your Password"
        />
        <button onSubmit="submit">Submit now</button>
      </form>
    </div>
  );
};

export default Login;


// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Stack,
//   Link,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react';

// export default function SimpleCard() {
//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading fontSize={'4xl'}>Sign in to your account</Heading>
//           <Text fontSize={'lg'} color={'gray.600'}>
//             to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
//           </Text>
//         </Stack>
//         <Box
//           rounded={'lg'}
//           bg={useColorModeValue('white', 'gray.700')}
//           boxShadow={'lg'}
//           p={8}>
//           <Stack spacing={4}>
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input type="password" />
//             </FormControl>
//             <Stack spacing={10}>
//               <Stack
//                 direction={{ base: 'column', sm: 'row' }}
//                 align={'start'}
//                 justify={'space-between'}>
//                 <Checkbox>Remember me</Checkbox>
//                 <Link color={'blue.400'}>Forgot password?</Link>
//               </Stack>
//               <Button
//                 bg={'blue.400'}
//                 color={'white'}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}>
//                 Sign in
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }


// import { useState, useEffect } from 'react';
// import {
//   Flex,
//   Stack,
//   Heading,
//   Text,
//   Link,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   useColorModeValue,
//   Button,
// } from '@chakra-ui/react';

// export default function SimpleCard() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('https://api-ak.vercel.app/users')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       .catch(error => console.log(error));
//   }, []);

//   const handleLogin = () => {
//     const user = users.find(user => user.email === email && user.password === password);
//     if (user) {
//       alert("successful login")
//       // redirect to another page or display success message
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading fontSize={'4xl'}>Sign in to your account</Heading>
//           <Text fontSize={'lg'} color={'gray.600'}>
//             to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
//           </Text>
//         </Stack>
//         <Box
//           rounded={'lg'}
//           bg={useColorModeValue('white', 'gray.700')}
//           boxShadow={'lg'}
//           p={8}>
//           <Stack spacing={4}>
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//             </FormControl>
//             <Stack spacing={10}>
//               <Stack
//                 direction={{ base: 'column', sm: 'row' }}
//                 align={'start'}
//                 justify={'space-between'}>
//                 <Checkbox>Remember me</Checkbox>
//                 <Link color={'blue.400'}>Forgot password?</Link>
//                 </Stack>
//           <Button
//             bg={'blue.400'}
//             color={'white'}
//             _hover={{
//               bg: 'blue.500',
//             }}
//             onClick={handleLogin}>
//             Sign in
//           </Button>
//           {error && (
//             <Text fontSize={'lg'} color={'red.500'}>
//               {error}
//             </Text>
//           )}
//         </Stack>
//       </Stack>
//     </Box>
//   </Stack>
// </Flex>
// );
// }



// import { useState } from 'react';
// import {
//   Flex,
//   Stack,
//   Heading,
//   Text,
//   Link,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Checkbox,
//   Button,
//   useColorModeValue,
// } from '@chakra-ui/react';

// const API_URL = 'https://api-ak.vercel.app/users';

// export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(API_URL);
//       const users = await response.json();
//       const user = users.find(
//         (user) => user.email === email && user.password === password
//       );
//       if (user) {
//         localStorage.setItem('user', JSON.stringify(user));
//         setIsLoggedIn(true);
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (error) {
//       console.error(error);
//       setError('Something went wrong. Please try again later.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setIsLoggedIn(false);
//   };

//   const RenderLoginForm = () => {
//     return (
//       <Box
//         rounded={'lg'}
//         bg={useColorModeValue('white', 'gray.700')}
//         boxShadow={'lg'}
//         p={8}>
//         <Stack spacing={4}>
//           <FormControl id="email">
//             <FormLabel>Email address</FormLabel>
//             <Input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormControl>
//           <FormControl id="password">
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </FormControl>
//           <Stack spacing={10}>
//             <Stack
//               direction={{ base: 'column', sm: 'row' }}
//               align={'start'}
//               justify={'space-between'}>
//               <Checkbox>Remember me</Checkbox>
//               <Link color={'blue.400'}>Forgot password?</Link>
//             </Stack>
//             <Button
//               bg={'blue.400'}
//               color={'white'}
//               _hover={{
//                 bg: 'blue.500',
//               }}
//               onClick={handleSubmit}>
//               Sign in
//             </Button>
//           </Stack>
//         </Stack>
//         {error && (
//           <Text color="red.500" mt={4}>
//             {error}
//           </Text>
//         )}
//       </Box>
//     );
//   };

//   const RenderLogoutForm = () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return (
//       <Box
//         rounded={'lg'}
//         bg={useColorModeValue('white', 'gray.700')}
//         boxShadow={'lg'}
//         p={8}>
//         <Stack spacing={4}>
//           <Text fontSize="xl">Welcome back, {user.name}!</Text>
//           <Button
//             bg={'blue.400'}
//             color={'white'}
//             _hover={{
//               bg: 'blue.500',
//             }}
//             onClick={handleLogout}>
//             Logout
//           </Button>
//         </Stack>
//       </Box>
//     );
//   };

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Stack spacing={8}
// align="center"
// justify="center"
// py={12}
// px={6}
// maxW={'lg'}>
// <Heading fontSize={'2xl'}>Sign in to your account</Heading>
// {/* {isLoggedIn ? renderLogoutForm() : renderLoginForm()} */}
// {isLoggedIn? <RenderLogoutForm /> : <RenderLoginForm />}
// </Stack>
// </Flex>
// );
// }