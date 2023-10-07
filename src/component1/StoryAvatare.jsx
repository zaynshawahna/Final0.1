import React from 'react'
import Avatar from '@mui/material/Avatar';
import man from './pic/man.png';



function StoryAvatare() {
  return (
    <>
        <span style={{color:'white',fontSize:"110%",}}>
              <Avatar alt="Remy Sharp" src={man}  sx={{ width: "70%", height: "70%",marginLeft:"10%",borderRadius:"50%" }}/>
                Zayn.sh.j
                
        </span>
    </>
  )
}

export default StoryAvatare