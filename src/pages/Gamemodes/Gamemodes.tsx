import LineSection from "../../components/layout/LineSection";
import FAQ from "../../components/layout/FAQ";
import JoinDiscordSection from "../../components/layout/JoinDiscordSection";
import Info from "../../components/layout/Info";
import BackToTop from "../../components/layout/BackToTop";
import { ScrollReveal } from "../../components/custom/ScrollReveal";
import GamemodeShowcase from "../../components/ui/GamemodeShowcase";
import Medkit from "../../assets/Medkit.png";

export default function Gamemodes() {
  // const Slides = [Pic1, Pic2, Pic3]
  return (
    <section className="w-auto mx-4 md:mx-20 mt-5">
      <div className="w-full flex flex-row flex-wrap gap-5 justify-center">
        <ScrollReveal>
          <GamemodeShowcase
            image={Medkit}
            title="Invasion"
            description="Attack the enemy base and destroy the enemy"
            to="https://docs.google.com/document/d/1DQq3W07TIO1qly5cdp_qE4VoVhEEltuS-qtiT4yoXY0/edit?tab=t.yhn42z2tbtgs#heading=h.2wlp7eicndyh"
          />
        </ScrollReveal>
        <ScrollReveal>
          <GamemodeShowcase
            image={Medkit}
            title="Capture Point"
            description="Capture the capture point and hold it for a set time"
            to="https://docs.google.com/document/d/1DQq3W07TIO1qly5cdp_qE4VoVhEEltuS-qtiT4yoXY0/edit?tab=t.yhn42z2tbtgs#heading=h.8wulz3mskn1w"
          />
        </ScrollReveal>
        <ScrollReveal>
          <GamemodeShowcase
            image={Medkit}
            title="Base Battle"
            description="Battle the enemy and destroy the enemy base"
            to="https://docs.google.com/document/d/1DQq3W07TIO1qly5cdp_qE4VoVhEEltuS-qtiT4yoXY0/edit?tab=t.yhn42z2tbtgs#heading=h.exnpho3p8ge"
          />
        </ScrollReveal>
        <ScrollReveal>
          <GamemodeShowcase
            image={Medkit}
            title="Island Siege"
            description="Battle the enemy and capture the island"
            to="https://docs.google.com/document/d/1DQq3W07TIO1qly5cdp_qE4VoVhEEltuS-qtiT4yoXY0/edit?tab=t.yhn42z2tbtgs#heading=h.rpok3dwouubm"
          />
        </ScrollReveal>
      </div>
      <LineSection />
      <Info />
      <LineSection />
      <FAQ />
      <LineSection />
      <JoinDiscordSection />
      <BackToTop />
    </section>
  );
}
