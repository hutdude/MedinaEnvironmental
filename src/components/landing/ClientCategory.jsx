import React from 'react';

import briefcase from "../../assets/icons/briefcase.svg"
import government from "../../assets/icons/government.svg"
import industries from "../../assets/icons/industries.svg"
import nonprofits from "../../assets/icons/nonprofits.svg"

const iconMaps = new Map()
iconMaps.set('briefcase', briefcase)
iconMaps.set('government', government)
iconMaps.set('industries', industries)
iconMaps.set('nonprofits', nonprofits)


const ClientCategory = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="">
        {/* Replace 'IconComponent' with your actual icon component */}
        <img src={iconMaps.get(icon)} className="h-24 xl:h-32" />
      </div>
      <p className="mt-6 lg:text-md text-[1.25rem] font-bold tracking-wider  text-white">{text}</p>
    </div>
  );
};

export default ClientCategory;
