import React from 'react'
import Logo from './components/logo'
import './App.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Hcontent from './components/hcontent';
import Bottom from './components/bottom';
import Imgcontent from './components/imgcontent';
import Imgcontent2 from './components/imgcontent2';
import Ready from './components/ready';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Commu from './components/commu';
import Blog from './components/blog';
import Error from './components/error';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/aboutus';

function App() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [val, setVal] = React.useState(0);

  const Change = (eve, newVal) => {
    setVal(newVal);
  };

  return (

  <Router>
    <div>
        <Logo/>

    <div sx={{ width: '100%', bgcolor: 'background.paper' }} >
      <Tabs value={value} onChange={handleChange} centered >
        <Tab label="Home"  style={{letterSpacing: "0.3em" , color: "#000", }} className='link'/>
        <Tab label="About" style={{letterSpacing: "0.3em" , color: "#000"}}/>
        <Tab label="Community"  style={{letterSpacing: "0.3em" , color: "#000"}}/>
        <Tab label="Blog" style={{letterSpacing: "0.3em" , color: "#000"}}/>
        <Tab label="Contact"  to="/contact" style={{letterSpacing: "0.3em" , color: "#000"}}/>
      </Tabs>
    </div>

    <Hcontent/>
    <Bottom/>
    <Imgcontent/>
    <Imgcontent2/>
    <Ready/>
    <Footer/>

    <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/commu" element={<Commu/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Error/>} />
    </Routes>

    </div>
    </Router>
  )
}

export default App