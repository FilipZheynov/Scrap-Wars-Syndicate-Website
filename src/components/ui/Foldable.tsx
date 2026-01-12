import React, { useState, type ReactNode } from 'react';

interface FAQItemProps {
  title: string;
  children: ReactNode;
}

const Foldable: React.FC<FAQItemProps> = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
  return (
    <details className="group border-b border-[var(--border-dark)] py-4 outline-none" onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}>
      <summary className="flex cursor-pointer items-center justify-between font-medium text-[var(--text-primary)] list-none [&::-webkit-details-marker]:hidden">
        <span className="text-lg font-texts font-semibold">{title}</span>
        <span className="transition-transform duration-300 group-open:rotate-180">
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </summary>
      {isOpen && (
      <div className="mt-3 font-texts font-light text-md text-[var(--text-secondary)] leading-relaxed animate-fadeIn">
        {children}
      </div>
        )}
    </details>
  );
};

export default Foldable;