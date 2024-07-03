import Button from '../components/shared/Button'
import TextureMesh from '../components/shared/BlueAnimation'
import ValueBubble from '../components/learn/ValueBubble';
import React, {useEffect, useContext} from 'react';
import { PageContext } from '../main';
import noise from '../assets/noise.png'
import '../components/shared/BlueAnimation.css';
import './about.css'

export default function About() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const victorField = apiUrl + "/wp-content/uploads/2024/07/Victor-Field-Photo-5.jpg"
  const beforeAfter = apiUrl + "/wp-content/uploads/2024/07/Before-and-after.jpg"


  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("about");
  }, []); 
  
  return (
    <div id="about" className="overflow-hidden" >

      <div id="main" className="relative h-screen w-full min-h-[600px] md:min-h-[800px] ">
        
      </div>

      <div id="whoweare" className='relative grid grid-cols-1 md:grid-cols-2 items-center h-screen bg-about-gradient'>
        <div className='flex flex-col gap-8'>
          <div className='bg-Card-Light-Gray rounded-r-7 mr-60' >
            <h2 className='pl-48 col-span-1 text-5xl tracking-wide font-extrabold text-Light-Gray '>who we are</h2>
          </div>
          <p className='pl-48 mr-80 text-justify text-[1.25rem]  text-Light-Gray '>
            Medina Environmental Consulting & Solutions (MECS) is a Minority-Owned Small Business led by Dr. Victor Medina. After earning his Ph.D in Civil/Environmental Engineering from UCLA, Dr. Medina has spent the past<b> 30+ years</b> as a professional Environmental Engineer.
          </p>
        </div>
        <div className='w-full flex justify-center'><img className="rounded-7 " src={victorField}></img></div>
      </div>

      <div id="values" className='relative h-screen w-screen'>
        <div className= 'absolute inset-0 z-10 h-full w-full bg-repeat bg-center ' style={{backgroundImage: `url(${noise}`}}></div>
        <div className='absolute inset-0 h-full w-full blue-gradient'></div>
        
        <div className='relative h-full w-full flex '>
          <div className='absolute w-fit lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2'>
            <div className='values-backdrop'>
              <h1 className=' award-winning-gradient '>our values</h1>
            </div>
          </div>
          <ValueBubble top='40' gradient='small-blue-gradient' left='20' size='275' text='expert consultation'/>
          <ValueBubble top='10' gradient='pearl-blue-gradient' left='30' size='330' text='cost-effective solutions'/>
          <ValueBubble top='70' gradient='green-pearl-gradient' left='30' size='330' text={'personalized\n customer service'}/>

          <ValueBubble top='40' gradient='small-blue-gradient' left='70' size='255' text='forward thinking'/>
          <ValueBubble top='10' gradient='pearl-blue-gradient' left='60' size='330' text={'innovative tech\ndevelopment'}/>
          <ValueBubble top='70' gradient='green-pearl-gradient' left='60' size='330' text={'reliable\ncommunication'}/>

        </div>
        
        
      </div>
  
      <div id="what we do" className='relative grid grid-cols-1 md:grid-cols-2 items-center h-screen bg-about-gradient'>
        
        <div className='w-full flex justify-center'><img className="rounded-7 " src={beforeAfter}></img></div>
        <div className='flex flex-col gap-8'>
          <div className='bg-Card-Light-Gray rounded-l-7 ml-60' >
            <h2 className='pl-48 col-span-1 text-2xl xl:text-4xl 2xl:text-5xl tracking-wide font-extrabold text-Light-Gray '>what we do</h2>
          </div>
          <p className='pr-48 ml-80 text-justify text-[1.25rem]  text-Light-Gray '>
          Here at MECS, we offer an array of environmental services for government agencies, non-profit’s, businesses, and industries. Ranging from project management and environmental research, to environmental education and training, we’re sure to have the expertise you need.
          </p>
        </div>
      </div>
   
      
    </div>
  );
}