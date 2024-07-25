import { PageContext } from "../main";
import { useContext, useState, useCallback, useEffect } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import Partners from '../components/projects/Partners.jsx'
import ProjectsDisplay from "../components/projects/ProjectsDisplay.jsx";
import ContactForm from "../components/shared/ContactForm.jsx";
import '../components/shared/gradients.css'
import Noise from "../components/shared/Noise.jsx";
import PDFViewer from "../components/shared/pdfviewer.jsx";
import sf330 from "../assets/sf330.pdf"


export default function Projects() {

  const { currentPage, setCurrentPage } = useContext(PageContext);
  const sf330URL = `/api/wp-json/wp/v2/sf330?acf_format=standard&_fields=id,title,acf&timestamp=${Date.now()}`;
  useEffect(() => {
    setCurrentPage("projects");
  }, []); 

  const [sf330, setSF330] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchSF330 = useCallback(async () => {
        try {
            const req = await fetch(sf330URL);
            const sf330Data = await req.json();
            setSF330(sf330Data);
            console.log(sf330Data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching sf330:', error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSF330();
    }, [fetchSF330]);

  return (
    <div id="projects" className="overflow-hidden">
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
      <div className="relative" id="partners">
        <Noise  z10={true}/>
        <Partners />
      </div>
      <ProjectsDisplay />
      
      <div className="relative " id="sf">
        <Noise z10={true}/>
        <h3 className="text-center text-xl font-bold bg-white">sf-330</h3>
        {!loading ? <PDFViewer pdfURL={sf330[0].acf.pdf} /> : <></>}
        {/* <object data={sf330} className="h-[800px] *:relative z-30" type="application/pdf" width="100%" height="100%">
            <p>Alternative text - include a link <a href={sf330}>to the PDF!</a></p>
        </object> */}
        {/* <Document file={{
          file: sf330
          }} /> */}
        {/* <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <iframe 
          src={sf330}
          className="w-full h-[600px] border-none"
          title="PDF Viewer"
        />
      </div> */}
        
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}