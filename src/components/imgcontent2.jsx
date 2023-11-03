import React, { useState } from 'react'
import pic1 from './images/img1.jpg'
import pic3 from './images/img3.jpg'
import pic5 from './images/img5.jpeg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function Imgcontent2() {

  const [email , setEmail] = useState('')

  return (
    <div className="bg">
  <div className="fpic">
    <div className="photo-row">
      <div className="photo">
        <img src={pic1} alt="" width={600} height={400} /><br /><br />
        <div className="section1">
          <h2>HOW TO AVOID BURNOUT</h2>
          <h3>BUSINESS // SEPTEMBER 1, 2016</h3>
          <br /><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut tortor interdum, vulputate neque eu, finibus augue. In semper porta ipsum a placerat. Quisque laoreet efficitur metus, ut eleifend turpis porttitor non. Nullam pretium, leo a euismod semper, dolor purus efficitur mi, ut dapibus mauris metus at felis.</p>
          <br /><br /><br />
          <button className='btn2'>Read More</button>
        </div>
      </div>
      <div className="photo">
        <img src={pic5} alt="" width={290} height={250} /><br />
        <div className="section2">
          <h5>ABOUT ME</h5>
          <br />
          <p>Praesent et nisl sit amet risus <br /> lobortis fermentum. Duis eu nisl nisl. Curabitur tincidunt velit odio, in malesuada purus hendrerit in. </p>
           <div className='icons'>
                <FacebookIcon className='fb'/>
                <TwitterIcon className='twi'/>
                <InstagramIcon className='insta'/>
           </div>
           
        </div>
            <div className='form'>
                <h1>Stay Updated!</h1>
                <p>* Indicates required field</p>
                <label htmlFor="Email" className='email'><span>Email*</span> <br /><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label><br />
                <button className='btn2'>Subscribe</button>
            </div>
      </div>
    </div>
    <div className="photo-row3">
      <img src={pic3} alt="" width={600} height={400} className='pic3'/>
      <div className="section3">
        <h2>5 TOP RESOURCES: BOOKKEEPING</h2>
        <h3>BUSINESS // SEPTEMBER 1, 2016</h3>
        <br /><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut tortor interdum, vulputate neque eu, finibus augue. In semper porta ipsum a placerat. Quisque laoreet efficitur metus, ut eleifend turpis porttitor non. Nullam pretium, leo a euismod semper, dolor purus efficitur mi, ut dapibus mauris metus at felis.</p>
        <center><button className='btn3'>Read More</button></center>

      </div>
    </div>
  </div>
</div>

  )
}

export default Imgcontent2