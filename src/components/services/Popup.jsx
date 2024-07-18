import React, { useState } from 'react';
import ServiceBubble from './ServiceBubble';
import vmPets from '../../assets/VM-PETS.jpg'

const Popup = ({ isOpen, onClose, children, img }) => {
  if (!isOpen) return null;
    const imgArray = [vmPets]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="lg:h-1/2 w-3/4 lg:w-1/2 relative rounded-7 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
    <div className="relative h-64 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <div className="absolute bg-dark h-64 inset-0 flex items-center justify-center">
        <img
          src={imgArray[img]}
          alt="card-image" 
          className="w-full rounded-t-7 h-full max-h-full object-cover"/>
      </div>
      <div className="absolute inset-0 rounded-t-7 bg-gray-800 opacity-50"></div>
      <h1 className="absolute inset-0 text-white text-lg"></h1>
    </div>
  <div className="p-8">
  <button
          onClick={onClose}
          className="absolute z-20 top-4 right-8 text-xl text-white hover:text-gray-300"
        >
          &times;
        </button>
        
        {children}
  </div>
  
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