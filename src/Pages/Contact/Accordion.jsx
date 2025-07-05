import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300 mb-4">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-100 transition cursor-pointer"
    >
      <span>{title}</span>
      <FiChevronDown
        className={`transform transition-transform duration-300 text-gray-500 cursor-pointer  ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`px-6 pb-4 text-gray-600 transition-all duration-300 ease-in-out  ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      {content}
    </div>
  </div>
);

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    {
      title: "How can I book an appointment?",
      content:
        "You can book an appointment online, call us directly, or visit our hospital reception anytime."
    },
    {
      title: "Do I need a referral to consult a specialist?",
      content:
        "No referral is needed. You can directly schedule a consultation with any of our specialists."
    },
    {
      title: "Are emergency services available 24/7?",
      content: "Yes, our emergency and trauma care units operate 24/7 with experienced doctors always available."
    },
    {
      title: "What documents should I bring for consultation?",
      content: "Please bring your ID proof, previous medical reports, prescriptions, and any ongoing medication details."
    }

  ];

  return (
    <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto py-12">
      <h2 className="text-2xl font-bold mb-8 text-center text-cyan-800">Frequently Asked Questions</h2>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
