
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";
import {motion as m} from 'framer-motion'


const apiUrl = import.meta.env.VITE_API_BASE_URL;
const Headshot1 = apiUrl + '/wp-content/uploads/2024/01/Victor-Medina-Headshot.jpg'
const Quote = ({}) => {
    return(
        <div className='pt-20 flex flex-col justify-center items-center'>
            {/* <div className='relative w-1/2 max-w-[500px] '>
                <img className='shadow-lg relative z-10 rounded-rounded-6 ' src={Headshot1}></img>
                <div className='absolute h-full w-full top-0 left-0 rounded-rounded-6 opacity-15 bg-Light-Gray transform translate-x-3 translate-y-3'></div>
            </div> */}

            <m.div className='text-center space-y-8 relative w-fit px-16 max-w-[1000px]'
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: .3}}>
                <FaQuoteLeft className='pl-4 absolute top-0 left-0 opacity-10 h-16 w-16'/> 
                <blockquote className='text-lg'>Our mission is to solve and manage your environmental and water issues in a cost-effective manner while providing excellent customer service, so you can focus your business or mission. <br /> <b>Victor Medina</b>, Ph.D., P.E. CEO  </blockquote>
                
            </m.div>

        </div>
    )
}

export default Quote;