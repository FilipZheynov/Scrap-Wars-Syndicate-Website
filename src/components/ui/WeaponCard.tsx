import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import weaponsData from '../../assets/loadouts/weapons.json';

// 1. Define the Weapon Interface
interface Weapon {
  id: string;
  name: string;
  type: string;
  image: string;
  canSwapTo: string[];
  stats: {
    dmg: number;
    magazine: number;

    // If you add more stats later, you can add [key: string]: number;
  };
}

// 2. Define the Library Interface
interface WeaponLibrary {
  [key: string]: Weapon;
}

const getImageUrl = (name: string) => {
  // Extract just the filename from the path if your JSON still has "../../assets..."
  // Or better: update your JSON to just have the filename like "Walther.png"
  const fileName = name.split('/').pop();

  // This tells Vite: "Look in this specific folder for this specific filename"
  return new URL(`../../assets/guns/${fileName}`, import.meta.url).href;
};

export const WeaponCard = ({ initialId }: { initialId: string }) => {
  const [baseWeaponId] = useState(initialId);
  const [currentId, setCurrentId] = useState(initialId);
  const [showMenu, setShowMenu] = useState(false);

  // 3. Cast the JSON data to our typed library
  const library = weaponsData as WeaponLibrary;
  const currentWeapon = library[currentId];
  const baseWeapon = library[baseWeaponId];


  if (!currentWeapon || !baseWeapon) return <div className="text-red-500">Weapon not found</div>;

  return (
    <motion.div
      layout // This makes the whole card animate its size change
      className={`relative group bg-zinc-900 border border-zinc-800 p-4 rounded-lg transition-all ${showMenu ? 'z-[100] border-yellow-500' : 'z-10 hover:border-[var(--primary-dark)]'
        }`}
    >
      {/* Visual Content */}
      <motion.div
        layout // This ensures the weapon info stays centered while the box grows
        className="cursor-pointer space-y-3"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="h-16 flex items-center justify-center">
          <img src={getImageUrl(currentWeapon.image)} alt={currentWeapon.name} className="max-h-full object-contain drop-shadow-lg" />
        </div>
        <div className="text-center">
          <p className="text-[10px] uppercase text-[var(--text-secondary)] tracking-widest">{currentWeapon.type}</p>
          <h3 className="text-sm font-bold text-[var(--text-primary)] truncate">{currentWeapon.name}</h3>
        </div>
      </motion.div>

      {/* Hover Stats Card */}
      <div className="absolute opacity-0 group-hover:opacity-100 pointer-events-none bottom-full left-0 w-full mb-2 z-50 transition-opacity">
        <div className="bg-zinc-950 border border-zinc-700 p-3 rounded shadow-2xl">
          <p className="text-xs font-bold text-[var(--text-red)] mb-2 uppercase">Stats</p>
          {(Object.entries(currentWeapon.stats) as [string, number][]).map(([label, value]) => (
            <div key={label} className="flex justify-between items-center text-[16px] mb-1">
              <span className="text-zinc-400 uppercase">{label}</span>
              <span className="text-white font-mono">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Swap Menu (On Click) */}
      <AnimatePresence>
        {showMenu && currentWeapon.canSwapTo.length > 0 && (
          <motion.div
            layout // This helps the menu animate its height smoothly
            initial={{ opacity: 0, height: 0, scale: 0.9 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative mt-2 w-full bg-zinc-900 border border-zinc-700 rounded-md shadow-2xl z-[120] overflow-hidden 
          md:absolute md:mt-0 md:top-0 md:left-full md:ml-2 md:w-44"
          >
            <div className="p-2 bg-zinc-800 text-[10px] font-bold text-zinc-400 uppercase italic">Available Swaps</div>
            <div className="max-h-48 custom-scrollbar overflow-y-auto">
              {/* 1. Combine the base weapon and the swap list into one array */}
              {[baseWeaponId, ...baseWeapon.canSwapTo]
                // 2. Filter out the weapon that is currently equipped
                .filter((id) => id !== currentId)
                // 3. Map the remaining IDs to buttons
                .map((swapId) => {
                  const opt = library[swapId];
                  if (!opt) return null;

                  return (
                    <button
                      key={swapId}
                      onClick={() => {
                        setCurrentId(swapId);
                        setShowMenu(false);
                      }}
                      className="w-full flex items-center gap-3 p-2 hover:bg-[var(--primary-accent)]/10 text-left border-b border-zinc-800 last:border-0 transition-colors"
                    >
                      <img src={getImageUrl(opt.image)} className="w-15 h-15 object-contain" alt={opt.name} />
                      <span className="text-xs text-zinc-200">{opt.name}</span>
                    </button>
                  );
                })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};