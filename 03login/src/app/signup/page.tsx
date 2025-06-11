import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Flamenco } from 'next/font/google'

const page = () => {

  const router = useRouter();


  const [User, setUser] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [buttonDisable, setbuttonDisable] = useState(false)
  const [loading, setloading] = useState(false)

  const onSignup = async () => {
    try {
      setloading(true);
      const response = await axios.post("http://localhost:3000/api/signup", User);
      toast.success("Signup successful!");
      router.push("/login");
      setloading(false);

    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Signup failed. Please try again.");
    }


    useEffect(() => {
      if (User.username.length > 0 && User.email.length > 0 && User.password.length > 0) {
        setbuttonDisable(false)
      } else {
        setbuttonDisable(true)
      }
    }, [User])
  }
  return (
    <div>signup </div>
  )
}

export default page