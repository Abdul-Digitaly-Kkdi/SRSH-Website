import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function Appoinment() {
  return (
    <>
    {/* Contact with us  & Book an Apponment */}
<div className="w-10/12 mx-auto">
<div className="flex flex-col lg:flex-row  px-4 py-10 gap-10">
      
      

      {/* Right Side - Appointment Form */}
      <div className="w-full lg:w-6/12 shadow-lg px-5">
        <h2 className="text-2xl font-semibold mb-6 text-cyan-800">Book Your Appointment</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-13">
            <select className="bg-gray-100 p-3 rounded-md w-full outline-0">
              <option>Select</option>
              <option>Urology</option>
              <option>Orthopedics</option>
              <option>Critical Care</option>
              <option>General Surgery</option>
              <option>General Medicine</option>
              <option>Clinical Oncology</option>
              <option>GI & HPB Oncology</option>
              <option>Surgical Gastroenterology</option>
              <option>Medical Gastroenterology</option>
            </select>
            <input type="text" placeholder="Name" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
            <input type="email" placeholder="Email" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
            <input type="tel" placeholder="Number" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
            <input type="date" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
            <input type="time" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
          </div>
          <div className="py-5">
          <button type="submit" className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full mt-2 cursor-pointer">
            Book a Appointment <FiArrowUpRight />
          </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  )
}

export default Appoinment