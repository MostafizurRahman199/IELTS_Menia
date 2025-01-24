import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import rightSideImage from "../../../public/parent.png";
import logoMaac from "../../../public/logoMaac.png";
import vector1 from "../../../public/vector1.png";
import vector2 from "../../../public/vector2.png";
import vector3 from "../../../public/vector3.png";
import bgLogin from "../../../public/bgLogin.png";
import { Link } from "react-router-dom";

const Parent = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register

  return (
    <div className="grid grid-col-1 md:grid md:grid-cols-2 min-h-screen ">
     
      {/* Left Side */}
      <div
        className="bg-[#0052CC] flex  justify-center items-end w-full"
        style={{
          backgroundImage: `url(${bgLogin})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
         
        }}
      >
        {/* Logo */}
        <img src={vector3} alt="Logo" className="w-[80%] z-10" />
      </div>


    

      {/* Right Side */}
      <div className=" w-10/12 mx-auto bg-white ">
         
          <Link to={"/"} className="flex justify-end my-8">
            <img src={logoMaac} alt="Right Side Image" className="w-28" />
          </Link>
        
       <div className="max-w-md mx-auto flex flex-col justify-center items-center">
          <div className="w-full">
              

              {/* Toggle Buttons */}
              <div className="flex w-full justify-center my-6">
              
                <button
                  className={`w-1/2 text-lg  px-6 py-2 rounded-md transition-colors ${
                    isLogin ? "bg-[#0052cc] text-white " : "text-black bg-[#f3f8ff]"
                  }`}
                  onClick={() => setIsLogin(true)}
                >
                  Log In
                </button>

                <button
                  className={`w-1/2 text-lg  px-6 py-2 rounded-md transition-colors ${
                    !isLogin ? "bg-[#0052cc] text-white" : "text-black bg-[#f3f8ff]"
                  }`}
                  onClick={() => setIsLogin(false)}
                >
                  Registration
                </button>
                
              </div>
            </div>
            

            <div className="w-full flex flex-col justify-center items-center">
              {/* Render Login or Register */}
              {isLogin ? <Login /> : <Register />}
            </div>

       </div>


      </div>
    </div>
  );
};

export default Parent;



