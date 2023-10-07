import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 600,
  bgcolor: '#1d1d1d',
  borderRadius: "23px",
  p: 4,
};

export default function BasicModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography style={{ textAlign: "center", color: "white", fontFamily: "Poppins", fontWeight: "800" }}>
          Create new post
        </Typography>
        <hr style={{
          height: "2px",
          backgroundColor: '#8d8d8d',
          border: 'none',
        }}></hr>
        <br></br>
        <label htmlFor='inputt' style={{ textAlign: "left", color: "white", fontFamily: "Poppins", borderRadius: "23px", fontWeight: "300" }}>Title</label>
        <br></br>
        <input name="inputt" style={{ width: "100%", height: "35px", borderRadius: "10px", backgroundColor: '#8d8d8d', border: "solid 2px white" }}></input>
        <br></br>
        <br></br>

        <label htmlFor='inputt' style={{ textAlign: "left", color: "white", fontFamily: "Poppins", borderRadius: "23px", fontWeight: "300" }}>Body</label>
        <br></br>
        <input name="inputt" style={{ width: "100%", height: "150px", borderRadius: "10px", backgroundColor: '#8d8d8d', border: "solid 2px white" }}></input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" disableElevation style={{ borderRadius: "20px", textTransform: "none", margin: "0px 40px " }} >
            Choose image
          </Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" disableElevation style={{ borderRadius: "20px", textTransform: "none" }} onClick={onClose}>
            Post
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
