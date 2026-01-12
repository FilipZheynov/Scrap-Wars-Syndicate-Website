import Pic1 from "../../assets/picture1.png"
import Pic12 from "../../assets/picture12.png"
import Pic13 from "../../assets/picture13.png"
import Pic2 from "../../assets/picture2.png"
import Pic22 from "../../assets/picture22.png"
import Pic23 from "../../assets/picture23.jpg"
import Pic3 from "../../assets/picture3.jpg"
import Pic32 from "../../assets/picture32.jpg"
import Pic33 from "../../assets/picture33.jpg"
import { ScrollReveal } from "./ScrollReveal"

export default function PicturesSection() {
    return (
      <section className="mx-5 md:mx-30" >
        <h1 className="text-center font-texts page-subtitle mb-20">Variety</h1>
        <div className="grid grid-cols-1 gapx-10 gapy-5 md:grid-cols-2">
          <ScrollReveal>
                <div className="group relative w-full h-80 cursor-pointer">
                    <div className="absolute inset-0 z-10 transition-all duration-500 ease-out translate-x-4 translate-y-4 rotate-6 group-hover:translate-y-60 group-hover:rotate-12">
                      <img src={Pic13} className="w-full h-full object-cover rounded-xl shadow-md border-2 border-[var(--primary)]" />
                    </div>
                    <div className="absolute inset-0 z-20 transition-all duration-500 ease-out translate-x-2 translate-y-2 rotate-3 group-hover:-translate-y-60 group-hover:-rotate-5">
                      <img src={Pic12} className="w-full h-full object-cover rounded-xl shadow-md border-2 border-[var(--primary)]" />
                    </div>
                    <div className="absolute inset-0 z-30 transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <img src={Pic1} className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-[var(--primary)]" />
                  </div>
                </div>
            </ScrollReveal>
            <p className="font-texts text-5xl text-[var(--text-secondary)] text-center content-center my-10  mt-15 md:mt-0" >Alot of maps</p>
            
            <div className="relative md:row-2 md:col-2">
              <ScrollReveal>
                <div className="group relative w-full h-80 cursor-pointer">
                    <div className="absolute inset-0 z-10 transition-all duration-500 ease-out -translate-x-4 translate-y-4 -rotate-6 group-hover:translate-y-60 group-hover:-rotate-12">
                      <img src={Pic23} className="w-full h-full object-cover rounded-xl shadow-md border-2 border-[var(--primary)]" />
                    </div>
                    <div className="absolute inset-0 z-20 transition-all duration-500 ease-out -translate-x-2 translate-y-2 -rotate-3 group-hover:-translate-y-60 group-hover:rotate-5">
                      <img src={Pic22} className="w-full h-full object-cover rounded-xl shadow-md border-2 border-[var(--primary)]" />
                    </div>
                    <div className="absolute inset-0 z-30 transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <img src={Pic2} className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-[var(--primary)]" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <p className="font-texts text-5xl text-[var(--text-secondary)] text-center content-center my-10  mt-15 md:mt-0">Great community</p>
            <div className="md:row-3">
              <ScrollReveal>
                <div className="group relative w-full h-80 cursor-pointer">
                    <div className="absolute inset-0 z-10 transition-all duration-500 ease-out translate-x-4 translate-y-4 rotate-6 group-hover:translate-y-60 group-hover:rotate-12">
                      <img src={Pic33} className="w-full h-full object-cover rounded-xl shadow-md border-2 border-[var(--primary)]" />
                    </div>
                    <div className="absolute inset-0 z-20 transition-all duration-500 ease-out translate-x-2 translate-y-2 rotate-3 group-hover:-translate-y-60 group-hover:-rotate-5">
                      <img src={Pic32} className="w-full h-full object-cover rounded-xl shadow-md border-2 border-[var(--primary)]" />
                    </div>
                    <div className="absolute inset-0 z-30 transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2">
                      <img src={Pic3} className="w-full h-full object-cover rounded-xl shadow-xl border-2 border-[var(--primary)]" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <p className="font-texts text-5xl text-[var(--text-secondary)] text-center content-center my-10 mt-15 md:mt-0">Magnificent builds</p>
        </div>
      </section>
    );
  }
  