import { PageContext } from "../main";
import { useContext, useEffect } from "react";
import LinkedInFeed from "../components/learn/LinkedIn";
import { IoChevronDownOutline } from "react-icons/io5";
import ContactForm from "../components/shared/ContactForm";
import YouTubeGrid from "../components/learn/YouTube";
import educationalTraining from '../assets/educational-training.jpg'
import researchgate from '../assets/researchgate-logo.svg'
import { Link } from "react-router-dom";
import '../components/shared/gradients.css'
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Whitepapers from "../components/learn/Whitepapers";
import SEO from "../components/shared/SEO";


  export default function Learn() {
    const { currentPage, setCurrentPage } = useContext(PageContext);
    useEffect(() => {
      setCurrentPage("learn");
    }, []); 
    
  return (
    <div id="learn" className="overflow-hidden" >
      <SEO 
          siteTitle="Medina Environmental | Learn"
          siteDescription="Explore Medina Environmental's knowledge hub: Watch expert videos, connect on LinkedIn, and dive into our research papers. Expand your environmental expertise with our curated resources."
          siteUrl="https://www.medinaenvironmental.com/learn"
          ogImage={educationalTraining}
        />
     <div id="main" className="relative h-screen w-full min-h-[600px]  md:min-h-[800px] ">
        
        <h1 className='absolute max-w-[800px] w-full lg:w-auto px-8 top-1/2 left-1/2 text-3xl lg:text-4xl xl:text-5xl text-center transform -translate-y-1/2 -translate-x-1/2 text-Dark-Navy'>
          Let our <span className='text-Electric-Blue'>expertise</span> inform your environmental awareness
        </h1>
        <div className='flex flex-col items-center w-full absolute bottom-0'>
          <h6 className='text-Dark-Navy text-[1.25rem] pb-4 text-center'>SCROLL TO LEARN MORE</h6>
          <div className='mb-8'>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>
      <div className="relative h-full bg-Light-Blue" id="video-resources">
        <YouTubeGrid />
      </div>
      <div id="publications">
      <div className="flex flex-col light-purple-grad md:flex-row w-full">
  <div className="md:w-1/2 ">
    <div className="flex flex-col py-32 h-64 md:h-full items-center justify-center gap-8 p-4">
      <h3 className="text-center font-bold text-xl">
        Check out our publications
      </h3>
      <Link to="https://www.researchgate.net/profile/Victor-Medina-5" target='_blank' rel='noopener noreferrer' >
      <button
        type='button'
        className={`px-4 py-2 hover:scale-105 text-base md:text-lg tracking-wider  md:h-20 w-60 rounded-rounded-6 award-winning-bg text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 `}
      >
        <div className="flex items-center justify-between">
          Read More
          <ArrowRightCircleIcon className="h-12" />
        </div>
      </button>
    </Link>
    </div>
  </div>
  <div className="md:w-1/2 ">
    <div className="flex items-center justify-center h-64 md:h-full p-8">
      <div className="bg-Light-Blue flex justify-center items-center w-full h-full rounded-rounded-6">
        <img
          className="h-10 md:h-12 w-auto"
          src={researchgate}
          alt="Research Gate"
        />
      </div>
    </div>
  </div>
</div>
      </div>

      <LinkedInFeed showAll={false} />
      
      <div id="whitepapers">
        <Whitepapers />
      </div>

      <ContactForm />
    </div>
  );
}