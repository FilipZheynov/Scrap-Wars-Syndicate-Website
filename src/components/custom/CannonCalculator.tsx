import { useMemo, useState } from "react";
import { CalculatorStatSheet } from "./CalculatorStatSheet";
import {
  type CannonShellType,
  generateCannonResults,
} from "./calculatorEngine";

const inputClassName =
  "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 outline-none transition focus:border-[var(--primary-base)]";

export const CannonCalculator = () => {
  const [mm, setMm] = useState(90);
  const [shellType, setShellType] = useState<CannonShellType>("AP");
  const [realLifePen, setRealLifePen] = useState(140);
  const rows = useMemo(
    () =>
      generateCannonResults(
        mm,
        shellType,
        shellType === "AP" ? realLifePen : undefined,
      ),
    [mm, shellType, realLifePen],
  );

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 md:p-6">
      <h2 className="text-2xl font-black uppercase tracking-wide text-[var(--text-primary)]">
        Cannon Calculator
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Caliber (mm)
          </span>
          <input
            className={inputClassName}
            type="number"
            min={20}
            max={200}
            value={mm}
            onChange={(e) => setMm(Number(e.target.value) || 0)}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Shell Type
          </span>
          <select
            className={inputClassName}
            value={shellType}
            onChange={(e) => setShellType(e.target.value as CannonShellType)}
          >
            <option value="AP">AP</option>
            <option value="HEAT">HEAT</option>
            <option value="HE">HE</option>
          </select>
        </label>
        {shellType === "AP" && (
          <label className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Real-life Penetration (mm)
            </span>
            <input
              className={inputClassName}
              type="number"
              min={1}
              max={1000}
              value={realLifePen}
              onChange={(e) => setRealLifePen(Number(e.target.value) || 0)}
            />
          </label>
        )}
      </div>
      <CalculatorStatSheet rows={rows} />
    </section>
  );
};
