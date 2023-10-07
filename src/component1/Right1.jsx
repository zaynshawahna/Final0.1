import React from 'react'
import { Link } from '@mui/material';
import Right1Component from './Right1Component';

function Right1() {




  const Suggestion=<div style={{ display: "flex", alignItems: "center" }}>
  <h4 style={{float:"left",fontWeight:300}}> Suggestion for you &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link style={{color:"white ",textDecoration:"none"}}>See more</Link></h4>
  </div>

  const Meta=        <div style={{ display: "flex", alignItems: "center",textAlign:"left" }}>
  About. Help .Press.API.Jobs.Privacy.Terms.<br></br>
 Location.Language.Meta Verified<br></br>
 <br></br>
 @ 2023 instagram from meta
 <br></br>
 </div>
  return (
    <div style={{float:"right",marginTop:"10%",marginRight:"70px",color:"white"}} >
            <Right1Component/>

             {Suggestion}
            <Right1Component/>
            <Right1Component/>
            <Right1Component/>
            <Right1Component/>
            <Right1Component/>
          
             
            <br>
            </br>
            {Meta}


        
    </div>
  )
}

export default Right1