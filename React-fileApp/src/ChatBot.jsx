import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = ({ fileContent }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
      },
      body: JSON.stringify({
        prompt: `File Content: ${fileContent}\nUser: ${input}\nAI:`,
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    const aiMessage = data.choices[0].text.trim();
    setMessages([...messages, { user: input, ai: aiMessage }]);
    setInput('');
  };

  return (
    <div className="chatbot">
      <h2>Chatbot</h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p><strong>User:</strong> {msg.user}</p>
            <p><strong>AI:</strong> {msg.ai}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="chat-input"
      />
      <button onClick={handleSend} className="chat-button">Send</button>
    </div>
  );
};

export default ChatBot;

