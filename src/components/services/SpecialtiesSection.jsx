// SpecialtiesSection.js
import React, { useRef } from 'react';
import { motion as m, useInView } from 'framer-motion';
import { GiWaterRecycling, GiPoisonBottle, GiMineralPearls } from "react-icons/gi";
import { TbFountainFilled } from "react-icons/tb";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaGlassWater } from "react-icons/fa6";
import '../shared/gradients.css'

const features = [
  {
    name: 'PFAS',
    description: 'Advanced removal of persistent human-made pollutants for long-term environmental safety.',
    icon: GiWaterRecycling,
  },
  {
    name: 'Algal Blooms',
    description: 'Effective management and prevention of harmful algal proliferation.',
    icon: TbFountainFilled,
  },
  {
    name: 'Cyanide',
    description: 'Specialized treatment for the safe neutralization and removal of cyanide compounds.',
    icon: GiPoisonBottle,
  },
  {
    name: 'Salts',
    description: 'Efficient desalination processes to restore water quality and reduce mineral content.',
    icon: GiMineralPearls,
  },
  {
    name: 'Toxic Industrial Chemicals',
    description: 'Comprehensive solutions for the treatment and elimination of complex industrial contaminants.',
    icon: LiaIndustrySolid,
  },
  {
    name: 'Grey & Blackwater',
    description: 'Advanced purification systems for the reclamation and reuse of domestic and industrial wastewater.',
    icon: FaGlassWater,
  },
];

const SpecialtiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    }
  };

  const item = {
    hidden: { opacity: 0, y: '100%' },
    show: { opacity: 1, y: '0%', transition: { duration: 0.5 } }
  };

  return (
    <div ref={ref} className="relative z-10 py-64 sm:py-32">
      <div className="mx-auto max-w-7xl py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-Dodger-Blue text-shadow">Water services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-shadow">
            We make wastewater work for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-shadow">
            Our specializations in treating domestic & industrial wastewater turns waste into an asset.  
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <m.dl variants={container} initial="hidden" animate={isInView ? "show" : "hidden"} className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="overflow-hidden">
                <m.div variants={item} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900 text-shadow">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-rounded-3 bg-Dodger-Blue">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 text-shadow">{feature.description}</dd>
                </m.div>
              </div>
            ))}
          </m.dl>
        </div>
      </div>
    </div>
  );
};

export default SpecialtiesSection;