import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ⬅️ import Navbar
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop"; // optional but nice!

export default function App() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col">
      <Navbar /> 
      <ScrollToTop />

      <div> 
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route className="flex mt-[600px]" path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
      </div>

      <Footer /> 
    </div>
  );
}
