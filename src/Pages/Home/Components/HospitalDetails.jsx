import React from 'react';
import hospital from '../../../assets/hospital.webp';

const HospitalDetails = () => {
    return (
        <div className="w-full px-4 py-10 md:py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-10">

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={hospital}
                        alt="Hospital"
                        className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 px-1 md:px-4">
                    <h2 className="text-2xl xl:text-3xl font-semibold text-rose-700 mb-6">
                        Enjoy Specialized Care Through Precision Experience
                    </h2>
                    <p className="text-base xl:text-lg text-gray-700 text-justify leading-relaxed">
                        At Sri Ramakrishna Specialty Hospitals, we understand that every patient is unique, and we take pride in offering comprehensive care tailored to individual needs.
                        From diagnosis to treatment and beyond, we are committed to providing holistic care that addresses not only the physical aspects of illness but also the emotional and psychological well-being.
                        We believe that healing is a collaborative effort between patients, caregivers, and healthcare providers.
                        We are honoured to be your partner on your journey to wellness, and we are committed to supporting you every step of the way.
                    </p>
                    <button
                        className='bg-rose-500 px-3 py-2 text-white rounded mt-5 md:mt-10 cursor-pointer hover:scale-105'
                    >About Us</button>
                </div>
            </div>
        </div>
    );
};

export default HospitalDetails;
