import { Avatar, Stack } from '@mui/material'
import React from 'react'
import man from '../component1/pic/man.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Message(props) {


    const time="هذا صعبسسسسسس؟ ";
    const tt=".2s";
  
 
    
  return (
    <div>

      <Stack direction="row" spacing={3}>
      <Avatar alt="Remy Sharp" src={man} sx={{ width: 50, height: 50,marginLeft:"5px" }} />
      <Stack direction="column">
       <span>zayn shawahna</span>
       <span style={{color:"#8d8d8d",marginTop:"4%"}}>بدنا اشي اصعب هذا ترفيه</span>
      </Stack>
      <Stack direction="column">
      <span style={{color:"black"}}>.3s<FiberManualRecordIcon/></span>
       <span>.2s </span>
      </Stack>
 
      </Stack>
        <div style={{ display: "flex", alignItems: "center" }}>
       
       </div >
        <br></br>
    </div>

  )
}

export default Message