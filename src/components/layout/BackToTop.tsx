import React from 'react';

const BackToTop: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-10 right-10 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 z-[1000] bg-[var(--primary-dark)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
};

export default BackToTop;