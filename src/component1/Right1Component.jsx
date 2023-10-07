import React from 'react';
import Avatar from '@mui/material/Avatar';
import man from './pic/man.png';
import { Link } from '@mui/material';

function Right1Component() {
  return (
    <>
       <div style={{ display: "flex", alignItems: "center" }}>
         <Avatar alt="Remy Sharp" src={man} sx={{ width: 60, height: 60 }} />
         <span>zayn shawahna &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <Link>Follow</Link></span>
       </div ></>
  )
}

export default Right1Component