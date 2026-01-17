import BannerImg from "../../assets/Banner.jpg";
import Button from "../ui/Button";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="relative w-full h-max">
        <div className="w-full h-96 md:h-[500px] lg:h-[700px] overflow-hidden">
         <img src={BannerImg} alt="banner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[var(--bg-overlay)]"></div>

        <div className="absolute top-1/6 md:top-1/5 left-4 md:left-8 lg:left-1/15 lg:top-1/7 z-20 max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
            <h1 className="font-headings page-title text-4xl md:text-5xl lg:text-7xl">Scrap Wars Syndicate</h1>
            <p className="font-texts font-light mt-1 text-base md:text-sm lg:text-lg">Pain itself is something to be experienced, but it is pursued for the sake of usefulness. Temporary effort and hardship are undertaken to achieve some benefit. No one should engage in labor except to gain an advantage from it. </p>
            <Button className="mt-4 md:mt-5 bg-red text-lg" variant="primary" to="https://discord.gg/Y63RSd86">Join Discord Server</Button>
        </div>      
      </div>
    </section>
  );
}
