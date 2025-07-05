import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout";
import Home from "./Pages/Home";
import Speciality from "./Pages/specialities/speciality";
import DeltaCancerFoundation from "./Pages/CSR";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/specialities/:id" element={<Speciality />} />
          <Route path="/csr" element={<DeltaCancerFoundation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
