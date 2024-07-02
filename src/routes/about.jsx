import Button from '../components/shared/Button'
import TextureMesh from '../components/shared/BlueAnimation'
import React, {useEffect, useContext} from 'react';
import { PageContext } from '../main';
import '../components/shared/BlueAnimation.css'

export default function About() {

  const { currentPage, setCurrentPage } = useContext(PageContext);
  useEffect(() => {
    setCurrentPage("about");
  }, []); 
  
  return (
    <div id="about" className="overflow-hidden" >

      <div id="main" className="relative h-screen w-full min-h-[600px] md:min-h-[800px] ">
        <TextureMesh className="h-screen"></ TextureMesh>
      </div>
  
   
      
    </div>
  );
}