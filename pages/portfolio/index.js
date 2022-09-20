import React from "react";
import reactParallax from "../../public/assets/portfolio/reactParallax.jpg";
import retroGames from "../public/assets/portfolio/retroGame.png";
import reactMovie from "../public/assets/portfolio/InteloHome.png";
import nextSpotify from "../../public/assets/portfolio/nextSpotify.png";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const portfolios = [
    {
      id: 1,
      title: "react movie app",
      imageSrc: reactMovie,
      url: "react-movie",
      description: "A reponsive movie website built with React.js. All movie descriptions were fetched from TMBD's API. On the otherhand, all data for movie trailers were fetched from YouTube. Firebase was used for deployment.",
    },
    {
      id: 2,
        title: "Next Music Website",
        imageSrc: nextSpotify,
        url: "next-spotify",
        description: "A functional Spotify clone built with Next.js and Tailwind Css, which includes my personal playlists. All personal data was fetched from Spotify's API. The clone is in sync with the Spotify's app.",
  
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
      description: "How",
  
    },
  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r via-red-600 from-orange-400 to-red-500 font-bold pb-16">
          portfolio
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          {portfolios.map(({ id, title, imageSrc, description, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                hover: scale - 110 "
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfoliosRoute;
