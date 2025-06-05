"use client";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";

export default function admin() {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <>
      <div className="main h-screen w-full bg-white relative">
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
                <div className="h-[10%] relative px-4 py-4 mx-4 border-b-1 border-gray-500 ">
                  <img
                    className="h-full object-center object-cover"
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

        <div className="header w-full h-[10%] shadow absolute top-0 right-0 flex items-center justify-between px-8 z-30">
          <div className="block">
            <button className="menu-button" onClick={toggleMenu}>
              <i className="ri-menu-line text-2xl text-black cursor-pointer"></i>
            </button>
          </div>

          <a href="#">
            <div className="flex items-end justify-between gap-2 relative text-center">
              <p className="text-gray-500">welcome admin</p>
              <img className="h-8 object-center object-cover" src="user.png" />
            </div>
          </a>
        </div>

        <div className="absolute top-[10%] left-[20%]">
          <h1 className="text-black">Dasboard</h1>
        </div>


        <div className="footer w-full h-[10%] shadow absolute bottom-0 left-0 flex items-center justify-center px-8">
          <h1 className="text-gray-500 text-center">
            Copyright © 2024 | All Rights Reserved By Meghnad Infraspaces
            Pvt.Ltd.
          </h1>
        </div>
      </div>
    </>
  );
}
