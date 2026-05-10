import { useMemo, useState } from "react";
import { CalculatorStatSheet } from "./CalculatorStatSheet";
import { type AutocannonShellType, generateAutocannonResults } from "./calculatorEngine";

const inputClassName =
  "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 outline-none transition focus:border-[var(--primary-base)]";

export const AutocannonCalculator = () => {
  const [mm, setMm] = useState(30);
  const [shellType, setShellType] = useState<AutocannonShellType>("AP");
  const [rpm, setRpm] = useState(280);
  const rows = useMemo(() => generateAutocannonResults(mm, shellType, rpm), [mm, shellType, rpm]);

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-6">
      <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--text-primary)]">Autocannon Calculator</h2>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">MM</span>
          <input className={inputClassName} type="number" min={20} max={60} value={mm} onChange={(e) => setMm(Number(e.target.value) || 0)} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Shell Type</span>
          <select className={inputClassName} value={shellType} onChange={(e) => setShellType(e.target.value as AutocannonShellType)}>
            <option value="AP">AP</option>
            <option value="HE">HE</option>
          </select>
        </label>
        {shellType === "AP" && (
          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">RPM</span>
            <input className={inputClassName} type="number" min={1} max={1200} value={rpm} onChange={(e) => setRpm(Number(e.target.value) || 0)} />
          </label>
        )}
      </div>
      <CalculatorStatSheet rows={rows} />
    </section>
  );
};
