import React from "react";

import html from "../public/assets/experience/html.png";
import css from "../public/assets/experience/css.png";
import javascript from "../public/assets/experience/javascript.png";
import reactImage from "../public/assets/experience/react.png";
import nextjs from "../public/assets/experience/nextjs.png";
import tailwind from "../public/assets/experience/tailwind.png";
import python from "../public/assets/experience/python.png";
import sql from "../public/assets/experience/sql.png";
import php from "../public/assets/experience/phpLogo.png";
import excel from "../public/assets/experience/excel.png";
import tableau from "../public/assets/experience/tableau.svg";
import node from "../public/assets/experience/node.png";
import Image from "next/image";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
    },
    {
      id: 2,
      title: "CSS",
      src: css,
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 4,
      title: "React JS",
      src: reactImage,
    },
    {
      id: 5,
      title: "Next JS",
      src: nextjs,
    },
    {
      id: 6,
      title: "Tailwind",
      src: tailwind,
    },
    {
      id: 7,
      title: "Node JS",
      src: node,
    },
    {
      id: 8,
      title: "PHP",
      src: php,
    },
    {
      id: 9,
      title: "MySQL",
      src: sql,
    },
    {
      id: 10,
      title: "Python",
      src: python,
    },
    {
      id: 11,
      title: "Microsoft Excel",
      src: excel,
    },
    {
      id: 12,
      title: "Tableau",
      src: tableau,
    },
  ];

  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r via-red-600 from-orange-400 to-red-500 font-bold">
          experience
        </h2>
        <p className="py-4 max-w-lg">
          While only that hauntedtell many purple no lent cushions more heart.
          Soul cushions the still if i, hath lamplight mortals the rapping have
          me and.
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              shadow-gray-400 "
            >
              <Image src={src} width="64px" height="64px" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
