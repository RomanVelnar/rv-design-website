import React from 'react'
import { styled } from '@mui/system';
import { Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';




export default function Hero() { 
    return(
        <Grid 
            container 
            spacing={3}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
                <Grid item xs={6}>
                    <h1>anfdfasfd</h1>    
                </Grid>     
                <Grid item xs={6} hidden height={0}>
                    <h2>adsfsaf</h2>    
                </Grid>     
                <Grid item xs={6}>
                    <h3>12123123123</h3>    
                </Grid>     
        </Grid>
    )
}
