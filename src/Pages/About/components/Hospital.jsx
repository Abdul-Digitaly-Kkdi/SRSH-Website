import React from "react";
import { motion } from "framer-motion";
import hospital_building from "../../../assets/images/about/hospital_building.webp";

const Hospital = () => {
  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <div className="relative">
          <motion.img
            src={hospital_building}
            alt="Chairman"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:max-w-[500px] h-auto mb-4 rounded-xl shadow-md float-none lg:float-right lg:ml-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold whitespace-pre-line mb-5 text-rose-900 clear-none"
          >
            Welcome to Sri Ramakrishna Specialty Hospital
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="whitespace-pre-line text-justify leading-relaxed text-gray-800 clear-none"
          >
            Our Patients are Our Priority, We Offer Quality Services of
            Specialists.{"\n"}
            {"\n"}
            Sri Ramakrishna Speciality Hospital is a 35-bedded speciality
            healthcare facility located in Thillai Nagar, Trichy. We are
            dedicated to providing comprehensive and specialized medical care to
            our community, with a focus on delivering exceptional
            gastroenterology services and other critical healthcare needs.{"\n"}
            {"\n"}
            At Sri Ramakrishna Speciality Hospital, we pride ourselves on having
            a team of highly skilled consultants who bring extensive expertise
            and compassion to their practice. Our state-of-the-art facilities
            include advanced diagnostic equipment, modern operation theatres,
            and a 24x7 ICU to ensure round-the-clock critical care for our
            patients. Additionally, we offer 24x7 pharmacy and laboratory
            services, ensuring that essential medications, diagnostics, and test
            results are available promptly and efficiently.{"\n"}
            {"\n"}
            <span className="font-semibold">Our Initiatives</span>
            {"\n"}
            {"\n"}
            As part of our dedication to community health, we have initiated the
            “Cancer-Free Cauvery Delta” initiative. This program is focused on
            providing early diagnosis and treatment of gastrointestinal cancers
            for patients in the Cauvery Delta region, aiming to reduce the
            burden of cancer through timely and effective intervention. We have
            also started a “Free Jaundice Consultation Programme “ at our
            hospital in order to raise awareness about the various types of
            Jaundice and their treatments.{"\n"}
            {"\n"}
            Apart from Gastroenterology our hospital offers a wide change of
            specialities including General Medicine, General Surgery,
            Orthopedics and Urology among others. This enables to provide
            comprehensive care for a variety of medical conditions.{"\n"}
            {"\n"}
            We are committed to patient-centered care, where every individual is
            treated with dignity, respect, and utmost professionalism. Whether
            you are here for a routine check-up or require specialized
            treatment, our team is here to support you every step of the way.
            {"\n"}
            {"\n"}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
