import Button from "../ui/Button"
import { ScrollReveal } from "./ScrollReveal"

export default function JoinDiscordSection() {
    return (
      <section className="flex flex-col items-center my-10 md:my-20" >
        
        <ScrollReveal><h1 className="page-title font-headings text-center">Decided you want to join?</h1></ScrollReveal>
        <ScrollReveal><p className="font-texts text-3xl text-center">This is the link to the discord where you can participate:</p></ScrollReveal>
        <ScrollReveal> <Button className="mt-4 md:mt-5 bg-red text-xl" variant="primary" to="https://discord.gg/Y63RSd86">Join Discord Server</Button></ScrollReveal>
      </section>
    );
  }
  