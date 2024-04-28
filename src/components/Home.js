import React from "react";
import Navbar from "./Navbar";
import { Profile_Pic } from "../images/Profile_Pic.jpeg";
import Uni from "../images/graduation.png";
import Fut from "../images/magic-ball.png";
import Prod from "../images/productivity.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [userRole, setUserRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    let userRole = localStorage.getItem("userRole");
    let firstName = localStorage.getItem("firstName");
    let lastName = localStorage.getItem("lastName");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");

    setUserRole(userRole);
    setFirstName(firstName);
    setLastName(lastName);
    setPhone(phone);
    setEmail(email);
  }, [userRole]);

  return (
    <div>
      <Navbar />
      <div class="tileName" style={{ display: "flex", marginTop: "10px" }}>
        <div
          style={{ margin: "auto" }}
          class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-black/30"
        >
          <img
            class="object-cover object-center w-full h-full"
            src={Uni}
            alt="avatar"
          />

         
          <div class="px-6 py-4">
            <NavLink to="/Unisphere" class="text-lg font-bold dark:text-white">
              <u>UniSphere</u>
            </NavLink>

            <p class="py-2 text-gray-700 dark:text-gray-400">The UniSphere system is designed to help students with navigating and enhancing their academic and professional pursuits.</p>
            
          </div>
        </div>

        <div
          style={{ margin: "auto" }}
          class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-black/30"
        >
          <img
            class="object-cover object-center w-full h-full"
            src={Prod}
            alt="avatar"
          />

        
          <div class="px-6 py-4">
            <NavLink to="/Prodsphere" class="text-lg font-bold dark:text-white">
              <u>ProdSphere</u>
            </NavLink>


            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              
              <h1 class="px-2 text-sm">ProdSphere is geared towards enhancing students' productivity and organization. This module provides features such as planner calendar, reminders, goal setting frameworks, connecting with other users- workspace (text based chat groups), etc. this module aims to help students plan and achieve their deadlines and goals.</h1>
            </div>
                    
            
          </div>
          </div>
          <div
            style={{ margin: "auto" }}
            class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-black/30"
          >
            <img
              class="object-cover object-center w-full h-full"
              src={Fut}
              alt="avatar"
            />

          
            <div class="px-6 py-4">
              <NavLink to="/Futuresphere" class="text-lg font-bold dark:text-white">
                <u>FutureSphere</u>
              </NavLink>

              <p class="py-2 text-gray-700 dark:text-gray-400">FutureSphere focuses on helping students plan and prepare for their future career paths. This module presents and recommends grad schools, career guidance, internship services, and job search assistance. The recommendations are based on student grades, major, and interests. The student also has a search and filter option.</p>

                           
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Home;
