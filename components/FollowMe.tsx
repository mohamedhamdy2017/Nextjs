import React from "react";
import Image from "next/image";
import { sliderData } from "../SliderData";

export const FollowMe = () => {
  return (
    <div className="items-center text-black">
      <p className="text-center font-bold py-10">Follow Me</p>
      <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-3 gap-2 p-4">
        <Image
          className="rounded-md"
          src={sliderData[0].image}
          alt="/"
          width={"200"}
          height={"150"}
          objectFit={"cover"}
          layout="responsive"
        />
        <Image
          className="rounded-md"
          src={sliderData[1].image}
          alt="/"
          width={"200"}
          height={"150"}
          objectFit={"cover"}
        />
        <Image
          className="rounded-md"
          src={sliderData[2].image}
          alt="/"
          width={"200"}
          height={"150"}
          objectFit={"cover"}
          layout="responsive"
        />
        <Image
          className="rounded-md"
          src={sliderData[3].image}
          alt="/"
          width={"200"}
          height={"150"}
          objectFit={"cover"}
          layout="responsive"
        />
        <Image
          className="rounded-md"
          src={sliderData[4].image}
          alt="/"
          width={"200"}
          height={"150"}
          objectFit={"cover"}
          layout="responsive"
        />
        <Image
          className="rounded-md"
          src={sliderData[1].image}
          alt="/"
          width={"200"}
          height={"150"}
          objectFit={"cover"}
          layout="responsive"
        />
      </div>
    </div>
  );
};
