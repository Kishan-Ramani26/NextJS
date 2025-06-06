"use client";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function admin() {
  return (
    <>
      <div className="main h-screen w-full bg-white relative">
        <Navbar />
        <div className="absolute top-[10%] left-[20%]">
          <h1 className="text-black">Dasboard</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}
