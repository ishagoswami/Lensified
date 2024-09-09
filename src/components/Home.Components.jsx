import React from "react";
import Crousel from "./mini-compoents/Crousel";
import Card from "./mini-compoents/Card";
import CustomButton from "./mini-compoents/Custome-Button";
import RoundedProfileCard from "./mini-compoents/RoundedProfile";
import HeadingText from "./mini-compoents/HeadingText";

const images = [
  "https://ishagoswami.github.io/Lensified-NSEC/Images/events2.jpg",
  "https://ishagoswami.github.io/Lensified-NSEC/Images/mallick.jpeg",
  "media/about.jpeg",
  "https://via.placeholder.com/800x300?text=Slide+2",
  "https://ishagoswami.github.io/Lensified-NSEC/Images/events2.jpg",
];


// Hello Isha


const cardData = [
  {
    titleFirst: "About",
    titleSecond: "Us",
    description:
      "Lensified is the official photography club of Netaji Subhash Engineering College. Lensified started its journey in the 2005 and has some glorious years till date. The legacy of the club has been passed down from generation to another and the club has grown in an exponential manner. This club was started with the intention of providing a platform for all the students who are interested in photography. Even today, the first and main goal of Lensified it the same. We have organized many events, both inter and intra college which gives the budding photographers the right direction. Lensified also takes the initiative to organize forums for all the interested students of the college who want to get a head start on learning photography. Some of the most eminent photographers are the mentors of the forums.",
    imageSrc: "media/about.jpeg",
    path: "/about",
    link: "About Us"
  },
  {
    titleFirst: "About",
    titleSecond: "Us",
    description:
      "Relax on the soft sandy beaches with crystal clear water, ideal for swimming and sunbathing.",
    imageSrc: "https://via.placeholder.com/300?text=Beach",
        path: "about",
    link: "About Us"
  },
  {
    titleFirst: "About",
    titleSecond: "Us",
    description:
      "Explore the lush greenery and tranquility of the forest, perfect for hiking and nature walks.",
    imageSrc: "https://via.placeholder.com/300?text=Forest",
        path: "about",
    link: "About Us"
  },
  {
    titleFirst: "About",
    titleSecond: "Us",
    description:
      "Experience the magic of the night sky filled with stars, a perfect setting for stargazing.",
    imageSrc: "https://via.placeholder.com/300?text=Night+Sky",
        path: "about",
    link: "About Us"
  },
];


const CoreCommitte = [
  {
    imageSrc: "https://ishagoswami.github.io/Lensified-NSEC/Images/isha1.jpeg",
    name: "Isha Di",
    designation: "Web Developer",
  },
  {
    imageSrc: "https://via.placeholder.com/200",
    name: "Jane Smith",
    designation: "UI/UX Designer",
  },
  {
    imageSrc: "https://via.placeholder.com/200",
    name: "Alice Johnson",
    designation: "Project Manager",
  },
];

function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Crousel images={images} />

        <div className="flex flex-wrap justify-center mt-10">
          {cardData.map((card, index) => (
            <Card
              key={index}
              titleFirst={card.titleFirst}
              titleSecond={card.titleSecond}
              description={card.description}
              imageSrc={card.imageSrc}
            >
              <CustomButton to={card.path}>{card.link}</CustomButton>
            </Card>
          ))}
        </div>

        <HeadingText first={"Core"} second={"Committe"} />

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {CoreCommitte.map((profile, index) => (
              <RoundedProfileCard
                key={index}
                imageSrc={profile.imageSrc}
                name={profile.name}
                designation={profile.designation}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
