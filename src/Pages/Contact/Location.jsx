import React from "react";

const Location = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto">
      <h2 className="text-2xl md:text-4xl text-rose-700 font-bold mb-8 text-center">Our Location</h2>
      <div className="aspect-video w-full">
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
