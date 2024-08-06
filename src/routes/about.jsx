import ValueBubble from '../components/about/ValueBubble';
import React, {useEffect, useContext} from 'react';
import { PageContext } from '../main';
import '../components/shared/BlueAnimation.css';
import './about.css'
import Events from '../components/about/Events';
import ContactForm from '../components/shared/ContactForm';
import victorField from '../assets/VictorFieldHat.jpg'
import beforeAfter from '../assets/before-and-after.jpg'
import vmpets from '../assets/VM-PETS.jpg'
import Noise from '../components/shared/Noise';
import AwardTimeline from '../components/about/AwardTimeline';
import { IoChevronDownOutline } from "react-icons/io5";
import SEO from '../components/shared/SEO';

export default function About() {  

  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("about");
  }, []); 
  
  return (
    <div id="about" className="overflow-hidden" >
      <SEO 
          siteTitle="Medina Environmental | About"
          siteDescription="Discover why Medina Environmental Company is your irreplaceable ally for wastewater and environmental challenges. 30+ years of expertise, innovation, and research. Learn more!"
          siteUrl="https://www.medinaenvironmental.com/about"
          ogImage={beforeAfter}
        />
      <div id="main" className="relative h-screen w-full min-h-[600px]  md:min-h-[700px] ">
        
        <h1 className='absolute max-w-[800px] w-full lg:w-auto px-8 top-1/2 left-1/2 text-3xl lg:text-4xl xl:text-5xl text-center transform -translate-y-1/2 -translate-x-1/2 text-Dark-Navy'>Discover the <span className='text-Electric-Blue'>values</span> and <span className='text-Electric-Blue'>stories</span> behind MECS</h1>
        <div className='flex flex-col items-center w-full absolute bottom-0'>
          <h6 className='text-Dark-Navy text-[1.25rem] pb-4 text-center'>SCROLL TO FIND OUT</h6>
          <div className='mb-8'>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>

      <div id="whoweare" className='bg-white relative grid grid-cols-1 lg:grid-cols-2 items-center py-8 h-full bg-about-gradient'>
        <div className='flex flex-col gap-8'>
          <div className='bg-Card-Light-Gray rounded-r-7 md:mr-40 xl:mr-16 mr-12' >
            <h2 className='pl-16 md:pl-48 col-span-1 text-3xl xl:text-5xl tracking-wide font-extrabold text-Light-Gray '>who we are</h2>
          </div>
          <p className='pl-16 md:pl-48 mr-12 xl:mr-24  text-[1.25rem]  text-Light-Gray '>
            Medina Environmental Consulting & Solutions (MECS) is a Minority-Owned Small Business led by Dr. Victor Medina. After earning his Ph.D in Civil/Environmental Engineering from UCLA, Dr. Medina has spent the past<b> 30+ years</b> as a professional Environmental Engineer.
          </p>
        </div>
        <div className='w-full flex justify-center px-8'><img className="rounded-7 " src={victorField} alt="Dr. Victor Medina smiling with a backdrop of a misty coast."></img></div>
      </div>

      <div id="values" className='relative h-full w-screen'>
        <Noise />
        <div className='absolute inset-0 h-full w-full blue-gradient'></div>
        
        <div className='relative h-full w-full flex '>

          <div className='py-48 grid gap-16 lg:gap-16 align-items-center justify-items-center content-center h-full w-full grid-cols-1 lg:grid-cols-5'>
          <div className='lg:col-start-3 z-30 lg:row-start-2 '>
              <div className='values-backdrop'>
                <h1 className='text-4xl award-winning-gradient '>our values</h1>
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
  
      <div id="what we do" className='bg-white py-8 relative grid grid-cols-1 lg:grid-cols-2 items-center h-full min-h-screen bg-about-gradient'>
        
        <div className='w-full p-12 flex justify-center'><img className="rounded-7 " src={beforeAfter} 
          alt="Dr. Victor Medina showcases the before and after results of his PFAS filtration system."></img></div>
        <div className='flex flex-col gap-8'>
          <div className='bg-Card-Light-Gray rounded-l-7 ml-12' >
            <h2 className='lg:pl-48 pl-4 col-span-1 text-2xl xl:text-4xl 2xl:text-5xl tracking-wide font-extrabold text-Light-Gray '>what we do</h2>
          </div>
          <p className='pr-16 ml-16 md:pr-36 md:ml-36  text-[1.25rem]  text-Light-Gray '>
            Here at MECS, we offer an array of environmental services for government agencies, non-profit’s, businesses, and industries. Ranging from project management and environmental research, to environmental education and training, we’re sure to have the expertise you need.
          </p>
        </div>
      </div>
   
    <div id="timeline" className='relative shadow-pipe w-screen'>
      <Noise />
      <div className='absolute inset-0 h-full w-full blue-gradient'></div>
      <AwardTimeline />
    </div>
    <div id="whypickus" className='bg-white relative grid grid-cols-1 lg:grid-cols-2 items-center h-full bg-about-gradient'>
        <div className='pt-8 flex flex-col gap-8'>
          <div className='bg-Card-Light-Gray rounded-r-7 mr-12 md:mr-40 xl:mr-16' >
            <h2 className='pl-16  md:pl-48 col-span-1 text-3xl xl:text-5xl tracking-wide font-extrabold text-Light-Gray '>why pick us</h2>
          </div>
          <p className='pl-16 md:pl-48 mr-12 xl:mr-24 text-[1.25rem]  text-Light-Gray '>
          When working with MECS, you will interact directly with our CEO Dr. Medina: no need to fool with corporate run-arounds. We’ve proven our commitment to Environmental Solutions over the past <b>30 years</b> with a proven track record of <b>130+ technical presentations</b>,  150+ technical articles/reports, and <b>5 patents</b> for environmental technologies.
          </p>
        </div>
        <div className='w-full p-8 lg:p-12 flex justify-center max-h-[800px]'>
          <img 
            className="rounded-7 object-cover w-full h-full max-w-[900px] max-h-[500px]" 
            src={vmpets} 
            alt="Dr. Victor Medina brandishes his VM PETS filtration device."
          />
        </div>
      </div>


      <div id="eventsSection px-8" className='bg-white'>
        <Events />
      </div>
      
      <div id="contact">
        <ContactForm 
        text="Tell us about your project below, we’ll take care of the rest"/>
      </div>
    </div>
  );
}