'use client'
import axios from "axios";    
import { useState } from "react";

export default function Home() {

  const [message, setmessage] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setloading] = useState(false) 

  const handleChat = async () => {
    try {
      setloading(true)
      setResponse("") // Clear previous response

      console.log("Sending message:", message)

      // const res = await axios.post(
      //   "/api/chat", 
      //   { message }, 
      //   { headers: { "Content-Type": "application/json" } },
      //   {body: JSON.stringify({ message })}
      // );

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      setResponse(data.response);

    } catch (error) {
      console.log("fail to get response")
      setResponse("fail to get response")
    }  
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <input 
          type="text" 
          placeholder="Type your message here..." 
          value={message} 
          onChange={(e) => setmessage(e.target.value)} 
          className="border-white border-2 p-2"
        />
        <button 
          onClick={handleChat} 
          className="border-white border-2 p-2 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Loading..." : "Send"}
        </button>
      </div>
      <div>
        {response && <p>Response: {response}</p>}
      </div>
    </div>
  );
}
