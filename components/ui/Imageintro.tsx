"use client";
import { useRef, useEffect } from 'react';
import gymimg from 'public/gymCode.png';


const Imageintro: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        parallaxRef.current.style.backgroundPositionY = scrollTop * 0.5 + 'px'; 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="h-[500px] bg-cover bg-center bg-fixed overflow-hidden" 
      ref={parallaxRef}
      // style={{ backgroundImage: "url('/your-background-image.jpg')" }} 
    >
      <img 
        src={gymimg} 
        alt="Your Name" 
        className="w-[300px] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
      />
    </div>
  );
};

export default Imageintro;