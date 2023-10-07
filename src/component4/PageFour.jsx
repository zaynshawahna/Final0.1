import React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveDrawer from '../component1/ResponsiveDrawer';
import Header from './Header';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import Pposts from './Pposts';




function PageFore() {
  return (
    <div style={{backgroundColor:"black"}}>
    
    
   
    <Grid container spacing={2}>
    <Grid  xs={2.5} >
    <ResponsiveDrawer s="solid 2px #1d1d1d"  /> 
    </Grid>

    <Grid item xs={7}  >
     
    <Header/>
    <div style={{marginLeft:"38%"}}>
    <Stack spacing={2} direction="row">
      <Button variant="text" style={{backgroundColor:"black",color:"black"}}>Text</Button>
      <Button variant="contained" style={{backgroundColor:"black",borderTop:"solid 2px white ",borderRadius:"0%",fontWeight:"900"}}><AppsTwoToneIcon/>POSTS</Button>
      
   
      <Button variant="contained" style={{backgroundColor:"black",color:"#1d1d1d"}}><TurnedInNotOutlinedIcon/>REELS</Button>
      <Button variant="contained" style={{backgroundColor:"black",color:"#1d1d1d"}}><AssignmentIndOutlinedIcon/>TAGGED</Button>
    </Stack>
    <div style={{marginLeft:"-30%"}}>
    <Pposts />
    <Pposts />
    <Pposts />
    </div>



    


    </div>



    </Grid>

  </Grid>
      
      </div>
  )
}

export default PageFore