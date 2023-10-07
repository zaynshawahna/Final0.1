import React from 'react'
import Stack from '@mui/material/Stack';
import StoryAvatare from './StoryAvatare';
function AvatarStack() {
  return (
    <div style={{width:"90%",borderBottom:"solid 2px #1d1d1d"}} >
        
        <br>
        </br>
 
    <Stack  direction="row" spacing={4} sx={{ width: "90%", height: "90%",marginLeft:"2%" }} >
        
    <StoryAvatare/>
    <StoryAvatare/>
    <StoryAvatare/>
    <StoryAvatare/>
    <StoryAvatare/>
   
   
   
    </Stack>
    
    <br>
    </br>
    
    
    </div>
  )
}

export default AvatarStack