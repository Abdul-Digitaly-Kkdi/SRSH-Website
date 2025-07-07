import ourdoctors from "../../assets/images/ourdoctors/ourdoctors.webp";
import Maindoctor from "./components/Maindoctor";
import Ourdoctors from "./components/Ourdoctors";

import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Doctors = () => {
  const ourDoctorsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#ourdoctors" && ourDoctorsRef.current) {
      setTimeout(() => {
        ourDoctorsRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100); // short delay to ensure component mounts
    }
  }, [location]);

  return (
    <>
      {/* /// top content /// */}
      <div className="relative w-full h-[15vh] md:h-[40vh]">
        <img
          src={ourdoctors}
          className="w-full h-full object-cover"
          alt="Doctors"
        />
        <div className="absolute inset-0 bg-black/60 z-10">
          <h1 className="text-2xl md:text-5xl py-10 pl-6 md:py-24 md:pl-16 font-sans text-white w-full">
            Our Doctors
          </h1>
        </div>
      </div>
      {/* /// mainimage /// */}
      <Maindoctor />

      <div className="flex justify-center py-12 bg-violet-100 w-full">
        <div className="w-full px-6 md:px-0 md:w-8/12 flex flex-col gap-6">
          <h1 className="text-3xl text-cyan-800 font-semibold">
            We Care...
          </h1>
          <p className="text-lg">
            We carefully manage the treatment of patients At our facility, we
            meticulously manage the treatment of each patient to ensure
            personalized and effective care. Our dedicated team of healthcare
            professionals collaborates closely to create tailored treatment
            plans, prioritizing patient safety, comfort, and well-being. By
            integrating advanced medical technologies with compassionate care,
            we strive to achieve the best possible outcomes for our patients,
            ensuring their health and recovery are our top priorities.
          </p>
          <p className="text-lg">
            Personalized treatment plans tailored to each patient's unique
            needs. Regular monitoring and assessment to ensure optimal recovery.
            Collaborative approach involving multidisciplinary medical teams.
            Use of advanced technology and evidence-based practices
          </p>
        </div>
      </div>

      {/* Our special doctors */}
      <div id="ourdoctors-section" className="pt-16 -mt-16 scroll-mt-16">
        <Ourdoctors />
      </div>
    </>
  );
};

export default Doctors;
