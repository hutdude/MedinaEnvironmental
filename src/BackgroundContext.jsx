import React, { createContext, useState, useContext } from 'react';
import * as THREE from 'three';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);
  const [announcementShown, setAnnouncementShown] = useState(false);
  const [backgroundColors, setBackgroundColors] = useState({
    color1: new THREE.Vector4(0.6823529411764706, 0.8509803921568627, 0.9058823529411765, 1),
    color2: new THREE.Vector4(1, 1, 1, 1),
  });

  return (
    <BackgroundContext.Provider 
      value={{ 
        isBackgroundVisible, 
        setIsBackgroundVisible, 
        backgroundColors, 
        setBackgroundColors,
        announcementShown, setAnnouncementShown
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);

export default BackgroundContext;