import React, { useEffect, useContext, useState } from 'react';
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Link } from 'react-router-dom';
import { PageContext } from '../../main';
import Announcement from './NavbarAnnounce';
import Hamburger from 'hamburger-react';



export default function Navbar() {
  
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const MedinaDrop = apiUrl + '/wp-content/uploads/2024/06/LogoNoBackgroundHighQuality.png'

  const { currentPage, setCurrentPage } = useContext(PageContext);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  
  const scrollingDiv = document.getElementById('root');
  const togglePanel = () => {
    //if mobile menu is shown, disable scrolling. Otherwise enable
    mobileMenuShown ? scrollingDiv.classList.add('overflow-hidden') : scrollingDiv.classList.remove('overflow-hidden') 
    setMobileMenuShown(!mobileMenuShown);
    
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >  document.getElementById('navbar').clientHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    
    { name: 'home', href: '/', current: currentPage == "home" },
    { name: 'about', href: '/about', current: currentPage == "about"  },
    { name: 'services', href: '/services', current: currentPage == "services"  },
    { name: 'projects', href: '/projects', current: currentPage == "projects"  },
    { name: 'learn', href: '/learn', current: currentPage == "learn"  },
  ]

  const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/medina-environmental-consulting-solutions/', icon: <FaLinkedin className='h-full w-full' />, current: false},
    { name: 'YouTube', href: 'https://www.youtube.com/@TheDrVMedina', icon: <FaYoutube className=' h-full w-full'/>, current: false}
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Disclosure as="nav" id="navbar" className={`fixed h-auto top-0 w-full z-40`}>
      {({ open }) => (
        <>
        {/* Anouncement section */}
        <Announcement />

        {/* normal navbar */}
          <div className={`  border-b-4 transition-colors duration-300  pb-2 ${isScrolled && !mobileMenuShown ? 'border-gray-300 bg-Dark-Navy' : ' border-transparent lg:bg-Dark-Navy'} ${mobileMenuShown ? 'bg-Dark-Navy' : ' '}`}>
            <div className="grid grid-cols-3 h-auto pt-2 md:px-10 px-4 items-center ">
              
              <Link className=' w-fit col-start-1 col-end-2 flex justify start items-center' to={'/'}>
                <div className='flex items-center'>
                  <img
                      className="h-10 md:h-12 w-auto"
                      src= {MedinaDrop}
                      alt="Medina Environmental"
                    />
                  <h1 className='text-white text-2xl md:text-4xl font-semibold tracking-tight ml-2'>
                    Medina
                  </h1>
                </div>
              </Link>

              {/* DESKTOP MENUS */}
              <div className="col-start-2 col-end-3 justify-center hidden lg:flex">
                  <div className="flex xl:space-x-20 lg:space-x-16 text-md">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'text-white  font-bold' : 'text-gray-300 ',
                          'rounded-md z-20 hover:text-white py-2 hover:scale-110 truncate'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
              </div>
              <div className="col-start-3 col-end-4 justify-end hidden lg:flex ">
                  <div className="flex space-x-4">
                    {socials.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target='_blank'
                          className='text-white h-8 xl:h-12 mr-4 hover:scale-105'
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <div className=' h-full w-full '>{item.icon}</div>
                        </a>
                    ))}
                  </div>
              </div>

              {/* MOBILE MENU */}
              <div className="ml-auto flex items-center lg:hidden col-start-3">
                {/* Mobile menu button*/}
                <DisclosureButton  onClick={togglePanel} className=" scale-105 relative inline-flex items-center justify-center p-2 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Hamburger color="white" rounded toggled={open}/>
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden bg-Dark-Navy h-screen">
            
            <div className="space-y-5 px-6 pb-3 pt-2 text-lg text-black font-medium font-outfit tracking-tight">
              <div className={`bg-white transform transition-all duration-300 ease-in-out opacity-0  rounded-rounded-4 ${mobileMenuShown ? " animate-slidein  [--slidein-delay:0ms]" : ""}`}>
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      item.current ? 'font-extrabold' : ' hover:text-Electric-Blue',
                      'block px-3 py-3'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => {
                      // Close the mobile menu
                      setMobileMenuShown(false);
                    }}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              
              <div className={`bg-white rounded-rounded-4 min-h-16 px-3 flex items-center opacity-0 ${mobileMenuShown ? " animate-slidein  [--slidein-delay:100ms]" : ""}`}>
                <DisclosureButton
                    key="contact-button"
                    as="a"
                    href="/#contact"
                    className={classNames(
                      ' hover:text-Electric-Blue',
                      'block py-3'
                    )}
                  >
                  {"contact us"}
                  </DisclosureButton></div>
              {socials.map((item, index) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target='_blank'
                          className={`bg-white rounded-rounded-4 min-h-16 px-3 flex items-center opacity-0 ${mobileMenuShown ? " animate-slidein " : ""}` }
                          style={{
                            '--slidein-delay': `${(index + 1) * 100 + 100}ms`
                          }}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <div className='flex justify-between w-full items-center'>
                            <div className='w-1/2'>{item.name}</div>
                            <div className='pr-4 h-12'>{item.icon}</div>
                          </div>
                        </a>
                    ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
