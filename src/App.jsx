import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout";
import Home from "./Pages/Home";
import Speciality from "./Pages/specialities/speciality";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/specialities/:id" element={<Speciality />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
