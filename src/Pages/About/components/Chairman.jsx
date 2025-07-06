import React from "react";
import { motion } from "framer-motion";
import chairman from "../../../assets/images/about/chairman.webp";

const Chairman = () => {
  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <div className="relative">
          <motion.img
            src={chairman}
            alt="Chairman"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:max-w-[300px] h-auto mb-4 rounded-xl shadow-md float-none lg:float-left lg:mr-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl font-semibold whitespace-pre-line mb-5 text-rose-900 clear-none"
          >
            Welcome to Sri Ramakrishna Specialty Hospital,{"\n"}
            Dr. M. Sivasubramaniam :
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="whitespace-pre-line text-justify leading-relaxed text-gray-800 clear-none"
          >
            It is with immense pride and gratitude that I extend my warmest
            greetings to you on behalf of Sri Ramakrishna Educational
            Institutions. As the Chairman, it is both an honor and a privilege
            to introduce our newest venture: a state-of-the-art hospital
            dedicated to the treatment of gastrointestinal and hepatobiliary
            disorders, with a special emphasis on gastrointestinal, colorectal,
            and hepatobiliary pancreatic cancers.{"\n"}
            {"\n"}
            At Sri Ramakrishna Specialty Hospital, we are committed to providing
            compassionate care, advanced treatment modalities, and unparalleled
            expertise to our patients. Our team of highly skilled medical
            professionals, including renowned specialists in gastroenterology,
            oncology, and hepatobiliary surgery, is dedicated to delivering
            personalized care tailored to meet the unique needs of each
            individual.{"\n"}
            {"\n"}
            We understand that a diagnosis of gastrointestinal or hepatobiliary
            cancer can be a daunting experience, both for patients and their
            families. That’s why we strive to create a supportive and nurturing
            environment, where patients feel empowered, informed, and confident
            in their treatment journey. Our multidisciplinary approach ensures
            that every aspect of a patient’s care is carefully coordinated, from
            diagnosis to treatment and beyond, with the ultimate goal of
            achieving the best possible outcomes.{"\n"}
            {"\n"}
            As we embark on this journey to combat gastrointestinal and
            hepatobiliary diseases, we remain steadfast in our commitment to
            excellence, innovation, and continuous improvement. Through ongoing
            research, education, and collaboration with leading healthcare
            institutions, we aim to push the boundaries of medical science and
            redefine the standards of care in our field.{"\n"}
            {"\n"}I invite you to explore our website and learn more about Sri
            Ramakrishna Specialty Hospital. Whether you are a patient seeking
            treatment, a healthcare professional looking to collaborate, or
            simply someone interested in supporting our mission, we welcome you
            to join us in our pursuit of excellence in healthcare.{"\n"}
            {"\n"}
            Thank you for choosing Sri Ramakrishna Specialty Hospital.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
