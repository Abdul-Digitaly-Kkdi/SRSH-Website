import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import appoinment from "../../assets/appoinment.webp";
<<<<<<< HEAD
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
import emailjs from "emailjs-com";
>>>>>>> 98cf997b5aa6cd07d4a26ed0fa2ee2e3abb88320

function Appoinment() {
  const SERVICE_ID = "service_jgstobf"; // e.g., service_gmail
  const TEMPLATE_ID = "template_5sw9fvk"; // e.g., template_contact
  const PUBLIC_KEY = "Zr5o9Z93wf4aMsUnF"; // from dashboard
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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.date) newErrors.date = "Select a date";
    if (!formData.time) newErrors.time = "Select a time";

    return newErrors;
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    setSuccess(false);
    setEmailError("");

    if (Object.keys(formErrors).length === 0) {
<<<<<<< HEAD
      console.log("Form Submitted", formData);
      toast.success("Successfully submitted!");
      setFormData({ department: "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "" });
=======
      setLoading(true);

      const templateParams = {
        department: formData.department,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
      };

      try {
        const result = await emailjs.send(
          SERVICE_ID, // ✅ using your constant: "service_jgstobf"
          TEMPLATE_ID, // ✅ using your constant: "template_5sw9fvk"
          templateParams,
          PUBLIC_KEY // ✅ using your constant: "Zr5o9Z93wf4aMsUnF"
        );

        console.log("SUCCESS!", result.text);
        setSuccess(true);
        setFormData({
          department: "",
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
        });
      } catch (error) {
        console.error("FAILED...", error);
        setEmailError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
>>>>>>> 98cf997b5aa6cd07d4a26ed0fa2ee2e3abb88320
    }
  };

  return (
    <>
      {/* Contact with us  & Book an Apponment */}
      <div className="w-full mx-auto">
        <div className="flex flex-col px-4 py-10 gap-10">
          {/* Background Image Section */}
          <div
            className="relative w-full h-[200px] md:h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${appoinment})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>

          {/* Overlapping Form */}
          <div className="w-full lg:w-8/12 xl:w-7/12 shadow-lg px-5 mx-auto bg-white -mt-28 z-10 relative rounded-lg">
            <h2 className="text-2xl md:text-4xl text-rose-700 font-semibold mb-6 py-3">
              Book Your Appointment
            </h2>
            <form onSubmit={handleSubmit} noValidate className="space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded-md w-full outline-0 cursor-pointer text-[12px]"
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
                  <div className="min-h-[18px] mt-1">
                    {errors.department && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.department}
                      </p>
                    )}
                  </div>
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
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full text-[12px]"
                  />

                  <div className="min-h-[18px] mt-1">
                    {errors.name && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full text-[12px]"
                  />

                  <div className="min-h-[18px] mt-1">
                    {errors.email && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Number"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full text-[12px]"
                  />

                  <div className="min-h-[18px] mt-1">
                    {errors.phone && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full text-[12px]"
                  />

                  <div className="min-h-[18px] mt-1">
                    {errors.date && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.date}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full text-[12px]"
                  />

                  <div className="min-h-[18px] mt-1">
                    {errors.time && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="py-5">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-pink-500 hover:to-red-500 hover:text-black px-8 py-3 rounded-full mt-2 cursor-pointer"
                >
                  Book an Appointment <FiArrowUpRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
/>
    </>
  );
}

export default Appoinment;
