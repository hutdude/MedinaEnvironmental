import { PageContext } from "../main";
import { useContext, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import ContactForm from "../components/shared/ContactForm";
import ServicePopup from "../components/services/Popup";
import Noise from "../components/shared/Noise";
import '../components/shared/gradients.css'
import {motion as m,stagger, useAnimation, useInView} from 'framer-motion'
import SpecialtiesSection from "../components/services/SpecialtiesSection";
import './services.css'
import SEO from "../components/shared/SEO";

export default function Services() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("services");
  }, []); 



return (
  <div id="services" className="overflow-hidden" >
    <SEO 
          siteTitle="Medina Environmental | Services"
          siteDescription="Expert environmental services: wastewater solutions, project management, engineering, technical writing & training. Medina Environmental's 30+ years of innovation at your service. Discover how we can help!"
          siteUrl="https://www.medinaenvironmental.com/services"
          // ogImage={beforeAfter}
        />
    <div id="main" className="relative h-screen w-full min-h-[600px] md:min-h-[700px]">
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
<div id="scrollsections" className="h-fit ">
  {/* <ScrollAnimatedSection /> */}
</div>
<div id="services" className="w-screen h-full bg-white">
  <div  className="relative  w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-24 grid gap-8 sm:gap-12 lg:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <h2 className="font-bold text-lg text-Dark-Navy text-center col-span-full mb-8">
            Click on a service to learn more
          </h2>
  
          <ServicePopup
            title="Engineering & Design"
            text="We bolster engineering teams with industry expertise, forward thinking, and technological advancements."
            buttonClasses="service-popup"
            image="0"
            gradient="small-blue-gradient"
            fontSize="8"
          />
  
          <ServicePopup
            title="Research & Development"
            text="We're committed to advancing solutions for water treatment and environmental remediation. As evidence of our commitment, look no further than our 5 patents in collaboration with the AERDC."
            buttonClasses="service-popup"
            image="1"
            gradient="green-pearl-gradient"
            fontSize="8"
          />
  
          <ServicePopup
            title="Project Management"
            text="Let us lead your team to environmental success. We'll oversee your project from its earliest stages of conceptualization all the way to completion."
            buttonClasses="service-popup"
            image="2"
            gradient="pearl-blue-gradient"
            fontSize="8"
          />
  
          <ServicePopup
            title="Environmental Consulting"
            text="We help businesses and organizations navigate ecological regulations and sustainability challenges. Our expert services provide tailored solutions to minimize your environmental impact while ensuring compliance."
            buttonClasses="service-popup"
            image="3"
            gradient="small-blue-gradient"
            fontSize="8"
          />
  
          <ServicePopup
            title="Solutions & Products"
            text="We provide research, development, and testing of novel solutions for water treatment and environmental remediation. Medina has 5 patents in collaboration with the AERDC."
            buttonClasses="service-popup"
            image="4"
            gradient="green-pearl-gradient"
            fontSize="8"
          />
  
          <ServicePopup
            title="Technical Writing & Training"
            text="With over 150 publications, Dr. Medina is ready to collaborate on research papers and journal entries. Or, let us help educate your team or students on environmental/wastewater concepts in an easy-to-understand way."
            buttonClasses="service-popup"
            image="5"
            gradient="pearl-blue-gradient"
            fontSize="7"
          />
        </div>
      </div>
</div>

   

    <div id="ESG" className="h-screen relative w-screen esg-gradient">
      <Noise />
    <div className="relative h-full w-full">
      <div className="absolute transform -translate-x-1/2 bottom-[55%] left-1/2 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="48" fill="url(#paint0_linear_2776_161)"/>
            <defs>
            <linearGradient id="paint0_linear_2776_161" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD76F"/>
            <stop offset="0.5" stopColor="#FFD76F"/>
            <stop offset="0.7" stopColor="#A0C8D9" stopOpacity="0"/>
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