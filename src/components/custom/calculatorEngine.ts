export type StatRow = { label: string; value: string | number };

type ShellStats = {
  spread: number;
  explLvl: number;
  explRad: number;
  explImpRadius: number;
  explImpStr: number;
  gravity: number;
  lifetime: number;
  ricochetPct: number;
  ricochetAngle: number;
  normalization: number;
  ignore: number;
  shrapnelType: string;
  fShrpCount: number;
  fShrpDamage: number;
  fShrpSpread: number;
  wShrpCount: number;
  wShrpDamage: number;
  wShrpSpread: number;
  fExplLvl: number;
  fExplRadius: number;
};

export type AutocannonShellType = "AP" | "HE";
export type CannonShellType = "AP" | "HEAT" | "HE";
export type IndirectShellType = "HE" | "SMOKE" | "INCENDIARY";
export type RocketBombShellType = "ROCKET" | "BOMB";

const round = (value: number, decimals = 2) => {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
};

const getBracket = (mm: number) => {
  if (mm <= 39) return 0;
  if (mm <= 45) return 1;
  return 2;
};

const toSheet = (stats: ShellStats, penetration: number): StatRow[] => [
  { label: "Spread", value: stats.spread },
  { label: "Expl. Lvl", value: stats.explLvl },
  { label: "Expl. Rad", value: stats.explRad },
  { label: "Expl. Imp. Radius", value: stats.explImpRadius },
  { label: "Expl. Imp. Str", value: stats.explImpStr },
  { label: "Gravity", value: stats.gravity },
  { label: "Lifetime", value: stats.lifetime },
  { label: "Projectile Type", value: "-" },
  { label: "Ricochet %", value: stats.ricochetPct },
  { label: "Ricochet Angle", value: stats.ricochetAngle },
  { label: "Normalization", value: stats.normalization },
  { label: "Penetration", value: penetration },
  { label: "Ignore Less Than", value: stats.ignore },
  { label: "Shrapnel Type", value: stats.shrapnelType },
  { label: "F. Shrp Count", value: stats.fShrpCount },
  { label: "F. Shrp Speed", value: 100 },
  { label: "F. Shrp Damage", value: stats.fShrpDamage },
  { label: "F. Shrp Spread", value: stats.fShrpSpread },
  { label: "W. Shrp Count", value: stats.wShrpCount },
  { label: "W. Shrp Speed", value: 100 },
  { label: "W. Shrp Damage", value: stats.wShrpDamage },
  { label: "W. Shrp Spread", value: stats.wShrpSpread },
  { label: "F. Expl. Lvl", value: stats.fExplLvl },
  { label: "F. Expl Radius", value: stats.fExplRadius },
];

