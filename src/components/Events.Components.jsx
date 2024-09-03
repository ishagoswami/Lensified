import React from "react";
import Crousel from "./mini-compoents/Crousel";


const events = [
  {
    images: [
      "https://ishagoswami.github.io/Lensified-NSEC/Images/events2.jpg",
      "https://ishagoswami.github.io/Lensified-NSEC/Images/mallick.jpeg",
      "https://via.placeholder.com/800x300?text=Slide+1",
    ],
    title: "Event 1",
    description: "Details about Event 1.",
  },
  {
    images: [
      "https://via.placeholder.com/800x300?text=Slide+2",
      "https://via.placeholder.com/800x300?text=Slide+3",
      "https://via.placeholder.com/800x300?text=Slide+4",
    ],
    title: "Event 2",
    description: "Details about Event 2.",
  },
  {
    images: [
      "https://via.placeholder.com/800x300?text=Slide+5",
      "https://via.placeholder.com/800x300?text=Slide+6",
      "https://via.placeholder.com/800x300?text=Slide+7",
    ],
    title: "Event 3",
    description: "Details about Event 3.",
  },
];

function Events() {
  return (
    <>
      <h1>Lensified Events</h1>
      <div className="flex flex-col justify-center items-center">
      {events.map((event, index) => (
        <div key={index} className="mb-10 w-full max-w-3xl">
          <Crousel images={event.images} />
          <div className="text-center mt-4">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p className="mt-2 text-gray-700">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Events;
