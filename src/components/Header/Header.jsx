import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoMaac from "../../../public/logoMaac.png";
import { ShoppingCart } from "./ShoppingCart";
import { FaAngleDown, FaAngleRight, FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [token, setToken] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

const handleLogout = () => {
  localStorage.removeItem('token');
  setToken("");
  // SweetAlert2 notification for successful logout
  Swal.fire({
    title: 'Logged Out',
    text: 'You have successfully logged out.',
    icon: 'success',
    showConfirmButton: false,
    timer: 500,
  });
}


useEffect(()=>{
  const token = localStorage.getItem('token');
  setToken(token);
},[token])

  return (
    <header className="fixed z-50  bg-white shadow-sm p-4 w-full ">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="flex items-center space-x-2">
          <img src={logoMaac} alt="Logo" className="h-auto w-24" />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-4">
            <div className="flex items-center gap-1">
              <NavLink
                to="/Exam Package"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                Exam Packages
              </NavLink>
              <FaAngleRight />
            </div>


              <div className="flex items-center gap-1">

            <NavLink
              to="/free-test"
              className={({ isActive }) =>
                isActive
              ? "text-blue-500 font-bold"
              : "text-black hover:text-blue-500"
            }
            >
              Free Test
            </NavLink>
            <FaAngleRight />
              </div>

              <div className="flex items-center gap-1">

            <NavLink
              to="/package-creation"
              className={({ isActive }) =>
                isActive
              ? "text-blue-500 font-bold"
              : "text-black hover:text-blue-500"
            }
            >
              Create Package
            </NavLink>
            <FaAngleRight />
              </div>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
           
           
            <Link to={"/cart-page"} className="px-4 border-r border-l border-gray-300">
              <ShoppingCart />
            </Link>

            {/* User Profile */}
           {
            token &&  <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="User"
                className="h-8 w-8 rounded-full border"
              />
              <div className="flex items-center gap-1">
                <span className="text-black">Esther</span>
                <FaAngleDown />
              </div>
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-blue-500 font-bold bg-gray-100"
                      : "block px-4 py-2 text-black hover:bg-gray-100 rounded-2xl"
                  }
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 rounded-2xl"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

           }

           {
            !token &&   <NavLink
            to="/login-register"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-black hover:text-blue-500"
            }
          >
            Login
          </NavLink>
           }

          </div>
        </div>

        {/* Mobile Navbar Toggle */}
        <button
          className="md:hidden text-black text-xl"
          onClick={toggleMobileNav}
        >
          {mobileNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-20 transform ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-3/4 shadow-lg`}
      >
        <div className="p-4">
          <button
            className="text-black text-2xl mb-4"
            onClick={toggleMobileNav}
          >
            <FaTimes />
          </button>
          <nav className="flex flex-col items-start space-y-4">
            <NavLink
              to="/package-creation"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-black hover:text-blue-500"
              }
              onClick={toggleMobileNav}
            >
              Exam Packages
            </NavLink>
            <NavLink
              to="/free-test"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-black hover:text-blue-500"
              }
              onClick={toggleMobileNav}
            >
              Free Test
            </NavLink>
            <NavLink
              to="/package-creation"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-black hover:text-blue-500"
              }
              onClick={toggleMobileNav}
            >
              Create Package
            </NavLink>
            <div className="border-t border-gray-200 w-full my-2"></div>
            <NavLink
              to="/dashboard"
              className="text-black hover:text-blue-500"
              onClick={toggleMobileNav}
            >
              Dashboard
            </NavLink>
            <button
              className="text-black hover:text-blue-500"
              onClick={() => {
                alert("Logout functionality");
                toggleMobileNav();
              }}
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
