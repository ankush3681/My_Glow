import { Box, Link, Stack } from '@chakra-ui/react'
import React from 'react'
import "./Navbar.css"
import img1 from '../images/my-glow-logo.jpg'
import { BsSearch ,BsHandbagFill ,BsPersonCircle} from "react-icons/bs";

const Navbar = () => {
  return (
   <Box >
      <Box className='f-nav'>
            <Box className='logobox' > <img src={img1}className='logocss' alt="" /></Box>
    
           <Box className='search-box'>
              <input type="text" placeholder='Try"Liquid Lipstick"' /> <button><img width={"40px"} src="https://img.icons8.com/ios/2x/search.png" alt="" /></button>
           </Box>
           <Box className='icon-box'>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                  <Link to="/cart"><img src="https://img.icons8.com/material-sharp/2x/shopping-cart.png" alt="cart" /></Link>
                  <Link to="/admin"> <img width={"50px"} src="https://static.vecteezy.com/system/resources/previews/009/636/683/original/admin-3d-illustration-icon-png.png" alt="admin" /></Link>
            </Box>     
      </Box>
      <Box className='s-nav'> 
         <ul>
            <li><Link to="/product">LIPS</Link></li>
            <li><Link to="/product">EYES</Link></li>
            <li><Link to="/product">FACE</Link></li>
            <li><Link to="/product">SKINCARES</Link></li>
            <li><Link to="/product">NAILS</Link></li>
            <li><Link to="/product">ACCESSORIES</Link></li>
            <li><Link to="/product">GIFTS & KITS</Link></li>
            <li><Link to="/product">BESTSELLERS</Link></li>
            <li><Link to="/product">NEW LAUNCHES</Link></li>
            <li><Link to="/product">OFFERS</Link></li>
         </ul>
      </Box>
   </Box>
  )
}

export default Navbar
