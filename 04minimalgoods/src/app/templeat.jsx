import React from "react";

const templeat = ({ children }) => {
  return (
    <>
      <div className="banner-1 min-h-screen bg-black fixed top-0 left-0 w-1/4"></div>
      <div className="banner-2 min-h-screen bg-black fixed top-0 left-1/4 w-1/4"></div>
      <div className="banner-3 min-h-screen bg-black fixed top-0 left-2/4 w-1/4"></div>
      <div className="banner-4 min-h-screen bg-black fixed top-0 left-3/4 w-1/4"></div>
      {children}
    </>
  );
};

export default templeat;
