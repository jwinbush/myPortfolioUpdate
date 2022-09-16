import React from "react";
import reactParallax from "../../public/assets/portfolio/reactParallax.jpg";
import retroGames from "../../public/assets/portfolio/retroGame.png";
import reactMovie from "../../public/assets/portfolio/reactMov.png";
import nextSpotify from "../../public/assets/portfolio/nextSpotify.png";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "react movie app",
    imageSrc: reactMovie,
    url: "react-movie",
    description: "A reponsive movie website built with ReactJS. All movie descriptions were fetched from TMBD's API. On the otherhand, all data for movie trailers were fetched from YouTube. Firebase was used for deployment.",
    siteLink: "https://intelo-movies.vercel.app/",
    gitLink: "https://github.com/jwinbush/movie",
  },
  {
    id: 2,
      title: "Next Music Website",
      imageSrc: nextSpotify,
      url: "next-spotify",
      description: "A Spotify clone built with NextJS and Tailwind CSS. I followed a tutorial to complete this project. All personal data was fetched from Spotify's API. In order for this clone to work smoothly, I must have Spotify open at the same time you're demoing the clone. When you choose a song on Spotify's clone, the song will play on my PC giving you control over the volume and song selection as well. The clone is basically in sync with the real Spotify app.",
      siteLink: "/",
      gitLink: "https://github.com/jwinbush/spotify",
  },
  {
    id: 3,
    title: "Retro Games Ecommerce Website",
    imageSrc: retroGames,
    url: "retro-games",
    description: "The goal of this website was to give gamers a nostalglic feeling. This was developed using PHP, PhpMyAdmin, and JavaScript. To edit products, you must be signed in as an administrator. The admin user is jwinbush@iu.edu and the password is 333.",
    siteLink: "/",
    gitLink: "https://github.com/jwinbush/retroGaming",

  },
  {
    id: 4,
    title: "react parallax scroll",
    imageSrc: reactParallax,
    url: "react-parallax",
    description: "How",
    movieLink: "/",
    gitLink: "https://github.com/jwinbush/spotify",

  },
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc, description, siteLink, gitLink } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/#portfolio">
            <div className="flex items-center justify-center my-8 text-black font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>
        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-transparent bg-clip-text bg-gradient-to-r via-red-600 from-orange-400 to-red-500 tracking-wider">
          
          {title}
        </h1>
        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>
        <h2 className="text-center md:text-left my-4 text-2xl font-bold max-w-2xl mx-auto">
          Description
        </h2>
        <p className="py-4 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex items-center justify-center gap-10">
          <Link href={siteLink}>
            <div className="group flex items-center justify-center my-8 text-white bg-black hover:bg-gradient-to-r via-red-600 from-orange-400 to-red-500 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>
          <Link href={gitLink}>
            <div className="group flex items-center justify-center my-8 text-white bg-black hover:bg-gradient-to-r via-red-600 from-orange-400 to-red-500 px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Repository
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
