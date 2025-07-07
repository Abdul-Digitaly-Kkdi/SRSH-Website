import React from 'react';
import { useNavigate } from 'react-router-dom';

import gastroenterology from '../../../assets/gastroenterology.png';
import oncology from '../../../assets/oncology.png';
import health from '../../../assets/health.png';
import critical from '../../../assets/critical.png';
import hospitalbed from '../../../assets/hospital-bed.png';
import stomach from '../../../assets/stomach.png';
import GI from '../../../assets/GI.png';
import urology from '../../../assets/urology.png';
import joint from '../../../assets/joint.png';

const specialities = [
    { name: 'GI & HBP Oncology', path: '/specialities/GI-&-HBP-Oncology', icon: GI },
    { name: 'Surgical and Medical Oncology', path: '/specialities/Surgical-and-Medical-Oncology', icon: oncology },
    { name: 'Surgerical Gastroenterology', path: '/specialities/Surgerical-Gastroenterology', icon: stomach },
    { name: 'Medical Gastroenterology', path: '/specialities/Medical-Gastroenterology', icon: gastroenterology },
    { name: 'General surgery', path: '/specialities/General-surgery', icon: health },
    { name: 'Orthopedics', path: '/specialities/Orthopedics', icon: joint },
    { name: 'Urology', path: '/specialities/Urology', icon: urology },
    { name: 'General Medicine', path: '/specialities/General-Medicine', icon: hospitalbed },
    { name: 'Critical Care', path: '/specialities/Critical-Care', icon: critical },
];

const SpecialitiesGrid = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 px-4 md:px-8 w-full xl:w-11/12 mx-auto">
            <h2 className="text-center text-2xl md:text-4xl font-semibold text-rose-700 mb-2">
                Enjoy Specialized Care Through Precision, Artistry, and Experience
            </h2>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
                {specialities.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(item.path)}
                        className="group cursor-pointer relative border border-blue-500 rounded-md overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-500 py-6 px-4 basis-1/3 sm:basis-1/2 lg:basis-1/6"
                    >
                        {/* Hover BG Animation */}
                        <div className="absolute inset-0 bg-rose-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center transition-colors duration-500">
                            <img src={item.icon} alt={item.name} className="w-12 h-12 mb-3 group-hover:invert group-hover:brightness-200 transition duration-300" />
                            <p className="text-sm md:text-lg font-semibold text-blue-700 group-hover:text-black transition duration-300">
                                {item.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpecialitiesGrid;
