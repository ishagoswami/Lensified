import React from "react";
import Card from "./mini-compoents/Card";

const cardData = [
  {
    titleFirst: "About",
    titleSecond: "Us",
    description:
      "Lensified is the official photography club of Netaji Subhash Engineering College. Lensified started its journey in the 2005 and has some glorious years till date. The legacy of the club has been passed down from generation to another and the club has grown in an exponential manner. This club was started with the intention of providing a platform for all the students who are interested in photography. Even today, the first and main goal of Lensified it the same. We have organized many events, both inter and intra college which gives the budding photographers the right direction. Lensified also takes the initiative to organize forums for all the interested students of the college who want to get a head start on learning photography. Some of the most eminent photographers are the mentors of the forums.",
    imageSrc: "https://ishagoswami.github.io/Lensified-NSEC/Images/events2.jpg",
  },
  {
    titleFirst: "About",
    titleSecond: "Us",
    description:
      "Relax on the soft sandy beaches with crystal clear water, ideal for swimming and sunbathing.",
    imageSrc: "https://via.placeholder.com/300?text=Beach",
  },
  {
    titleFirst: "About",
    titleSecond: "Us",
    description:
      "Explore the lush greenery and tranquility of the forest, perfect for hiking and nature walks.",
    imageSrc: "https://via.placeholder.com/300?text=Forest",
  },
  {
    titleFirst: "About",
    titleSecond: "Us",
    description:
      "Experience the magic of the night sky filled with stars, a perfect setting for stargazing.",
    imageSrc: "https://via.placeholder.com/300?text=Night+Sky",
  },
];

function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            titleFirst={card.titleFirst}
            titleSecond={card.titleSecond}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </>
  );
}

export default About;
