import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollDrivenStickySection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const contentProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const smoothContentProgress = useSpring(contentProgress, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && contentRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        setIsSticky(scrollPosition > sectionTop && scrollPosition < sectionBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} style={{ height: '300vh' }}>
      <div
        ref={contentRef}
        style={{
          position: isSticky ? 'sticky' : 'relative',
          top: 0,
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        {/* Your content here */}
        <motion.div style={{ y: useTransform(smoothContentProgress, [0, 1], ['0%', '-66.67%']) }}>
          <div style={{ height: '100vh', background: 'red' }}>Content 1</div>
          <div style={{ height: '100vh', background: 'green' }}>Content 2</div>
          <div style={{ height: '100vh', background: 'blue' }}>Content 3</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollDrivenStickySection;