import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Gamemodes from "../pages/Gamemodes/Gamemodes";
import Loadouts from "../pages/Loadouts/LoadoutsSelection";
import LoadoutPage from "../pages/Loadouts/Loadouts";
import Calculator from "../pages/Calculator/Calculator";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/custom/ScrollToTop";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/Scrap-Wars-Syndicate-Website">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamemodes" element={<Gamemodes />} />
        <Route path="/loadouts" element={<Loadouts />} />
        <Route path="/standard" element={<LoadoutPage mode="normal" />} />
        <Route
          path="/attack-defend"
          element={<LoadoutPage mode="attacker_defender" />}
        />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all 404 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
