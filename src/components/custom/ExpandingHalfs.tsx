import { useState } from 'react';
import NormalLoadouts from "../../assets/NormalLoadouts.png"

const ExpandingGallery = () => {
  // Track which side is hovered: null, 'left', or 'right'
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="flex w-full h-150 overflow-hidden rounded-xl gap-2">
      {/* Left Image Container */}
      <div
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        className={`relative h-full transition-all duration-500 ease-in-out cursor-pointer
          ${hoveredSide === 'left' ? 'w-3/4' : hoveredSide === 'right' ? 'w-1/4' : 'w-1/2'}
        `}
      >
        
        <img
          src={NormalLoadouts}
          alt="Normal Loadouts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`transition-opacity duration-300 ${hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'}`}>
             <h3 className="absolute nowrap page-subtitle bottom-4 right-4 text-white font-bold text-2xl">Normal Loadouts</h3>
        </div>
        <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
      </div>

      {/* Right Image Container */}
      <div
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        className={`relative h-full transition-all duration-500 ease-in-out cursor-pointer
          ${hoveredSide === 'right' ? 'w-3/4' : hoveredSide === 'left' ? 'w-1/4' : 'w-1/2'}
        `}
      >
        
        <img
          src={NormalLoadouts}
          alt="Attackers and Defenders loadouts"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`transition-opacity duration-300 ${hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'}`}>
             <h3 className="absolute nowrap page-subtitle bottom-4 left-4 text-white font-bold text-2xl">A & D Loadouts</h3>
         </div>
        <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
      </div>
    </div>
  );
};

export default ExpandingGallery;