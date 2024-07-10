import Button from '../components/shared/Button'
import TextureMesh from '../components/shared/BlueAnimation'
import ValueBubble from '../components/about/ValueBubble';
import React, {useEffect, useContext} from 'react';
import { PageContext } from '../main';
import noise from '../assets/noise.png'
import '../components/shared/BlueAnimation.css';
import './about.css'
import TimelineItem from '../components/about/TimelineItem';
import Events from '../components/about/Events';
import ContactForm from '../components/shared/ContactForm';
import AnimatedBackground from '../components/shared/AnimatedBackgound';
import { IoChevronDownOutline } from "react-icons/io5";

export default function About() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const victorField = apiUrl + "/wp-content/uploads/2024/07/Victor-Field-Photo-5.jpg"
  const beforeAfter = apiUrl + "/wp-content/uploads/2024/07/Before-and-after.jpg"
  const vmpets = apiUrl + "/wp-content/uploads/2024/07/VM-PETS-3.jpg"
  
  
  

  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("about");
  }, []); 
  
  return (
    <div id="about" className="overflow-hidden" >

      <div id="main" className="relative h-screen w-full min-h-[600px] -z-10 md:min-h-[800px] ">
        <AnimatedBackground />
        <h1 className='absolute top-1/2 left-1/2 text-5xl text-center transform -translate-x-1/2 text-Dark-Navy'>Discover the <span className='text-Dodger-Blue'>values</span> and <span className='text-Dodger-Blue'>stories</span> behind MECS</h1>
        <div className='flex flex-col items-center w-full absolute bottom-0'>
          <h6 className='text-Dark-Navy text-[1.25rem] pb-4 text-center'>SCROLL TO FIND OUT</h6>
          <div className='mb-8'>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>

      <div id="whoweare" className='bg-white relative grid grid-cols-1 lg:grid-cols-2 items-center h-screen bg-about-gradient'>
        <div className='flex flex-col gap-8'>
          <div className='bg-Card-Light-Gray rounded-r-7 md:mr-40 xl:mr-16' >
            <h2 className='pl-16 md:pl-48 col-span-1 text-3xl xl:text-5xl tracking-wide font-extrabold text-Light-Gray '>who we are</h2>
          </div>
          <p className='pl-16 md:pl-48 mr-12 xl:mr-24 text-justify text-[1.25rem]  text-Light-Gray '>
            Medina Environmental Consulting & Solutions (MECS) is a Minority-Owned Small Business led by Dr. Victor Medina. After earning his Ph.D in Civil/Environmental Engineering from UCLA, Dr. Medina has spent the past<b> 30+ years</b> as a professional Environmental Engineer.
          </p>
        </div>
        <div className='w-full flex justify-center'><img className="rounded-7 " src={victorField}></img></div>
      </div>

      <div id="values" className='relative h-full w-screen'>
        <div className= 'absolute inset-0 z-10 h-full w-full bg-repeat bg-center ' style={{backgroundImage: `url(${noise}`}}></div>
        <div className='absolute inset-0 h-full w-full blue-gradient'></div>
        
        <div className='relative h-full w-full flex '>

          <div className='py-48 grid gap-16 lg:gap-16 align-items-center justify-items-center content-center h-full w-full grid-cols-1 lg:grid-cols-5'>
          <div className='lg:col-start-3 z-30 lg:row-start-2 '>
              <div className='values-backdrop'>
                <h1 className=' award-winning-gradient '>our values</h1>
              </div>
            </div>

            <div className='lg:col-start-2 lg:row-start-1'>
              <ValueBubble top='10' gradient='pearl-blue-gradient' left='30' size='330' text='cost-effective solutions'/>
            </div>
            <div className='lg:col-start-2 lg:row-start-3'>
              <ValueBubble top='70' gradient='green-pearl-gradient' left='30' size='330' text={'personalized\n customer service'}/>
            </div>
            <div className='lg:col-start-1 lg:pl-32 lg:row-start-2'>
              <ValueBubble top='40' gradient='small-blue-gradient' left='20' size='275' text='expert consultation'/>
            </div>
            
            
            <div className='lg:col-start-5 lg:pr-32 lg:row-start-2'>
              <ValueBubble top='40' gradient='small-blue-gradient' left='70' size='255' text='forward thinking'/>
            </div>
            <div className='lg:col-start-4 lg:row-start-3'>
              <ValueBubble top='70' gradient='green-pearl-gradient' left='60' size='330' text={'reliable\ncommunication'}/> 

            </div>
            <div className='lg:col-start-4 lg:row-start-1'>
            <ValueBubble top='10' gradient='pearl-blue-gradient' left='60' size='330' text={'innovative tech\ndevelopment'}/>

            </div>
          </div>
          
        </div>
        
        
      </div>
  
      <div id="what we do" className='bg-white relative grid grid-cols-1 lg:grid-cols-2 items-center h-screen bg-about-gradient'>
        
        <div className='w-full p-12 flex justify-center'><img className="rounded-7 " src={beforeAfter}></img></div>
        <div className='flex flex-col gap-8'>
          <div className='bg-Card-Light-Gray rounded-l-7 ml-12' >
            <h2 className='pl-48 col-span-1 text-2xl xl:text-4xl 2xl:text-5xl tracking-wide font-extrabold text-Light-Gray '>what we do</h2>
          </div>
          <p className='pr-16 ml-16 md:pr-36 md:ml-36 text-justify text-[1.25rem]  text-Light-Gray '>
            Here at MECS, we offer an array of environmental services for government agencies, non-profit’s, businesses, and industries. Ranging from project management and environmental research, to environmental education and training, we’re sure to have the expertise you need.
          </p>
        </div>
      </div>
   
    <div id="timeline" className='relative shadow-pipe w-screen'>
      <div className= 'absolute inset-0 z-10 h-full w-full bg-repeat bg-center ' style={{backgroundImage: `url(${noise}`}}></div>
      <div className='absolute inset-0 h-full w-full blue-gradient'></div>
      <div className='z-20 py-16 h-full relative algin-center'>
        <h2 className=' text-center  px-16 text-3xl lg:text-4xl font-bold award-winning-gradient'>award-winning expertise</h2>
        <h6 className='text-white px-16 pt-8 text-center'>Dr. Medina’s leadership and innovation in the field garners attention from all over.</h6>
        <div className='border-white border-2 lg:border-0 rounded-7 mt-8 grid mx-8 py-16 xl:px-48 lg:px-36 grid-cols-1 lg:grid-cols-4'>
          <TimelineItem year='2019' text="ERDC-EL Project Lead of the Year"></TimelineItem>
          <TimelineItem year='2020' text="ERDC-EL Researcher of the Year"></TimelineItem>
          <TimelineItem year='2021' text="ERDC International Research Project of the Year"></TimelineItem>
          <TimelineItem year='2022' text="ASHRAE Technical Paper Award"></TimelineItem>
        </div>

      </div>
    </div>
    <div id="whypickus" className='bg-white relative grid grid-cols-1 lg:grid-cols-2 items-center h-screen bg-about-gradient'>
        <div className='flex flex-col gap-8'>
          <div className='bg-Card-Light-Gray rounded-r-7 md:mr-40 xl:mr-16' >
            <h2 className='pl-16 md:pl-48 col-span-1 text-3xl xl:text-5xl tracking-wide font-extrabold text-Light-Gray '>why pick us</h2>
          </div>
          <p className='pl-16 md:pl-48 mr-12 xl:mr-24 text-justify text-[1.25rem]  text-Light-Gray '>
          When working with MECS, you will interact directly with our CEO Dr. Medina: no need to fool with corporate run-arounds. We’ve proven our commitment to Environmental Solutions over the past <b>30 years</b> with a proven track record of <b>130+ technical presentations</b>,  150+ technical articles/reports, and <b>5 patents</b> for environmental technologies.
          </p>
        </div>
        <div className='w-full flex justify-center'><img className="rounded-7 " src={vmpets}></img></div>
      </div>


      <div id="eventsSection" className='bg-white'>
        <Events />
      </div>
      
      <div id="contact">
        <ContactForm 
        text="Tell us about your project below, we’ll take care of the rest"/>
      </div>
    </div>
  );
}