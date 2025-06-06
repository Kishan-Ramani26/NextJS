import React from "react";

const Header = () => {
  return (
    <>
      <div className="header w-full h-[10%] shadow absolute top-0 right-0 flex items-center justify-end px-8 z-30">
        {/* <div className="block">
            <button className="menu-button" onClick={toggleMenu}>
              <i className="ri-menu-line text-2xl text-black cursor-pointer"></i>
            </button>
          </div> */}
        <a href="#">
          <div className="flex items-end justify-between gap-2 relative text-center">
            <p className="text-gray-500">welcome admin</p>
            <img className="h-8 object-center object-cover" src="user.png" />
          </div>
        </a>
      </div>
    </>
  );
};

export default Header;
