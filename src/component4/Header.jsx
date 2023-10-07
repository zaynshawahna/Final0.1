import React from 'react';
import man from "../component1/pic/man.png";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SettingsIcon from '@mui/icons-material/Settings';


function Header() {
  return (
   <>
   
   <div style={{borderBottom:"solid 2px #1d1d1d",width:"52%",paddingBottom:"4%",width:"100%",marginLeft:"20%"}}>
<Stack direction="row" spacing={-3} >
        <img src={man} style={{width:"22%",height:"30%",borderRadius:"50%",marginRight:"10%",marginTop:"2%"}}/>

        <Stack direction="column" style={{width:"100%",padding:"0%",fontWeight:"900",color:'white',marginTop:"6%",marginRight:"5%"}}>
        <div style={{width:"100%",marginTop:"5%",padding:"0%",fontWeight:"900",color:'white',textAlign:"left",backgroundColor:"black"}}>zayn shawahna </div>
        <br></br>
        
        <div style={{width:"100%",paddingTop:"4%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left",backgroundColor:"black"}}>9 posts</div>
        <br></br>
        
        <div style={{width:"100%",marginTop:"2%",padding:"0%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left",backgroundColor:"black"}}>خلاف ذلك تماما </div>

        
        </Stack>
        <Stack direction="column" style={{width:"100%",padding:"0%",fontWeight:"900",color:'white',marginTop:"6%",marginRight:"5%"}}>
        <Button variant="contained" style={{width:"100%",borderRadius:"10px",color:"black",backgroundColor:"white" }}>Contained</Button>
        <br></br>
        <div style={{width:"100%",marginTop:"2%",padding:"0%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left"}}>234 followers</div>
        
        </Stack>
        <Stack direction="column" style={{width:"100%",padding:"0%",fontWeight:"900",color:'white',marginTop:"6%",marginRight:"5%"}}>
        <Button variant="contained" style={{width:"100%",borderRadius:"10px",color:"black",backgroundColor:"white" }}>Contained</Button>
        <br></br>
        <div style={{width:"100%",marginTop:"2%",padding:"0%",fontWeight:"300",color:'white',marginTop:"6%",textAlign:"left"}}>234 following</div>
        
        </Stack>
        <Stack direction="column" style={{width:"100%",padding:"0%",fontWeight:"900",color:'white',marginTop:"6%"}}>
        <SettingsIcon style={{marginTop:"4%"}}/> 
        
        </Stack>
        
        </Stack>

        
</div>
   </>
  )
}

export default Header