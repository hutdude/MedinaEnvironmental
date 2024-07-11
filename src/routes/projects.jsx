import { PageContext } from "../main";
import { useContext, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";



export default function Projects() {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("projects");
  }, []); 

  return (
    <div id="projects">
      <div id="main" className="relative h-screen w-full min-h-[600px]  md:min-h-[800px] ">
        
        <h1 className='absolute max-w-[900px] w-full lg:w-auto px-8 top-1/2 left-1/2 text-3xl lg:text-4xl xl:text-5xl text-center transform -translate-y-1/2 -translate-x-1/2 text-Dark-Navy'>
          Our <span className='text-Electric-Blue'>impact</span> speaks for itself.
          Explore our recent work.
        </h1>
        <div className='flex flex-col items-center w-full absolute bottom-0'>
          <h6 className='text-Dark-Navy text-[1.25rem] pb-4 text-center'>SCROLL TO FIND OUT</h6>
          <div className='mb-8'>
            <IoChevronDownOutline />
          </div>
        </div>
      </div>
    </div>
  );
}