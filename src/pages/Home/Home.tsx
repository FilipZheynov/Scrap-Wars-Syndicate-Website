import Banner from "../../components/layout/Banner";
import AboutSection from "../../components/layout/AboutSection";
import LineSection from "../../components/layout/LineSection";
import PicturesSection from "../../components/layout/PicturesSection";
import FAQ from "../../components/layout/FAQ";
import JoinDiscordSection from "../../components/layout/JoinDiscordSection";
import Info from "../../components/layout/Info";
import BackToTop from "../../components/layout/BackToTop";
// import {Carousel} from "../../components/ui/Carousel";
// import Pic1 from "../../assets/picture1.png"
// import Pic2 from "../../assets/picture2.png"
// import Pic3 from "../../assets/picture3.png"




export default function Home() {
  // const Slides = [Pic1, Pic2, Pic3]
  return (
    <section className="w-full">
      <Banner />
      <LineSection />
      <AboutSection />
      <LineSection />
      <PicturesSection />
      <LineSection />
      <Info />
      <LineSection />
      <FAQ />
      <LineSection />
      <JoinDiscordSection />
      <BackToTop />
      {/* <Carousel>
        {Slides.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i + 1}`} />
        ))}
      </Carousel> */}

    </section>
  );
}
