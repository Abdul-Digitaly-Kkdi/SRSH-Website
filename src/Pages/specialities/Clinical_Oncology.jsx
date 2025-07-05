import React from "react";

const data = {
  speciality_maintitle: "Clinical Oncology",
  speciality_image:
    "https://sriramakrishnahospitaltrichy.com/wp-content/uploads/2025/06/diverse-group-of-surgeons-operating-on-patient-in-2025-04-03-05-38-52-utc-683x1024.jpg",
  speciality_maindescription:
    "Clinical Oncology is a specialized branch of medicine dedicated to the diagnosis, treatment, and management of cancer. At our center, we follow a multidisciplinary approach involving medical, surgical, and radiation therapies to provide comprehensive cancer care. Our team is committed to using the latest advancements to deliver personalized treatment tailored to each patient’s needs.",
  speciality_content01_title: "Medical Oncology",
  speciality_content01_desciption:
    "Our clinical oncology services include chemotherapy, targeted therapy, immunotherapy, and hormone therapy. Treatment plans are customized based on cancer type, stage, and the patient’s overall health.",
  speciality_content01_list: [
    "Chemotherapy - Medications that destroy or halt the growth of cancer cells",
    "Targeted Therapy - Drugs that attack specific cancer cell markers",
    "Immunotherapy - Boosts the immune system to fight cancer",
    "Hormone Therapy - Blocks or removes hormones that fuel certain cancers",
  ],
  speciality_content02_title: "Surgical Oncology",
  speciality_content02_desciption:
    "Our surgical oncology team performs precise tumor removal using advanced techniques that aim to preserve healthy tissues and promote faster recovery.",
  speciality_content02_list: [
    "Tumor Resection - Surgical removal of cancerous growths",
    "Minimally Invasive Surgery - Laparoscopic procedures for quicker recovery",
    "Sentinel Node Biopsy - To check cancer spread to lymph nodes",
  ],
  speciality_content03_title: "Why Choose Us?",
  speciality_content03_list: [
    "Expert Team - Experienced oncologists skilled in modern cancer therapies",
    "Personalized Care - Individualized treatment for better outcomes",
    "Advanced Technology - Latest tools for accurate diagnosis and treatment",
  ],
  speciality_conclusion:
    "Complete support from diagnosis to recovery, with counseling, nutrition, and education services.",
};

const Clinical_Oncology = () => {
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
    speciality_content03_title,
    speciality_content03_list,
    speciality_conclusion,
  } = data;

  return (
    <div className="flex flex-col items-center gap-12 py-12 px-4">
      {/* Title + Image + Description */}
      <div className="max-w-5xl w-full flex flex-col gap-6 items-center">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          {speciality_maintitle}
        </h2>
        <img
          src={speciality_image}
          alt={speciality_maintitle}
          className="rounded-lg shadow-md w-full max-w-md object-cover"
        />
        <p className="text-lg text-gray-700 text-justify whitespace-pre-line">
          {speciality_maindescription}
        </p>
      </div>

      {/* Section 01 */}
      <div className="max-w-4xl w-full flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold text-center">
          {speciality_content01_title}
        </h3>
        {speciality_content01_desciption && (
          <p className="text-gray-800 text-lg text-center">
            {speciality_content01_desciption}
          </p>
        )}
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-base w-full px-4">
          {speciality_content01_list.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Section 02 */}
      <div className="max-w-4xl w-full flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold text-center">
          {speciality_content02_title}
        </h3>
        {speciality_content02_desciption && (
          <p className="text-gray-800 text-lg text-center">
            {speciality_content02_desciption}
          </p>
        )}
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-base w-full px-4">
          {speciality_content02_list.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Section 03 */}
      <div className="max-w-4xl w-full flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold text-center">
          {speciality_content03_title}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-base w-full px-4">
          {speciality_content03_list.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Conclusion */}
      {speciality_conclusion && (
        <p className="text-lg text-gray-600 italic text-center max-w-3xl">
          {speciality_conclusion}
        </p>
      )}
    </div>
  );
};

export default Clinical_Oncology;
