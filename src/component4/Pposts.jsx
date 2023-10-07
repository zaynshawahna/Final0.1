import React from 'react';
import { Stack } from '@mui/material';
import explorePic9 from './pic/explorePic9.avif';

function Pposts() {
  return (
    <>
        <Stack spacing={2} direction="row">
    <div style={{position:"relative",display:"inline-block"}}>
         <img src={explorePic9} style={{width:"260px",height:"260px",margin:10}}/>
         
    </div>
     
    <div style={{position:"relative",display:"inline-block"}}>
         <img src={explorePic9} style={{width:"260px",height:"260px",margin:10}}/>
         
    </div>
    <div style={{position:"relative",display:"inline-block"}}>
         <img src={explorePic9} style={{width:"260px",height:"260px",margin:10}}/>
         
    </div>
    </Stack>
    
    
    </>
  )
}

export default Pposts