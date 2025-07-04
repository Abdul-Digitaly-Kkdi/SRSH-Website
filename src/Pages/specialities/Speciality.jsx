// Speciality.jsx
import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/data.json";

const Speciality = () => {
  const { id } = useParams(); // grabs 'medical-gastroenterology' from the URL
  const department = data.departments.find((d) => d.id === id);

  if (!department)
    return <div className="text-center py-20">Department not found</div>;

  const {
    title,
    image,
    description,
    title02,
    title02_list,
    title03,
    title03_list,
    conclusion,
  } = department;

  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <div className="flex flex-col w-8/12">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-5/12">
            <img src={image} alt="Feature" className="w-full h-auto" />
          </div>
          <p className="w-7/12 text-lg text-justify text-gray-700">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl">{title02}</h1>
        <ul className="list-disc pl-6 w-10/12 space-y-2 text-gray-800 text-lg">
          {title02_list.slice(0, 20).map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl">{title03}</h1>
        <ul className="list-disc pl-6 w-10/12 space-y-2 text-gray-800 text-lg">
          {title03_list.slice(0, 20).map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {conclusion && (
        <p className="text-lg text-gray-600 italic text-center px-4 md:px-12">
          {conclusion}
        </p>
      )}
    </div>
  );
};

export default Speciality;
