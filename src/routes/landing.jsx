
// import Marquee from "react-marquee-slider"
// import times from 'lodash/times'
import Button from "../components/shared/Button.jsx"
import './landing.css'
import React, { useRef, useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom'
import ClientCategory from '../components/landing/ClientCategory.jsx'
import ContactForm from '../components/shared/ContactForm.jsx'
import Pipes1 from '../assets/pipes/pipes1.svg'
import StatsCard from '../components/landing/StatsCard.jsx'
import Quote from '../components/landing/Quote.jsx'
import { PageContext } from "../main.jsx";

function Marquee({children}) {
  return (
    <div className="scroll-container">
      <div className="flex w-max scroll-marquee">
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}

export default function Landing() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("home");
  }, []); 
  
  const [imageWidth, setImageWidth] = useState(0); // State to hold image width
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const VictorFieldImg = apiUrl + 'wp-content/uploads/2024/06/VictorField.jpg'
  const MedinaDrop = apiUrl + '/wp-content/uploads/2024/06/LogoNoBackgroundHighQuality.png'
  const Ripples = apiUrl + '/wp-content/uploads/2024/06/ripples.png'
  const divRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
  
      if (element) {
        setTimeout(() => {
          const navbar = document.getElementById("navbar");
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
      else{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };
  
    handleScroll();
  
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleScroll);
  
    // Cleanup
    return () => window.removeEventListener('hashchange', handleScroll);
  }, [location]);

  const traits = [
    "Awareness", "Education", "Solutions", "Research", "Training"
  ]

  


  return (
      <div id="landing" className="overflow-hidden" >

         <div id="main" className="relative h-screen w-full min-h-[600px] md:min-h-[800px] md:h-screen">
           {/* Background gradient */}
           <div className="absolute inset-0 w-full h-full">
            <div className='h-1/2 relative md:hidden'>
           
              <div className='absolute inset-0 custom-gradient-2 z-10'></div>
              <div className= 'absolute inset-0 bg-cover bg-center ' style={{backgroundImage: `url(${VictorFieldImg}`}}></div>
          
              <div className='absolute inset-0 custom-gradient-1'></div>
              </div>
           
            <div className='h-full top-6 bg-Dark-Navy'></div>
                   </div>
                   {/* Content */}
                   <div className='relative z-10 h-full grid grid-rows-8 grid-cols-1 md:grid-cols-2 items-center justify-center text-white text-center w-full'>
            
           
            <div className='flex justify-center align-baseline row-start-3 row-end-5'>
              <h1 className="md:text-left lg:text-5xl col-span-2 text-4xl 2xl:text-5xl md:w-1/2 font-extrabold ">Enhance Your<br/>Environmental </h1>
            </div>
            <div className=' row-start-5 row-end-6 align-top md:col-span-full '>
              
                <Marquee className='pr-12 scroll-marquee'>
                  {traits.map((item) => (<div className='flex items-center ' key={item}>
                  
                    <h2 className='text-4xl tracking-widest text-Electric-Blue font-merriweather px-24'>
                      {item}
                    </h2>
                    <img className="h-10 w-auto"src={MedinaDrop}></img>
                  </div>
                  ))}
                </Marquee>
              {/* <Marquee className='md:col-span-full ' velocity='30' >
              {times(5, Number).map(id => (
                  <div className='flex items-center' key={`marquee-id-${id}`}>
              
                      <h2 className=' tracking-widest text-Electric-Blue font-merriweather text-4xl  px-24'>
                        {traits[id]}
                      </h2>
                    <img className="h-10 w-auto"src={MedinaDrop}></img>
                    </div>
              ))

              }
               
                 
              </Marquee> */}
            </div>
            <div className='relative col-start-2 hidden md:block  row-start-3 row-end-6' >
              <div className='inline-block p-4>'>
                <div className='relative'>
                  <img className='relative  z-10 w-[400px] xl:w-[600px] h-full rounded-rounded-6' src={VictorFieldImg} ></img>
                  <div className='absolute h-full w-full top-0 left-0 rounded-rounded-6 bg-blue-rect-landing opacity-50 transform translate-x-3 translate-y-3'></div>
                  
                </div>
                </div>
           
            </div>
            <div className='flex justify-center  row-start-6 ' >
              <h6 className='text-base text-white md:text-md md:w-1/2 text-center md:text-left '>
                  <b>Bolster your project</b> with our expertise in environmental solutions, research, and project management
              </h6>
            </div>
            <div className="flex justify-center row-start-7 row-end-9 ">
              <div className="flex md:w-1/2">
                <div className="flex-grow text-center md:text-left p-4">
                < Button  text="Our Services" newPage={"/services"} ></Button>
           
                </div>
                <div className="flex-grow text-center p-4">
                <Button text="Contact Us" newPage={"#contact"}></Button>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* IMPACT SECTION */}
        <div id="impact" className='relative h-200vh w-full flex items-center justify-center personal-gradient'>
        <img
              src={Ripples}
              alt="Ripple Effect"
              className='absolute inset-y-0 h-200vh opacity-50 max-w-none object-center object-cover transform translate-x-[-60vw] scale-105 z-10'
            />
          <div className='relative pb-8 h-full w-full grid grid-cols-1 justify-center px-10 space-y-8'>
            
              <div>
                <h1 className='text-white col-span-1 font-bold text-4xl xl:text-5xl py-12 text-center'>Personal touch.<br/> Large impact.</h1>
                <p className='text-white col-span-1 text-[1.25rem] text-center'>
                  Medina Environmental Consulting & Solutions is a Minority-Owned Small Business, meaning
                  <span className=' text-Electric-Blue font-bold'> personal and authentic </span>
                  customer service for your project.
                  <br/><br/>
                  We’re ready to address the environmental challenges of
                </p>
              </div>
                <ClientCategory icon='government' text='Government Agencies' />
                <ClientCategory icon='industries' text='Industries' />
                <ClientCategory icon='nonprofits' text='Non-Profits' />
                <ClientCategory icon='briefcase' text='Businesses' />
            </div>
            
          </div>
         
         <div id="collaborate" className='flex flex-col items-start relative h-fit pb-8 px-12 md:px-36 lg:px-48 xl:px-80 2xl:px-96 bg-Dark-Gray w-full'>
          <div className='w-full items-center justify-center'>
            <h1 className='font-bold text-4xl xl:text-5xl pt-16 text-white text-center z-10'>Let's <span className=' text-Electric-Blue'>collaborate</span>  on environmental</h1>
          </div>
          <div className='rounded-rounded-6 w-full mt-20 bg-Light-Gray'>
            <div className='p-6 tracking-wider'>
              <ul className=' text-white font-semibold text-[24px] space-y-6'>
                <li>Consulting</li>
                <li>Project Management</li>
                <li>R & D</li>
                <li>Solutions & Products</li>
                <li>Technical Writings</li>
                <li>Awareness Trainings</li>
                
                <li>Engineering</li>
                <li>Design</li>
              </ul>
            </div>
          </div>

            <div className='pt-20'><Button text="Our Services" newPage={"/services"} /></div>
         </div>

         {/* Experience Section */}
         <div id="experience" className='relative w-full'>
                  <div className='w-full text-Title-Dark-Gray items-center flex flex-col'>
                    <div className='pt-24 items-center justify-center md:pt-48 max-w-[50ch]'>
                      <div className='relative inline-block'>
                        <div className=''>
                          <h1 className='tracking-wider text-Title-Dark-Gray  text-center font-extrabold'>
                            Experience<br /> That <span className='text-Dodger-Blue'>Shows</span>
                          </h1>
                          <p className='pt-8 px-12 text-center'>With <span className='font-black'>over 30 years</span> of experience, we’ve learned a thing or two about addressing environmental issues.</p>
                        </div>
                        {/* <div id="greenPipe" className='absolute h-8 w-screen bottom-[290px] left-[450px]  bg-Pipe-Green'></div>
                        <div id="greenPipe" className=' shadow-pipe rounded-bl-7 absolute h-screen w-8  bottom-[290px] right-[70px] bg-Pipe-Green'></div>
                        <div id="bluePipe" className=' absolute h-8 w-screen bottom-[-50px] right-[450px]  bg-Light-Blue'></div>
                        <div id="bluePipe" className=' shadow-pipe rounded-tr-7 absolute h-96 w-8 translate-y-[18px] left-[70px] bg-Light-Blue'></div> */}
                        
                      </div>
                      
                    </div>
                    <div className='grid max-w-[1900px] z-30 grid-cols-1 w-full px-10 p-20 pt-48 space-y-8 lg:space-y-0 lg:space-x-8 lg:grid-cols-3'>
                      <StatsCard bg='bg-Card-Light-Gray' title='5 Patents' subtitle='For innovative environmental technologies' text='A testament to our advacements in the field.' height='72' />
                      <StatsCard bg='bg-Powder-Blue' title='30 Years' subtitle='Professional Experience' text='Researching and developing modern environmental solutions'  height='110'/>
                      <StatsCard bg='bg-[#5DBAEF]' title='150 Articles' subtitle='Technical Articles and Reports' text='Including 30 journal publications'  height='90px'/>
                      
                    </div>
                  </div>
         </div>

         <div className='w-full bg-gray-100 shadow-black' id="quote">
            <Quote />
         </div>

         
         <div id="interested" className='pt-64 pb-32  text-center relative w-full'>
          <p className='text-lg font-bold text-Light-Gray pb-16'>
            Interested in the environmental issues we're helping address?
            <br /><br />Check out the resources we've provided.
          </p>
          <Button text="Learn" newPage={"/learn"}/>
         </div>

         
         <div id="contact" className='relative w-full'>
          <ContactForm />
         </div>
      </div>
          
  );
}