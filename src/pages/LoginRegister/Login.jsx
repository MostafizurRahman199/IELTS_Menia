



// import React, { useState } from "react";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage(null);

//     try {
//       const response = await axios.post("https://api.xampro.org/api/v1/login", {
//         email: formData.email,
//         password: formData.password,
//       });

      
//       if (response.status === 200 || response.status === 201) {
//         console.log(response.data)
//         const token = response.data.token;

//         console.log(token)


//         setSuccessMessage("Login successful!");
//         setFormData({
//           email: "",
//           password: "",
//         });
//       } else {
//         setErrorMessage("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="p-2 bg-white w-full py-4">
//       <h2 className="text-3xl font-bold mb-8 text-start">Log In</h2>
//       <form className="w-full" onSubmit={handleLogin}>
//         {/* Email */}
//         <div className="mb-4">
//           <div className="flex items-center border rounded-lg p-3">
//             <FaEnvelope className="text-gray-400 mr-2" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               className="w-full outline-none"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <div className="flex items-center border rounded-lg p-3">
//             <FaLock className="text-gray-400 mr-2" />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="w-full outline-none"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         {/* Forget Password */}
//         <div className="mb-6 text-start">
//           <span className="text-blue-600 text-sm cursor-pointer">
//             Forgot Password?
//           </span>
//         </div>

//         {/* Login Button */}
//         <button
//           type="submit"
//           className="w-full bg-[#0052CC] text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           disabled={loading}
//         >
//           {loading ? "Logging in..." : "Log In →"}
//         </button>

//         {/* Error Message */}
//         {errorMessage && (
//           <p className="mt-4 text-red-500 text-sm text-center">
//             {errorMessage}
//           </p>
//         )}

//         {/* Success Message */}
//         {successMessage && (
//           <p className="mt-4 text-green-500 text-sm text-center">
//             {successMessage}
//           </p>
//         )}
//       </form>

//       {/* New Account */}
//       <p className="mt-6 text-sm text-center">
//         Need to create an account?{" "}
//         <span className="text-blue-600 cursor-pointer">Sign Up</span>
//       </p>

//       {/* Social Login Buttons */}
//       <div className="flex justify-center mt-4 gap-4">
//         <button className="border flex items-center gap-2 px-8 py-2 rounded-lg text-sm">
//           <FcGoogle className="text-gray-500 text-xl" />
//           Google
//         </button>
//         <button className="border flex items-center gap-2 px-8 py-2 rounded-lg text-sm">
//           <FaFacebook className="text-blue-600 text-xl" />
//           Facebook
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://api.xampro.org/api/v1/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        console.log(response.data)

        // Save the token to localStorage
        localStorage.setItem("token", token);

        // Success alert
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 500,
        }).then(() => {
           const redirectTo = location.state?.from || "/"; 
          navigate(redirectTo);
        });


      } else {
        // Error alert
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please check your credentials.",
          confirmButtonText: "OK",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      // Error alert for API or validation errors
      Swal.fire({
        icon: "error",
        title: "An Error Occurred",
        text:
          error.response?.data?.message ||
          "Unable to process your request. Please try again later.",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-2 bg-white w-full py-4">
      <h2 className="text-3xl font-bold mb-8 text-start">Log In</h2>
      <form className="w-full" onSubmit={handleLogin}>
        {/* Email */}
        <div className="mb-4">
          <div className="flex items-center border rounded-lg p-3">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <div className="flex items-center border rounded-lg p-3">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Forget Password */}
        <div className="mb-6 text-start">
          <span className="text-blue-600 text-sm cursor-pointer">
            Forgot Password?
          </span>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-[#0052CC] text-white py-3 rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In →"}
        </button>
      </form>

      {/* New Account */}
      <p className="mt-6 text-sm text-center">
        Need to create an account?{" "}
        <span className="text-blue-600 cursor-pointer">Sign Up</span>
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

export default Login;
