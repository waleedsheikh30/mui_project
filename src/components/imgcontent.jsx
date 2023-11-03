import React from 'react'
import pic1 from './images/buisness.jpeg'
import pic2 from './images/socialmedia.jpeg'
import pic3 from './images/resources.jpg'
import pic4 from './images/branding.jpg'

function Imgcontent() {
  return (
    <div className='imgs'>
        <center >
            <img src={pic1} alt="" width={600} height={350} className='img1'/>
            <img src={pic2} alt="" height={350} width={350} className='img1'/>
        </center>
        <div className='spacing'>
            <center>
                <img src={pic3} alt="" height={350} width={350} className='img2'/>
                <img src={pic4} alt="" width={600} height={350} className='img2'/>
            </center>
        </div>    
    </div>
  )
}

export default Imgcontent