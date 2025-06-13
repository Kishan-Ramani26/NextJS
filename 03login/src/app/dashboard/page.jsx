"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast,{Toaster} from "react-hot-toast";


const page = () => {

  const router = useRouter()

  const  logout  = async () => {
    try {
      await axios.get("http://localhost:3000/api/users/logout")
      router.push("/login")
      toast.success("logout succesfully")
    } catch (error) {
      
    }
};


  return (
    <>
     <form className="">
       <button
        onClick={logout}
        className="absolute top-10 right-20 border border-white px-4 py-2 rounded-2xl cursor-pointer"
      >
        Logout
      </button>
     </form>
    </>
  );
};

export default page;
