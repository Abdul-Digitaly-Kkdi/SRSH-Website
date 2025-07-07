import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import emailjs from "emailjs-com";

function ContactUs() {
  const SERVICE_ID = "service_jgstobf"; // e.g., service_gmail
  const TEMPLATE_ID = "template_rzp9o9z"; // e.g., template_contact
  const PUBLIC_KEY = "Zr5o9Z93wf4aMsUnF"; // from dashboard

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name can contain letters only";
    } else if (formData.firstName.length < 3) {
      newErrors.firstName = "First name must be at least 3 characters";
    } else if (formData.firstName.length > 30) {
      newErrors.firstName = "First name cannot exceed 30 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name can contain letters only";
    } else if (formData.firstName.length > 30) {
      newErrors.lastName = "Last name cannot exceed 30 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.phone.trim()) {
      newErrors.phone = "Number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setSuccess(false);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error(error);
        setSubmissionError("Something went wrong.");
        setTimeout(() => {
          setSubmissionError("");
        }, 3000);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {/* Contact with us  & Book an Apponment */}
      <div className="md:w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row px-4 py-10 gap-10">
          {/* Left Side - Contact Form */}
          <div
            className="w-full lg:w-6/12 rounded-md  px-5 py-3"
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-rose-700">
              Contact with us
            </h2>
            <form onSubmit={handleSubmit} noValidate className="space-y-2">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    maxLength={30}
                    minLength={3}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full text-[12px]"
                  />
                  <div className="min-h-[18px] mt-1">
                    {errors.firstName && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    maxLength={30}
                    className="bg-gray-100 p-3 rounded-md outline-0 w-full text-[12px]"
                  />

                  <div className="min-h-[18px] mt-1">
                    {errors.lastName && (
                      <p className="text-red-500 text-xs text-right">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
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
                    placeholder="Enter Number"
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
              </div>

              <div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-100 p-3 rounded-md outline-0 w-full text-[12px]"
                />

                <div className="min-h-[18px] mt-1">
                  {errors.message && (
                    <p className="text-red-500 text-xs text-right">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="py-5">
                <div className="min-h-[18px] mt-1">
                  {success && (
                    <p className="text-green-600 text-sm font-medium mb-2">
                      Your message has been successfully sent!
                    </p>
                  )}
                  {submissionError && (
                    <p className="text-red-600 text-sm font-medium mb-2">
                      {submissionError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full mt-2 transition cursor-pointer
      ${loading
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-pink-500 hover:to-red-500 hover:text-black"
                    }
    `}
                >
                  {loading ? "Submitting..." : "Submit"} <FiArrowUpRight />
                </button>
              </div>
            </form>
          </div>

          <div
            className="w-full lg:w-6/12 shadow-lg rounded-md px-4 flex flex-col justify-start items-start py-3"
            style={{ boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
          >
            <p className="text-2xl md:text-4xl text-rose-700 font-semibold mb-6 text-left px-1">
              Contact Information
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-6 md:gap-x-10 md:gap-y-8 px-3 md:px-2 py-3 md:py-8">
              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="bg-[#FBB8CF] p-2 rounded">
                  {/* Replace with icon */}
                  <MdOutlineMail size={30} className="text-[#BE3263]" />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-800 text-sm md:text-lg">
                    Email
                  </h4>
                  <p className="text-[12px] md:text-[15px] xl:text-[12px]  text-gray-700">
                    sriramakrishnahr@gmail.com
                  </p>
                </div>
              </div>

              {/* Contact No */}
              <div className="flex gap-4 items-start">
                <div className="bg-[#FBB8CF] p-2 rounded">
                  <MdOutlineCall size={30} className="text-[#BE3263]" />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-800 text-sm md:text-lg">
                    Ambulance
                  </h4>
                  <p className="text-[12px] md:text-[15px] xl:text-[12px] text-gray-700">
                    908 | 700 | 6068
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="bg-[#FBB8CF] p-2 rounded">
                  <MdOutlineLocationOn size={30} className="text-[#BE3263]" />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-800 text-sm md:text-lg">
                    Address
                  </h4>
                  <p className="text-[12px] md:text-[15px] xl:text-[12px] text-gray-700">
                    Address B 20, 2nd Cross Rd, Thillai Nagar(West),
                    Trichy-620018
                  </p>
                </div>
              </div>

              {/* International Patients */}
              <div className="flex gap-4 items-start">
                <div className="bg-[#FBB8CF] p-2 rounded">
                  <MdOutlineCall size={30} className="text-[#BE3263]" />
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-800 text-sm md:text-lg">
                    AS Book Appointment
                  </h4>
                  <p className="text-[12px] md:text-[15px] xl:text-[12px] text-gray-700">
                    904 | 704 | 1111
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-center text-center">
              <p className="text-xl font-semibold text-cyan-800 py-3 md:py-0 mb-4">
                Follow us
              </p>

              <div className="flex justify-center items-center gap-5 mb-3">
                <div className="p-3 bg-[#FBB8CF] rounded-xl cursor-pointer">
                  <a
                    href="https://www.facebook.com/people/Dr-Vijay-Anand/61554146246375/?rdid=wXmFs0MOABN6gyUX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BvvyyFdde%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF size={20} className="text-[#BE3263]" />
                  </a>
                </div>
                <div className="p-3 bg-[#FBB8CF] rounded-xl">
                  <a
                    href="https://www.instagram.com/s_r_s_hospital?igsh=N3d6YTJnZzQ1ajgx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaSquareInstagram size={20} className="text-[#BE3263]" />
                  </a>
                </div>
                <div className="p-3 bg-[#FBB8CF] rounded-xl">
                  <a
                    href="https://youtube.com/@srshtrichy?si=VySV-bK4zw7CLeXY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <FaYoutube size={20} className="text-[#BE3263]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
