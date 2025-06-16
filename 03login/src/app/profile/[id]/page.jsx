"use client";
import React from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const { id } = React.use(params);
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/api/users/logout");
      toast.success("logout succesfully");
      router.push("/login");
    } catch (error) {
      toast.error("Error in logout");
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <h1 className="text-2xl text-white">Profile Page</h1>
      <p>Profile ID : {id}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 cursor-pointer"
        onClick={logout}
      >
        Logout
      </button>
      <Toaster />
    </div>
  );
};

export default page;
