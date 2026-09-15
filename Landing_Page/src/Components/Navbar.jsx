import React from 'react'
import logo from '../assets/Logo.svg'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { Box, Drawer,List,  ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ComentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhaneRoundedIcon from '@mui/icons-material/PhoneRounded';    
import ShoppingCartROundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useState } from 'react'


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />
        },
        {
            text: 'About',
            icon: <InfoIcon />
        },
        {
            text: 'Testimonials',
            icon: <ComentRoundedIcon />
        },
        {
            text: 'Contact',
            icon: <PhaneRoundedIcon />
        },
        {
            text: 'Cart',
            icon: <ShoppingCartROundedIcon />
        }
    ]            
  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <a href="#cart">
          <BsCart2 className='navbar-cart-icon' />
        </a>
        <button className='primary-button'>
            Bookings Now
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineMenu onClick={() => setOpenMenu(true)} />
      </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
  <Box
    sx={{ width: 250 }}
    role='presentation'
    onClick={() => setOpenMenu(false)}
    onKeyDown={() => setOpenMenu(false)}
  >
    <List>
      {menuOptions.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
</Drawer>
    </nav>
  )
}

export default Navbar
