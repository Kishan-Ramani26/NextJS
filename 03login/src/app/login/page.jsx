"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion"; // <-- Import Framer Motion

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
      toast.error("check Your ID and password!")
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
    <>
      {loading ? (
        <motion.div
          className="flex justify-center items-center h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="loader rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          <p className="text-2xl font-bold text-white">Loading...</p>
        </motion.div>
      ) : (
        <motion.div
          className="h-screen w-full flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* img */}
          <motion.div
            className="w-1/2 h-full left-0 bottom-0 flex items-center justify-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              className="w-full h-full object-cover object-center "
              src="/login.jpg"
            />
          </motion.div>
          {/* form */}
          <motion.div
            className="w-1/2 h-full flex flex-col items-center justify-center"
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-2xl my-7 uppercase font-bold underline">
              {loading ? "Processing" : "login"}
            </h1>

            <label htmlFor="email">Email</label>
            <motion.input
              className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
              placeholder="Email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />

            <label htmlFor="password">Password</label>
            <motion.input
              className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
              placeholder="Password"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />

            <motion.button
              className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
              onClick={onLogin}
              disabled={buttonDisabled}
              style={{
                backgroundColor: buttonDisabled ? "#ccc" : "#4CAF50",
                color: buttonDisabled ? "black" : "white",
                cursor: buttonDisabled ? "not-allowed" : "pointer",
              }}
              whileHover={{ scale: buttonDisabled ? 1 : 1.05 }}
              whileTap={{ scale: buttonDisabled ? 1 : 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {buttonDisabled ? "Please fill the form" : "Login"}
            </motion.button>
            <motion.p
              className="text-sm text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-500">
                Sign up
              </Link>
            </motion.p>
            <Toaster />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default page;
