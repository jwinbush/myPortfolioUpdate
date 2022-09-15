import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-us.jpg";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full ">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left ">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r via-red-600 from-orange-400 to-red-500 font-bold">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-gray-300 bg-white mt-4 rounded-xl ">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              Email: <b>jawonwinbush@gmail.com</b>
              <br />
              Phone: <b>317-654-4324</b>
              <br />
              <br/>
              I am open to talk regarding internships, freelancing, or full-time
              opportunities. Feel free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <a href="https://www.linkedin.com/in/jawonmwinbush/">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-gray-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaLinkedin size={25} />
                </div>
              </a>
              <a href="https://twitter.com/jawon_winbush">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-gray-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
              </a>
              <a href="https://www.instagram.com/jawinbush/">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaInstagram size={25} />
                </div>
              </a>
              <a href="https://github.com/jwinbush">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaGithub size={25} />
                </div>
              </a>
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/357378e6-dce8-451c-8d15-226c219dc76a"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-slate-600 font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="10"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 hover:duration-200 hover:bg-gradient-to-r via-red-600 from-orange-400 to-red-500">
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
