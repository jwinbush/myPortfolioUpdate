/* eslint-disable react/no-unescaped-entities */
import React from "react";
import heroImage from "../public/assets/myAvatar.svg";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-full">
          <Image src={heroImage} alt="me" />
        </div>

        <h1 className=" uppercase text-black-700 text-6xl">
          Hi there, I'm <br/> Ja<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r via-red-600 from-orange-400 to-red-500">won Win</span>bush.</h1>

        <p className="text-gray-600 text-xl max-w-sm mx-auto">
          I have 4+ years of experience working in frontend development and 2+ years of backend developement.
          Currently, I enjoy working with JavaScript frameworks such as React and Next. In addition, I enjoy working with PHP, SQL, and Python as well. 
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer bg-black hover:bg-gradient-to-r via-red-600 from-orange-400 to-red-500 ">
            More about me
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
