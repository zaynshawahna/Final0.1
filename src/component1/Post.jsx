import React from 'react'
import man from './pic/man.png';
import Avatar from '@mui/material/Avatar';
import {  Box } from '@mui/material';
import explorePic11 from './pic/explorePic11.webp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Comment from './pic/Comment.png';
function Post() {

 
      const toReturn= <Box>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt="Remy Sharp" src={man} sx={{ width: "8%", height: "auto" }} />
        <span style={{ color: "white" }}>zayn shawahna</span>
        <MoreHorizIcon style={{ marginLeft: "auto", color: "white" }}/>
        {/* <InfoOutlinedIcon  /> */}
      </div>
    
      <img src={explorePic11} style={{ marginTop: "10px", width: "100%", height: "auto" }} />
    
      <div style={{ display: "flex", alignItems: "center",color:"white "  }}>
        <FavoriteBorderIcon />
        <img src={Comment} style={{ marginLeft: "10px",color:"white "  }}/>
       
        <SendIcon style={{ marginLeft: "10px" ,color:"white " }} />
        <BookmarkBorderIcon style={{ marginLeft: "auto", color: "white" }} />
      </div>
    
      <div style={{ fontSize: "16px", fontWeight: "600",color:"white " ,display: "flex", alignItems: "center"}}>750 likes</div>
      <div style={{ fontSize: "12px", fontWeight: "600",color:"white ",display: "flex", alignItems: "center"  }}>zayn.sh.j</div>
      <div style={{ fontSize: "10px", fontWeight: "600",color:"white ",display: "flex", alignItems: "center",textAlign:"left"   }}>
        The architecture of the 8086 microprocessor is based on a complex instruction set computer (CISC) architecture, which means that it supports a wide range of instructions, many of which can perform multiple operations in a single
      </div>
    </Box>
    
    

  return (
    <div style={{width:"90%"}}>
    {toReturn}

  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  <br>
  </br>
  </div>
  )
}

export default Post
