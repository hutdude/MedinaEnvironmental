import React, { useState } from 'react';
import ServiceBubble from './ServiceBubble';
import vmPets from '../../assets/VM-PETS.jpg'
import lab from '../../assets/Lab.jpg'
import victorField from '../../assets/VictorField.jpg'
import consultingImg from '../../assets/consulting-img.jpg'
import solutionsProducts from '../../assets/solutionsProducts.png'
import educationalTraining from '../../assets/educational-training.jpg'

const Popup = ({ isOpen, onClose, children, img }) => {
  if (!isOpen) return null;
    const imgArray = [vmPets, lab, victorField, consultingImg, solutionsProducts, educationalTraining]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="h-[90vmin] w-[90vmin] max-w-[1400px] max-h-[800px] relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-rounded-6 overflow-hidden">
    
    {/* Top half - Image */}
    <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
      <img
        src={imgArray[img]}
        alt="card-image" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
    </div>
    
    {/* Bottom half - Content */}
    <div className="relative top-1/2 left-1/2 h-1/2 transform  -translate-x-1/2 justify-start  p-6 flex flex-col">
      {children}
    </div>

    {/* Close button */}
    <button 
      onClick={onClose} 
      className="absolute top-0 right-8 text-white z-10 text-center text-lg transform translate-x-1/2 rounded-full p-2"
    >
      X</button>
  </div>
</div>
    
  );
};

const ServicePopup = ({title, text, buttonClasses, image, gradient, fontSize}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsPopupOpen(true)}
        className={`${buttonClasses}`}
      >
        
      <ServiceBubble text={title}  size='330' gradient={gradient} fontSize={fontSize}/>
      </button>

      <Popup img={image} isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2 className="text-xl z-70 font-bold mb-4">{title}</h2>
        <p>{text}</p>
      </Popup>
    </div>
  );
};

export default ServicePopup;