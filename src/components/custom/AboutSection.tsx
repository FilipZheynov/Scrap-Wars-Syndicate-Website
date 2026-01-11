import Medkit from "../../assets/Medkit.png"
import Ammo from "../../assets/Ammo.png"
import Baguette from "../../assets/Baguette.png"
import STG from "../../assets/STG.png"
import Card from "../ui/Card"

export default function AboutSection() {
  return (
    <section className="mx-4 md:mx-8 lg:mx-12 xl:mx-50 mb-10" >
            <h1 className="page-subtitle text-3xl md:text-4xl lg:text-5xl xl:text-6xl">What is Scrap Wars Syndicate?</h1>
            <p className="w-full md:w-3/4 lg:w-1/2 mt-4 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center my-5">We Value:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-5">
                <Card image={Medkit} title="Teamwork" description="Teamwork is in the core of SWS"/>
                <Card image={Ammo} title="Realism" description="Teamwork is in the core of SWS"/>
                <Card image={Baguette} title="Respect" description="Teamwork is in the core of SWS"/>
                <Card image={STG} title="Fair Game" description="Teamwork is in the core of SWS"/>
            </div>
    </section>
  );
}
