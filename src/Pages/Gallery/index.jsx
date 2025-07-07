import React, { useState } from "react";
import gallery from "../../assets/gallery.webp";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gallery1 from "../../assets/gallery/gallery1.webp";
import gallery2 from "../../assets/gallery/gallery2.webp";
import gallery3 from "../../assets/gallery/gallery3.webp";
import gallery4 from "../../assets/gallery/gallery4.webp";
import gallery5 from "../../assets/gallery/gallery5.webp";
import gallery6 from "../../assets/gallery/gallery6.webp";
import gallery7 from "../../assets/gallery/gallery7.webp";


const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = galleryImages.map((src) => ({ src }));

  return (
    <>
      <div className="relative w-full h-[15vh] md:h-[40vh]">
        <img
          src={gallery}
          alt="Gallery Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center pl-6 md:pl-16">
          <h1 className="text-2xl md:text-5xl font-bold text-white">Gallery</h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <h2 className="text-3xl font-extrabold text-center text-rose-700 mb-12">
          Hospital Gallery
        </h2>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {galleryImages.map((img, idx) => (
    <div
      key={idx}
      className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
      onClick={() => {
        setIndex(idx);
        setOpen(true);
      }}
    >
      <img
        src={img}
        alt={`Gallery image ${idx + 1}`}
        className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white font-semibold text-lg">View Photo</p>
      </div>
    </div>
  ))}
</div>

        {open && (
          <Lightbox
            slides={slides}
            open={open}
            index={index}
            close={() => setOpen(false)}
            onIndexChange={setIndex}
          />
        )}
      </section>
    </>
  );
}

export default Gallery;
