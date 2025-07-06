import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import exp from "../../../assets/icons/experience.png";
import review from "../../../assets/icons/review.png";
import doctor from "../../../assets/icons/doctor.png";

const About_Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: exp,
      end: 17,
      label: "Years Experience",
      suffix: "+",
      duration: 2,
    },
    {
      icon: review,
      end: 349,
      label: "Total Reviews",
      suffix: "+",
      duration: 2.5,
    },
    {
      icon: doctor,
      end: 16,
      label: "Doctors",
      suffix: "",
      duration: 2,
    },
  ];

  return (
    <div className="w-full flex justify-center bg-pink-50 px-4">
      <div
        ref={ref}
        className="w-full max-w-6xl flex flex-wrap justify-center gap-6  rounded-2xl py-10 px-4 sm:px-6 text-red-900 shadow-inner"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[200px] max-w-[250px] w-full"
          >
            <div className="bg-pink-200 rounded-full p-4">
              <img src={stat.icon} className="h-10 w-10" alt={stat.label} />
            </div>
            <p className="text-3xl font-bold">
              {inView && <CountUp end={stat.end} duration={stat.duration} />}
              {stat.suffix}
            </p>
            <p className="text-sm font-medium text-center">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About_Stats;
