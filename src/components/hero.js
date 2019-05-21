import React from "react";
import Avatar from "./avatar";

const Hero = () => {
  return (
    <div className="container mx-auto flex items-center h-full p-4 pb-0 border-b-4 border-solid border-black">
      <p>
        Hi! I&apos;m Noah and I do frontend. I dig delightful design, clean
        code, and nice people. Performance and accessibility are my jams.
      </p>
      <Avatar />
    </div>
  );
};

export default Hero;
