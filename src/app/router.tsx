import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Loadouts from "../pages/Loadouts/Loadouts";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/Scrap-Wars-Syndicate-Website">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamemodes" element={<Home />} />
        <Route path="/loadouts" element={<Loadouts />} />
        <Route path="/wiki" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
