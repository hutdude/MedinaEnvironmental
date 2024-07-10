import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/shared/Navbar'
import AnimatedBackgound from "../components/shared/AnimatedBackgound";
export default function Root() {
    return (
      <>
        <div className='w-full relative top-0' id="detail">
          
        <Navbar />
        <Outlet />
        <AnimatedBackgound />
      </div>
      </>
    );
  }