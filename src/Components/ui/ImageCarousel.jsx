import  { useState, useEffect, useCallback } from 'react';
import event1 from '../../assets/img/event1.jpg';
import event2 from '../../assets/img/event2.jpg';
import event3 from '../../assets/img/event3.jpg';
import event4 from '../../assets/img/event4.jpg';

import event6 from '../../assets/img/event6.jpg';


const Carousel = () => {
    const [images] = useState([
      event1,
      event2,
      event3,
      event4,
      event6
    ]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // Function to move to the next slide
    const nextSlide = useCallback(() => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    });
  
    // Function to move to the previous slide
    const prevSlide = () => {
      const newIndex = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(newIndex);
    };
  
    // Automatically move to the next slide at intervals
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change the interval as per your requirement (3000ms = 3 seconds)
  
      return () => clearInterval(interval); // Cleanup function to clear the interval
    }, [currentImageIndex, nextSlide]); // Dependency array ensures useEffect runs on mount and when currentImageIndex changes
  
    return (

      <div className="relative">
        <div className="rellax" data-rellax-speed="-5">
        <h1 className="md:text-6xl text-4xl pl-12 pt-8 font-bold mb-5">Explore our fun events</h1>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="w-screen h-screen"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
        </div>
        <div
          className="absolute inset-y-0 left-0 flex items-center justify-center w-12 cursor-pointer"
          onClick={prevSlide}
        >
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              
              d="M4.293 9.293l7-7a1 1 0 0 1 1.414 1.414L7.414 10l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 cursor-pointer"
          onClick={nextSlide}
        >
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M15.707 9.293l-7-7a1 1 0 0 0-1.414 1.414L12.586 10l-5.293 5.293a1 1 0 0 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414z"
              
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  };
  
  export default Carousel;
  