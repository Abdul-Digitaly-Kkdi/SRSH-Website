import React from 'react'
import main_image1 from "../../assets/contact-bg.jpg";


function Touch() {
  return (
    <>

    <div className="relative w-full h-[15vh] md:h-[40vh]">
            <img
              src={main_image1}
              className="w-full h-full object-cover"
              alt="Doctors"
            />
            <div className="absolute inset-0 bg-black/60 z-10">
              <h1 className="text-2xl md:text-5xl py-10 pl-6 md:py-24 md:pl-16 font-sans text-white w-full">
                Contact
              </h1>
            </div>
          </div>

      
      </>
    
  )
}

export default Touch