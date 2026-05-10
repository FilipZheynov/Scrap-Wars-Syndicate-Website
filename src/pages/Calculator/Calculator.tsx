import { useState } from "react";
import { AutocannonCalculator } from "../../components/custom/AutocannonCalculator";
import { CannonCalculator } from "../../components/custom/CannonCalculator";
import { IndirectCalculator } from "../../components/custom/IndirectCalculator";
import { RocketsBombsCalculator } from "../../components/custom/RocketsBombsCalculator";

type CalculatorType = "autocannon" | "cannon" | "indirect" | "rockets_bombs";

export default function Calculator() {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>("autocannon");

  const renderCalculator = () => {
    switch (calculatorType) {
      case "autocannon":
        return <AutocannonCalculator />;
      case "cannon":
        return <CannonCalculator />;
      case "indirect":
        return <IndirectCalculator />;
      case "rockets_bombs":
        return <RocketsBombsCalculator />;
      default:
        return <AutocannonCalculator />;
    }
  };

  return (
    <section className="w-full px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-3xl font-black uppercase tracking-wider text-[var(--text-primary)] md:text-5xl">
          Ballistics Calculator
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-400 md:text-base">
          Select a calculator type and get a full stat sheet based on your input values.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 p-2">
          <button onClick={() => setCalculatorType("autocannon")} className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-widest transition-all md:text-sm ${calculatorType === "autocannon" ? "bg-[var(--primary-base)] text-black" : "bg-zinc-900 text-zinc-400 hover:text-zinc-100"}`}>Autocannon</button>
          <button onClick={() => setCalculatorType("cannon")} className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-widest transition-all md:text-sm ${calculatorType === "cannon" ? "bg-[var(--primary-base)] text-black" : "bg-zinc-900 text-zinc-400 hover:text-zinc-100"}`}>Cannon</button>
          <button onClick={() => setCalculatorType("indirect")} className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-widest transition-all md:text-sm ${calculatorType === "indirect" ? "bg-[var(--primary-base)] text-black" : "bg-zinc-900 text-zinc-400 hover:text-zinc-100"}`}>Indirect</button>
          <button onClick={() => setCalculatorType("rockets_bombs")} className={`rounded-lg px-4 py-2 text-xs font-black uppercase tracking-widest transition-all md:text-sm ${calculatorType === "rockets_bombs" ? "bg-[var(--primary-base)] text-black" : "bg-zinc-900 text-zinc-400 hover:text-zinc-100"}`}>Rockets / Bombs</button>
        </div>

        <div className="mt-6">{renderCalculator()}</div>
      </div>
    </section>
  );
}
