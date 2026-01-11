import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../../assets/SWSLogo.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkBase =
    "px-3 py-2 text-sm md:text-base font-medium transition hover:text-[var(--primary-light)] block";

  return (
    <header className="navbar">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-2 gap-2 md:gap-0">
        <div className="flex flex-row items-center justify-between w-full md:w-auto">
          <div className="flex flex-row items-center">
            <img src={Logo} className="w-12 h-12 md:w-16 md:h-16" alt="Logo" />
            <h1 className="ml-2 md:ml-5 text-xl md:text-2xl lg:text-3xl font-headings text-[var(--primary-base)]">Scrap Wars Syndicate</h1>
          </div>

          {/* Hamburger button - mobile only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[var(--text-primary)] p-2 hover:text-[var(--primary-light)] transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:flex-wrap justify-center gap-2 md:gap-4 w-full md:w-auto pb-4 md:pb-0`}>
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[var(--primary-base)]" : "text-[var(--text-tertiary)]"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[var(--primary-base)]" : "text-[var(--text-tertiary)]"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/faq"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[var(--primary-base)]" : "text-[var(--text-tertiary)]"}`
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/gamemodes"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[var(--primary-base)]" : "text-[var(--text-tertiary)]"}`
            }
          >
            Gamemodes
          </NavLink>
          <NavLink
            to="/loadouts"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[var(--primary-base)]" : "text-[var(--text-tertiary)]"}`
            }
          >
            Loadouts
          </NavLink>
          <NavLink
            to="/wiki"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "text-[var(--primary-base)]" : "text-[var(--text-tertiary)]"}`
            }
          >
            Wiki
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
