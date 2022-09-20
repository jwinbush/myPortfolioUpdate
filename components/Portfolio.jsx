import React from "react";

import { MdExpandMore } from "react-icons/md";

import reactParallax from "../public/assets/portfolio/reactParallax.jpg";
import retroGames from "../public/assets/portfolio/retroGame.png";
import reactMovie from "../public/assets/portfolio/InteloHome.png";
import nextSpotify from "../public/assets/portfolio/nextSpotify.png";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "react movie app",
      imageSrc: reactMovie,
      url: "react-movie",
    },
    {
      id: 2,
      title: "Next Music Website",
      imageSrc: nextSpotify,
      url: "next-spotify",
    },
    {
      id: 3,
      title: "Retro Games Ecommerce Website",
      imageSrc: retroGames,
      url: "retro-games",
      description: "No",
    },
    {
      id: 4,
      title: "react parallax scroll",
      imageSrc: reactParallax,
      url: "react-parallax",
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r via-red-600 from-orange-400 to-red-500 font-bold">
          portfolio
        </h2>
        <p className="py-4 max-w-lg">
         These are projects I have worked on. I also have a few projects in developement at the moment.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8  text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer bg-black hover:bg-gradient-to-r via-red-600 from-orange-400 to-red-500 ">
              all projects
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
