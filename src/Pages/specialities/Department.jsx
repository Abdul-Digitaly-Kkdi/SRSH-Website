import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { departments } from "../../_Data/Index";
import { CheckCircle2 } from "lucide-react";

import gastroenterology from '../../assets/gastroenterology.png';
import oncology from '../../assets/oncology.png';
import health from '../../assets/health.png';
import critical from '../../assets/critical.png';
import hospitalbed from '../../assets/hospital-bed.png';
import stomach from '../../assets/stomach.png';
import GI from '../../assets/GI.png';
import urology from '../../assets/urology.png';
import joint from '../../assets/joint.png';
import Marquee from "react-fast-marquee";

const DepartmentPage = () => {
    const { slug } = useParams();
    const department = departments[slug];

    const navigate = useNavigate()

    if (!department) {
        return <div className="text-center text-red-500 mt-10">Department not found.</div>;
    }

    const formatTitle = (slug) => {
        return slug
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
    };

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

    return (
        <>

            <div className="relative w-full h-[15vh] md:h-[30vh]">
                <img
                    src={department.img}
                    className="w-full h-full object-cover "
                    alt="Doctors"
                />
                <div className="absolute inset-0 bg-black/60 z-10">
                    <h1 className="text-2xl md:text-5xl py-10 pl-6 md:py-24 md:pl-16 font-sans text-white w-full">
                        {department.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-10">

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">Overview</h2>
                    <p className="text-gray-700">{department.overview}</p>

                    <div className="w-full flex justify-center mt-5">
                        <img
                            src={department.img}
                            alt="Department"
                            className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full md:w-3/4 object-cover "
                        />
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">An Innovative Approach to Treatment</h2>
                    <p className="text-gray-700">{department.treatmentApproach}</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">We Specialise in the Treatment of</h2>
                    <ul className="list-none space-y-2">
                        {department.specialties.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle2 className="text-green-600 mt-1" size={18} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">Why Choose Us</h2>
                    <ul className="list-none space-y-2">
                        {department.whyChoose.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle2 className="text-green-600 mt-1" size={18} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="shadow px-2 pb-4 rounded">
                    <h1 className="text-xl font-semibold my-3 text-gray-800">Departments in {department.title}</h1>

                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                        {department.subSpeciality.map((item, index) => (
                            <div
                                key={index}
                                // onClick={() => navigate(item.path)}
                                className="group cursor-pointer relative border border-blue-500 rounded-md overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-500 py-6 px-4 basis-1/3 sm:basis-1/4 lg:basis-1/5"
                            >
                                {/* Hover BG Animation */}
                                {/* <div className="absolute inset-0 bg-rose-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" /> */}

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center justify-center transition-colors duration-500">
                                    <img src={item.icon} alt={item.name} className="w-8 h-8 mb-3 transition duration-300" />
                                    <p className="text-sm  font-semibold text-blue-700  transition duration-300">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <section className="py-12 px-4 md:px-8 w-full xl:w-11/12 mx-auto">
                <h2 className="text-center text-2xl md:text-4xl font-semibold text-rose-700 mb-2">
                    Other Specialities
                </h2>

                {/* <div className="flex flex-wrap justify-center gap-6 mt-10"> */}
                <Marquee className="mt-10">
                    {specialities.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(item.path)}
                            className="group cursor-pointer relative border border-blue-500 rounded-md overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-500 mx-3 px-10 py-10 w-45 h-45"
                        >
                            {/* Hover BG Animation */}
                            <div className="absolute inset-0 bg-rose-100 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center justify-center transition-colors duration-500">
                                <img src={item.icon} alt={item.name} className="w-12 h-12 mb-3 group-hover:invert group-hover:brightness-200 transition duration-300" />
                                <p className="text-sm font-semibold text-blue-700 group-hover:text-black transition duration-300">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </Marquee>
                {/* </div> */}
            </section>
        </>
    );
};

export default DepartmentPage;
