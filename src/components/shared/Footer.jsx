import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";


const apiUrl = import.meta.env.VITE_API_BASE_URL;
const MedinaDrop = apiUrl + '/wp-content/uploads/2024/06/LogoNoBackgroundHighQuality.png'


const socials = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/medina-environmental-consulting-solutions/', icon: <FaLinkedin className='h-full w-full' />, current: false},
    { name: 'YouTube', href: 'https://www.youtube.com', icon: <FaYoutube className=' h-full w-full'/>, current: false}
  ]

const Footer = ({}) => {
    return(
        <div className="flex flex-col mt-24">
            <div className='w-full justify-center flex items-center'>
                <img
                    className="h-8 md:h-10 w-auto"
                    src= {MedinaDrop}
                    alt="Medina Environmental"
                />
                <h1 className='text-white text-3xl md:text-4xl font-semibold ml-2'>
                    Medina
                </h1>
            </div>
            <p className='text-white text-center text-[0.75em] font-extralight'>© 2024 Medina Environmental Consulting and Solutions</p>
            <p className='text-white text-center text-[0.75em] font-extralight'>204 Catherine Corner
                    <br />Brandon, MS 39047</p>

            <div className='flex items-center justify-center'>
                        <a
                          href={socials[0].href}
                          target='_blank'
                          className='text-white rounded-rounded-4 min-h-16 px-3 flex items-center'
                          aria-current={socials[0].current ? 'page' : undefined}
                          aria-label={`Visit our ${socials[0].name} page`}
                        >
                          
                            <div className='h-12 pr-8 '>
                                {socials[0].icon}
                                <span className="sr-only">{socials[0].name}</span>
                            </div>
                        </a>
                        <div className='h-12 border-r-2 border-white' ></div>
                        <a
                          href={socials[1].href}
                          target='_blank'
                          className='text-white rounded-rounded-4 min-h-16 px-3 flex items-center'
                          aria-current={socials[1].current ? 'page' : undefined}
                          aria-label={`Visit our ${socials[1].name} page`}
                        >
                          
                            <div className=' h-14 pl-8 '>
                                {socials[1].icon}
                                <span className="sr-only">{socials[1].name}</span>
                            </div>
                        </a>

            </div>
        </div>
    )
}

export default Footer;