
import React from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveDrawer from './ResponsiveDrawer';
import EditIcon from '@mui/icons-material/Edit';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp'
import Message from './Message';
import Mess from './Mess.png';
import Button from '@mui/material/Button';




function PageThree() {
  return (
    <div style={{backgroundColor:"black"}}>
    <Grid container spacing={2}>

             <Grid  xs={2.5} >
              <ResponsiveDrawer  /> 
             </Grid>
            
             <Grid  xs={2} >

               <div style={{color:"white",width:"130%"}}>



               <div style={{ display: "flex", alignItems: "center",margin:"6% 0% 0% 0%",padding:"5% 4% 7% 4%",borderBottom:"solid 2px #1d1d1d",borderRight:"solid 2px #1d1d1d",borderLeft:"solid 2px #1d1d1d"}}>
               <span style={{ color: "white" }}>zayn shawahna</span>
               <ArrowDropDownSharpIcon  />
               <EditIcon style={{marginLeft:"auto"}}/>

           
               </div>

               
           
             
              
              <div style={{borderRight:"solid 2px #1d1d1d",borderLeft:"solid 2px #1d1d1d",height:"800px"}}>
                
              <div style={{ display: "flex", alignItems: "center",padding:"4%"}}>
               <span style={{ color: "white" }}>Messages</span>
               <h4 style={{marginLeft:"auto",color:"#8d8d8d"}} >Request</h4>
               

           
               </div>




               <Message read={true}/>
               <Message read={false}/>
               <Message read={true}/>
               <Message read={true}/>

              </div>

               
         
             </div>
             </Grid>
             <Grid  xs={6} >
             <div style={{marginTop:"30%",marginLeft:"30%"}}>
             <img src={Mess} style={{backgroundColor:"black",width:"150px",height:"150px",margin:"auto"}}/>
             <h1 style={{color:"white"}}>Your Messages</h1>
             <h3 style={{color:"#8d8d8d"}}>send private photos and messages to a friend or group </h3>
             <Button variant="contained" style={{borderRadius:"50px",width:"250px"}}> send messages </Button>
             
             
             </div>
             
             </Grid>
         
     
     
    </Grid>
      
      </div>
  )
}

export default PageThree