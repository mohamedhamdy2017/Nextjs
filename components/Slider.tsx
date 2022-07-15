import React, { useState } from "react";
import Image from "next/image";
import { Slide } from "../SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

interface Props {
  slides: Slide[];
}

export const Slider = ({ slides }: Props) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div id="gallery" className="max-w-[1240px] text-black mx-auto py-10">
      <h1 className="text-2xl text-center font-bold p-8">Gallery</h1>
      <div className="bg-white-300">
        <div className="relative flex justify-center">
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "opacity-[1] ease-in duration-1000"
                    : "opacity-0"
                }
              >
                <FaArrowAltCircleLeft
                  onClick={prevSlide}
                  size={40}
                  className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt="/"
                    width={"1440"}
                    height={"600"}
                    objectFit={"cover"}
                  />
                )}
                <FaArrowAltCircleRight
                  onClick={nextSlide}
                  size={40}
                  className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
