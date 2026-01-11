import BannerVideo from "../../assets/BannerVideo.mp4";
import Button from "../ui/Button";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="relative w-full h-max">
        <div className="w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <video autoPlay loop muted playsInline src={BannerVideo} className="w-full h-full object-cover object-top" >Your browser does not support HTML5 video.</video>
        </div>
        <div className="absolute inset-0 bg-[var(--bg-overlay)]"></div>

        <div className="absolute top-1/4 md:top-1/5 left-4 md:left-8 lg:left-1/15 z-20 max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
            <h1 className="font-headings page-title text-4xl md:text-5xl lg:text-7xl">Scrap Wars Syndicate</h1>
            <p className="mt-4 md:mt-6 lg:mt-8 text-sm md:text-base lg:text-lg">Pain itself is something to be experienced, but it is pursued for the sake of usefulness. Temporary effort and hardship are undertaken to achieve some benefit. No one should engage in labor except to gain an advantage from it. </p>
            <Button className="mt-4 md:mt-5 bg-red" variant="primary" to="https://discord.gg/Y63RSd86">Join Discord Server</Button>
        </div>      
      </div>
    </section>
  );
}
