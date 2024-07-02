import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const Button = ({ text, newPage, type='button', className }) => {
  return (
    <Link to= {newPage}>
      <button
        type={type}
        className={`px-4 py-2 hover:scale-105 text-base md:text-lg tracking-wider h-14 md:h-20 w-40 md:w-60 rounded-rounded-6 bg-Dodger-Blue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
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
