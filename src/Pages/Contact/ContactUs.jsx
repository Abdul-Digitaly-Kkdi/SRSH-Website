import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";

function ContactUs() {
  return (

    <>
        {/* Contact with us  & Book an Apponment */}
    <div className="w-10/12 mx-auto">
    <div className="flex flex-col lg:flex-row  px-4 py-10 gap-10">
          {/* Left Side - Contact Form */}
          <div className="w-full lg:w-6/12 shadow-lg px-5">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-800">Contact with us</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
                <input type="text" placeholder="Last Name" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
                <input type="email" placeholder="Enter Your Email" className="bg-gray-100 p-3 outline-0 rounded-md w-full" />
                <input type="tel" placeholder="Enter Number" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
              </div>
              <textarea rows="4" placeholder="Enter Your Message" className="bg-gray-100 p-3 rounded-md outline-0 w-full" />
              <div className="py-5">
              <button type="submit" className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full mt-2 cursor-pointer">
                Submit <FiArrowUpRight />
              </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-6/12 shadow-lg px-2 flex justify-start items-center ">
            
            {/* <div className='flex flex-col justify-center items-center gap-5'>
                <p className='text-2xl font-semibold text-cyan-800'>Follow Us On :</p>
                <div className='flex justify-center items-center gap-5'>
                <div className='p-3 bg-pink-200 rounded-xl'>
                    <FaFacebookF size={20} className='text-pink-500'/>
                </div>
                <div className='p-3 bg-pink-200 rounded-xl'>
                    <FaInstagram size={20} className='text-pink-500'/>
                </div>

<div className='p-3 bg-pink-200 rounded-xl'>
                    <FaYoutube size={20} className='text-pink-500'/>
                </div>
                
                </div>
            </div> */}

<div className="lg:w-full grid grid-cols-1 sm:grid-cols-2 px-5 md:px-2 gap-8 md:gap-25">
            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFE4E6] p-2 rounded">
                {/* Replace with icon */}
                <MdOutlineMail size={30} className="text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold text-cyan-800 text-xl">Email</h4>
                <p className="text-lg text-gray-700">
                  sriramakrishnahr@gmail.com
                </p>
              </div>
            </div>

            {/* Contact No */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFE4E6] p-2 rounded">
                <MdOutlineCall size={30} className="text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold text-cyan-800 text-xl">
                  Ambulance
                </h4>
                <p className="text-lg text-gray-700">908 | 700 | 6068</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFE4E6] p-2 rounded">
                <MdOutlineLocationOn size={30} className="text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold text-cyan-800 text-xl">Address</h4>
                <p className="text-lg text-gray-700">
                  Address B 20, 2nd Cross Rd, Thillai Nagar(West), Trichy-620018
                </p>
              </div>
            </div>

            {/* International Patients */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#FFE4E6] p-2 rounded">
                <MdOutlineCall size={30} className="text-pink-400" />
              </div>
              <div>
                <h4 className="font-semibold text-cyan-800 text-xl">
                  AS Book Appointment
                </h4>
                <p className="text-lg text-gray-700">904 | 704 | 1111</p>
              </div>
            </div>
          </div>



          </div>
    
          

        </div>


        </div>
        </>
    
  )
}

export default ContactUs