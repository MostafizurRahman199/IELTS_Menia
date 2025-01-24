import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


const ErrorPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white ">
      <div className="md:w-96 text-center p-8 shadow-2xl shadow-[#0052CC] rounded-lg" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-[#0052CC] mb-4" data-aos="zoom-in">Oops!</h1>
        <p className="text-lg text-gray-700 mb-6" data-aos="fade-in">
         This page is not found.
        </p>
      <div className='flex justify-center gap-4'>
      
        <button onClick={() => navigate("/")} className="px-4 py-2 bg-[#0052CC] text-white rounded-2xl hover:bg-[#0052CC]  duration-300 transition-transform hover:scale-105 shadow-2xl">
          Go Home
        </button>
      </div>
      </div>
    </div>
  )
}

export default ErrorPage