import { PageContext } from "../main";
import { useContext, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import ContactForm from "../components/shared/ContactForm";
import ServicePopup from "../components/services/Popup";
import Noise from "../components/shared/Noise";
import ScrollDrivenStickySection from "../components/services/ScrollDrivenStickySection";
import '../components/shared/gradients.css'
import ScrollAnimatedCards from "../components/services/ScrollCompTest";
import {motion as m,stagger, useAnimation, useInView} from 'framer-motion'
import SpecialtiesSection from "../components/services/SpecialtiesSection";
import './services.css'

export default function Services() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("services");
  }, []); 



return (
  <div id="services" className="overflow-hidden" >
    <div id="main" className="relative h-screen w-full min-h-[600px] md:min-h-[800px]">
        <h1 className='absolute max-w-[800px] w-full lg:w-auto px-8 top-1/2 left-1/2 text-3xl lg:text-4xl xl:text-5xl text-center transform -translate-y-1/2 -translate-x-1/2 text-Dark-Navy'>
          <span className='text-Electric-Blue inline-flex overflow-hidden'>
            <m.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='inline-flex'
            >
              Relax,
            </m.span>
          </span>
          {' '}we'll take care of your environmental challenges
        </h1>
        <div className='flex flex-col items-center w-full absolute bottom-0'>
          <h6 className='text-Dark-Navy text-[1.25rem] pb-4 text-center'>OUR SERVICES</h6>
          <div className='mb-8'>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>
    <div id="specialites" className="w-full h-full relative">
  <Noise />
  <div className='absolute inset-0 h-full w-full light-purple-grad'></div>
  <SpecialtiesSection />
</div>
<div id="scrollsections" className="bg-Dark-Navy ">
  {/* <ScrollAnimatedCards /> */}
  {/* <ScrollDrivenStickySection /> */}
</div>
    <div id="services" className="relative h-full w-screen">
        
      
      <div className="gap-96 py-64 bg-white grid items-center grid-cols-1 lg:grid-cols-7 grid-rows-7 lg:grid-rows-5 h-full w-full lg:gap-64 justify-items-center">
      <h2 className="font-bold text-lg text-Dark-Navy text-center row-start-1 lg:row-start-3 lg:col-start-3 lg:col-end-6 w-full">Click on a service to learn more</h2>
        <div className="row-start-2 lg:col-start-4 lg:row-start-1">
          <ServicePopup
            title="Engineering & Design"
            text="We bolster engineering teams with industry expertise, forward thinking, and technological advancements."
            buttonClasses="service-popup"
            image="0"
            gradient="small-blue-gradient"
            fontSize="8" />
        </div>
        <div className="row-start-3 lg:col-start-2 lg:row-start-2">
          <ServicePopup
            title="Research & Development"
            text=""
            buttonClasses="service-popup"
            image=""
            gradient="green-pearl-gradient"
            fontSize="8"/>
        </div>
        <div className="row-start-4 lg:col-start-6 lg:row-start-2">
          <ServicePopup
            title="Project Management"
            text=""
            buttonClasses="service-popup"
            image=""
            gradient="pearl-blue-gradient"
            fontSize="8"/>
        </div>
        <div className="row-start-5 lg:col-start-2 lg:row-start-4">
          <ServicePopup
            title="Environmental Consulting"
            text=""
            buttonClasses="service-popup"
            image=""
            gradient="small-blue-gradient"
            fontSize="8"/>
        </div>
        <div className="row-start-6 lg:col-start-6 lg:row-start-4">
          <ServicePopup
            title="Solutions & Products"
            text=""
            buttonClasses="service-popup"
            image=""
            gradient="green-pearl-gradient"
            fontSize="8"/>
        </div>
        <div className="row-start-7 lg:col-start-4 lg:row-start-5">
          <ServicePopup
            title="Technical Writing & Training"
            text=""
            buttonClasses="service-popup"
            image=""
            gradient="pearl-blue-gradient"
            fontSize="7"/>
        </div>
      </div>
    </div>

   

    <div id="ESG" className="h-screen w-screen esg-gradient">
      <Noise />
    <div className="relative h-full w-full">
      <div className="absolute transform -translate-x-1/2 bottom-[55%] left-1/2 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="48" fill="url(#paint0_linear_2776_161)"/>
            <defs>
            <linearGradient id="paint0_linear_2776_161" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFD76F"/>
            <stop offset="0.5" stop-color="#FFD76F"/>
            <stop offset="0.7" stop-color="#A0C8D9" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>
      </div>
      
    <h1 className="absolute transform -translate-x-1/2 bottom-1/2 left-1/2 text-white tracking-wider text-2xl font-medium">
      We can help your company meet ESG criteria.
    </h1>
    </div>
    </div>

    <div id="contact">
      <ContactForm text="Tell us about your project, we'll take care of the rest."/>
    </div>
  </div>
);
}