export const generateAutocannonResults = (mm: number, shellType: AutocannonShellType, rpm: number): StatRow[] => {
  const b = getBracket(mm);
  if (shellType === "AP") {
    const penetration = rpm < 300 ? Math.round(mm / 10 - 1) : 0;
    const table: ShellStats[] = [
      { spread: 0.5, explLvl: 7, explRad: 0.1, explImpRadius: 0, explImpStr: 0, gravity: 10, lifetime: 15, ricochetPct: 0.3, ricochetAngle: 70, normalization: 5, ignore: 3, shrapnelType: "Little (Weak)", fShrpCount: 3, fShrpDamage: 25, fShrpSpread: 360, wShrpCount: 3, wShrpDamage: 50, wShrpSpread: 30, fExplLvl: 0, fExplRadius: 0 },
      { spread: 0.4, explLvl: 7, explRad: 0.1, explImpRadius: 0, explImpStr: 0, gravity: 10, lifetime: 15, ricochetPct: 0.3, ricochetAngle: 70, normalization: 5, ignore: 3, shrapnelType: "Normal", fShrpCount: 5, fShrpDamage: 25, fShrpSpread: 360, wShrpCount: 5, wShrpDamage: 50, wShrpSpread: 30, fExplLvl: 0, fExplRadius: 0 },
      { spread: 0.3, explLvl: 8, explRad: 0.1, explImpRadius: 0, explImpStr: 0, gravity: 10, lifetime: 20, ricochetPct: 0.3, ricochetAngle: 70, normalization: 5, ignore: 3, shrapnelType: "Normal", fShrpCount: 8, fShrpDamage: 25, fShrpSpread: 360, wShrpCount: 7, wShrpDamage: 50, wShrpSpread: 35, fExplLvl: 0, fExplRadius: 0 },
    ];
    return toSheet(table[b], penetration);
  }

  const shrapnel = Math.round(mm / 2.7);
  const table: ShellStats[] = [
    { spread: 0.5, explLvl: 3, explRad: 0.3, explImpRadius: 3, explImpStr: 150, gravity: 10, lifetime: 15, ricochetPct: 0.3, ricochetAngle: 80, normalization: 0, ignore: 1, shrapnelType: "Little", fShrpCount: shrapnel, fShrpDamage: 75, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 45, fExplLvl: 0, fExplRadius: 0 },
    { spread: 0.4, explLvl: 3, explRad: 0.5, explImpRadius: 5, explImpStr: 300, gravity: 15, lifetime: 15, ricochetPct: 0.3, ricochetAngle: 80, normalization: 0, ignore: 1, shrapnelType: "Strong", fShrpCount: shrapnel, fShrpDamage: 75, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 45, fExplLvl: 0, fExplRadius: 0 },
    { spread: 0.3, explLvl: 4, explRad: 0.5, explImpRadius: 7, explImpStr: 550, gravity: 15, lifetime: 20, ricochetPct: 0.3, ricochetAngle: 80, normalization: 0, ignore: 1, shrapnelType: "Strong", fShrpCount: shrapnel, fShrpDamage: 75, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 45, fExplLvl: 0, fExplRadius: 0 },
  ];
  return toSheet(table[b], 0);
};

