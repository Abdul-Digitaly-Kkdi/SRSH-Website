import React from "react";
import ourdoctors from "../../assets/images/ourdoctors/ourdoctors.webp";

const Doctors = () => {
  return (
    <>
      <div className="relative w-full h-[40vh]">
        <img
          src={ourdoctors}
          className="w-full h-full object-cover"
          alt="Doctors"
        />
        <div className="absolute inset-0 bg-black/60 z-10">
          <h1 className="text-5xl py-24 pl-16 font-semibold text-white w-full">
            Our Doctors
          </h1>
        </div>
      </div>
    </>
  );
};

export default Doctors;
