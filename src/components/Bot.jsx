import React, { useState, useRef } from "react";
import { FaUser, FaRobot } from "react-icons/fa";

const Chatbot = () => {
    // const [messages, setMessages] = useState([]);
    // const [userInput, setUserInput] = useState("");
    // const chatBoxRef = useRef(null);

    // // const API_KEY = "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"; // Replace with your actual key
    // // const MODEL_NAME = "HuggingFaceH4/zephyr-7b-alpha";

    // const sendMessage = async () => {
    //     if (!userInput.trim()) return;

    //     const newUserMessage = { text: userInput, sender: "user" };
    //     setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    //     setUserInput("");

    //     const botReply = await fetchChatbotResponse(userInput);
    //     const newBotMessage = { text: botReply, sender: "bot" };
    //     setMessages((prevMessages) => [...prevMessages, newBotMessage]);

    //     // Scroll to the bottom of the chat box
    //     if (chatBoxRef.current) {
    //         chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    //     }
    // };

    // const fetchChatbotResponse = async (userInput) => {
    //     // const url = `https://api-inference.huggingface.co/models/${MODEL_NAME}`;
    //     const headers = {
    //         Authorization: `Bearer ${API_KEY}`,
    //         "Content-Type": "application/json",
    //     };
    //     const data = {
    //         inputs: `User: ${userInput}\nAssistant:`,
    //         parameters: {
    //             max_new_tokens: 100,
    //             temperature: 0.7,
    //             top_p: 0.9,
    //             do_sample: true,
    //             repetition_penalty: 1.1,
    //         },
    //     };

    //     try {
    //         const response = await fetch(url, {
    //             method: "POST",
    //             headers: headers,
    //             body: JSON.stringify(data),
    //         });
    //         const result = await response.json();
    //         return result[0]?.generated_text?.split("Assistant:")[1]?.trim() || "I couldn't understand that.";
    //     } catch (error) {
    //         return "Error connecting to AI.";
    //     }
    // };

    return (
        <div style={styles.chatbotContainer}>
            <div style={styles.chatBox} ref={chatBoxRef}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.message,
                            ...(message.sender === "user" ? styles.userMessage : styles.botMessage),
                        }}
                    >
                        <div style={styles.messageIcon}>
                            {message.sender === "user" ? <FaUser /> : <FaRobot />}
                        </div>
                        <div style={styles.messageText}>{message.text}</div>
                    </div>
                ))}
            </div>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    style={styles.input}
                />
                <button onClick={sendMessage} style={styles.button}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;

// Styles
const styles = {
  chatbotContainer: {
      width: "400px",
      background: "#ffffff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      height: "500px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  chatBox: {
      flex: 1,
      overflowY: "auto",
      borderBottom: "1px solid #e0e0e0",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      marginBottom: "10px",
  },
  message: {
      display: "flex",
      alignItems: "flex-start",
      padding: "10px",
      borderRadius: "8px",
      maxWidth: "80%",
      lineHeight: "1.4",
      fontSize: "14px",
      fontStyle: "normal",
      textShadow: "none",
  },
  userMessage: {
      background: "#007bff",
      color: "#ffffff",
      alignSelf: "flex-end",
      marginLeft: "auto",
      borderBottomRightRadius: "4px",
  },
  botMessage: {
      background: "#ffffff",
      color: "#333333",
      alignSelf: "flex-start",
      border: "1px solid #e0e0e0",
      borderBottomLeftRadius: "4px",
  },
  messageIcon: {
      fontSize: "1.2rem",
      margin: "0 10px",
      color: "#007bff",
      textShadow: "none",
      fontStyle: "normal",
  },
  messageText: {
      wordWrap: "break-word",
      flex: 1,
      fontStyle: "normal",
      textShadow: "none",
  },
  inputContainer: {
      display: "flex",
      gap: "8px",
      marginTop: "10px",
  },
  input: {
      flex: 1,
      padding: "10px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.3s ease",
      fontStyle: "normal",
      textShadow: "none",
  },
  inputFocus: {
      borderColor: "#007bff",
  },
  button: {
      padding: "10px 20px",
      border: "none",
      background: "#007bff",
      color: "#ffffff",
      cursor: "pointer",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "500",
      transition: "background 0.3s ease",
      fontStyle: "normal",
      textShadow: "none",
  },
  buttonHover: {
      background: "#0056b3",
  },
};
