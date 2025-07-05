import { useEffect } from "react";
import { useParams } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "5 Early Signs of Heart Disease You Shouldn’t Ignore",
    content: "Full blog content for blog 1 goes here...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucKCgIS3OZL7tFZZXXjdtKBTZp0P6my2nJQ&s",
    date: "July 5, 2025",
  },
  {
    id: "2",
    title: "The Importance of Annual Health Checkups",
    content: "Full blog content for blog 2 goes here...",
    image: "https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg",
    date: "June 28, 2025",
  },
  {
    id: "3",
    title: "How to Manage Stress in a Busy Lifestyle",
    content: "Full blog content for blog 3 goes here...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAFUrjD3mh3dMeSKc8mqmw8lJtVK3CLY22Q&s",
    date: "June 20, 2025",
  },
  
  {
    id: "5",
    title: "The Importance of Annual Health Checkups",
    content: "Full blog content for blog 2 goes here...",
    image: "https://w0.peakpx.com/wallpaper/315/432/HD-wallpaper-medical-hospital.jpg",
    date: "June 28, 2025",
  },
  {
    id: "4",
    title: "5 Early Signs of Heart Disease You Shouldn’t Ignore",
    content: "Full blog content for blog 1 goes here...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucKCgIS3OZL7tFZZXXjdtKBTZp0P6my2nJQ&s",
    date: "July 5, 2025",
  },
  {
    id: "6",
    title: "How to Manage Stress in a Busy Lifestyle",
    content: "Full blog content for blog 3 goes here...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAFUrjD3mh3dMeSKc8mqmw8lJtVK3CLY22Q&s",
    date: "June 20, 2025",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!blog) {
    return (
      <div className="text-center text-red-500 py-16 text-lg">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 sm:h-64 md:h-72 lg:h-80 xl:h-[400px] object-cover rounded-md mb-6"
      />
      <p className="text-gray-500 text-sm sm:text-base mb-2">{blog.date}</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-800 mb-6 leading-tight">
        {blog.title}
      </h1>
      <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetails;
