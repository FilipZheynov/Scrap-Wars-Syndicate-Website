import { useMemo, useState } from "react";
import { CalculatorStatSheet } from "./CalculatorStatSheet";
import { type IndirectShellType, generateIndirectResults } from "./calculatorEngine";

const inputClassName =
  "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 outline-none transition focus:border-[var(--primary-base)]";

export const IndirectCalculator = () => {
  const [mm, setMm] = useState(81);
  const [shellType, setShellType] = useState<IndirectShellType>("HE");
  const [rpm, setRpm] = useState(8);
  const rows = useMemo(() => generateIndirectResults(mm, shellType, rpm), [mm, shellType, rpm]);

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-6">
      <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--text-primary)]">Indirect Calculator</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">MM</span>
          <input className={inputClassName} type="number" min={40} max={240} value={mm} onChange={(e) => setMm(Number(e.target.value) || 0)} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Shell Type</span>
          <select className={inputClassName} value={shellType} onChange={(e) => setShellType(e.target.value as IndirectShellType)}>
            <option value="HE">HE</option>
            <option value="SMOKE">SMOKE</option>
            <option value="INCENDIARY">INCENDIARY</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">RPM</span>
          <input className={inputClassName} type="number" min={1} max={30} value={rpm} onChange={(e) => setRpm(Number(e.target.value) || 0)} />
        </label>
      </div>
      <CalculatorStatSheet rows={rows} />
    </section>
  );
};
