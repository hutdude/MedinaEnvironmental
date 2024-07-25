import React, { useState, useEffect, useRef } from 'react';

const ScrollDrivenStickySection = ({ cards, nextSectionId }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 1]
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio < 1) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const scrollPosition = window.innerHeight - top;
        const totalHeight = height + window.innerHeight;
        const scrollPercentage = scrollPosition / totalHeight;
        const newIndex = Math.min(
          Math.floor(scrollPercentage * cards.length),
          cards.length - 1
        );
        setActiveCardIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <section ref={sectionRef} className="relative min-h-screen">
      <div
        ref={containerRef}
        className={`transition-all duration-300 ${
          isSticky ? 'fixed top-0 left-0 w-full h-screen' : ''
        }`}
      >
        <div className="flex items-center justify-center h-full">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">{cards[activeCardIndex].title}</h2>
            <p>{cards[activeCardIndex].content}</p>
          </div>
        </div>
      </div>
      <div style={{ height: `${100 * cards.length}vh` }}></div>
      <div id={nextSectionId} className="bg-gray-100 min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold">Next Section</h2>
      </div>
    </section>
  );
};

export default ScrollDrivenStickySection;