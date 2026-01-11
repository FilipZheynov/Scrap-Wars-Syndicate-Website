import "./home.css";
import Banner from "../../components/custom/Banner";
import AboutSection from "../../components/custom/AboutSection";
import LineSection from "../../components/custom/LineSection";
import PicturesSection from "../../components/custom/PicturesSection";
// import {Carousel} from "../../components/ui/Carousel";
// import Pic1 from "../../assets/picture1.png"
// import Pic2 from "../../assets/picture2.png"
// import Pic3 from "../../assets/picture3.png"




export default function Home() {
  // const Slides = [Pic1, Pic2, Pic3]
  return (
    <section className="w-full">
      <Banner />
      <LineSection/>
      <AboutSection/>
      <LineSection/>
      <PicturesSection/>
      {/* <Carousel>
        {Slides.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i + 1}`} />
        ))}
      </Carousel> */}

    </section>
  );
}
