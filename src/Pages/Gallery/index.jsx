import React, { useState } from "react";
import gallery from "../../assets/gallery.webp";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const galleryImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucKCgIS3OZL7tFZZXXjdtKBTZp0P6my2nJQ&s",
  "https://www.rajkotcancersociety.org/wp-content/uploads/2023/12/DSC_43881.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbyr7UbleCvcV-Y9zgIAb8ewN48-8c9iFLQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxnbBSZ6RzJWQsoHluj0ucmsLmuoIYZ3Y5g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjE-avqMApLuOoMPYBxBjm6N2cylYb_lPDLQ&s",
  "https://cdn.prod.website-files.com/66b47a899715a714443f05c3/66b482eee7a3bffea0f44a09_about_2014-02-03_m_1.webp",
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
        <div
  className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
  style={{ columnGap: "1.5rem" }}
>
  {galleryImages.map((img, idx) => (
    <div
      key={idx}
      className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg break-inside-avoid group"
      onClick={() => {
        setIndex(idx);
        setOpen(true);
      }}
      style={{ marginBottom: "1.5rem" }}
    >
      <img
        src={img}
        alt={`Gallery image ${idx + 1}`}
        className="w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-110"
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
