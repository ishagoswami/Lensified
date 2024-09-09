// src/components/Carousel.jsx

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-10 relative group">
      <div className="overflow-hidden h-full rounded-lg shadow-lg relative">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-120 object-cover transition-transform duration-700 ease-in-out"
        />
           {/* Text Overlay */}
           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
          <span className="text-white text-4xl font-bold">Lensified</span>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="hidden group-hover:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="hidden group-hover:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
      >
        <FaArrowRight size={20} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-white" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
