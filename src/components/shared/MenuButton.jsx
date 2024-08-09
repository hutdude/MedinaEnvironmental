import React, { useState } from 'react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="relative w-10 h-10 z-30 focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      <div className="absolute left-1/2 top-1/2 w-5 transform -translate-x-1/2 -translate-y-1/2">
        <span
          className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
            isOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
          }`}
        ></span>
        <span
          className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
            isOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
            isOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
          }`}
        ></span>
      </div>
    </button>
  );
};

export default MenuButton;