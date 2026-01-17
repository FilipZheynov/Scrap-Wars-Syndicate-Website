import { useState } from 'react';
import { WeaponCard } from '../../components/ui/WeaponCard';
import loadoutsData from '../../assets/loadouts/loadouts.json';
import weaponsData from '../../assets/loadouts/weapons.json';

// --- Interfaces ---
interface Weapon {
  id: string;
  name: string;
  type: string;
  image: string;
  canSwapTo: string[];
  stats: {
    dmg: number;
    magazine: number;
  };
}

const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;

};

interface WeaponLibrary {
  [key: string]: Weapon;
}

interface Player {
  role: string;
  items: string[];
}

interface SquadVariation {
  variantName: string;
  squad: Player[];
}

interface LoadoutGroup {
  [key: string]: SquadVariation[];
}

// --- Components ---

const GlobalItems = () => {
  const library = weaponsData as WeaponLibrary;

  return (
    <div className="mt-12 p-6 bg-zinc-900/30 border-t border-zinc-800 rounded-b-xl">
      <h3 className="text-center text-lg font-black text-zinc-600 uppercase tracking-[0.3em] mb-6">
        Standard Field Kit
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {loadoutsData.globalItems.map((id) => {
          const weaponEntry = library[id];
          if (!weaponEntry) return null;

          return (
            <div key={id} className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-all group">
              <div className="h-20 w-20 flex items-center justify-center">
                <img
                  src={getImageUrl(weaponEntry.image)}
                  className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform"
                  alt={weaponEntry.name}
                />
              </div>
              <span className="text-[16px] text-zinc-400 font-bold uppercase">{weaponEntry.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const LoadoutPage = ({ mode }: { mode: 'normal' | 'attacker_defender' }) => {
  const [size, setSize] = useState(2);
  const [variantIndex, setVariantIndex] = useState(0);
  const [side, setSide] = useState<'attackers' | 'defenders'>('attackers');



  const normalData = loadoutsData.normal as LoadoutGroup;
  const adData = loadoutsData.attack_defend;

  const playerKey = `players_${size}`;

  // Get variations based on mode
  const variations = mode === 'normal'
    ? normalData[playerKey]
    : (adData[side] as LoadoutGroup)[playerKey];

  const activeIndex = variantIndex >= (variations?.length || 0) ? 0 : variantIndex;

  // Pick the specific squad based on the selected variation
  const currentSquad = variations?.[activeIndex]?.squad || [];

  const handleSizeChange = (n: number) => {
    setVariantIndex(0);
    setSize(n);
  };

  const handleSideChange = (s: 'attackers' | 'defenders') => {
    setVariantIndex(0);
    setSide(s);
  };

  return (
    <div className="min-h-screen text-[var(--text-primary)] p-4 md:p-10 font-sans">
      {/* Header & Size Controls */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">
          {mode === 'normal' ? 'Standard' : 'A&D'} <span className="text-[var(--primary-base)]">Loadouts</span>
        </h1>

        <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
          {[2, 3, 4, 5, 6].map(n => (
            <button
              key={n}
              onClick={() => handleSizeChange(n)}
              className={`px-4 py-2 rounded font-bold text-sm transition-colors ${size === n ? 'bg-[var(--primary-base)] text-black' : 'text-zinc-500 hover:text-white'}`}
            >
              {n}P
            </button>
          ))}
        </div>
      </div>

      {/* Attacker/Defender Toggle */}
      {mode === 'attacker_defender' && (
        <div className="flex justify-center mb-10">
          <div className="flex gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-full">
            <button
              onClick={() => handleSideChange('attackers')}
              className={`px-10 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${side === 'attackers' ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]' : 'text-zinc-500'}`}
            >
              Attackers
            </button>
            <button
              onClick={() => handleSideChange('defenders')}
              className={`px-10 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${side === 'defenders' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' : 'text-zinc-500'}`}
            >
              Defenders
            </button>
          </div>
        </div>
      )}

      {/* Variation Selector - Shows when multiple variations exist */}
      {variations && variations.length > 1 && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {variations.map((v, idx) => (
            <button
              key={v.variantName}
              onClick={() => setVariantIndex(idx)}
              className={`px-5 py-2 rounded border text-xs font-black uppercase tracking-widest transition-all ${variantIndex === idx
                ? 'bg-white text-black border-white shadow-lg'
                : 'bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-500'
                }`}
            >
              {v.variantName}
            </button>
          ))}
        </div>
      )}

      {/* Loadout Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSquad.length > 0 ? (
          currentSquad.map((player, i) => (
            <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-xl shadow-xl overflow-visible">
              <div className="bg-zinc-900 px-5 py-3 border-b border-zinc-800 flex justify-between items-center rounded-t-xl">
                <span className="font-black text-[var(--text-red)] uppercase italic tracking-wider">
                  {player.role}
                </span>
                <span className="text-[var(--text-secondary)] font-mono text-xs opacity-50">#{i + 1}</span>
              </div>
              <div className="p-5 space-y-4">
                {player.items.map((id, idx) => (
                  <WeaponCard key={`${id}-${idx}`} initialId={id} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 border-2 border-dashed border-zinc-800 rounded-2xl">
            <p className="text-[var(--text-primary)] italic">
              No loadout configuration found for {size} players.
            </p>
            <p className="text-[var(--text-secondary)] text-xs mt-2 uppercase tracking-widest text-center">
              Update the variation in loadouts.json
            </p>
          </div>
        )}
      </div>

      {/* Footer Items */}
      <div className="max-w-7xl mx-auto">
        <GlobalItems />
      </div>
    </div>
  );
};

export default LoadoutPage;