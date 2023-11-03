import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import DiamondIcon from '@mui/icons-material/Diamond';
import { Button } from '@mui/material';

function Ready() {
  return (
<div className='main'>
        <div className='text'>
            <h1>READY TO <br /> ROCK ​YOUR BUSINESS?</h1>
            <p>Join the <span> Upstart  Community </span> & connect with <br /> other savvy entrepreneurs </p>
        </div>
        <br /><br />
        <hr />
        <br /><br />
    <div className='all'> 
        <div className='heart'>
           <center> <FavoriteBorderIcon className='icon1' style={{fontSize: "40px"}}/></center>
            <br />
            <p>Connect with others and get great <br /> <span> advice! </span></p>
        </div>
        
        <div className='emoji'>
        <center><SentimentSatisfiedAltIcon className='icon2' style={{fontSize: "40px"}}/></center>
            <br />
            <p>Need support? Need to rant? We're <br />  <span> here for you!</span></p>
        </div>
        <div className='diamond'>
            <center><DiamondIcon className='icon3' style={{fontSize: "40px"}}/></center>
            <br />
            <p>Exclusive discounts & offers - for <br /> <span> community members only!</span></p>
        </div>

    </div>   
    <center><Button variant="contained" style={{ marginTop: "60px", borderRadius: "1px", backgroundColor: 'black', letterSpacing: "0.3em", fontFamily: 'Arial, Helvetica, sans-serif', padding: "13px" }}><span>Join the community now</span></Button></center></div>
  )
}

export default Ready