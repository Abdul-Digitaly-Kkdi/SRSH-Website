import ourdoctors from "../../assets/images/ourdoctors/ourdoctors.webp";
import Maindoctor from "./components/Maindoctor";

import Ourdoctors from "./components/Ourdoctors";

const Doctors = () => {
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

      {/* our special doctors */}
      <Ourdoctors />
    </>
  );
};

export default Doctors;
