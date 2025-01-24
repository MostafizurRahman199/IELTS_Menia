
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import { FaAngleRight, FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import logoMaac from "../../../public/logoMaac.png";
import MobileNavbar from "./MobileNavbar";
import { FaAngleDown } from "react-icons/fa6";


const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    Swal.fire({
      title: "Logged Out",
      text: "You have successfully logged out.",
      icon: "success",
      showConfirmButton: false,
      timer: 500,
    });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    setToken(storedToken);
    setUserName(userName);

  }, []);

  return (
    <header className="fixed z-50 bg-white shadow-sm p-4 w-full">
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
            <Link
              to={"/cart-page"}
              className="px-4 border-r border-l border-gray-300"
            >
              <ShoppingCart />
            </Link>

            {/* User Profile */}
            {token ? (
              <div className="relative transition-all duration-300">
                <div
                  className="flex items-center space-x-2 cursor-pointer transition-all duration-300"
                  onClick={toggleDropdown}
                >
                  <img
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="User"
                    className="h-8 w-8 rounded-full border"
                  />
                  <div className="flex items-center gap-1 transition-all duration-300">
                    <span className="text-black">{userName?.slice(0,12)}</span>
                    {
                      dropdownOpen === true ? <FaAngleDown /> : <FaAngleRight />
                    }
                  </div>
                </div>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-300">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-blue-500 font-bold bg-gray-100"
                          : "block px-4 py-2 text-black hover:bg-gray-100 rounded-t-2xl"
                      }
                    >
                      Dashboard
                    </NavLink>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 rounded-b-2xl"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to="/login-register"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-bold"
                    : "text-black hover:text-blue-500"
                }
              >
                Login
              </NavLink>
            )}
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
      <MobileNavbar
        userName={userName}
        isOpen={mobileNavOpen}
        onClose={toggleMobileNav}
        token={token}
        handleLogout={handleLogout}
      />
    </header>
  );
};

export default Header;

