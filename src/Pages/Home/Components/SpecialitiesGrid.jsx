import React from 'react';
import { useNavigate } from 'react-router-dom';

// Replace these with your real icon image paths or SVG components
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
    { name: 'Cardiology', path: '/specialities/cardiology', icon: gastroenterology },
    { name: 'Neurology', path: '/specialities/neurology', icon: oncology },
    { name: 'Orthopaedics', path: '/specialities/orthopaedics', icon: health },
    { name: 'Pediatrics', path: '/specialities/pediatrics', icon: critical },
    { name: 'Dermatology', path: '/specialities/dermatology', icon: hospitalbed },
    { name: 'ENT', path: '/specialities/ent', icon: stomach },
    { name: 'Ophthalmology', path: '/specialities/ophthalmology', icon: GI },
    { name: 'Urology', path: '/specialities/urology', icon: urology },
    { name: 'Psychiatry', path: '/specialities/psychiatry', icon: joint },
];

const SpecialitiesGrid = () => {
    const navigate = useNavigate();

    return (
        <section className="py-12 px-4 md:px-8 w-full xl:w-7/12 mx-auto">
            <h2 className="text-center text-xl md:text-4xl font-semibold text-rose-700 mb-2">
                Enjoy Specialized Care Through Precision, Artistry, and Experience
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
                {specialities.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(item.path)}
                        className="group cursor-pointer relative aspect-auto border border-blue-500 rounded-md overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-500 py-20"
                    >
                        {/* Hover BG Animation */}
                        <div className="absolute inset-0 bg-rose-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center transition-colors duration-500">
                            <img src={item.icon} alt={item.name} className="w-10 h-10 mb-3 group-hover:invert group-hover:brightness-200 transition duration-300" />
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
