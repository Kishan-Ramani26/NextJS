"use client";
import React, { useState } from "react";

const page = () => {

  const [email, setemail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
  };

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center flex-col bg-blue-100 text-black max-md:px-4">
        <h1 className="text-xl font-bold mb-6">Forgot Password Page</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4"
        >
          <h2 className="text-sm font-bold text-center">Forgot Password </h2>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="New Password"
            className="border rounded px-3 py-2"
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded px-3 py-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition cursor-pointer"
          >
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
