import React from "react";

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
    {
      id: "3",
      name: "DR.R.DINESH KUMAR",
      specialization: "Anaesthesiology & Critical Care",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812330470434525.jpg",
    },
    {
      id: "4",
      name: "DR.V.P.YOUMASH",
      specialization: "General Medicine",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812334014219488-1024x1024.jpg",
    },
    {
      id: "5",
      name: "DR.D.SASI ANAND",
      specialization: "Medical Gastroenterology",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812334316558601-1024x1024.jpg",
    },
    {
      id: "6",
      name: "DR.M.SUNDAR PRAKASH",
      specialization: "Orthopedics,spine Surgeon",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812334478468653-1024x1024.jpg",
    },
    {
      id: "7",
      name: "DR.N.SATHISH",
      specialization: "General Surgery",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812335153071244-1024x1024.jpg",
    },
    {
      id: "8",
      name: "DR.M.SANTHOSH KUMAR",
      specialization: "Urology",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812330663060485-1024x1024.jpg",
    },
    {
      id: "9",
      name: "DR.X.THOMSON JEYAKUMAR",
      specialization: "Clinical Oncology",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812333570108301-1-1024x1024.jpg",
    },
    {
      id: "10",
      name: "DR.D.PRIYACHITHRA",
      specialization: "Anaesthesiology",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812333847689512-1024x1024.jpg",
    },
    {
      id: "11",
      name: "DR.NAVEEN SUNDARAM",
      specialization: "Critical Care",
      image:
        "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/05/1812334847100807-1024x1024.jpg",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-16 bg-white">
      <h1 className="text-3xl sm:text-4xl font-semibold text-pink-700 text-center mb-2">
        Our Doctors
      </h1>
      <p className="text-sm sm:text-base text-green-800 text-center font-medium mb-8">
        Our Specialized and Experienced Doctors
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 justify-items-center w-full max-w-7xl">
        {doctors.map((d) => (
          <div
            key={d.id}
            className="group relative rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={d.image}
              alt={d.name}
              className="w-full h-[300px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[70%] flex items-end justify-center pointer-events-none">
              <div className="w-full h-full bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute bottom-0 left-0 z-0"></div>

              <div className="relative z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out text-[#291a1f] p-3 text-center">
                <h2 className="font-semibold text-base sm:text-lg">{d.name}</h2>
                <p className="text-xs sm:text-sm font-medium mt-1">
                  {d.specialization}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourdoctors;
