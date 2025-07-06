import aboutbanner from "../../assets/images/about/about_top_banner.jpg";
import Ourdoctors_min from "../misc/Ourdoctors_min";
import About_Stats from "./components/About_Stats";
import Cards from "./components/cards";
import Chairman from "./components/chairman";
import Hospital from "./components/hospital";

const About = () => {
  return (
    <>
      {/* /// top content /// */}
      <div className="relative w-full h-[15vh] md:h-[40vh]">
        <img
          src={aboutbanner}
          className="w-full h-full object-cover"
          alt="Doctors"
        />
        <div className="absolute inset-0 bg-black/60 z-10">
          <h1 className="text-2xl md:text-5xl py-10 pl-6 md:py-24 md:pl-16 font-sans text-white w-full whitespace-pre-line">
            About Us
          </h1>
        </div>
      </div>

      <Chairman />
      <Cards />
      <Hospital />
      <About_Stats />
      <Ourdoctors_min />
    </>
  );
};

export default About;
