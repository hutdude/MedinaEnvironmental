import React, { useRef, useEffect, useState } from 'react';
import { motion as m, useScroll, useTransform, useSpring } from 'framer-motion';
import '../shared/gradients.css'

const cards=[
  {
    title: "Card 1",
    content: 'Content 1'
  },
  {
    title: "Card 2",
    content: 'Content 2'
  },
  {
    title: "Card 3",
    content: 'Content 3'
  }
]

const AnimatedScrollCards = () => {
  const {scrollYProgress } = useScroll()

  return(
    (<div className='bg-blue-grad py-8 flex flex-col gap-96'>
        {cards.map((card) => (
          <m.div 
          initial={{opacity: 0, y:'100%'}}
          whileInView={{opacity: 1, y:0}}
          viewport={{ once: true, }}
          transition={{duration:.5}}
          key={card.title} className="bg-white shadow-lg py-64 mx-96  rounded-rounded-6">
            <div variants={card} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900 text-shadow">
                
                {card.title}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 text-shadow">{card.content}</dd>
            </div>
          </m.div>
        ))}
    </div>)
    
  )

};

export default AnimatedScrollCards;