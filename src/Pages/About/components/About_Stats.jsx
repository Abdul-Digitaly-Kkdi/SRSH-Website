import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import exp from "../../../assets/icons/experience.png";
import review from "../../../assets/icons/review.png";
import doctor from "../../../assets/icons/doctor.png";

const About_Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // how much of the element is visible before triggering
  });

  return (
    <div className="w-full flex justify-center py-8 px-4">
      <div
        ref={ref}
        className="w-full max-w-4xl flex flex-col sm:flex-row flex-wrap gap-6 justify-center text-red-900 bg-pink-300 rounded-2xl p-4 sm:p-6"
      >
        {/* Card */}
        <div className="flex flex-1 gap-3 items-center justify-center px-3 py-4 min-w-[200px]">
          <div className="bg-pink-200 rounded-full px-4 py-4">
            <img src={exp} className="h-10 w-10" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">
              {inView && <CountUp end={17} duration={2} />}+
            </p>
            <p className="text-xs sm:text-sm text-center">Years Experience</p>
          </div>
        </div>

        <div className="flex flex-1 gap-3 items-center justify-center px-3 py-4 min-w-[200px]">
          <div className="bg-pink-200 rounded-full px-4 py-4">
            <img src={review} className="h-10 w-10" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">
              {inView && <CountUp end={349} duration={2.5} />}+
            </p>
            <p className="text-xs sm:text-sm text-center">Total Reviews</p>
          </div>
        </div>

        <div className="flex flex-1 gap-3 items-center justify-center px-3 py-4 min-w-[200px]">
          <div className="bg-pink-200 rounded-full px-4 py-4">
            <img src={doctor} className="h-10 w-10" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold">
              {inView && <CountUp end={16} duration={2} />}
            </p>
            <p className="text-xs sm:text-sm text-center">Doctors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Stats;
