import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Img from '../component1/pic/Img.png';
import { Link } from "react-router-dom";
import man from "../component1/pic/man.png";
import BasicModal from '../BasicModal';
import { useEffect } from 'react';

let dex = -1;

const ss = {
  backgroundColor: "black",
  color: "white",
  fontFamily: 'Poppins'
};

function whatIcon(index) {
  let array2 = [
    <HomeIcon style={ss} />,
    <SearchIcon style={ss} />,
    <ExploreIcon style={ss} />,
    <SlideshowIcon style={ss} />,
    <ChatIcon style={ss} />,
    <FavoriteBorderIcon style={ss} />,
    <AddCircleOutlineIcon style={ss} />,
    <img src={man} style={{ width: "25px", borderRadius: "50%" }} />,
    <MenuIcon style={ss} />
  ];
   return array2[index];

}

function where(text) {
  if (text === "Home") return '/one';
  if (text === "Explore") return '/two';
  if (text === "Messages") return '/three';
  if (text === "Zayn shawahna") return '/four';
}

export default function ResponsiveDrawer(s) {
  const [open, setOpen] = React.useState(false);
  const [isModalOpen, setModalOpen] = React.useState(false); 


  function handleCreateClick() {
    setModalOpen(true); 
  }


function handelChage(){


  setOpen(true);
}

  return (
    <div style={{ backgroundColor: 'black', marginLeft: "10%", marginRight: "4%",  height: "5000px",borderRight: "solid 2px #1d1d1d" }}>
      <div style={{ backgroundColor: "black" }}>
        <br />
        <img src={Img} style={{ width: 130, height: 40, backgroundColor: "black", marginTop: "13px", marginLeft: "20px", marginBottom: "5px", float: "left" }} />

        <Link to={where('Home')} style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={0} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(0)}
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={where('Search')} style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={1} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(1)}
              </ListItemIcon>
              <ListItemText primary='Search' />
            </ListItemButton>
          </ListItem>
        </Link>
       
        <Link to={where('Explore')} style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={2} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(2)}
              </ListItemIcon>
              <ListItemText primary='Explore' />
            </ListItemButton>
          </ListItem>
        </Link>
               
        <Link to={where('Reels')} style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={3} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(3)}
              </ListItemIcon>
              <ListItemText primary='Reels'/>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={where('Messages')} style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={4} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(4)}
              </ListItemIcon>
              <ListItemText primary='Messages' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={where('Notification')} style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={5} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(5)}
              </ListItemIcon>
              <ListItemText primary='Notification' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={where('Create')} style={{ textDecoration: "none", color: "white" }}  onClick={handleCreateClick} >
          <ListItem key={6} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(6)}
              </ListItemIcon>
              <ListItemText primary='Create' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={where('Zayn shawahna')} style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={7} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(7)}
              </ListItemIcon>
              <ListItemText primary='Zayn shawahna' />
            </ListItemButton>
          </ListItem>
        </Link>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>
 <br>
 </br>

        <Link to={where('Menu')} style={{ textDecoration: "none", color: "white" }}>
          <ListItem key={8} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {whatIcon(8)}
              </ListItemIcon>
              <ListItemText primary='Menu' />
            </ListItemButton>
          </ListItem>
        </Link>
      </div>
      
      <BasicModal open={isModalOpen} onClose={() => setModalOpen(false)} /> {/* Pass the state to BasicModal */}
    
    </div>
  );
}
