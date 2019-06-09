import React from "react";
import Avatar from "./avatar";

const Hero = () => {
  return (
    <div className="flex h-full p-4 pb-0 border-b-2 border-solid w-full border-black">
      <div className="container flex mx-auto items-center justify-center max-w-2xl">
        <p>
          Hi! I&apos;m Noah and I do frontend. I dig delightful design, clean
          code, and nice people. Performance and accessibility are my jams.
        </p>
        <Avatar />
      </div>
    </div>
  );
};

export default Hero;
