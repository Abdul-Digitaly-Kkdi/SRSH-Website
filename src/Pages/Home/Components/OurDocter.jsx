import React from "react";
import { useNavigate } from "react-router-dom";

const Ourdoctors = () => {
    const doctors = [
        {
            id: "0",
            name: "DR.M.S.VIJAYANAND",
            specialization:
                "Upper Gastrointestinal, Colorectal & Hepato Pancreato Biliary Oncosurgery & Surgical Gastroenterology",
            image:
                "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812329235547258-1536x1536.jpg",
        },
        {
            id: "1",
            name: "DR. P.KARPAGAM KIRUBA RAJESWARI",
            specialization: "Clinical Pathology",
            image:
                "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812334616469446-1024x1024.jpg",
        },
        {
            id: "2",
            name: "DR. K.SUBASHMEHTA",
            specialization: "General Surgery",
            image:
                "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812334722368468-1024x1024.jpg",
        },

    ];

    const navigate = useNavigate()
    return (
        <>
            <div className="w-full flex flex-col items-center py-6 px-16">
                <h1 className="text-3xl md:text-4xl text-center font-semibold text-pink-700 mb-12 whitespace-pre-line">
                    Our Doctors
                </h1>

                <div className="md:w-10/12 flex flex-wrap gap-6 justify-center">
                    {doctors &&
                        doctors.map((d) => (
                            <div
                                key={d.id}
                                className="group relative w-[300px] rounded-lg overflow-hidden shadow-md"
                            >
                                <img
                                    src={d.image}
                                    alt={d.name}
                                    className="w-full h-[300px] object-cover"
                                />

                                {/* Gradient background + text together as a single overlay */}
                                <div className="absolute bottom-0 left-0 w-full h-[70%] flex items-end justify-center pointer-events-none">
                                    <div className="w-full h-full bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute bottom-0 left-0 z-0"></div>

                                    {/* Text on top of gradient */}
                                    <div className="relative z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out text-[#291a1f] p-3 text-center">
                                        <h2 className="font-semibold text-base">{d.name}</h2>
                                        <p className="text-xs font-semibold mt-1">
                                            {d.specialization}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <button className="bg-rose-500 text-white rounded px-3 py-2 mt-15 cursor-pointer hover:scale-105" onClick={() => (
                    navigate('/doctors')
                )}>
                    View All
                </button>
            </div>
        </>
    );
};

export default Ourdoctors;
