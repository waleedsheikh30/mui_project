import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer' style={{padding: "65px", backgroundColor: "#171717", color: "#fff"}}>
        <div className='ficons' style={{textAlign: "center", cursor: "pointer"}}>
            <FacebookIcon className='fb'/>
            <TwitterIcon className='twi'/>
            <InstagramIcon className='insta'/>
        </div>
        <div className='copyright' style={{textAlign: "center", lineHeight: "1cm"}}>
            <p>Copyright 2023 Upstart   |   All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer