import React from "react";

const Location = () => {
  return (
    <div className="w-full mx-auto mb-10">
      <h2 className="text-2xl md:text-4xl text-rose-700 font-bold mb-8 text-center">Our Location</h2>
      <div className="w-full h-[30vh] md:h-[50vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d669463.2848278327!2d78.682799!3d10.825888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5a313ccc2b5%3A0x2418ec7b330ed9b5!2sSri%20Ramakrishna%20Specialty%20Hospitals%20Pvt.Ltd.!5e1!3m2!1sen!2sus!4v1751695795756!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
