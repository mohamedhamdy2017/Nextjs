import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const [nav, setNav] = useState<boolean>(false);
  const [color, setColor] = useState<string>("transparent");
  const [textColor, setTextColor] = useState<string>("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
    changeColor();
  }, []);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href={"/"}>
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            NEXT
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4" style={{ color: `${textColor}` }}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-4" style={{ color: `${textColor}` }}>
            <Link href={"/#gallery"}>Gallery</Link>
          </li>
          <li className="p-4" style={{ color: `${textColor}` }}>
            <Link href={"/Work"}>Work</Link>
          </li>
          <li className="p-4" style={{ color: `${textColor}` }}>
            <Link href={"/Contact"}>Contact</Link>
          </li>
        </ul>

        <div className="sm:block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose
              size={20}
              onClick={handleNav}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              size={20}
              onClick={handleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              style={{ color: `${textColor}` }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              onClick={handleNav}
              style={{ color: `${textColor}` }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/#gallery"}>Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              style={{ color: `${textColor}` }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/Work"}>Work</Link>
            </li>
            <li
              onClick={handleNav}
              style={{ color: `${textColor}` }}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/Contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
