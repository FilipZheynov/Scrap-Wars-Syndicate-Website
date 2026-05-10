import { useMemo, useState } from "react";
import { CalculatorStatSheet } from "./CalculatorStatSheet";
import {
  type AtgmType,
  type RocketCategory,
  type RocketType,
  generateRocketBombResults,
} from "./calculatorEngine";

const inputClassName =
  "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 outline-none transition focus:border-[var(--primary-base)]";

export const RocketsBombsCalculator = () => {
  const [category, setCategory] = useState<RocketCategory>("ATGM");
  const [atgmType, setAtgmType] = useState<AtgmType>("HEAT");
  const [rocketType, setRocketType] = useState<RocketType>("RocketPods");
  const [bombKg, setBombKg] = useState(50);
  const [grenadeMm, setGrenadeMm] = useState(40);
  const rows = useMemo(
    () => generateRocketBombResults(category, { atgmType, rocketType, bombKg, grenadeMm }),
    [category, atgmType, rocketType, bombKg, grenadeMm],
  );

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-6">
      <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--text-primary)]">Rockets / Bombs Calculator</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Category</span>
          <select className={inputClassName} value={category} onChange={(e) => setCategory(e.target.value as RocketCategory)}>
            <option value="ATGM">ATGM</option>
            <option value="Rocket">Rocket</option>
            <option value="Bomb">Bomb</option>
            <option value="Grenade">Grenade</option>
          </select>
        </label>
        {category === "ATGM" && (
          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Type</span>
            <select className={inputClassName} value={atgmType} onChange={(e) => setAtgmType(e.target.value as AtgmType)}>
              <option value="HEAT">HEAT</option>
              <option value="HE">HE</option>
            </select>
          </label>
        )}
        {category === "Rocket" && (
          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Type</span>
            <select className={inputClassName} value={rocketType} onChange={(e) => setRocketType(e.target.value as RocketType)}>
              <option value="RocketPods">RocketPods</option>
              <option value="Thermobaric">Thermobaric</option>
            </select>
          </label>
        )}
        {category === "Bomb" && (
          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Bomb weight (kg)</span>
            <input className={inputClassName} type="number" min={1} max={1000} value={bombKg} onChange={(e) => setBombKg(Number(e.target.value) || 0)} />
          </label>
        )}
        {category === "Grenade" && (
          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Grenade caliber (mm)</span>
            <input className={inputClassName} type="number" min={1} max={200} value={grenadeMm} onChange={(e) => setGrenadeMm(Number(e.target.value) || 0)} />
          </label>
        )}
      </div>
      <CalculatorStatSheet rows={rows} />
    </section>
  );
};
