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
    <div className="h-screen w-full flex items-center justify-center shadow-2xl flex-col bg-blue-100 text-black max-md:px-4">
      <h1 className="text-xl font-bold mb-6">Welcome to the Login Page</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <div className="text-red-500 text-sm">{error}</div>}
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
  );
};

export default Page;
