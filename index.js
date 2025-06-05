
import { useState } from 'react';

export default function ChatUI() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! What do you want to build today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await response.json();
    setMessages([...newMessages, { sender: 'ai', text: data.result || 'AI failed to respond.' }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-4">
        <h1 className="text-xl font-bold mb-4">NA’iF AI – Build with Chat</h1>
        <div className="h-96 overflow-y-auto mb-4 border p-2 bg-gray-50 rounded">
          {messages.map((msg, index) => (
            <div key={index} className={`my-2 ${msg.sender === 'ai' ? 'text-blue-600' : 'text-black'}`}>
              <strong>{msg.sender === 'ai' ? 'NA’iF AI' : 'You'}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-1 border rounded p-2 mr-2"
            placeholder="Type your app idea..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
