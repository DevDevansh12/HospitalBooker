import React from "react";
// import Home from "../Pages/Home";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#edfffe] shadow-lg">
        <div className="container mx-auto px-5 py-2.5">
          <div className="navbar flex items-center justify-between">
            <div className="logo">
              <h1 className="text-2xl font-bold text-[#125774]">
                HealthBooker
              </h1>
            </div>
            <div className="NavLinks">
              <ul>
                <li className="inline mr-5">
                  <Link to="/">Home</Link>
                </li>
                <li className="inline mr-5">
                  <Link to="/Appoinments">Appoinments</Link>
                </li>
                <li className="inline mr-5">
                  <Link to="/OPD">OPD</Link>
                </li>
                <li className="inline mr-5">
                  <Link to="/About">About</Link>
                </li>
                <li className="inline mr-5">
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="button">
              <button
                type="button"
                class="text-white bg-[#125774] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none"
              >
                Login
              </button>
              <button
                type="button"
                class="text-white bg-[#125774] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
