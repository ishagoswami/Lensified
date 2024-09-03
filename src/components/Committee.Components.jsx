import React from "react";

import ProfileCard from "./mini-compoents/Profile-Card";
import HeadingText from "./mini-compoents/HeadingText";

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

function Committee() {
  return (
    <>
      <HeadingText first={"Core"} second={"Committe"} />

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CoreCommitte.map((profile, index) => (
            <ProfileCard
              key={index}
              imageSrc={profile.imageSrc}
              name={profile.name}
              designation={profile.designation}
            />
          ))}
        </div>
      </div>

    </>
  );
}

export default Committee;
