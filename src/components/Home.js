import React from 'react'
import Hero from './Hero'
import Navbar from "./Navbar"
import { styled } from '@mui/system'
import Image from '../images/bg-image1.jpg'

const Background = styled('div')({
    height: '100vh', 
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });

function Home () {
    return(
        <Background>
            <Navbar />
            <Hero />
        </Background>
)}

export default Home;

