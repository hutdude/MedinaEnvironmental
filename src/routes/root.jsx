import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/shared/Navbar'
import LazyAnimation from "../components/shared/AnimatedLazy.jsx";
import SEO from "../components/shared/SEO";
import medinadrop from '../assets/MedinaDrop.svg'
import { Toaster, toast } from "react-hot-toast";

export default function Root() {
    

    return (
      <>
      <div>
        <Toaster />
      </div>
      <SEO
        siteTitle="Medina Environmental"
        siteDescription="Medina Environmental: 30+ years solving wastewater and remediation challenges. We offer innovative solutions for companies and agencies. Conquer your environmental issues today!"
        siteUrl="https://medinaenvironmentalcompany.com"
        ogImage={medinadrop}
        twitterImage={medinadrop}
      />
      
        <div className='w-full relative top-0' id="detail">
          
        <Navbar />
        <Outlet />
        <LazyAnimation />
      </div>
      </>
    );
  }