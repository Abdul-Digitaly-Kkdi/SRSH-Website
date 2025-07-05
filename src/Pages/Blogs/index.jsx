import React from "react";
import blogs from "../../assets/blogs-bg.webp";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "5 Early Signs of Heart Disease You Shouldn’t Ignore",
    excerpt: "Heart disease can be silent until it’s too late. Learn to identify early symptoms and stay ahead...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucKCgIS3OZL7tFZZXXjdtKBTZp0P6my2nJQ&s",
    date: "July 5, 2025",
  },
  {
    id: 2,
    title: "The Importance of Annual Health Checkups",
    excerpt: "Preventive care is key to a long and healthy life. Find out why regular checkups matter...",
    image: "https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg",
    date: "July 5, 2025",
  },
  {
    id: 3,
    title: "How to Manage Stress in a Busy Lifestyle",
    excerpt: "Stress affects your physical and mental health. Here are practical tips to reduce it...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAFUrjD3mh3dMeSKc8mqmw8lJtVK3CLY22Q&s",
    date: "July 5, 2025",
  },
  
  {
    id: 5,
    title: "The Importance of Annual Health Checkups",
    excerpt: "Preventive care is key to a long and healthy life. Find out why regular checkups matter...",
    image: "https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg",
    date: "July 5, 2025",
  },
  {
    id: 4,
    title: "5 Early Signs of Heart Disease You Shouldn’t Ignore",
    excerpt: "Heart disease can be silent until it’s too late. Learn to identify early symptoms and stay ahead...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucKCgIS3OZL7tFZZXXjdtKBTZp0P6my2nJQ&s",
    date: "July 5, 2025",
  },
  {
    id: 6,
    title: "How to Manage Stress in a Busy Lifestyle",
    excerpt: "Stress affects your physical and mental health. Here are practical tips to reduce it...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAFUrjD3mh3dMeSKc8mqmw8lJtVK3CLY22Q&s",
    date: "July 5, 2025",
  },
];

function HospitalBlogs() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[15vh] md:h-[40vh]">
                  <img
                    src={blogs}
                    className="w-full h-full object-cover"
                    alt="Doctors"
                  />
                  <div className="absolute inset-0 bg-black/60 z-10">
                    <h1 className="text-2xl md:text-5xl py-10 pl-6 md:py-24 md:pl-16 font-sans text-white w-full">
                      Blogs
                    </h1>
                  </div>
                </div>

      {/* Blogs Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <h2 className="text-2xl md:text-4xl text-rose-700 font-bold text-center mb-10">
          Our Latest Blogs
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl shadow-md bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
              />
              <div className="p-4 sm:p-5">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <Link
                  to={`/blogs/${post.id}`}
                  className="text-pink-500 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HospitalBlogs;
