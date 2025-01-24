import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaUniversity,
  FaUpload,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import Swal from 'sweetalert2';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [studentIdCard, setStudentIdCard] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    // Validate password and confirm password
    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const payload = {
        fullName: formData.fullName,
        phoneNumber: formData.phone,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      // console.log(payload)

      const response = await axios.post(
        "https://api.xampro.org/api/v1/signup",
        payload
      );

      console.log(response)

      if (response.status === 200 || response.status === 201) {
        console.log(response)
        setSuccessMessage("Registration successful!");
        Swal.fire({
          title: 'Registration successful!',
          text: 'Please verify your email.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
          otherInfo:"",
          university:"",

        });
        setStudentIdCard(null);
        setPhoto(null);
       
      } else {
        setErrorMessage("Registration failed. Please try again.");
      }
    } catch (error) {

      Swal.fire({
        title: 'Opp!',
        text:  error.response?.data?.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });

      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-2 bg-white w-full py-4">
      <h2 className="text-3xl font-bold mb-8 text-start">Registration</h2>
      <form className="w-full" onSubmit={handleRegister}>
        {/* Full Name */}
        <div className="mb-2">
          <div className="flex items-center border rounded-lg p-3">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="fullName"
              placeholder="Name"
              className="w-full outline-none"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-2">
          <div className="flex items-center border rounded-lg p-3">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full outline-none"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-2">
          <div className="flex items-center border rounded-lg p-3">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-2">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-2">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3 outline-none"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Upload Student ID Card */}
        <div className="mb-2">
          <div className="border-dashed border-2 border-[#818181] rounded-lg p-3 text-center cursor-pointer">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, setStudentIdCard)}
              />
              {studentIdCard ? (
                <span>{studentIdCard.name}</span>
              ) : (
                <>
                  <FaUpload className="text-gray-400 inline-block mr-2" />
                  <span className="text-[#6E7191]">Upload Student ID Card</span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* Upload Photo */}
        <div className="mb-2">
          <div className="border-dashed border-2 border-[#818181] rounded-lg p-3 text-center cursor-pointer">
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFileChange(e, setPhoto)}
              />
              {photo ? (
                <span>{photo.name}</span>
              ) : (
                <>
                  <FaUpload className="text-gray-400 inline-block mr-2" />
                  <span className="text-[#6E7191]">Upload Photo</span>
                </>
              )}
            </label>
          </div>
        </div>

        {/* University and Other Information */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div className="flex items-center border rounded-lg p-3">
              <FaUniversity className="text-gray-400 mr-2" />
              <input
                type="text"
                name="university"
                placeholder="University"
                className="w-full outline-none"
                value={formData.university}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <div className="flex items-center border rounded-lg p-3">
              <FaUniversity className="text-gray-400 mr-2" />
              <input
                type="text"
                name="otherInfo"
                placeholder="Other Information"
                className="w-full outline-none"
                value={formData.otherInfo}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-[#0052CC] text-white py-3 rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "Registration →"}
        </button>

        {/* Error Message */}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-sm text-center">
            {errorMessage}
          </p>
        )}

        {/* Success Message */}
        {successMessage && (
          <p className="mt-4 text-green-500 text-sm text-center">
            {successMessage}
          </p>
        )}
      </form>

      {/* Already have an account */}
      <p className="mt-6 text-sm text-center">
        Already have an account?{" "}
        <span className="text-blue-600 cursor-pointer">Sign In</span>
      </p>

      {/* Social Login Buttons */}
      <div className="flex justify-center mt-4 gap-4">
        <button className="border flex items-center gap-2 px-8 py-2 rounded-lg text-sm">
          <FcGoogle className="text-gray-500 text-xl" />
          Google
        </button>
        <button className="border flex items-center gap-2 px-8 py-2 rounded-lg text-sm">
          <FaFacebook className="text-blue-600 text-xl" />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
