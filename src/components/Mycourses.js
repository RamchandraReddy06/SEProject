import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import CM from "../images/course-materials.jpg";
import UR from "../images/college.jpg";
import SOP from "../images/SOP.jpg";

const Mycourses = () => {
  return (
    <div style={{display:"flex"}}>
      <Navbar/>
      <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-black/30"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={CM}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          <h1 class="mx-3 text-lg font-semibold text-white">Course Materials</h1>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/CN" class="text-lg font-bold dark:text-white">
            <u>Computer Network 1: Fundamentals</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            Edward Chlebus
          </p>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/SOP" class="text-lg font-bold dark:text-white">
            <u>Science of Programming</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
          James Sasaki
          </p>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/SE" class="text-lg font-bold dark:text-white">
            <u>Software Engineering 1</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
          Dennis Hood
          </p>
        </div>
      </div>
  
  {/* uni resorse */}

  <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-black/30"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={CM}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          <h1 class="mx-3 text-lg font-semibold text-white">Course Materials</h1>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/CN" class="text-lg font-bold dark:text-white">
            <u>Computer Network 1: Fundamentals</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            Edward Chlebus
          </p>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/SOP" class="text-lg font-bold dark:text-white">
            <u>Science of Programming</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
          James Sasaki
          </p>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/SE" class="text-lg font-bold dark:text-white">
            <u>Software Engineering 1</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
          Dennis Hood
          </p>
        </div>
      </div>

  {/* support services */}

  <div
        style={{ margin: "auto" }}
        class="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl dark:hover:shadow-black/30"
      >
        <img
          class="object-cover object-center w-full h-full"
          src={CM}
          alt="avatar"
        />

        <div class="flex items-center px-6 py-3 bg-gray-900">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          <h1 class="mx-3 text-lg font-semibold text-white">Course Materials</h1>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/CN" class="text-lg font-bold dark:text-white">
            <u>Computer Network 1: Fundamentals</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            Edward Chlebus
          </p>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/SOP" class="text-lg font-bold dark:text-white">
            <u>Science of Programming</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
          James Sasaki
          </p>
        </div>

        <div class="px-6 py-4">
          <NavLink to="/SE" class="text-lg font-bold dark:text-white">
            <u>Software Engineering 1</u>
          </NavLink>

          <p class="py-2 text-gray-700 dark:text-gray-400">
          Dennis Hood
          </p>
        </div>
      </div>
  
  </div>
  )
}

export default Mycourses