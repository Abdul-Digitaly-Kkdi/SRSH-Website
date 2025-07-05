import React from 'react'
import main_image1 from "../../assets/contact-bg.jpg";


function Touch() {
  return (
    <>

    <div
        className="relative w-full h-[150px] md:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${main_image1})` }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content (like "Contact Us") */}
        <div
  className="relative z-10 flex items-center justify-start h-full text-white text-4xl font-semibold px-4 md:px-10"
>
  Contact Us
</div>
      </div>

      
      </>
    
  )
}

export default Touch