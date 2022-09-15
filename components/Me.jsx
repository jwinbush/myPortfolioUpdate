/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r via-red-600 from-orange-400 to-red-500 font-bold">
          me
        </h2>

        <div className="shadow-xl shadow-gray-400 my-8 px-6 rounded-xl ">
          <p className="py-4 max-w-2xl mx-auto">
            I'm currently a senior studying Informatics at Indiana University-Purdue University of Indianapolis(IUPUI).
             With this study, I have been fortunate enough to learn a vast amount of programming languages and work with data as well. 
             I'm advanced in both frontend and backend development, but I still have much to learn. 
             Most of my knowledge comes studying outside of school, and I realized self motivation plays a huge part in one's success.
             A longterm goal of mine is to work as an fullstack developer within the next 3-6 years. 
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          When I'm not coding I enjoy realism drawings, Adobe Photoshop, and basically just putting my creativity to use. Recently, I began studying how catchy logos are created and figured I would give it a shot. 
          I believe this is a great skill to obtain as an web developer.
          </p>
         
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8  text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer bg-black hover:bg-gradient-to-r via-red-600 from-orange-400 to-red-500 ">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer bg-black hover:bg-gradient-to-r via-red-600 from-orange-400 to-red-500 ">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
