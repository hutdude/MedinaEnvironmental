import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Button = ({ text, newPage, type = 'button', className, blank = false }) => {
  return (
    <Link 
      to={newPage} 
      {...(blank ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-block ${className}`}
    >
      <button
        type={type}
        className={`
          px-6 py-3
          text-base md:text-lg
          tracking-wider
          min-h-[3.5rem] md:min-h-[5rem]
          min-w-[10rem] md:min-w-[15rem]
          w-auto
          rounded-rounded-4
          bg-blue-500 hover:bg-blue-700
          text-white font-semibold
          shadow-md
          transition-all duration-100 ease-in-out
          hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
        `}
      >
        {text}
      </button>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.node.isRequired,
  newPage: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;