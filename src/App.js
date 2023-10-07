
import "./App.css";
import PageOne from "./component1/PageOne";
import PageTwo from "./component2/PageTwo";
import { Route, Routes } from "react-router";
import No from "./No";
import PageThree from "./component3/PageThree";
import { useState } from "react";
import PageFore from "./component4/PageFour";
import PageFive from "./component5/PageFive";
import PageSix from "./component6/PageSix";






   

 


function App() {
  const [showModal,setShowModal]=useState(false);
  return (
   <>
   {/* <BasicModal hidden={true}/> */}
  

<div className="App" >


{/* <PageSix/> */}
{/* <PageFive/> */}

<Routes>
<Route path='/one' element={<PageOne/>}/>
<Route path='/two' element={<PageTwo/>}/>
<Route path='/three' element={<PageThree/>} />
<Route path='/four' element={<PageFore/>} />
<Route path='/' element={<PageFive/>} />
<Route path='/signUp' element={<PageSix/>} />
<Route path='*' element={<No/>}/>
</Routes>
</div> 

   </> 
  );


}

export default App;
