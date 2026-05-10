import { NavLink } from "react-router-dom";
import Card from "../ui/Card";
import Ammo from "../../assets/Ammo.png";
import STG from "../../assets/STG.png";
import Baguette from "../../assets/Baguette.png";

export default function Info() {
  return (
    <section className="mx-4 md:mx-8 lg:mx-12 xl:mx-50 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6 my-5">
        <NavLink to="https://docs.google.com/document/d/1DQq3W07TIO1qly5cdp_qE4VoVhEEltuS-qtiT4yoXY0/edit?tab=t.0#heading=h.xwmv7xr8uwao">
          <Card image={Ammo} title="Rules" description="" />
        </NavLink>
        <NavLink to="/loadouts">
          <Card image={STG} title="Loadouts" description="" />
        </NavLink>
        <NavLink to="/gamemodes">
          <Card image={Baguette} title="Gamemodes" description="" />
        </NavLink>
      </div>
    </section>
  );
}
