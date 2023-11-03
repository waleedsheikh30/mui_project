import React from 'react'
import pic from './images/leaf.jpg'
import { Button } from '@mui/material'
// import styled from '@emotion/styled'


function Hcontent() {
    return (
        <div className='content'>
            <img src={pic} alt="aesthatic" width={1349} height={600} />
            <div className='otherdiv'>
                <p>BUSINESS  //  09.01.16</p>
                <h1>HOW TO AVOID
                    BURNOUT
                </h1>
                <center><Button variant="contained" style={{ marginTop: "15px", borderRadius: "1px", backgroundColor: 'black', letterSpacing: "0.3em", fontFamily: 'Arial, Helvetica, sans-serif' }}><span>Read More</span></Button></center>
            </div>
        </div>

    )
}

export default Hcontent