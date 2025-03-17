import React, { useState } from "react";
import { sendMessageToChatGPT } from "../api/chatApi";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);

  const handleSendMessage = async () => {
    if (!message) return;
    setChat([...chat, { sender: "Vous", text: message }]);

    const response = await sendMessageToChatGPT(message);
    setChat([...chat, { sender: "Vous", text: message }, { sender: "ChatGPT", text: response }]);

    setMessage("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-bold">Mon ChatGPT</h2>
      <div className="border p-4 h-64 overflow-auto">
        {chat.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.sender === "Vous" ? "text-right" : "text-left"}`}>
            <span className="font-bold">{msg.sender}:</span> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          className="border p-2 flex-grow"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="ml-2 p-2 bg-blue-500 text-white" onClick={handleSendMessage}>
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Chat;
