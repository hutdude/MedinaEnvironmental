/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    "fontSize": {
      "sm": "0.8125rem",
      "base": "1.25rem",
      "lg": "1.75rem",
      "xl": "2.125rem",
      "2xl": "2.25rem",
      "3xl": "2.5rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5.625rem",
      "7xl": "6rem",
      "8xl": "6.5625rem",
      "9xl": "8rem"
    },
    "fontFamily": {
      "work-sans": "Work Sans",
      "outfit": "Outfit",
      "poppins": "Poppins",
      "merriweather": "Merriweather"
    },
    "borderRadius": {
      "rounded-0": "0rem",
      "rounded-1": "0.25rem",
      "rounded-2": "0.4rem",
      "rounded-3": "0.75rem",
      "rounded-4": "1rem",
      "rounded-5": "1.25rem",
      "rounded-6": "1.95rem",
      "7": "50px",
    },
    extend: {
      backgroundImage: {
        'about-gradient': 'background: linear-gradient(252deg, #D9DAE9 1.49%, #FFF 48.99%);',
        'Blue-Gradient': 'linear-gradient(241deg, #030037 28.67%, #030138 33.27%, #02063B 37.87%, #000D3F 42.47%, #001445 47.06%, #001B4E 51.66%, #002458 56.26%, #002F64 60.86%, #003C71 65.45%, #014B80 70.05%, #055D90 74.65%, #0E70A2 79.25%, #1C87B4 83.84%, #2EA0C6 88.44%, #43BBD9 93.04%, #5ED9EC 97.64%, #7DF9FF 102.23%));'

      },
      boxShadow: {
        'pipe': '0px 4px 15px 2px rgba(0, 0, 0, 0.25)'
      },
      scale: {
        '300': '3.0',
        '600':'6.0',
        '1000': '10.0'
      },
      spacing: {
        '200vh': '200vh',
      },
      gradientColorStops: {
        'personal-gradient': 'linear-gradient(180deg, #030037 0%, #586C8E 25%, #ADD8E6 68%, #82A2BA 85%, #2E2E2E 100%)',
        'Blue-Gradient': 'linear-gradient(241deg, #030037 28.67%, #030138 33.27%, #02063B 37.87%, #000D3F 42.47%, #001445 47.06%, #001B4E 51.66%, #002458 56.26%, #002F64 60.86%, #003C71 65.45%, #014B80 70.05%, #055D90 74.65%, #0E70A2 79.25%, #1C87B4 83.84%, #2EA0C6 88.44%, #43BBD9 93.04%, #5ED9EC 97.64%, #7DF9FF 102.23%));',
        
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      
      colors: {
        transparent: 'transparent',
          "Dark-Navy": "#030037",
          "Light-Blue": "#add8e6",
          "Sky-Blue": "#87ceeb",
          "Powder-Blue": "#b0e0e6",
          "white": "#ffffff",
          "Off-White": "#f8f8ff",
          "Electric-Blue": "#7df9ff",
          "Dodger-Blue": "#1e90ff",
          "Black": "#000000",
          "Light-Gray": "#565656",
          "Card-Light-Gray": "#D9D9D9",
          "Dark-Gray": "#2E2E2E",
          "Title-Dark-Gray": "#505050",
          "Pipe-Green": "#C6C978",
          "clear-white": 'rgba(255, 255, 255, 0)',
          "clear-dark-navy": 'rgba(3, 0, 55, 0)',
          "blue-rect-landing": 'rgba(173, 216, 230, 6)',
          'gradient-start': '#030037',
          'gradient-mid1': '#586C8E',
          'gradient-mid2': '#ADD8E6',
          'gradient-mid3': '#82A2BA',
          'gradient-end': '#2E2E2E',
          
        },
    }
  },
  plugins: [
    require('tailwindcss-gradients')
  ],
}