export const generateCannonResults = (mm: number, shellType: CannonShellType, realLifePenetration?: number): StatRow[] => {
  const b = getBracket(mm);
  const basePen = realLifePenetration && realLifePenetration > 0 ? realLifePenetration : mm * 1.45;
  const blastScale = mm / 60;

  const byType: Record<CannonShellType, ShellStats[]> = {
    AP: [
      { spread: 0.42, explLvl: 7, explRad: 0.1, explImpRadius: 0, explImpStr: 0, gravity: 9, lifetime: 18, ricochetPct: 0.28, ricochetAngle: 68, normalization: 8, ignore: 4, shrapnelType: "Dense", fShrpCount: 6, fShrpDamage: 42, fShrpSpread: 360, wShrpCount: 5, wShrpDamage: 75, wShrpSpread: 32, fExplLvl: 0, fExplRadius: 0 },
      { spread: 0.34, explLvl: 8, explRad: 0.12, explImpRadius: 0, explImpStr: 0, gravity: 9, lifetime: 20, ricochetPct: 0.25, ricochetAngle: 70, normalization: 10, ignore: 5, shrapnelType: "Dense", fShrpCount: 8, fShrpDamage: 50, fShrpSpread: 360, wShrpCount: 6, wShrpDamage: 85, wShrpSpread: 34, fExplLvl: 0, fExplRadius: 0 },
      { spread: 0.28, explLvl: 8, explRad: 0.15, explImpRadius: 0, explImpStr: 0, gravity: 10, lifetime: 22, ricochetPct: 0.22, ricochetAngle: 72, normalization: 11, ignore: 6, shrapnelType: "Dense", fShrpCount: 10, fShrpDamage: 60, fShrpSpread: 360, wShrpCount: 8, wShrpDamage: 95, wShrpSpread: 36, fExplLvl: 0, fExplRadius: 0 },
    ],
    HEAT: [
      { spread: 0.45, explLvl: 6, explRad: 0.28, explImpRadius: 2, explImpStr: 180, gravity: 10, lifetime: 18, ricochetPct: 0.2, ricochetAngle: 65, normalization: 2, ignore: 2, shrapnelType: "Jet", fShrpCount: 4, fShrpDamage: 30, fShrpSpread: 340, wShrpCount: 4, wShrpDamage: 55, wShrpSpread: 26, fExplLvl: 1, fExplRadius: 0.2 },
      { spread: 0.38, explLvl: 7, explRad: 0.35, explImpRadius: 3, explImpStr: 260, gravity: 10, lifetime: 20, ricochetPct: 0.18, ricochetAngle: 68, normalization: 3, ignore: 3, shrapnelType: "Jet", fShrpCount: 5, fShrpDamage: 36, fShrpSpread: 340, wShrpCount: 5, wShrpDamage: 62, wShrpSpread: 28, fExplLvl: 1, fExplRadius: 0.25 },
      { spread: 0.31, explLvl: 7, explRad: 0.44, explImpRadius: 4, explImpStr: 340, gravity: 11, lifetime: 22, ricochetPct: 0.15, ricochetAngle: 70, normalization: 4, ignore: 4, shrapnelType: "Jet", fShrpCount: 7, fShrpDamage: 42, fShrpSpread: 340, wShrpCount: 6, wShrpDamage: 68, wShrpSpread: 30, fExplLvl: 2, fExplRadius: 0.3 },
    ],
    HE: [
      { spread: 0.47, explLvl: 4, explRad: round(0.65 * blastScale), explImpRadius: round(7 * blastScale), explImpStr: round(450 * blastScale), gravity: 11, lifetime: 17, ricochetPct: 0.3, ricochetAngle: 80, normalization: 0, ignore: 1, shrapnelType: "Fragmented", fShrpCount: Math.round(mm / 2.5), fShrpDamage: 85, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 50, fExplLvl: 0, fExplRadius: 0 },
      { spread: 0.4, explLvl: 5, explRad: round(0.82 * blastScale), explImpRadius: round(9 * blastScale), explImpStr: round(580 * blastScale), gravity: 12, lifetime: 19, ricochetPct: 0.3, ricochetAngle: 80, normalization: 0, ignore: 1, shrapnelType: "Fragmented", fShrpCount: Math.round(mm / 2.3), fShrpDamage: 90, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 55, fExplLvl: 0, fExplRadius: 0 },
      { spread: 0.34, explLvl: 6, explRad: round(1.05 * blastScale), explImpRadius: round(11 * blastScale), explImpStr: round(720 * blastScale), gravity: 12, lifetime: 21, ricochetPct: 0.3, ricochetAngle: 80, normalization: 0, ignore: 1, shrapnelType: "Fragmented", fShrpCount: Math.round(mm / 2.1), fShrpDamage: 95, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 60, fExplLvl: 0, fExplRadius: 0 },
    ],
  };

  const penetration = shellType === "AP" ? Math.round(basePen) : shellType === "HEAT" ? Math.round(mm * 1.7) : 0;
  return toSheet(byType[shellType][b], penetration);
};

