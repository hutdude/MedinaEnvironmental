import { PageContext } from "../main";
import { useContext, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";


export default function Services() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("services");
  }, []); 
return (
  <div id="services" className="overflow-hidden" >
    <div id="main" className="relative h-screen w-full min-h-[600px]  md:min-h-[800px] ">
        
        <h1 className='absolute max-w-[800px] w-full lg:w-auto px-8 top-1/2 left-1/2 text-3xl lg:text-4xl xl:text-5xl text-center transform -translate-y-1/2 -translate-x-1/2 text-Dark-Navy'>
          <span className='text-Electric-Blue'>Relax,</span> we'll take care of your environmental challenges
        </h1>
        <div className='flex flex-col items-center w-full absolute bottom-0'>
          <h6 className='text-Dark-Navy text-[1.25rem] pb-4 text-center'>OUR SERVICES</h6>
          <div className='mb-8'>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>
  </div>
);
}