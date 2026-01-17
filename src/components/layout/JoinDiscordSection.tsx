import Button from "../ui/Button"
import { ScrollReveal } from "../custom/ScrollReveal"

export default function JoinDiscordSection() {
    return (
      <section className="flex flex-col items-center my-10 md:my-20" >
        
        <ScrollReveal><h1 className="page-title font-headings text-center">Decided you want to join?</h1></ScrollReveal>
        <ScrollReveal><p className="font-texts text-3xl text-center">Join the discord where you can participate:</p></ScrollReveal>
        <ScrollReveal> <Button className="mt-4 md:mt-5 bg-[var(--primary)] text-xl" variant="primary" to="https://discord.gg/Y63RSd86">Join Discord Server</Button></ScrollReveal>
        <ScrollReveal><p className="font-texts text-3xl text-center mt-5">Find us on:</p></ScrollReveal>
        <ScrollReveal> <Button className="mt-4 md:mt-5 text-xl" variant="secondary" to="https://www.instagram.com/scrap_wars_syndicate/">Instagram</Button></ScrollReveal>
        <ScrollReveal> <Button className="mt-4 md:mt-5 text-xl" variant="secondary" to="https://www.youtube.com/@ScrapWarsSyndicate2">Youtube</Button></ScrollReveal>
      </section>
    );
  }
  