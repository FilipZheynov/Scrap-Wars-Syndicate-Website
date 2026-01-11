import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/Scrap-Wars-Syndicate-Website">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
