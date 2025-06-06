"use client";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // console.log("Menu toggled:", !isOpen);
  };

  return (
    <>
      <nav
        className={`
            fixed top-0 left-0 z-50 h-full w-[14rem] bg-[#27386d] transition-transform 
            ${isOpen ? "translate-x-0" : "-translate-x-[100%]"}
            md:translate-x-0 md:block
          `}
      >
        <ul>
          <li>
            <a href="#">
              <div className="h-[10%] flex items-center justify-center relative px-4 py-3 mx-2 border-b-1 border-gray-500 ">
                <img
                  className="object-center object-cover "
                  src="logo-white.png"
                />
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-start text-left gap-2">
                <i className="ri-speed-up-line text-xl"></i>
                <span className="inline text-[1rem] font-bold">Dasboard</span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-start text-left gap-2">
                <i className="ri-speed-up-line text-xl"></i>
                <span className="inline text-[1rem] font-bold">
                  Career Forms
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-start text-left gap-2">
                <i className="ri-speed-up-line text-xl"></i>
                <span className="inline text-[1rem] font-bold">
                  Contect Form
                </span>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-between text-left gap-2">
                <div>
                  <i className="ri-menu-fill text-xl"></i>
                  <span className="inline text-[1rem] font-bold ml-2">
                    Testimonials
                  </span>
                </div>
                <div>
                  <i className="ri-arrow-right-s-line  text-xl text-gray-400 font-bold"></i>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-between text-left gap-2">
                <div>
                  <i className="ri-menu-fill text-xl"></i>
                  <span className="inline text-[1rem] font-bold ml-2">
                    Projects
                  </span>
                </div>
                <div>
                  <i className="ri-arrow-right-s-line  text-xl text-gray-400 font-bold"></i>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-between text-left gap-2">
                <div>
                  <i className="ri-menu-fill text-xl"></i>
                  <span className="inline text-[1rem] font-bold ml-2">
                    Logos
                  </span>
                </div>
                <div>
                  <i className="ri-arrow-right-s-line  text-xl text-gray-400 font-bold"></i>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-between text-left gap-2">
                <div>
                  <i className="ri-menu-fill text-xl"></i>
                  <span className="inline text-[1rem] font-bold ">
                    Team Members
                  </span>
                </div>
                <div>
                  <i className="ri-arrow-right-s-line  text-xl text-gray-400 font-bold"></i>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-between text-left gap-2">
                <div>
                  <i className="ri-menu-fill text-xl"></i>
                  <span className="inline text-[1rem] font-bold ml-2">
                    Blogs
                  </span>
                </div>
                <div>
                  <i className="ri-arrow-right-s-line text-xl text-gray-400 font-bold"></i>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="#">
              <div className="w-full p-4 flex items-end justify-between text-left gap-2">
                <div>
                  <i className="ri-menu-fill text-xl"></i>
                  <span className="inline text-[0.85rem] font-bold ml-1">
                    Builders Logos
                  </span>
                </div>
                <div>
                  <i className="ri-arrow-right-s-line text-xl text-gray-400 font-bold"></i>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      <button
        className="fixed top-4 left-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="ri-menu-line text-2xl text-black cursor-pointer"></i>
      </button>
    </>
  );
};

export default Navbar;
