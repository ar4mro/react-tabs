import { Routes, Route } from "react-router-dom";

// Pages
import About from "../pages/About";
import Features from "../pages/Features";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
    </Routes>
  );
}

export default AppRoutes;
