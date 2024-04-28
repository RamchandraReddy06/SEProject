
import React from 'react';
import { Route,Routes } from 'react-router';
import Collab from '../components/Collab';
import Home from '../components/Home';
import SignUp from '../components/SignUp';
import Jobs from '../components/Jobs';
import Education from '../components/Education';
import Mycourses from '../components/Mycourses';
import Login from '../components/Login';
import  Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import Unisphere from '../components/Unisphere';
import Futuresphere from '../components/Futuresphere';
import Prodsphere from '../components/Prodsphere';
import Header from '../components/Header';

import CN from '../components/courseDetail/CN';
import SOP from '../components/courseDetail/SOP';
import SE from '../components/courseDetail/SE';

// mycourse - unisphere
// 


const Mainroutes = () => {
  return (
    <div style={{backgroundColor:"antiquewhite"}}>
      <Routes>
                <Route path="/" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="home" element={<Home />} />
                <Route path="collab" element={<Collab />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="education" element={<Education />} />
                <Route path="mycourses" element={<Mycourses />} />
                <Route path="navbar" element={<Navbar />} />
                <Route path="unisphere" element={<Unisphere />} />
                <Route path="futuresphere" element={<Futuresphere />} />
                <Route path="prodsphere" element={<Prodsphere/>} />
                <Route path="cn" element={<CN/>} />
                <Route path="sop" element={<SOP/>} />
                <Route path="se" element={<SE/>} />
      </Routes>
      <Footer />   
    </div>
  );
};

export default Mainroutes