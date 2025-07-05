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
    speciality_maintitle,
    speciality_image,
    speciality_maindescription,
    speciality_content01_title,
    speciality_content01_desciption,
    speciality_content01_list,
    speciality_content02_title,
    speciality_content02_desciption,
    speciality_content02_list,
    speciality_conclusion,
  } = department;

  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <div className="flex flex-col w-8/12">
        <h2 className="text-3xl font-bold text-center mb-4">
          {speciality_maintitle}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex justify-center max-w-5/12 max-h-[400px]">
            <img
              src={speciality_image}
              alt="Feature"
              className="max-h-[400px]"
            />
          </div>
          <p className="max-w-7/12 text-base text-gray-700 text-justify whitespace-pre-line">
            {speciality_maindescription}
          </p>
        </div>
      </div>

      <div className="flex flex-col w-8/12 gap-4 items-center">
        <h1 className="text-3xl">{speciality_content01_title}</h1>
        {speciality_content01_desciption && (
          <p className="space-y-2 text-gray-800 text-lg">
            {speciality_content01_desciption}
          </p>
        )}
        <ul className="list-disc pl-6 w-6/12 space-y-2 text-gray-800 text-lg">
          {speciality_content01_list.slice(0, 20).map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-8/12 gap-4 items-center">
        <h1 className="text-3xl">{speciality_content02_title}</h1>
        {speciality_content02_desciption && (
          <p className="space-y-2 text-gray-800 text-lg">
            {speciality_content02_desciption}
          </p>
        )}
        <ul className="list-disc pl-6 w-8/12 space-y-2 text-gray-800 text-lg">
          {speciality_content02_list.slice(0, 20).map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {speciality_conclusion && (
        <p className="text-lg text-gray-600 italic text-center px-4 md:px-12">
          {speciality_conclusion}
        </p>
      )}
    </div>
  );
};

export default Speciality;
