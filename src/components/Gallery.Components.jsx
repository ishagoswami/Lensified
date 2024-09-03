import React from "react";

import GalleryMini from "./mini-compoents/Gallery";

const images = [
  "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/01rJn4TormMsGQs1ZRIpzX/16a1cae2440420d0fd0a7a9a006f2dcb/Artboard_Copy_231.jpg?fit=fill&w=600&h=600",
  "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
  "https://imgupscaler.com/images/samples/Imgupscaler_2_2x.webp",
];

function Gallery() {
  return (
    <>
      <h1 className="text-4xl font-bold text-black my-10">
        <span className="text-black">Our </span>
        <span className="text-blue-600">Gallery</span>
      </h1>

      <GalleryMini images={images} />
    </>
  );
}

export default Gallery;
