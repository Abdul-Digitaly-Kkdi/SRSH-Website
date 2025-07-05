import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import appoinment from "../../assets/appoinment.webp";

function Appoinment() {
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.department || formData.department === "Select") {
      newErrors.department = "Please select a department";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z. ]+$/.test(formData.name)) {
      newErrors.name = "Name can contain only letters, spaces, and dots";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (formData.name.length > 30) {
      newErrors.name = "Name cannot exceed 30 characters";
    }

    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit number";

    if (!formData.date) newErrors.date = "Select a date";
    if (!formData.time) newErrors.time = "Select a time";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form Submitted", formData);
      // Submit to API or reset
    }
  };

  return (
    <>
      {/* Contact with us  & Book an Apponment */}
      <div className="md:w-10/12 mx-auto">
        <div className="flex flex-col px-4 py-10 gap-10">
          {/* Background Image Section */}
          <div
            className="relative w-full h-[200px] md:h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${appoinment})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>

          {/* Overlapping Form */}
          <div className="w-full lg:w-6/12 shadow-lg px-5 mx-auto bg-white -mt-28 z-10 relative rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-800 py-3">
              Book Your Appointment
            </h2>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded-md w-full outline-0 cursor-pointer"
                  >
                    <option>Select</option>
                    <option>Urology</option>
                    <option>Orthopedics</option>
                    <option>Critical Care</option>
                    <option>General Surgery</option>
                    <option>General Medicine</option>
                    <option>Clinical Oncology</option>
                    <option>GI & HPB Oncology</option>
                    <option>Surgical Gastroenterology</option>
                    <option>Medical Gastroenterology</option>
                  </select>
                  {errors.department && (
                    <p className="text-red-500 text-xs text-right mt-1">
                      {errors.department}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={60}
                    minLength={3}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs text-right mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs text-right mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs text-right mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs text-right mt-1">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full"
                  />
                  {errors.time && (
                    <p className="text-red-500 text-xs text-right mt-1">
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              <div className="py-5">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full mt-2 cursor-pointer"
                >
                  Book an Appointment <FiArrowUpRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appoinment;
