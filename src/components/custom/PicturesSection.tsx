import Pic1 from "../../assets/picture1.png"
import Pic2 from "../../assets/picture2.png"
import Pic3 from "../../assets/picture3.png"

export default function PicturesSection() {
    return (
      <section className="mx-30" >
        <div className="grid grid-cols-2 grid-rows-3 gapx-10 gapy-5">
            <img src={Pic1} alt="Island" className="border-2"/>
            <p>Alot of maps</p>
            <img src={Pic2} alt="Group Pic" className="border-2 row-2 col-2"/>
            <p>Great community</p>
            <img src={Pic3} alt="Group Pic" className="border-2 row-3"/>
            <p>Big builds</p>
        </div>
      </section>
    );
  }
  