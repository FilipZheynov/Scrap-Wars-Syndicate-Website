import { NavLink } from "react-router-dom";
import Card from "../ui/Card"
import Ammo from "../../assets/Ammo.png"
import STG from "../../assets/STG.png"
import Baguette from "../../assets/Baguette.png"

export default function Info() {
  return (
    <section className="mx-4 md:mx-8 lg:mx-12 xl:mx-50 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-6 my-5">
            <NavLink to="/rules"><Card image={Ammo} title="Rules" description=""/></NavLink>
            <NavLink to="/loadouts"><Card image={STG} title="Loadouts" description=""/></NavLink>
            <NavLink to="/wiki"><Card image={Baguette} title="Wiki" description=""/></NavLink>
        </div>
    </section>
  );
}
