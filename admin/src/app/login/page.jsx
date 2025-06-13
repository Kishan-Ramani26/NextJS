"use client";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center shadow-2xl text-white max-md:px-4">
      <img className="absolute h-full w-full object-cover object-center -z-10" src="img2.jpg" />
      <div className="w-1/2 flex items-center justify-center flex-col">
        {/* <h1 className="text-xl font-bold mb-6">Welcome to the Login Page</h1> */}
        <form
          onSubmit={handleSubmit}
          className=" p-8 rounded-3xl border-1 border-gray-800 shadow-lg w-full max-w-sm flex flex-col gap-4 backdrop-blur-xl"
        >
         <div className="w-full text-center relative flex items-center justify-center mb-4 overflow-hidden">
            <img className="h-full w-[50%] object-center object-cover rounded-full" src="img1.avif" />
         </div>
          {error && <div className="text-red-500 text-md">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link
            href={"/forgot-password"}
            className="text-blue-500 text-sm  hover:underline"
          >
            <p>Forgot Password ?</p>
          </Link>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