export const generateIndirectResults = (mm: number, shellType: IndirectShellType, rpm: number): StatRow[] => {
  const b = getBracket(Math.min(mm, 60));
  const fireBonus = rpm > 10 ? 1.1 : 1;
  const baseShrap = Math.round(mm / 2.4);
  const byType: Record<IndirectShellType, ShellStats[]> = {
    HE: [
      { spread: 0.55, explLvl: 4, explRad: 0.8, explImpRadius: 8, explImpStr: 500, gravity: 16, lifetime: 24, ricochetPct: 0.1, ricochetAngle: 88, normalization: 0, ignore: 1, shrapnelType: "Arc Fragment", fShrpCount: Math.round(baseShrap * fireBonus), fShrpDamage: 68, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 45, fExplLvl: 1, fExplRadius: 0.35 },
      { spread: 0.46, explLvl: 5, explRad: 1, explImpRadius: 10, explImpStr: 650, gravity: 17, lifetime: 26, ricochetPct: 0.1, ricochetAngle: 88, normalization: 0, ignore: 1, shrapnelType: "Arc Fragment", fShrpCount: Math.round(baseShrap * 1.1 * fireBonus), fShrpDamage: 74, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 48, fExplLvl: 1, fExplRadius: 0.4 },
      { spread: 0.38, explLvl: 6, explRad: 1.2, explImpRadius: 12, explImpStr: 820, gravity: 18, lifetime: 28, ricochetPct: 0.1, ricochetAngle: 88, normalization: 0, ignore: 1, shrapnelType: "Arc Fragment", fShrpCount: Math.round(baseShrap * 1.2 * fireBonus), fShrpDamage: 80, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 52, fExplLvl: 2, fExplRadius: 0.5 },
    ],
    SMOKE: [
      { spread: 0.5, explLvl: 1, explRad: 0.3, explImpRadius: 3, explImpStr: 0, gravity: 15, lifetime: 22, ricochetPct: 0, ricochetAngle: 89, normalization: 0, ignore: 0, shrapnelType: "None", fShrpCount: 0, fShrpDamage: 0, fShrpSpread: 0, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 0, fExplLvl: 0, fExplRadius: 1.2 },
      { spread: 0.43, explLvl: 1, explRad: 0.35, explImpRadius: 4, explImpStr: 0, gravity: 16, lifetime: 24, ricochetPct: 0, ricochetAngle: 89, normalization: 0, ignore: 0, shrapnelType: "None", fShrpCount: 0, fShrpDamage: 0, fShrpSpread: 0, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 0, fExplLvl: 0, fExplRadius: 1.4 },
      { spread: 0.36, explLvl: 1, explRad: 0.4, explImpRadius: 5, explImpStr: 0, gravity: 16, lifetime: 25, ricochetPct: 0, ricochetAngle: 89, normalization: 0, ignore: 0, shrapnelType: "None", fShrpCount: 0, fShrpDamage: 0, fShrpSpread: 0, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 0, fExplLvl: 0, fExplRadius: 1.7 },
    ],
    INCENDIARY: [
      { spread: 0.52, explLvl: 2, explRad: 0.55, explImpRadius: 5, explImpStr: 220, gravity: 15, lifetime: 22, ricochetPct: 0.05, ricochetAngle: 85, normalization: 0, ignore: 0, shrapnelType: "Fire Fragment", fShrpCount: 6, fShrpDamage: 40, fShrpSpread: 330, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 20, fExplLvl: 2, fExplRadius: 0.7 },
      { spread: 0.44, explLvl: 3, explRad: 0.68, explImpRadius: 6, explImpStr: 290, gravity: 16, lifetime: 23, ricochetPct: 0.05, ricochetAngle: 85, normalization: 0, ignore: 0, shrapnelType: "Fire Fragment", fShrpCount: 7, fShrpDamage: 45, fShrpSpread: 330, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 24, fExplLvl: 2, fExplRadius: 0.85 },
      { spread: 0.37, explLvl: 4, explRad: 0.8, explImpRadius: 7, explImpStr: 360, gravity: 16, lifetime: 25, ricochetPct: 0.05, ricochetAngle: 85, normalization: 0, ignore: 0, shrapnelType: "Fire Fragment", fShrpCount: 8, fShrpDamage: 50, fShrpSpread: 330, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 28, fExplLvl: 3, fExplRadius: 1 },
    ],
  };
  return toSheet(byType[shellType][b], 0);
};

