"use client"
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { TextRoll } from "@/components/v1/Skiper58"; // or the correct path to your TextRoll component



const page = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/users/logout");
      toast.success("logout succesfully");
      router.push("/login");
    } catch (error) {
      toast.error("Error in logout");
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users/me", {
        withCredentials: true,
      });
      console.log(response.data);
      toast.success("User details fetched successfully");
      setData(response.data.data?.email);
    } catch (error) {
      console.log(
        "Error in getUserDetails:",
        error.response?.data || error.message
      );
      toast.error("error in getting user details");
    }
  };

  return (
    <div>
      <button
        onClick={logout}
        className="absolute top-10 right-20 border border-white px-4 py-2 rounded-2xl cursor-pointer"
      >
        Logout
      </button>

      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1>Dashboard</h1>

        <button
          onClick={getUserDetails}
          className="border border-white px-4 py-2 rounded-2xl cursor-pointer"
        >
          Get User Details
        </button>
        <h2 className="text-xl text-white">
          <Link href={`/profile/${data}`}>
            User ID: {data ? data : "Nothing"}
          </Link>
        </h2>
      </div>
      <Toaster />
      <div className="h-screen w-full ">
        <TextRoll className="text-2xl font-bold">Hover me</TextRoll>
      </div>
    </div>
  );
};

export default page;
