import React from 'react'
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Mainheader = styled('div') ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 100,
});

export default function Hero() { 
    return(
        <div>
            <Mainheader>
                <Box component="span" sx={{ p: 1, borderRadius: 3, boxShadow: 5 }}>
                    <h1>Freelance Web Development and Marketing <br /> in Bournemouth</h1>
                </Box>      
            </Mainheader>
        </div>
    )
}
