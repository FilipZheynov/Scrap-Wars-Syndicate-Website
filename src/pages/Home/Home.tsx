import "./home.css";
import Banner from "../../components/custom/Banner";
import AboutSection from "../../components/custom/AboutSection";
import LineSection from "../../components/custom/LineSection";

export default function Home() {
  return (
    <section className="w-full">
      <Banner />
      <LineSection/>
      <AboutSection/>
      <LineSection/>

    </section>
  );
}
