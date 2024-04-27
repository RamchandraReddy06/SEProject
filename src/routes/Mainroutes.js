import React from 'react';
import { Route,Routes } from 'react-router';
import Collab from '../components/Collab';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Jobs from '../components/Jobs';
import Mycourses from '../components/Mycourses';
import Login from '../components/Login';
import  Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import SOP from '../components/courseDetail/SOP';
import CN from '../components/courseDetail/CN';
import SE from '../components/courseDetail/SE';


const Mainroutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="home" element={<Home />} />
        <Route path="collab" element={<Collab/>} />
        <Route path="jobs" element={<Jobs/>} />
        <Route path="mycourses" element={<Mycourses/>} />
        <Route path="navbar" element={<Navbar/>} />
        <Route path="SOP" element={<SOP/>} />
        <Route path="CN" element={<CN/>} />
        <Route path="SE" element={<SE/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default Mainroutes
