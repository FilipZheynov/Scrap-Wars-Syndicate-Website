import { useMemo, useState } from "react";
import { CalculatorStatSheet } from "./CalculatorStatSheet";
import { type RocketBombShellType, generateRocketBombResults } from "./calculatorEngine";

const inputClassName =
  "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 outline-none transition focus:border-[var(--primary-base)]";

export const RocketsBombsCalculator = () => {
  const [caliberMm, setCaliberMm] = useState(122);
  const [shellType, setShellType] = useState<RocketBombShellType>("ROCKET");
  const [payloadKg, setPayloadKg] = useState(12);
  const rows = useMemo(() => generateRocketBombResults(caliberMm, shellType, payloadKg), [caliberMm, shellType, payloadKg]);

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-6">
      <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--text-primary)]">Rockets / Bombs Calculator</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Caliber (mm)</span>
          <input className={inputClassName} type="number" min={50} max={500} value={caliberMm} onChange={(e) => setCaliberMm(Number(e.target.value) || 0)} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Type</span>
          <select className={inputClassName} value={shellType} onChange={(e) => setShellType(e.target.value as RocketBombShellType)}>
            <option value="ROCKET">ROCKET</option>
            <option value="BOMB">BOMB</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Payload (kg)</span>
          <input className={inputClassName} type="number" min={1} max={250} value={payloadKg} onChange={(e) => setPayloadKg(Number(e.target.value) || 0)} />
        </label>
      </div>
      <CalculatorStatSheet rows={rows} />
    </section>
  );
};
