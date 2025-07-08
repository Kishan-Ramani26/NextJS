"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const page = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [loading, setloading] = useState(false);

  const onSignup = async () => {
    try {
      setloading(true);
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        user
      );
      toast.success("signup successfuly");
      router.push("/login");
      setloading(false);
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error("Error during signup:", error);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setbuttonDisabled(false);
    } else {
      setbuttonDisabled(true);
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          <p className="text-2xl font-bold text-white">Loading...</p>
        </div>
      ) : (
        <>
          <div className="h-screen w-full flex items-center justify-center text-white overflow-hidden">
            {/* img */}
            <div className="w-1/2 h-full">
              <div>
                <img
                  className="w-full h-full object-cover object-center rounded-lg"
                  src="/login.jpg"
                />
              </div>
            </div>
            {/* form */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center min-h-screen w-full py-2">
                <h1 className="text-4xl my-8">
                  {loading ? "Procesing" : "Signup"}
                </h1>
                <hr />
                <label htmlFor="username">Username</label>
                <input
                  className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
                  id="username"
                  type="text"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  placeholder="Username"
                />
                <label htmlFor="email">Email</label>
                <input
                  className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
                  id="email"
                  type="text"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Email"
                />
                <label htmlFor="password">Password</label>
                <input
                  className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
                  id="password"
                  type="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Password"
                />
                <button
                  onClick={onSignup}
                  className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                  disabled={buttonDisabled}
                  style={{
                    backgroundColor: buttonDisabled ? "#ccc" : "#4CAF50",
                    color: "white",
                    cursor: buttonDisabled ? "not-allowed" : "pointer",
                  }}
                >
                  {buttonDisabled ? "No signup" : "Signup"}
                </button>
                <Link href="/login">Visit login page</Link>
              </div>
              <Toaster />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default page;