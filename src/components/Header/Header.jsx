// src/components/Header/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoMaac from "../../../public/logoMaac.png";
import { ShoppingCart } from './ShoppingCart';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";




const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-sm p-4 w-10/12 mx-auto">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoMaac} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center gap-4">
          {/* Navigation Links */}
          <nav className="hidden md:flex gap-4">
            <div className='flex items-center gap-1'>
            <NavLink
              to="/exam-packages"
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
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <div className="px-4 border-r border-l border-gray-300">
              <ShoppingCart />
            </div>

            {/* User Profile */}
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="User"
                  className="h-8 w-8 rounded-full border"
                />
               <div className='flex items-center gap-1'>
               <span className="text-black">Esther</span>
                <FaAngleDown />
               </div>
              </div>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-2xl shadow-lg">
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
                    onClick={() => alert('Logout functionality')}
                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 rounded-2xl"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
