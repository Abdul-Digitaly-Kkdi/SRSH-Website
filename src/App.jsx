import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./Layout";
import Home from "./Pages/Home";
import Clinical_Oncology from "./Pages/specialities/Clinical_Oncology";
import Doctors from "./Pages/doctors";
import Speciality from "./Pages/specialities/speciality";
import DeltaCancerFoundation from "./Pages/CSR";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./Pages/Blogs/BlogDetails";
import Gallery from "./Pages/Gallery";
import { useEffect } from "react";




export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // or just: window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route
            path="/specialities/clinical-oncology"
            element={<Clinical_Oncology />}
          /> */}
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/specialities/:id" element={<Speciality />} />
          <Route path="/csr" element={<DeltaCancerFoundation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
