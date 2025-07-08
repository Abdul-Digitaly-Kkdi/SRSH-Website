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
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import StickyContactButtons from "./Components/StickyContactButtons";
import NotFound from "./Pages/404/Index";
import Testimonial from "./Pages/Testimonial/Index";
import DepartmentPage from "./Pages/specialities/Department";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <StickyContactButtons />
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
          {/* <Route path="/specialities/:id" element={<Speciality />} /> */}
          <Route path="/csr" element={<DeltaCancerFoundation />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/specialities/:slug" element={<DepartmentPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
