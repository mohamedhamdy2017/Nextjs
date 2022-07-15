import React from "react";
import { Main } from "../components/Main";
import Image from "next/image";
import { sliderData } from "../SliderData";

const Work = () => {
  return (
    <div className="bg-white">
      <Main headerTitle="My Work" message="This is some of my work" />
      <div className="grid grid-rows-none gap-4 lg:grid-cols-5 p-4 lg:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            className="rounded-lg"
            src={sliderData[0].image}
            alt="/"
            width={"650"}
            height={"330"}
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="rounded-lg"
            src={sliderData[1].image}
            alt="/"
            width={"200"}
            height={"150"}
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="rounded-lg"
            src={sliderData[2].image}
            alt="/"
            width={"200"}
            height={"150"}
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="rounded-lg"
            src={sliderData[3].image}
            alt="/"
            width={"200"}
            height={"150"}
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            className="rounded-lg"
            src={sliderData[4].image}
            alt="/"
            width={"200"}
            height={"150"}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
