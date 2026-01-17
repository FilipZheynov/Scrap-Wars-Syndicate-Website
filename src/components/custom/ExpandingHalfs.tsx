import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Or your routing library
import NormalLoadouts from "../../assets/NormalLoadouts.png"

const ExpandingGallery = () => {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const navigate = useNavigate();

  const handleInteraction = (side: 'left' | 'right') => {
    // If it's already "hovered" (selected), then go to the page
    if (hoveredSide === side) {
      navigate(side === 'left' ? '/standard' : '/attack-defend');
    } else {
      // First click: just select it (reveals text via state)
      setHoveredSide(side);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-[700px] md:h-150 overflow-hidden rounded-xl gap-2">

      {/* Left Side */}
      <div
        // PC Behavior: Standard hover reveals text
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        // Mobile/PC Click: Logic to reveal first, then navigate
        onClick={() => handleInteraction('left')}
        className={`relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
          w-full ${hoveredSide === 'left' ? 'h-3/4 md:w-3/4' : hoveredSide === 'right' ? 'h-1/4 md:w-1/4' : 'h-1/2 md:w-1/2'}
          md:h-full
        `}
      >
        <img src={NormalLoadouts} className="absolute inset-0 w-full h-full object-cover" />

        {/* Text Reveal Container */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300
          ${hoveredSide === 'left' ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="absolute nowrap font-texts page-subtitle text-white font-bold text-2xl">Standard Loadouts</h3>
          <p className="text-white/80 mt-25 md:hidden text-sm">Tap again to enter</p>
        </div>
      </div>

      {/* Right Side (Repeats the same logic for 'right') */}
      <div
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => handleInteraction('right')}
        className={`relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden
          w-full ${hoveredSide === 'right' ? 'h-3/4 md:w-3/4' : hoveredSide === 'left' ? 'h-1/4 md:w-1/4' : 'h-1/2 md:w-1/2'}
          md:h-full
        `}
      >
        <img src={NormalLoadouts} className="absolute inset-0 w-full h-full object-cover" />
        <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/40 transition-opacity duration-300
          ${hoveredSide === 'right' ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="absolute nowrap font-texts page-subtitle text-white font-bold text-2xl">A&D Loadouts</h3>
          <p className="text-white/80 mt-25 md:hidden text-sm">Tap again to enter</p>
        </div>
      </div>

    </div>
  );
};

export default ExpandingGallery;