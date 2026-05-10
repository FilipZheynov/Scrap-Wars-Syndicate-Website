import type { StatRow } from "./calculatorEngine";

interface CalculatorStatSheetProps {
  rows: StatRow[];
}

export const CalculatorStatSheet = ({ rows }: CalculatorStatSheetProps) => {
  return (
    <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950/70">
      <table className="w-full min-w-[520px] text-sm">
        <thead className="bg-zinc-900 text-zinc-300">
          <tr>
            <th className="px-3 py-2 text-left font-semibold">Stat</th>
            <th className="px-3 py-2 text-left font-semibold">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-zinc-800/90 text-zinc-200 even:bg-zinc-900/40">
              <td className="px-3 py-2">{row.label}</td>
              <td className="px-3 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
