<<<<<<< HEAD
import { useState, useRef } from "react";
import { FaUser, FaRobot } from "react-icons/fa";
import React from "react";
=======
import React, { useState } from "react";
import "../styles/Bot.css"
const API_KEY = "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"; // Replace with your actual Hugging Face API key
const MODEL_NAME = "facebook/blenderbot-400M-distill"; // BlenderBot model

>>>>>>> 23a19213562c56eb65dbd9be65a1755d302e2555

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");

    const botResponse = await fetchChatbotResponse(input);
    const botMessage = { text: botResponse, sender: "bot" };
    setMessages([...messages, userMessage, botMessage]);
  };

  const fetchChatbotResponse = async (userInput) => {
    const url = `https://api-inference.huggingface.co/models/${MODEL_NAME}`;
    const headers = {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    };
  
    const data = {
      inputs: `User: ${userInput}\nAssistant:`,
      parameters: {
        max_new_tokens: 100,
        temperature: 0.7,
        top_p: 0.9,
        do_sample: true,
        repetition_penalty: 1.1
      }
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        return `Error ${response.status}: ${response.statusText}`;
      }
  
      const result = await response.json();
      console.log("API Response:", result);
  
      return result[0]?.generated_text?.trim() || "I couldn't understand that."; // ✅ Fixed extraction
    } catch (error) {
      console.error("Fetch Error:", error);
      return "Error connecting to AI.";
    }
  };
  

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
