import React, { useEffect, useState } from "react";
import Logo from "../images/Logo.png";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const [existingUsers, setExistingUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [emailsPresent, setEmailPresent] = useState();

  let navigate = useNavigate();

  var userRole = "";

  useEffect(() => {
    getLists();
  }, []);

  useEffect(() => {
    let emailArr = [];
    let emails = existingUsers.map((item) => {
      emailArr.push(item.email);
    });

    setEmailPresent(emailArr);
  }, [existingUsers]);

  const checkEmailPresent = (email) => {
    for (let i = 0; i < emailsPresent.length; i++) {
      if (emailsPresent[i] == email) {
        return true;
      }
    }
    return false;
  };

  const createNewAccount = (
    userRole,
    firstName,
    lastName,
    phone,
    email,
    pass
  ) => {
    axios
      .post('/db.json', {
        userRole: userRole,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        pass: pass,
      })
      .then((res) => {
        alert("Your account is  created successfully, please login now");
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const submitForm = () => {
    let dropDown = document.getElementById("dropdown");
    let dropDownValue = dropDown.value;

    if (dropDownValue == 0) {
      userRole = "";
    } else if (dropDownValue == 1) {
      userRole = "Admin";
    } else {
      userRole = "Student";
    }

    if (pass == cPass) {
      let firstCheckEmail = checkEmailPresent(email);

      console.log("firstCheckEmail", firstCheckEmail);
      if (firstCheckEmail) {
        alert("You have already registered with this email, please login");
        navigate("/", { replace: true });
      } else {
        createNewAccount(userRole, firstName, lastName, phone, email, pass);

        console.log("Need to create new account");
      }

      console.log("firstCheckEmail", firstCheckEmail);
    } else {
      alert("Your confirmation password is not matched with your password");
    }

    // navigate("/", { replace: true });
    // console.log("after hello");
  };

  const getLists = () => {
    axios
      .get('/db.json')
      .then((res) => {
        setExistingUsers(res.data);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };

  return (
    <div style={{ margin: "100px", borderRadius: "10px" }}>
      <section className="bg-white dark:bg-gray-900">
        <div className=" justify-center min-h-screen">
          <div className="flex justify-center mx-auto">
            <img className="object-scale-down h-20 w-20" src={Logo} alt="" />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Student Assist App
              </h1>

              <div className="mt-6">
                <h1 className="text-gray-500 dark:text-gray-300">
                  Create Your Account
                </h1>
              </div>

              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label for="dropdown">Choose role</label>
                  <select id="dropdown" data-te-select-init>
                    <option value="0">--</option>

                    <option value="1">Admin</option>
                    <option value="2">Student</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last name
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    type="password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Confirm password
                  </label>
                  <input
                    value={cPass}
                    onChange={(e) => setCPass(e.target.value)}
                    type="password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </form>
              <form action="/">
    <input type="submit" value="Sign Up" />
</form>

              <button onclick="window.location.href='https://w3docs.com';">
                

{/*                 
               onClick={submitForm} */}
{/*               
                className="justify-between w-full px-6 py-2 mt-7 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              
                <span>Sign Up </span>
                <NavLink to="/"></NavLink>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                ></svg> */}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
