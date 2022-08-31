import React from "react";
import Image from "next/image";

function JourneyCard(props) {
  return (
    <div
      className="relative shadow-lg rounded-md w-1/4
  bg-white transition ease-in-out
  delay-150 hover:-translate-y-1
  hover:scale-110 cursor-pointer m-4"
    >
      <Image
        alt={props.title}
        src={props.image}
        width={400}
        height={270}
      />
      <div className="absolute top-0 left-0 z-10 w-full bg-gradient-to-r from-blue-500 to-transparent">
        <h1 className="text-2xl text-white px-3 py-2">{props.title}</h1>
      </div>
    </div>
  );
}

export default JourneyCard;