export const generateRocketBombResults = (
  caliberMm: number,
  shellType: RocketBombShellType,
  payloadKg: number,
): StatRow[] => {
  const b = getBracket(Math.min(caliberMm, 60));
  const payloadScale = Math.max(payloadKg / 12, 0.4);
  const base: Record<RocketBombShellType, ShellStats[]> = {
    ROCKET: [
      { spread: 0.65, explLvl: 4, explRad: round(0.8 * payloadScale), explImpRadius: round(9 * payloadScale), explImpStr: round(520 * payloadScale), gravity: 12, lifetime: 20, ricochetPct: 0.12, ricochetAngle: 78, normalization: 1, ignore: 1, shrapnelType: "Rocket Frag", fShrpCount: round(8 * payloadScale), fShrpDamage: 75, fShrpSpread: 350, wShrpCount: round(4 * payloadScale), wShrpDamage: 40, wShrpSpread: 40, fExplLvl: 1, fExplRadius: round(0.5 * payloadScale) },
      { spread: 0.55, explLvl: 5, explRad: round(1 * payloadScale), explImpRadius: round(11 * payloadScale), explImpStr: round(640 * payloadScale), gravity: 12, lifetime: 21, ricochetPct: 0.1, ricochetAngle: 80, normalization: 1, ignore: 1, shrapnelType: "Rocket Frag", fShrpCount: round(10 * payloadScale), fShrpDamage: 82, fShrpSpread: 350, wShrpCount: round(5 * payloadScale), wShrpDamage: 45, wShrpSpread: 45, fExplLvl: 1, fExplRadius: round(0.6 * payloadScale) },
      { spread: 0.48, explLvl: 6, explRad: round(1.2 * payloadScale), explImpRadius: round(13 * payloadScale), explImpStr: round(760 * payloadScale), gravity: 13, lifetime: 22, ricochetPct: 0.08, ricochetAngle: 82, normalization: 2, ignore: 2, shrapnelType: "Rocket Frag", fShrpCount: round(12 * payloadScale), fShrpDamage: 88, fShrpSpread: 350, wShrpCount: round(6 * payloadScale), wShrpDamage: 50, wShrpSpread: 50, fExplLvl: 2, fExplRadius: round(0.75 * payloadScale) },
    ],
    BOMB: [
      { spread: 0.7, explLvl: 5, explRad: round(1.3 * payloadScale), explImpRadius: round(14 * payloadScale), explImpStr: round(900 * payloadScale), gravity: 18, lifetime: 15, ricochetPct: 0, ricochetAngle: 89, normalization: 0, ignore: 1, shrapnelType: "Heavy Fragment", fShrpCount: round(14 * payloadScale), fShrpDamage: 96, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 60, fExplLvl: 2, fExplRadius: round(0.9 * payloadScale) },
      { spread: 0.62, explLvl: 6, explRad: round(1.6 * payloadScale), explImpRadius: round(17 * payloadScale), explImpStr: round(1100 * payloadScale), gravity: 19, lifetime: 15, ricochetPct: 0, ricochetAngle: 89, normalization: 0, ignore: 1, shrapnelType: "Heavy Fragment", fShrpCount: round(16 * payloadScale), fShrpDamage: 104, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 65, fExplLvl: 2, fExplRadius: round(1.1 * payloadScale) },
      { spread: 0.55, explLvl: 7, explRad: round(1.9 * payloadScale), explImpRadius: round(20 * payloadScale), explImpStr: round(1300 * payloadScale), gravity: 20, lifetime: 15, ricochetPct: 0, ricochetAngle: 89, normalization: 0, ignore: 1, shrapnelType: "Heavy Fragment", fShrpCount: round(20 * payloadScale), fShrpDamage: 112, fShrpSpread: 360, wShrpCount: 0, wShrpDamage: 0, wShrpSpread: 70, fExplLvl: 3, fExplRadius: round(1.3 * payloadScale) },
    ],
  };
  return toSheet(base[shellType][b], 0);
};
