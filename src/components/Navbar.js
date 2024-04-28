import React from "react";
import Homeimg from "../images/Homeimg.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const logoutBtn = (e) => {
    e.preventDefault();

    localStorage.clear();

    navigate("/", { replace: true });
  };

  return (
    <nav
      className="flex flex-row items-center justify-between h-16 px-4 bg-gray-800 text-white" // Apply horizontal styles
    >
      <aside className="flex items-center">
        <a href="#">
          <img src={Homeimg} alt="Logo" className="h-10 w-auto mr-4" />  {/* Adjust image size as needed */}
        </a>
        <h4 className="text-[20px] font-medium text-white">STUDENT ASSIST APP</h4>
      </aside>

      <nav className="flex space-x-4">  {/* Add spacing between links */}
        <NavLink
          to="/home"
          className="text-white hover:text-gray-200"
          activeClassName="font-bold underline" // Add active styling
        >
          Home
        </NavLink>
        <NavLink
          to="/mycourses"
          className="text-white hover:text-gray-200"
          activeClassName="font-bold underline"
        >
          My Courses
        </NavLink>
        <NavLink
          to="/jobs"
          className="text-white hover:text-gray-200"
          activeClassName="font-bold underline"
        >
          Job Search
        </NavLink>
        <NavLink
          to="/collab"
          className="text-white hover:text-gray-200"
          activeClassName="font-bold underline"
        >
          Connect
        </NavLink>
        <button
          className="text-white hover:text-gray-200"
          onClick={(e) => logoutBtn(e)}
        >
          Logout
        </button>
      </nav>
    </nav>
  );
};

export default Navbar;
