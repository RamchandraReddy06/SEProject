import React from "react";
import Navbar from "./Navbar";
import { NavLink } from 'react-router-dom'
import Profile_Pic from "../images/Profile_Pic.jpeg";
import Footer from "./Footer";
import CP from "../images/chat.png"
import PP from "../images/planner.png"

const Prodsphere = () => {
  return (
    <div >
      <Navbar/>
      <div class="tileName" style={{display:"flex", marginTop:"10px"}}>

        {/* chat room*/}

      <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-black/30"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={CP}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          <h1 class="mx-3 text-lg font-semibold text-white">Chat Rooms</h1>

          <div class="px-6 py-4">
          <NavLink to="/Collab" class="text-lg font-bold dark:text-grey">
            <u>Join Chats</u>
          </NavLink>
          </div>
        </div>
        </div>

    
       {/* planner services -  if possible */}

       <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-black/30"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={PP}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          <h1 class="mx-3 text-lg font-semibold text-white">Planner</h1>


          <div class="px-6 py-4">
          <NavLink to="/Collab" class="text-lg font-bold dark:text-grey">
            <u>Enter Planner</u>
          </NavLink>
          </div>
        </div>
        </div>

        
        </div>
        </div>


  )
}

export default Prodsphere

