import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const MobileNavbar = ({ isOpen, onClose, token, handleLogout, userName }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white z-20 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 w-3/4 shadow-lg`}
    >
      <div className="p-4">
        {/* Close Button */}
        <button className="text-black text-2xl mb-4" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-start space-y-4">
          <p className="text-black hover:text-blue-500">
            Hi, {userName}
          </p>
          <NavLink
            to="/Exam Package"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold"
                : "text-black hover:text-blue-500"
            }
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
          >
            Create Package
          </NavLink>

          {/* Divider */}
          <div className="border-t border-gray-200 w-full my-2"></div>

          {/* Dashboard or Logout */}
          {token ? (
            <>
              <NavLink
                to="/dashboard"
                className="text-black hover:text-blue-500"
                onClick={onClose}
              >
                Dashboard
              </NavLink>
              <button
                className="text-black hover:text-blue-500"
                onClick={() => {
                  handleLogout();
                  onClose();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login-register"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-black hover:text-blue-500"
              }
              onClick={onClose}
            >
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
