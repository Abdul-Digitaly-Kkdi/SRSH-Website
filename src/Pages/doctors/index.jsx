import React from "react";
import ourdoctors from "../../assets/images/ourdoctors/ourdoctors.webp";
import maindoctor from "../../assets/images/ourdoctors/maindoctor.webp";
import phone from "../../assets/icons/phone.png";
import location from "../../assets/icons/location.png";

const Doctors = () => {
  return (
    <>
      {/* /// top content /// */}
      <div className="relative w-full h-[15vh] md:h-[40vh]">
        <img
          src={ourdoctors}
          className="w-full h-full object-cover"
          alt="Doctors"
        />
        <div className="absolute inset-0 bg-black/60 z-10">
          <h1 className="text-2xl md:text-5xl py-10 pl-6 md:py-24 md:pl-16 font-sans text-white w-full">
            Our Doctors
          </h1>
        </div>
      </div>
      {/* /// mainimage /// */}
      <div className="w-full flex justify-center">
        <div className="w-10/12 mx-auto p-4 flex flex-col md:flex-row justify-center items-start gap-3">
          {/* Doctor Image */}
          <div className="w-full md:max-w-6/12 flex justify-center">
            <img
              src={maindoctor}
              alt="Doctor"
              className="md:h-[80vh] object-contain rounded-lg md:rounded-3xl"
            />
          </div>

          {/* Info */}
          <div className="w-full md:w-6/12 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold">
                Sri Ramakrishna Specialty Hospital
              </p>
              <h1 className="text-2xl font-bold text-blue-800">
                DR.M.S.VIJAYANAND
              </h1>
              <p className="text-sm md:text-lg mt-2 leading-relaxed">
                MBBS, MS (General Surgery), MCh (Surgical Gastroenterology/GI
                Surgery) Memberships, F.M.A.S. (Fellowship in Minimal Access
                Surgery), F.A.L.S. (Fellowship in Advanced Laparoscopic
                Surgery), trained in IVIS (Seoul)
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              {["+91 9047146123", "+91 9087006067", "+91 9047041111"].map(
                (number, idx) => (
                  <div
                    key={idx}
                    className="flex justify-start items-center gap-3"
                  >
                    <img
                      src={phone}
                      alt="Phone"
                      className="h-8 w-8 md:h-10 md:w-10 object-contain"
                    />
                    <p className="text-lg md:text-2xl">{number}</p>
                  </div>
                )
              )}

              {/* Location */}
              <div className="flex justify-start items-start md:items-center gap-3">
                <img
                  src={location}
                  alt="Location"
                  className="h-10 w-10 md:h-12 md:w-12 object-contain mt-1"
                />
                <p className="text-base md:text-xl whitespace-pre-line">
                  B 20, 2nd Cross Rd, Thillai Nagar (West),
                  {"\n"}Trichy - 620018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
