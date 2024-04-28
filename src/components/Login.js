import React, { useEffect, useState } from "react";
import Homeimg from "../images/Homeimg.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [existingUsers, setExistingUsers] = useState([]);

  let navigate = useNavigate();

  const checkUserDetailsInDb = () => {
    axios
      .get('/db.json')
      .then((res) => {
        console.log(res);
        setExistingUsers(res.data);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };

  useEffect(() => {
    checkUserDetailsInDb();
  }, []);

  const checkEmailAndPassword = () => {
    for (let i = 0; i < existingUsers.length; i++) {
      if (existingUsers[i].email == email && existingUsers[i].pass == pass) {
        localStorage.setItem("userRole", existingUsers[i].userRole);
        localStorage.setItem("firstName", existingUsers[i].firstName);
        localStorage.setItem("lastName", existingUsers[i].lastName);
        localStorage.setItem("phone", existingUsers[i].phone);
        localStorage.setItem("email", existingUsers[i].email);

        return true;
      }
    }
    return false;
  };

  const loginBtn = (e) => {
    e.preventDefault();
    
    // let result = checkEmailAndPassword(email, pass);
    // console.log('arpit', result);
    
    // if (result) {
      navigate("/home", { replace: true });
    // } else {
    //   alert("You have not registered yet, please register first");
    // }
  };

  return (
    <div style={{ margin: "50px" }}>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img className="object-scale-down h-20 w-20" src={Homeimg} alt="" />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Student Assist App
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login or create account
          </p>

          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <NavLink
                to="/forgotpassword"
                className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
              >
                Forget Password?
              </NavLink>
              <button
                onClick={(e) => loginBtn(e)}
                style={{
                  backgroundColor: "#4285F4" /* Blue */,
                  color: "#fff" /* White */,
                  padding: "5px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Don't have an account?{" "}
          </span>

          <NavLink
            to="/signup"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
