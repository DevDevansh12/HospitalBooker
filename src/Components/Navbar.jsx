import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#edfffe] shadow-lg">
      <div className="container mx-auto px-5 py-2.5">
        <div className="navbar flex items-center justify-between">
          <div className="logo">
            <h1 className="text-2xl font-bold text-[#125774]">HealthBooker</h1>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#125774]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div
            className={`NavLinks md:flex ${
              isOpen ? "block" : "hidden"
            } w-full md:w-auto absolute md:static top-16 left-0 bg-[#edfffe] md:bg-transparent shadow-md md:shadow-none md:p-0 p-5`}
          >
            <ul className="md:flex md:items-center md:gap-5">
              <li className="py-2 md:py-0">
                <Link to="/" className="block md:inline">
                  Home
                </Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to="/Patientaddmission" className="block md:inline">
                  Patient Admission
                </Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to="/OPD" className="block md:inline">
                  OPD
                </Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to="/About" className="block md:inline">
                  About
                </Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to="/Contact" className="block md:inline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              type="button"
              className="text-white bg-[#125774] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              <Link to="/login">Login</Link>
            </button>
            <button
              type="button"
              className="text-white bg-[#125774] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              <Link to="/Register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
