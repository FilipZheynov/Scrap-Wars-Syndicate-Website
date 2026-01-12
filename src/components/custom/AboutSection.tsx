import Medkit from "../../assets/Medkit.png"
import Ammo from "../../assets/Ammo.png"
import Baguette from "../../assets/Baguette.png"
import STG from "../../assets/STG.png"
import Card from "../ui/Card"
import { ScrollReveal} from "./ScrollReveal"

export default function AboutSection() {
  return (
    <section className="mx-4 md:mx-8 lg:mx-12 xl:mx-50 mb-10" >
            <h1 className="font-texts font-medium page-subtitle text-3xl md:text-4xl lg:text-5xl xl:text-6xl">What is Scrap Wars Syndicate?</h1>
            <p className="font-texts font-light w-full md:w-3/4 lg:w-1/2 mt-4 text-sm md:text-lg">Scrap Wars Syndicate is a global community dedicated to Scrap Mechanic combat. We bring players together from around the world to compete in high-stakes battles while fostering an environment for innovation and advanced engineering</p>
            <h1 className="font-texts text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center my-5">We Value:</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-5">
                
            <ScrollReveal><Card image={Medkit} title="Teamwork" description="Teamwork is in the core of SWS"/></ScrollReveal>
            <ScrollReveal><Card image={Ammo} title="Realism" description="Realism is a crucial part of the battles"/></ScrollReveal>
            <ScrollReveal><Card image={Baguette} title="Respect" description="Respect everyone except vanilla players"/></ScrollReveal>
            <ScrollReveal><Card image={STG} title="Fair Game" description="Keep the game fair, follow the rules"/></ScrollReveal>
                
            </div>
    </section>
  );
}
