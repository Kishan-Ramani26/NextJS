"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast,Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function page() {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const onLogin = async () => {
    try {
      setloading(true);
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        user
      );
      toast.success("Login successful!");
      router.push("/dashboard");
      setloading(false);
    } catch (error) {
      console.error("Error during login:", error);
      setloading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    <div className="h-screen w-full flex items-center flex-col justify-center text-white">
      <h1 className="text-2xl my-7">{loading ? "Processing" : "login"}</h1>

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setuser({ ...user, email: e.target.value })}
        placeholder="Email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setuser({ ...user, password: e.target.value })}
        placeholder="Password"
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        onClick={onLogin}
        disabled={buttonDisabled}
      >
        login
      </button>
       <Toaster />
    </div>
  );
}

export default page;
