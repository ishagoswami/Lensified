// src/Gallery.js

import React, { useState } from "react";

const GalleryMini = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {" "}
        {/* gap-1 for 4px gap */}
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openPopup(image)}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-md m-1"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-600"
            >
              <span className="text-xl">✖</span> {/* Close icon */}
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryMini;
